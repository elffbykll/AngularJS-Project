var app = angular.module("musteriUygulama")

	app.directive("musteriArama", musteriArama);
	app.directive("musteriAyrinti", musteriAyrinti);
	app.directive("musteriEkle", musteriEkle);

function musteriArama(){
	return {
		templateUrl: "musteriArama.htm"
	};
}

function musteriAyrinti(){
	return {
		templateUrl: "musteriAyrinti.htm"
	};
}

function musteriEkle(){
	return {
		templateUrl: "musteriEkle.htm"
	};
}
