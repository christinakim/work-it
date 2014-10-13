$(function(){
  var viewModel = {};
  viewModel.fileData = ko.observable({
    dataURL: ko.observable(),
  });
  viewModel.onClear = function(fileData){
    if(confirm('Are you sure?')){
      fileData.clear && fileData.clear();
    }                            
  };
  ko.applyBindings(viewModel);
});