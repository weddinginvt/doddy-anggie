AOS.init({
    duration: 600,
});

function rekeningWanita() {
    /* Get the text field */
    var copyText = document.getElementById("rekWanita");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    validasi('Berhasil di Salin', 'success');
}

function rekeningPria() {
    /* Get the text field */
    var copyText = document.getElementById("rekPria");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    validasi('Berhasil di Salin', 'success');
}

function alamatMempelai() {
    /* Get the text field */
    var copyText = document.getElementById("alamatPelai");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    validasi('Berhasil di Salin', 'success');
}

function rsvp() {
    let nameRv = document.getElementById("namaRv").value;
    let alamatRv = document.getElementById("alamatRv").value;
    const formRsvp = document.forms.rsvpForm;
    const checked = formRsvp.querySelector('input[name=konfirmasi]:checked');

    if (nameRv == '') {
        validasi('Nama Harus di Isi !', 'warning');
    } else if (alamatRv === '') {
        validasi('Alamat Harus di Isi !', 'warning');
    } else if (checked == null) {
        validasi('Pilih Konfirmasi !', 'warning');
    } else {
        window.open("https://api.whatsapp.com/send?phone=6287817379229&text=Halo%20Dodi%20%26%20Anggie%2C%20saya%20%2A" + nameRv + "%2A%20dari%20%2A" + alamatRv + "%2A%20ingin%20konfirmasi%20kehadiran%20undangan%20pernikahan%20kalian%20bahwa%20%2A" + checked.value + "%2A%0A%20%0ATerimakasih.", "_blank");
    }
}

function validasi(pesan, type) {
    Swal.fire({
        icon: type,
        title: pesan,
        confirmButtonText: 'Oke',
        confirmButtonColor: '#5F3E24',
    })
}
