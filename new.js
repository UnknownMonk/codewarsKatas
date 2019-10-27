var nano = require("nano")("http://localhost:5984");
var db = nano.db.use("imgdoc");
var q = require("q");
var _ = require("underscore");

var ORG_ID = "3a868afa510146ba881599fe857a7b84";

function main() {
  fetch_all_loads(ORG_ID);
}

function fetch_all_loads(org_id) {
  db.view(
    "ascend_sock_load",
    "load_summary_by_org_branch",
    { startkey: [ORG_ID], endkey: [ORG_ID, {}], include_docs: true },
    function(err, resp) {
      if (err) {
        return dfd.reject(false);
      }

      var look_for = "Completed";

      var queue = q();
      _.each(resp.rows, function(row) {
        var doc = row.doc;
        //if (doc.status !== look_for) {
        //  process.stdout.write('.');
        //  return;
        //}
        queue = queue.then(function() {
          //if (doc.status === look_for && doc.flag_archive !== true) {
          if (doc.flag_archive !== true) {
            doc.flag_archive = true;
            return save_doc(doc);
          }

          process.stdout.write("~");
          return true;
        });
      });

      return queue;
    }
  );
}

function save_doc(doc) {
  var dfd = q.defer();

  db.insert(doc, function() {
    process.stdout.write("+");
    dfd.resolve(true);
  });

  return dfd.promise;
}

main();
