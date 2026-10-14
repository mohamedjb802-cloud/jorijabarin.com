// Stories shown on the home page, in the order the prophets came.
// To add a prophet: create data/<id>.js and add its id here.
window.PROPHET_ORDER = ['adam', 'nuh', 'ibrahim', 'yusuf', 'musa', 'yunus'];

// Loads every story file listed above, then calls done(list) with the ones that exist.
window.loadProphets = function (done) {
  const ids = window.PROPHET_ORDER;
  let left = ids.length;
  const finish = () => { if (--left === 0) done(ids.map(id => window.PROPHETS && window.PROPHETS[id]).filter(Boolean)); };
  ids.forEach(id => {
    const s = document.createElement('script');
    s.src = 'data/' + id + '.js';
    s.onload = finish; s.onerror = finish;
    document.head.appendChild(s);
  });
};
