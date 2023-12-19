angular
    .module("musteriUygulama")
    .factory("musteriService", musteriService)

function musteriService() {
    let xMusteriler = {};
    xMusteriler.getMusteri = getMusteri;
    xMusteriler.addMusteri = addMusteri;

    let musteriler = [
        {
            tck: 12587568945,
            ad: 'Ayşe',
            soyad: 'Kabasakal',
            sinif: 2,
            telefon: '0(285)548 74 75'
        },
        {
            tck: 17964832363,
            ad: 'Deniz',
            soyad: 'Görgülü',
            sinif: 4,
            telefon: '0(289)574 88 13'
        },
        {
            tck: 14965218963,
            ad: 'Mehmet',
            soyad: 'Argun',
            sinif: 6,
            telefon: '0(276)564 11 26'
        },
    ]
    
    function getMusteri() {
        return musteriler;
    }
    
    function addMusteri(musteri) {
        musteriler.push(musteri)
    }

    function deleteStudent(sid){
    }
    
    function editMusteri(musteri) {
        for (let i = 0; i < students.length; i++) {
            if (musteriler[i].tck = musteri.tck) {
    
    
            }
            /* ...*/
            /*... */
        }
}


}