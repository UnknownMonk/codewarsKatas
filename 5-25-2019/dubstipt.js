function songDecoder(song) {
  song
    .split('WUB')
    .filter(word => word.trim())
    .join('');
}

songDecoder(song);
