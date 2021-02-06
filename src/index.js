module.exports = function reverse (n) {
 n = String(n).replace(/^-/g, '').split('').reverse().join('');
 return +n;
}
