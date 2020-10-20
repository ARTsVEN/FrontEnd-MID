const show_hide_students = document.querySelector("#show-hide-students");
// console.log(show_hide_students);

const form_input_student = document.querySelector("#form-input-student");
console.log(form_input_student);


show_hide_students.addEventListener("click", function(){
    
    show_hide_students.textContent;
    if(show_hide_students.textContent == "Show Form Add Students")
    {
        show_hide_students.textContent = "Hide Form Add Students";
        
        form_input_student.style.display = "block";
        
    }
    else
    {
        show_hide_students.textContent="Show Form Add Students";
        
        form_input_student.style.display = "none";
    }

});

const facultyData = document.querySelector("#facultyData");
const studiData = document.querySelector("#pStudi_data")

facultyData.addEventListener("change", function(){
    const fdata = document.querySelector("#facultyData").options[document.querySelector("#facultyData").selectedIndex].value;
    if(fdata == "Fakultas Ilmu Komputer"){
        studiData.innerHTML=""

        let tag= document.createElement("option");
        let text= document.createTextNode("Informatika");
        tag.appendChild(text)
        studiData.appendChild(tag);

        tag= document.createElement("option")
        text= document.createTextNode("Sistem Informasi");
        tag.appendChild(text)
        studiData.appendChild(tag);
    }

    if(fdata == "Pascasarjana"){
        studiData.innerHTML=""

        let tag= document.createElement("option")
        let text= document.createTextNode("Magister Management");
        tag.appendChild(text)
        studiData.appendChild(tag);

        tag= document.createElement("option")
        text= document.createTextNode("Magister Teologi");
        tag.appendChild(text)
        studiData.appendChild(tag);
    }
    if(fdata == "Fakultas Filsafat"){
        studiData.innerHTML=""

        let tag= document.createElement("option");
        let text= document.createTextNode("Ilmu Filsafat");
        tag.appendChild(text)
        studiData.appendChild(tag);

    }

    if(fdata == "Fakultas Keguruan dan Ilmu Pendidikan"){
        studiData.innerHTML=""

        let tag= document.createElement("option");
        let text= document.createTextNode("Pendidikan Agama");
        tag.appendChild(text)
        studiData.appendChild(tag);

        tag= document.createElement("option")
        text= document.createTextNode("Pendidikan Bahasa Inggris");
        tag.appendChild(text)
        studiData.appendChild(tag);

        tag= document.createElement("option")
        text= document.createTextNode("Pendidikan Ekonomi");
        tag.appendChild(text)
        studiData.appendChild(tag);

        tag= document.createElement("option")
        text= document.createTextNode("Pendidikan Luar Sekolah");
        tag.appendChild(text)
        studiData.appendChild(tag);
    }

    if(fdata == "Fakultas Ekonomi Dan Bisnis"){
        studiData.innerHTML=""

        let tag= document.createElement("option");
        let text= document.createTextNode("Akuntansi");
        tag.appendChild(text)
        studiData.appendChild(tag);

        tag= document.createElement("option")
        text= document.createTextNode("Management");
        tag.appendChild(text)
        studiData.appendChild(tag);
    }

    if(fdata == "Fakultas Pertanian"){
        studiData.innerHTML=""

        let tag= document.createElement("option");
        let text= document.createTextNode("Agroteknologi");
        tag.appendChild(text)
        studiData.appendChild(tag);

    }

    if(fdata == "Fakultas Keperawatan"){
        studiData.innerHTML=""

        let tag= document.createElement("option");
        let text= document.createTextNode("Keperawatan");
        tag.appendChild(text)
        studiData.appendChild(tag);

        tag= document.createElement("option")
        text= document.createTextNode("Profesi Ners");
        tag.appendChild(text)
        studiData.appendChild(tag);
    }

});
let students= [
    {
        NIM: "105021810031",
        Name: "Arthur",
        Gender: "Male",
        Faculty: "Fakultas Ilmu Komputer",
        ProgramStudi: "Informatika",
    },

    {
        NIM: "105021810032",
        Name: "Anjas",
        Gender: "Male",
        Faculty: "Fakultas Ilmu Komputer",
        ProgramStudi: "Sistem Informasi",
    },

    {
        NIM: "105021810033",
        Name: "Eowyn2",
        Gender: "Female",
        Faculty: "Fakultas Pertanian",
        ProgramStudi: "Agroteknologi",
    },

    {
        NIM: "105021810034",
        Name: "Eowyn3",
        Gender: "Female",
        Faculty: "Fakultas Keperawatan",
        ProgramStudi: "Keperawatan",
    },

    {
        NIM: "105021810035",
        Name: "Eowyn4",
        Gender: "Female",
        Faculty: "Fakultas Keperawatan",
        ProgramStudi: "Profesi Ners",
    },

    {
        NIM: "105021810036",
        Name: "Eowyn5",
        Gender: "Female",
        Faculty: "Fakultas Ekonomi Dan Bisnis",
        ProgramStudi: "Akuntansi",
    },

    {
        NIM: "105021810037",
        Name: "Eowyn6",
        Gender: "Female",
        Faculty: "Fakultas Ekonomi Dan Bisnis",
        ProgramStudi: "Management",
    },

    {
        NIM: "105021810038",
        Name: "Eowyn7",
        Gender: "Female",
        Faculty: "Fakultas Filsafat",
        ProgramStudi: "Ilmu Filsafat",
    },



]

