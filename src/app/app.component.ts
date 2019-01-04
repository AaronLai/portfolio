import { Component } from '@angular/core';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  content = '<h1 class="project-title">Project with featured slider(<span>2015</span>)</h1>' +
    '<p class="project-subtitle">Branding / Web</p>' +

    '<div class="project-media">' +


    '<li><img class="img-responsive img-center" src="assets/images/projects/slide-2-1.jpg" alt="" /></li>' +

    '<h2>About Project</h2>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, varius sed dolor. Donec augue lacus, vulputate sed consectetur facilisis, interdum pharetra ligula. Nulla suscipit erat nibh, ut porttitor nisl dapibus eu.</p>' +
    '<p>Phasellus porta eros vel lacus euismod consequat. Phasellus eleifend, nibh non feugiat hendrerit, lacus enim adipiscing eros, a pharetra erat neque eget est. Quisque vitae aliquet urna. Integer suscipit lectus eu enim porttitor fringilla. Ut blandit, urna in auctor euismod, arcu eros pharetra metus, a porta purus libero a nibh.</p>' +
    '<p>Nam eget urna pellentesque nisl ultrices dapibus. Mauris accumsan vehicula nisl, sed tempus mauris facilisis eu. Donec a iaculis nisi, quis malesuada justo. Pellentesque ut enim sit amet ipsum dignissim egestas. Morbi tincidunt rhoncus urna eget placerat.</p>' +

    '<p class="text-center margin-top"><a class="btn btn-dc btn-main-color" href="#link">Visit Website</a></p>' +
    '</div>'

  projects = [
    {
      "name": "Cash Security Trade",
      "tag": "native",
      "caption": "iOS & Android",
      "logoUrl": "assets/images/projects/st.png",
      "contents": [
        {
          "type": "img",
          img: "assets/images/projects/st-d1.jpg"


        },
        {
          "type": "text",
          "text": "Role"
        }
      ],

      stacks: ["Objective C", "Android"]



    },
  
    {
      "name": "Cash RealTimeQuote",
      "tag": "hybrid",
      "caption": "iOS & Android",
      "logoUrl": "assets/images/projects/rtq.png",
      "contents": [
        {
          "type": "img",
          img: "assets/images/projects/rtq-d1.jpg"


        },
        {
          "type": "text",
          "text": "Role"
        }
        
      ],

      stacks: ["ionic 1 ", "angular 1"]
    },
    {
      "name": "Cash FutureTrader",
      "tag": "native",
      "caption": "iOS & Android",
      "logoUrl": "assets/images/projects/ft.png",
      "contents": [
        {
          "type": "img",
          img: "assets/images/projects/ft-d1.jpg"


        },
        {
          "type": "text",
          "text": "Role"
        }
      ],
      stacks: ["Objective C", "Android"]

    },
    {
      "name": "Jobdoh empolyee",
      "tag": "hybrid , fullstack",
      "caption": "iOS & Android",
      "logoUrl": "assets/images/projects/jdee.png",
      "contents": [
        {
          "type": "img",
          img: "assets/images/projects/jdee-d1.jpg"


        },
        {
          "type": "text",
          "text": "Role"
        }
      ],
      stacks: ["Objective C", "Android"]

    },
    {
      "name": "Jobdoh empolyer",
      "tag": "hybrid , fullstack",
      "caption": "iOS & Android",
      "logoUrl": "assets/images/projects/jder.png",
      "contents": [
        {
          "type": "img",
          img: "assets/images/projects/jder-d1.jpg"


        },
        {
          "type": "text",
          "text": "Role"
        }
      ],
      stacks: ["Objective C", "Android"]

    },
    {
      "name": "Citifun",
      "tag": "hybrid , web , fullstack",
      "caption": "iOS & Android & Web ",
      "logoUrl": "assets/images/citistore.png",
      "contents": [
        {
          "type": "img",
          img: "assets/images/citifun.jpg"


        },
        {
          "type": "text",
          "text": "Role"
        }
      ],
      stacks: ["Objective C", "Android"]

    },
    {
      "name": "The Rink",
      "tag": "hybrid , fullstack",
      "caption": "iOS & Android & Full stack",
      "logoUrl": "assets/images/projects/therink.png",
      "contents": [
        {
          "type": "img",
          img: "assets/images/projects/tr-d1.jpg"


        },
        {
          "type": "text",
          "text": "Role"
        }
      ],
      stacks: ["ionic 3", "angular 4" ,"redis" ,"mongoDb" ,"node.js v9"  ]

    }







  ]


  constructor(public modal: Modal) { }


  createContent(index) {
    let project = this.projects[index]
    let result = '<h1 class="project-title">' + project.name + '<span></span></h1>'
    result += '<p class="project-subtitle">' + project.caption + '</p>'

    result += '<div class="project-media">'
    for (let content of project.contents) {
      if (content.type == 'img') {
        result += '<img class="img-responsive img-center" style="width:300px;" src="' + content['img'] + '" alt="" />'

      }

    }
    result += '<h2>Stack:</h2>'

    for (let stack of project.stacks) {
      result += '<p>'+stack+'</p>'


    

    }

 

    result += '</div>'
    return result

  }

  onClick(index) {
    const dialogRef = this.modal.alert()
      .size('lg')
      .showClose(true)
      .title(this.projects[index].name)
      .body(this.createContent(index))
      .open();

    dialogRef.result
      .then();
  }





}
