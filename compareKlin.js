let jsonKline = {
  TransactionId: 204,
  CustomerId: "RBTWBWAY",
  Type: "00",
  RespondBy: "2019-06-13T10:17:00",
  RespondByTimeZone: "LT",
  ShipmentId: "295071590",
  Equipment: "ZZZZ",
  EquipLength: 53.0,
  TransportationMethod: "M",
  Miles: 0,
  Pallets: 0,
  Rate: "1127",
  Weight: 14563,
  WeightUnit: "L",
  Volume: 0,
  BillTo: {
    Name: "",
    Address1: "",
    Address2: "",
    City: "",
    State: "",
    Zip: "",
    Country: "",
    Code: ""
  },
  Contact: {
    Name: "ARYANA MARVRAY",
    Phone: "3124941725",
    Email: "MARVARY@CHROBINSON.COM"
  },
  PaymentMethod: "PP",
  Note: ["902"],
  References: [
    {
      Value: "T5255875",
      Qualifier: "VD"
    },
    {
      Value: "0001500278",
      Qualifier: "SI"
    },
    {
      Value: "0001500278",
      Qualifier: "CR"
    },
    {
      Value: "USD",
      Qualifier: "RB"
    },
    {
      Value: "BWAY TMC",
      Qualifier: "TH"
    }
  ],
  Stops: [
    {
      RowId: "1",
      StopNum: 1,
      Reason: "LD",
      Weight: 14563,
      WeightUnit: "L",
      Volume: 0,
      RequestedDate1: "2019-06-14T08:00:00",
      Date1TimeZone: "LT",
      RequestedDate2: "2019-06-14T14:00:00",
      Date2TimeZone: "LT",
      Pallets: 0,
      Note: ["No Touch", "CUSTOMER PO 882315"],
      Location: {
        Name: "Bway Corporation - Mansfield",
        Address1: "1501 E Dallas St",
        Address2: "",
        City: "MANSFIELD",
        State: "TX",
        Zip: "76063",
        Country: "US",
        Code: "2719"
      },
      Contact: {
        Name: "Salvador Munoz",
        Phone: "8174730259",
        Email: ""
      },
      References: [
        {
          Value: "0001500278",
          Qualifier: "PU"
        }
      ],
      Items: [
        {
          Weight: 10949,
          WeightUnit: "L",
          Volume: 0,
          Quantity1: 4608,
          Quantity1Unit: "EA",
          Quantity2: 0,
          Quantity2Unit: "",
          Description: "Pail-RO 6.0G",
          Text: "",
          References: [
            {
              Value: "7100311",
              Qualifier: "OID"
            },
            {
              Value: "45571",
              Qualifier: "PO"
            }
          ]
        },
        {
          Weight: 3614,
          WeightUnit: "L",
          Volume: 0,
          Quantity1: 4800,
          Quantity1Unit: "EA",
          Quantity2: 0,
          Quantity2Unit: "",
          Description: "Cvr-RO LoViz EZ",
          Text: "",
          References: [
            {
              Value: "7401956",
              Qualifier: "OID"
            },
            {
              Value: "45571",
              Qualifier: "PO"
            }
          ]
        }
      ]
    },
    {
      RowId: "2",
      StopNum: 2,
      Reason: "UL",
      Weight: 14563,
      WeightUnit: "L",
      Volume: 0,
      RequestedDate1: "2019-06-17T00:01:00",
      Date1TimeZone: "LT",
      RequestedDate2: "2019-06-17T23:59:00",
      Date2TimeZone: "LT",
      Pallets: 0,
      Note: ["No Touch", "CUSTOMER PO 882315"],
      Location: {
        Name: "AMERICAN BLANCHING CO",
        Address1: "155 Rip Wiley Rd",
        Address2: "",
        City: "FITZGERALD",
        State: "GA",
        Zip: "31750",
        Country: "US",
        Code: "31853"
      },
      Contact: {
        Name: "Annette",
        Phone: "2294234098",
        Email: ""
      },
      References: [],
      Items: [
        {
          Weight: 10949,
          WeightUnit: "L",
          Volume: 0,
          Quantity1: 4608,
          Quantity1Unit: "EA",
          Quantity2: 0,
          Quantity2Unit: "",
          Description: "Pail-RO 6.0G",
          Text: "",
          References: [
            {
              Value: "7100311",
              Qualifier: "OID"
            },
            {
              Value: "45571",
              Qualifier: "PO"
            }
          ]
        },
        {
          Weight: 3614,
          WeightUnit: "L",
          Volume: 0,
          Quantity1: 4800,
          Quantity1Unit: "EA",
          Quantity2: 0,
          Quantity2Unit: "",
          Description: "Cvr-RO LoViz EZ",
          Text: "",
          References: [
            {
              Value: "7401956",
              Qualifier: "OID"
            },
            {
              Value: "45571",
              Qualifier: "PO"
            }
          ]
        }
      ]
    }
  ]
};