const student_list= document.querySelector("#studentData")
function update_student_list(){

	student_list.innerHTML = "";

	for(student of students){

		let tr = document.createElement("tr");

		for(key in student){

			let td = document.createElement("td");
			td.appendChild(document.createTextNode(student[key]));

			tr.appendChild(td);
		}

		//action, #delete, 
		let action = document.createElement("td");
		let trash_icon = `<button type="button" onclick="delete_row(this)" class="btn btn-danger"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
		action.innerHTML = trash_icon;
		tr.appendChild(action);

		student_list.appendChild(tr);
	}
}
update_student_list()

const PStudiFilter= document.querySelector("#showPStudi")
PStudiFilter.addEventListener("click",function(r){
    r.preventDefault();
    const psfilters=document.querySelector("#psfilter").options[document.querySelector("#psfilter").selectedIndex].value;
    if(psfilters == "Informatika"){
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        
		//filter the student
		const filtered_students = students.filter((s) => {
			return s.ProgramStudi == psfilters;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(psfilters == "Sistem Informasi"){
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        
		//filter the student
		const filtered_students = students.filter((s) => {
			return s.ProgramStudi == psfilters;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(psfilters == "Magister Management"){
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        
		//filter the student
		const filtered_students = students.filter((s) => {
			return s.ProgramStudi == psfilters;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger" title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(psfilters == "Magister Teologi"){
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        
		//filter the student
		const filtered_students = students.filter((s) => {
			return s.ProgramStudi == psfilters;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(psfilters == "Ilmu Filsafat"){
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        
		//filter the student
		const filtered_students = students.filter((s) => {
			return s.ProgramStudi == psfilters;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(psfilters == "Pendidikan Agama"){
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        
		//filter the student
		const filtered_students = students.filter((s) => {
			return s.ProgramStudi == psfilters;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(psfilters == "Pendidikan Bahasa Inggris"){
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        
		//filter the student
		const filtered_students = students.filter((s) => {
			return s.ProgramStudi == psfilters;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(psfilters == "Pendidikan Ekonomi"){
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        
		//filter the student
		const filtered_students = students.filter((s) => {
			return s.ProgramStudi == psfilters;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(psfilters == "Pendidikan Luar Sekolah"){
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        
		//filter the student
		const filtered_students = students.filter((s) => {
			return s.ProgramStudi == psfilters;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger" title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(psfilters == "Akuntansi"){
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        
		//filter the student
		const filtered_students = students.filter((s) => {
			return s.ProgramStudi == psfilters;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(psfilters == "Management"){
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        
		//filter the student
		const filtered_students = students.filter((s) => {
			return s.ProgramStudi == psfilters;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(psfilters == "Agroteknologi"){
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        
		//filter the student
		const filtered_students = students.filter((s) => {
			return s.ProgramStudi == psfilters;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(psfilters == "Keperawatan"){
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        
		//filter the student
		const filtered_students = students.filter((s) => {
			return s.ProgramStudi == psfilters;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(psfilters == "Profesi Ners"){
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        
		//filter the student
		const filtered_students = students.filter((s) => {
			return s.ProgramStudi == psfilters;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

})

const facultyFilters = document.querySelector("#showFaculty")
facultyFilters.addEventListener("click", function(e){
    e.preventDefault();
    const ffilter = document.querySelector("#facultyFilter").options[document.querySelector("#facultyFilter").selectedIndex].value;
    console.log(ffilter)
    if(ffilter == "Fakultas Ilmu Komputer")
    {
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        console.log(student_list)

		//filter the student
		const filtered_students = students.filter((s) => {
			return s.Faculty == ffilter;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(ffilter == "Pascasarjana")
    {
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        console.log(student_list)

		//filter the student
		const filtered_students = students.filter((s) => {
			return s.Faculty == ffilter;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(ffilter == "Fakultas Filsafat")
    {
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        console.log(student_list)

		//filter the student
		const filtered_students = students.filter((s) => {
			return s.Faculty == ffilter;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(ffilter == "Fakultas Keguruan dan Ilmu Pendidikan")
    {
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        console.log(student_list)

		//filter the student
		const filtered_students = students.filter((s) => {
			return s.Faculty == ffilter;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(ffilter == "Fakultas Ekonomi Dan Bisnis")
    {
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        console.log(student_list)

		//filter the student
		const filtered_students = students.filter((s) => {
			return s.Faculty == ffilter;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(ffilter == "Fakultas Pertanian")
    {
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        console.log(student_list)

		//filter the student
		const filtered_students = students.filter((s) => {
			return s.Faculty == ffilter;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

    if(ffilter == "Fakultas Keperawatan")
    {
        const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        console.log(student_list)

		//filter the student
		const filtered_students = students.filter((s) => {
			return s.Faculty == ffilter;
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
    }

});

const addStudents = document.querySelector("#addStudent")
addStudents.addEventListener("click",function(c){
    c.preventDefault()
    const addNIM = document.querySelector("#NIM").value
    
    const addNama = document.querySelector("#nama").value
    
    const addGender = document.querySelector('input[name="gender"]:checked').value;
    
    const addFaculty = document.querySelector("#facultyData").options[document.querySelector("#facultyData").selectedIndex].value;

    const addPStudi = document.querySelector("#pStudi_data").options[document.querySelector("#pStudi_data").selectedIndex].value;

    // console.log(addNIM)
    // console.log(addNama)
    // console.log(addGender)
    // console.log(addFaculty)
    // console.log(addPStudi)

    const datastudent={
        NIM: addNIM,
        Name: addNama,
        Gender: addGender,
        Faculty: addFaculty,
        ProgramStudi: addPStudi,
    }
    students.push(datastudent)
    update_student_list()

})


//delete row
function delete_row(btn) {

	var row = btn.parentNode.parentNode;
    // console.log(row)
	student_name = row.getElementsByTagName("td")[1].textContent;
	student_nim = (row.querySelector("tr td").textContent);
    
	const confirm_delete = confirm(`Are You Sure To Delete ${student_name}?`);
 
	if(confirm_delete == true){		
		students = students.filter((s) =>{
			return s.NIM != student_nim;
		});

		update_student_list();

		}
}
//end delete row

const ssearch = document.querySelector("#search")
ssearch.addEventListener("input", function(){
    console.log(ssearch.value)
    const student_list= document.querySelector("#studentData")
        student_list.innerHTML = "";
        
		//filter the student
		const filtered_students = students.filter((s) => {
			return s.Name.toLowerCase().includes(search.value.toLowerCase());
            
            
        });
        console.log(filtered_students)

		for(student of filtered_students){

			let tr = document.createElement("tr");

			for(key in student){

				let td = document.createElement("td");
				td.appendChild(document.createTextNode(student[key]));

				tr.appendChild(td);
			}
			
			//action #delete, 
			let action = document.createElement("td");
			let trash_icon = `<button type="button" class="btn btn-danger"  title="Students Filter Are Only For View Data"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
			action.innerHTML = trash_icon;
			tr.appendChild(action);

            student_list.appendChild(tr);
        }
})