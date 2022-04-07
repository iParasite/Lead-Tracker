let myLeads = [];

const inputEl = document.getElementById("input-el");
const Inputbtn = document.getElementById("input-btn");
const ulEL = document.getElementById("ul-el"); 
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalSorage = JSON.parse(localStorage.getItem("myLeads", ));
const tabBtn = document.getElementById("tab-btn")

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    })
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads) 
})
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})  

if (leadsFromLocalSorage) {
     myLeads = leadsFromLocalSorage
    render(myLeads)
};
function render(leads) {
let listItems = "";
for( let i=0; i<leads.length;i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
                </a>
            </li>
    `   
};
ulEL.innerHTML = listItems
};
Inputbtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

});
