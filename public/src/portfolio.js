// document.getElementsByClassName('sagpython').style.display='none';


document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('exp1').click();
});

document.getElementById('exp1').addEventListener('click',function(){
  
    hideramco();
    hideprojects();
    hideprojects();
    var show = document.getElementsByClassName('sag');
    for(s of show){
        s.style.display='block';
    }
    var contents = document.getElementsByClassName('saginfo');
    for(content of contents){
        content.style.display='flex'
    }
    
});

document.getElementById('exp2').addEventListener('click',function(){ 
    
    hidesag();
    hideachievements();
    hideprojects();
    var show = document.getElementsByClassName('ramco');
    for(s of show){
        s.style.display='block';
    }
    var contents = document.getElementsByClassName('ramcoinfo');
    for(content of contents){
        content.style.display='flex'
    }
    
});

document.getElementById('exp3').addEventListener('click',function(){
    hidesag();
    hideramco();
    hideprojects();
    var show = document.getElementsByClassName('achievementsinfo')
    for(s of show){
        s.style.display='flex'
    }
});

document.getElementById('exp4').addEventListener('click',function(){
    hidesag();
    hideramco();
    hideachievements();
    var ach = document.getElementsByClassName('projectsinfo');
    for(a of ach){
        a.style.display='flex';
    }
})



function hideramco(){
   
    var hide = document.getElementsByClassName('ramco');
    for(h of hide){
        h.style.display='none';
    }
    var contents = document.getElementsByClassName('ramcoinfo');
    for(content of contents){
        content.style.display='none';
    }
    hideachievements();
    
}
function hidesag(){
    var hide = document.getElementsByClassName('sag');
    for(h of hide){
        h.style.display='none';
    }
    var contents = document.getElementsByClassName('saginfo');
    for(content of contents){
        content.style.display='none';
    }
  
}

function hideachievements(){
    var ach = document.getElementsByClassName('achievementsinfo');
    for(a of ach){
        a.style.display='none';
    }
}

function hideprojects(){
    var proj = document.getElementsByClassName('projectsinfo');
    for(p of proj){
        p.style.display='none';
    }
}
// function sagclick(){
   
//     const hide = document.querySelectorAll('.sidebar .ramco')
//     console.log(hide)
   
//     alert('jhsdb');
//     document.querySelectorAll('.sidebar .sag').style.display='block';
// }

// ramco.addEventListener('click',function(){  
//     hideothers();   s
//     for(const skill of sag){
//         skill.Style.display='none';
//     }
// });



// document.addEventListener('DOMContentLoaded', function() {
//     let sidebar= document.getElementById('exp');
//     let sag = sidebar.getElementsByClassName('sag')
//     for(const skill of sag){     
//                 skill.style.display='none';
//             }
    
//         });


// document.getElementById('exp2').addEventListener('click',function(){
//     hideothers();
//     let ramcoskill= document.getElementsByClassName('ramco'); 
//     let sagskill= document.getElementsByClassName('sag');  
//     for(let i=0;i<ramcoskill.length;i++){
//         ramcoskill[i].Style.visibility='visible';
//     }
//     for(let i=0;i<sagskill.length;i++){
//         sagskill[i].Style.visibility='hidden';
//     }
// });


