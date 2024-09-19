document.addEventListener("DOMContentLoaded", function() {
    const form = document.createElement("form");
    const title = document.createElement("h1");
    title.textContent = "Formulir Pendaftaran";
    const nameGroup = createInputGroup("Nama", "text", "nama", "Your name..");
    const nimGroup = createInputGroup("NIM", "text", "nim", "NIM..");
    const birthPlaceGroup = createInputGroup("Tempat Lahir", "text", "tlahir", "Tempat Lahir..");
    const birthDateGroup = createInputGroup("Tanggal Lahir", "date", "tglahir", "");
    const prodiGroup = createSelectGroup("Program Studi", "prodi", [
        {value: "PGSD", label: "Pendidikan Guru Sekolah Dasar"},
        {value: "PGPAUD", label: "Pendidikan Guru Anak Usia Dini"},
        {value: "PKP", label: "Pendidikan Kelautan dan Perikanan"},
        {value: "SIK", label: "Sistem Informasi Kelautan"},
        {value: "LK", label: "Logistik Kelautan"}
    ]);
    const genderGroup = createRadioGroup("Jenis Kelamin", "jk", [
        {value: "Laki-laki", label: "Laki-laki"},
        {value: "Perempuan", label: "Perempuan"}
    ]);
    const hobbyGroup = createCheckboxGroup("Hobi", "hobi", [
        {value: "Baca", label: "Baca"},
        {value: "Nulis", label: "Nulis"},
        {value: "Nonton", label: "Nonton"},
        {value: "Olahraga", label: "Olahraga"},
        {value: "Main Game", label: "Main Game"},
        {value: "Belajar", label: "Belajar"},
    ]);
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Simpan";
    form.appendChild(title);
    form.appendChild(nameGroup);
    form.appendChild(nimGroup);
    form.appendChild(birthPlaceGroup);
    form.appendChild(birthDateGroup);
    form.appendChild(prodiGroup);
    form.appendChild(genderGroup);
    form.appendChild(hobbyGroup);
    form.appendChild(submitButton);
    document.getElementById("form-container").appendChild(form);
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Form submitted!");
    });
    function createInputGroup(labelText, inputType, inputName, placeholder) {
        const div = document.createElement("div");
        div.classList.add("form-group");

        const label = document.createElement("label");
        label.textContent = labelText;
        const input = document.createElement("input");
        input.type = inputType;
        input.name = inputName;
        input.placeholder = placeholder;

        div.appendChild(label);
        div.appendChild(input);
        return div;
    }

    function createSelectGroup(labelText, selectName, options) {
        const div = document.createElement("div");
        div.classList.add("form-group");

        const label = document.createElement("label");
        label.textContent = labelText;
        const select = document.createElement("select");
        select.name = selectName;

        options.forEach(optionData => {
            const option = document.createElement("option");
            option.value = optionData.value;
            option.textContent = optionData.label;
            select.appendChild(option);
        });

        div.appendChild(label);
        div.appendChild(select);
        return div;
    }

    function createRadioGroup(labelText, radioName, options) {
        const div = document.createElement("div");
        div.classList.add("form-group", "radio-group");

        const label = document.createElement("label");
        label.textContent = labelText;
        div.appendChild(label);

        options.forEach(optionData => {
            const radioLabel = document.createElement("label");
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = radioName;
            radio.value = optionData.value;

            radioLabel.appendChild(radio);
            radioLabel.appendChild(document.createTextNode(optionData.label));
            div.appendChild(radioLabel);
        });

        return div;
    }

    function createCheckboxGroup(labelText, checkboxName, options) {
        const div = document.createElement("div");
        div.classList.add("form-group", "checkbox-group");

        const label = document.createElement("label");
        label.textContent = labelText;
        div.appendChild(label);

        options.forEach(optionData => {
            const checkboxLabel = document.createElement("label");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = checkboxName;
            checkbox.value = optionData.value;

            checkboxLabel.appendChild(checkbox);
            checkboxLabel.appendChild(document.createTextNode(optionData.label));
            div.appendChild(checkboxLabel);
        });

        return div;
    }
});
