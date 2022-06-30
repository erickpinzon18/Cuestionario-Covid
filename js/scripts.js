function importIframe() {
    var ficha = document.getElementById("ficha").value;

    var link = `http://200.188.14.49/p/jsp/covid/encuesta_covid_alumnoz.jsp?mensaje=AMIGAZO&clave_usuario=${ficha}`;
    window.location.href = link;
    //document.write(`<iframe src=\"${link}\" width=\"100%\" height=\"100%\" frameborder=\"0\" id=\"iFrame\"> dos </iframe>`);
    //document.write("<button class=\"btn btn-lg btn-primary w-100\" onclick=\"llenarFormMañanaNoCovid();\">Llenar Formulario Para Mañana</button>");
}

function llenarFormMañanaNoCovid() {
    alert("LlenarFormularioMMañanaNoCovid");
    var iframe = document.getElementById('iFrame').contentDocument  || document.getElementById('iFrame').contentWindow.document ;
    iframe.getElementById("Radio_asiste_2").click();
    iframe.getElementById("RbtnPreg_23_2").click();
    iframe.getElementById("RbtnPreg_24_2").click();
    iframe.getElementById("RbtnPreg_16_2").click();
    iframe.getElementById("RbtnPreg_19_2").click();
    iframe.getElementById("RbtnPreg_17_2").click();
    iframe.getElementById("RbtnPreg_18_2").click();
    iframe.getElementById("RbtnPreg_22_2").click();
    iframe.getElementById("RbtnPreg_15_2").click();
    iframe.getElementById("RbtnPreg_20_2").click();
    iframe.getElementById("RbtnPreg_21_2").click();
}

function llenarFormMañanaSiCovid() {
    FCollapsePrivacidad();
    FCollapseInicio();
    document.getElementById("Radio_asiste_2").click();
    document.getElementById("RbtnPreg_23_1").click();
    document.getElementById("RbtnPreg_24_1").click();
    document.getElementById("RbtnPreg_16_1").click();
    document.getElementById("RbtnPreg_18_1").click();
    document.getElementById("RbtnPreg_19_1").click();
    document.getElementById("RbtnPreg_17_1").click();
    document.getElementById("RbtnPreg_22_1").click();
    document.getElementById("RbtnPreg_20_1").click();
    document.getElementById("RbtnPreg_15_1").click();
    document.getElementById("RbtnPreg_21_1").click();
}
