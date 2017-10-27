module.exports = function (chromyChain, scenario, vp) {
  console.log('onBefore.js is running for: ',scenario.label +' on '+ vp.label);

  // IGNORE ANY CERT WARNINGS
  chromyChain.ignoreCertificateErrors();
};
