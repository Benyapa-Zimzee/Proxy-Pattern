class Job {
    apply() {}
}

class ProxyJob extends Job {
    constructor(title) {
        super();
        this.title = title;
    }

    apply() {
        return `Congratulations! You are hired as a ${this.getSelectedJob()}`;
    }

    getSelectedJob() {
        const jobSelect = document.getElementById("job");
        return jobSelect.value;
    }
}

const companies = {
    "Company 1": new ProxyJob("UX/UI\nBusiness Analyst\nFull Stack"),
    "Company 2": new ProxyJob("Full Stack\nSystem Analyst\nUX/UI"),
    "Company 3": new ProxyJob("Full Stack\nBackend\nFrontend")
};

function updateJobMenu() {
    const companySelect = document.getElementById("company");
    const selectedCompany = companySelect.value;
    const jobSelect = document.getElementById("job");

    jobSelect.innerHTML = '<option value="" disabled selected>Select Job</option>';

    if (selectedCompany in companies) {
        const jobs = companies[selectedCompany].title.split('\n');
        jobs.forEach(job => {
            const option = document.createElement("option");
            option.text = job;
            jobSelect.add(option);
        });
    }
}

function applyJob() {
    const companySelect = document.getElementById("company");
    const selectedCompany = companySelect.value;

    if (selectedCompany in companies) {
        const result = companies[selectedCompany].apply();
        alert(result);
    } else {
        alert("You are not a match for the selected company or job");
    }
}
