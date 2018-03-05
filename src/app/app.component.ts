import { Component } from '@angular/core';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  content = '<h1 class="project-title">Project with featured slider(<span>2015</span>)</h1>'+
  '<p class="project-subtitle">Branding / Web</p>'+
  
  '<div class="project-media">'+
  

  '<li><img class="img-responsive img-center" src="assets/images/projects/slide-2-1.jpg" alt="" /></li>'+

  '<h2>About Project</h2>'+
  '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, varius sed dolor. Donec augue lacus, vulputate sed consectetur facilisis, interdum pharetra ligula. Nulla suscipit erat nibh, ut porttitor nisl dapibus eu.</p>'+
  '<p>Phasellus porta eros vel lacus euismod consequat. Phasellus eleifend, nibh non feugiat hendrerit, lacus enim adipiscing eros, a pharetra erat neque eget est. Quisque vitae aliquet urna. Integer suscipit lectus eu enim porttitor fringilla. Ut blandit, urna in auctor euismod, arcu eros pharetra metus, a porta purus libero a nibh.</p>'+
  '<p>Nam eget urna pellentesque nisl ultrices dapibus. Mauris accumsan vehicula nisl, sed tempus mauris facilisis eu. Donec a iaculis nisi, quis malesuada justo. Pellentesque ut enim sit amet ipsum dignissim egestas. Morbi tincidunt rhoncus urna eget placerat.</p>'+
  
  '<p class="text-center margin-top"><a class="btn btn-dc btn-main-color" href="#link">Visit Website</a></p>' +
  '</div>'

  projects = [
    {
      "name":"Cash Security Trade",
      "tag":"native",
      "caption":"iOS & Android",
      "logoUrl":"assets/images/projects/st.png",
      "contents":[
        {"type":"img",
        "img":"assets/images/projects/slide-2-1.jpg"
      
      
        },
        {
          "type":"text",
          "text":"Role"
        }
      ]
    },
    {
      "name":"Cash Security Trade",
      "tag":"native",
      "caption":"iOS & Android",
      "logoUrl":"assets/images/projects/st.png",
      "contents":[
        {"type":"img",
        img:"assets/images/projects/slide-2-1.jpg"
      
      
        },
        {
          "type":"text",
          "text":"Role"
        }
      ]
    }


  ]
  
  
  constructor(public modal: Modal) { }


  createContent(index){
    let project = this.projects[index]
    let result ='<h1 class="project-title">'+project.name+'<span>(2012-2017)</span></h1>'
    result+= '<p class="project-subtitle">'+project.caption +  '</p>'
  
    result+='<div class="project-media">'
    for(let content of project.contents){
      if(content.type=='img'){
        result+='<img class="img-responsive img-center" src="'+content['img']+'" alt="" />'

      }

    }
    result+='<h2>Role</h2>'
    result+='<p>Development & Maintance</p>'

    result+='</div>'
    return result

  }

  onClick() {
    const dialogRef = this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('A simple Alert style modal window')
        .body(this.createContent(0))
        .open();

    dialogRef.result
        .then( );
  }





}
