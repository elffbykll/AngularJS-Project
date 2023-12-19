angular
  .module("musteriUygulama")
  .controller("musteriController", musteriController);

musteriController.$inject[
  'musteriService'
];

function musteriController(musteriService) {
  var mm = this;
  mm.musteriler = musteriService.getMusteri();
  mm.orderBy = orderBy;
  mm.deleteStudent = deleteStudent;
  mm.showStatus = false;
	mm.doShow = doShow;

  function doShow(){
		mm.showStatus = true;
	}

  mm.editorEnabled = [];
	mm.enableEditor = enableEditor;
	mm.disableEditor = disableEditor;

  function enableEditor(index){
		mm.editorEnabled[index] = true;
	}

	function disableEditor(index){
		mm.editorEnabled[index] = false;
	}


  function deleteStudent(id){
		StudentService.deleteStudent(id);
	}

}