let jsonATMS = {
  client: "Publix Supermarkets",
  seq_id: "000000007",
  _loop_id: "0000",
  identifier: "CS03531200",
  shipment: {
    scac: "FDFC",
    equipment_number: "0",
    weight: "20000",
    weight_qualifier: "Gross Weight",
    volume: "1000",
    volume_qualifier: "Cubic Feet",
    truck_type: "Trailer, Dry Freight",
    charges: "",
    weight_units: "Pounds",
    lading_quantity: "22"
  },
  purpose: "Cancellation",
  stops: [
    {
      stoptype: "Load",
      _stoptype: "LD",
      ordinal: "1",
      _ordinal: 1,
      weight: "20000",
      weight_units: "Pounds",
      measurements: [
        {
          units: "22",
          units_type: "Pallet/Unit Load"
        }
      ],
      volume: "1000",
      volume_qualifier: "Cubic Feet",
      _loop_id: "0300",
      references: [
        {
          id: "FDFC",
          idtype: "Purchase Order Number"
        }
      ],
      dates: [
        {
          date: "20170717",
          datetype: "Scheduled Pick-Up Date",
          time: "1827",
          timetype: "Scheduled Pick Up Time"
        }
      ],
      notes: [
        {
          note: "Managed",
          notetype: "Other Instructions"
        },
        {
          note: "Non-Produce",
          notetype: "Other Instructions"
        }
      ],
      entities: [
        {
          name: "ROMA FOODS",
          type: "Ship From",
          id: "0705702-01",
          idtype: "Mutually Defined",
          _loop_id: "0310",
          address: ["7091 NW 82ND AVE"],
          city: "MIAMI",
          state: "FL",
          postal: "33166",
          country: "US",
          contacts: [
            {
              contactname: "FERNANDO MARTINEZ JR PIMS CONTACT",
              contact_type: "Shipper Contact",
              contact_number: "305-592-6366",
              contact_number_type: "Telephone"
            }
          ]
        }
      ]
    },
    {
      stoptype: "Unload",
      _stoptype: "UL",
      ordinal: "2",
      _ordinal: 1,
      weight: "20000",
      weight_units: "Pounds",
      measurements: [
        {
          units: "22",
          units_type: "Pallet/Unit Load"
        }
      ],
      volume: "1000",
      volume_qualifier: "Cubic Feet",
      _loop_id: "0300",
      references: [
        {
          id: "FDFC",
          idtype: "Purchase Order Number"
        }
      ],
      dates: [
        {
          date: "20170718",
          datetype: "Scheduled Delivery Date",
          time: "0029",
          timetype: "Scheduled Delivery Time"
        }
      ],
      notes: [
        {
          note: "Publix responsible for unloading",
          notetype: "Other Instructions"
        },
        {
          note:
            "For after hours or weekend inquiries contact (863) 688-1188 X 33707",
          notetype: "Other Instructions"
        }
      ],
      entities: [
        {
          name: "GROCERY WHSE - LAK - (901)",
          type: "Ship To",
          id: "4101",
          idtype: "Mutually Defined",
          _loop_id: "0310",
          address: ["2600 COUNTY LINE RD"],
          city: "LAKELAND",
          state: "FL",
          postal: "33811",
          country: "US",
          contacts: [
            {
              contactname: "X Publix DC",
              contact_type: "Delivery Contact",
              contact_number: "863-680-5247",
              contact_number_type: "Telephone"
            }
          ]
        }
      ]
    }
  ]
};
function diff(obj1, obj2) {
  const result = {};
  if (Object.is(obj1, obj2)) {
    return undefined;
  }
  if (!obj2 || typeof obj2 !== "object") {
    return obj2;
  }
  Object.keys(obj1 || {})
    .concat(Object.keys(obj2 || {}))
    .forEach(key => {
      if (obj2[key] !== obj1[key] && !Object.is(obj1[key], obj2[key])) {
        result[key] = obj2[key];
      }
      if (typeof obj2[key] === "object" && typeof obj1[key] === "object") {
        const value = diff(obj1[key], obj2[key]);
        if (value !== undefined) {
          result[key] = value;
        }
      }
    });
  return result;
}

console.log(diff(jsonATMS, jsonKline));

// console.log(JSON.stringify(jsonATMS));
