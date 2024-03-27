const form = document.forms.namedItem('login');
const dialog = document.querySelector('dialog');
const span = dialog.querySelector('span');
const b = dialog.querySelector('b');
const p = dialog.querySelector('p');
const inputs = form.querySelectorAll('input');
const inp_span = form.querySelector('.inp_span');
const SEcond = form.querySelector('.SEcond');
const spn = document.querySelector('.spn')
const spn2 = document.querySelector('.spn2')

const patterns = {
    name: /^[a-zA-Z ,.'-]{3,}$/,
    age: /^\d{1,2}$/ 
};

inputs.forEach((inp) => {

    inp.onchange = () => {
        if (inp.name === 'name') {
            if (!patterns.name.test(inp.value)) {
                inp_span.textContent = 'Write only words';
                inp_span.style.color = 'red';
            } else {
                inp_span.textContent = '';
            }
        }

        if (inp.name === 'age') {
            if (!patterns.age.test(inp.value)) {
                SEcond.textContent = 'Write only numbers';
                SEcond.style.color = 'red';
            } else {
                SEcond.textContent = '';
            }
        }

        if (!patterns[inp.name].test(inp.value)) {
            inp.classList.add('error');
            spn.innerHTML++
            spn2.innerHTML--
        } else {
            inp.classList.remove('error');
            spn.innerHTML--
            spn2.innerHTML++
        }

    };
    
});

form.onsubmit = (event) => {
    event.preventDefault();
    let fm = new FormData(form);
    let error = false;

    let user = {};

    fm.forEach((val, key) => {
        user[key] = val;
        if (val === 'not') error = true;
    });
    inputs.forEach((inp) => {
        if (inp.value.length === 0 || inp.classList.contains('error')) {
            error = true;
        }
    });

    if (error) {
        alert("Something is getting wrong");
        return;
    }

    b.innerHTML = user.name;
    p.innerHTML = `After 10 years you'll be a senior developer on ${user.language} language`;
    dialog.showModal();
};

span.onclick = () => {
    dialog.close();
};
