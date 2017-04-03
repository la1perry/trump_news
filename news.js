
const time='https://newsapi.org/v1/articles?source=time&apiKey=5e754f56c9474684b20e15b2671f4198';
const AP= 'https://newsapi.org/v1/articles?source=associated-press&apiKey=5e754f56c9474684b20e15b2671f4198';
const CNN ='https://newsapi.org/v1/articles?source=cnn&apiKey=5e754f56c9474684b20e15b2671f4198';
const Washington = 'https://newsapi.org/v1/articles?source=the-washington-post&apiKey=5e754f56c9474684b20e15b2671f4198';
const Google='https://newsapi.org/v1/articles?source=google-news&apiKey=5e754f56c9474684b20e15b2671f4198';
const Reuters='https://newsapi.org/v1/articles?source=reuters&apiKey=5e754f56c9474684b20e15b2671f4198';
const Independent='https://newsapi.org/v1/articles?source=independent&apiKey=5e754f56c9474684b20e15b2671f4198';
const Skynews='https://newsapi.org/v1/articles?source=sky-news&apiKey=5e754f56c9474684b20e15b2671f4198';
const Nwswk='https://newsapi.org/v1/articles?source=newsweek&apiKey=5e754f56c9474684b20e15b2671f4198';

const timel='https://newsapi.org/v1/articles?source=time&sortBy=latest&apiKey=5e754f56c9474684b20e15b2671f4198';
const APl= 'https://newsapi.org/v1/articles?source=associated-press&sortBy=latest&apiKey=5e754f56c9474684b20e15b2671f4198';
const Reutersl='https://newsapi.org/v1/articles?source=reuters&sortBy=latest&apiKey=5e754f56c9474684b20e15b2671f4198';
const Nwswkl='https://newsapi.org/v1/articles?source=newsweek&sortBy=latest&apiKey=5e754f56c9474684b20e15b2671f4198';


const btnl=document.getElementById('btnl');
const btn=document.getElementById('btn');
const articles=document.getElementById('articles');


btn.addEventListener("click", (e) => {
    
    function createNode(element){
         return document.createElement(element);
     }
     function append(parent, el){
         return parent.appendChild(el);
     }
     
fetch(`${time}`)
.then((res) => res.json())
    .then((data) => {     

        for(let i=0; i<data.articles.length;i++){
            if(data.articles[i].title.indexOf('Trump')>=0){
               
                let link=data.articles[i].url;
                
                let img=new Image();
                img.src="images/plus.svg";
                
                let a=createNode('a');
                a.href=link;
                a.target="_blank";
                
                let story=createNode('li');
                let article=data.articles[i].title;
                story.innerHTML=article;
                
                append(a, img);
                append(story, a);
                append(articles, story);
            }
        }
    })
.catch((e) => {
    console.log(e,"error");
});



fetch(`${AP}`)
.then((res) => res.json())
    .then((data) => {     

        for(let i=0; i<data.articles.length;i++){
            if(data.articles[i].title.indexOf('Trump')>=0){
               
                let link=data.articles[i].url;
                
                let img=new Image();
                img.src="images/plus.svg";
                
                let a=createNode('a');
                a.href=link;
                a.target="_blank";
                
                let story=createNode('li');
                let article=data.articles[i].title;
                story.innerHTML=article;
                
                append(a, img);
                append(story, a);
                append(articles, story);
            }
        }
    })
.catch((e) => {
    console.log(e,"error");
});


fetch(`${CNN}`)
.then((res) => res.json())
    .then((data) => {     

        for(let i=0; i<data.articles.length;i++){
            if(data.articles[i].title.indexOf('Trump')>=0){
               
                let link=data.articles[i].url;
                
                let img=new Image();
                img.src="images/plus.svg";
                
                let a=createNode('a');
                a.href=link;
                a.target="_blank";
                
                let story=createNode('li');
                let article=data.articles[i].title;
                story.innerHTML=article;
                
                append(a, img);
                append(story, a);
                append(articles, story);
            }
        }
    })
.catch((e) => {
    console.log(e,"error");
});


fetch(`${Google}`)
.then((res) => res.json())
    .then((data) => {     

        for(let i=0; i<data.articles.length;i++){
            if(data.articles[i].title.indexOf('Trump')>=0){
               
                let link=data.articles[i].url;
                
                let img=new Image();
                img.src="images/plus.svg";
                
                let a=createNode('a');
                a.href=link;
                a.target="_blank";
                
                let story=createNode('li');
                let article=data.articles[i].title;
                story.innerHTML=article;
                
                append(a, img);
                append(story, a);
                append(articles, story);
            }
        }
    })
.catch((e) => {
    console.log(e,"error");
});


fetch(`${Washington}`)
.then((res) => res.json())
    .then((data) => {     

        for(let i=0; i<data.articles.length;i++){
            if(data.articles[i].title.indexOf('Trump')>=0){
               
                let link=data.articles[i].url;
                
                let img=new Image();
                img.src="images/plus.svg";
                
                let a=createNode('a');
                a.href=link;
                a.target="_blank";
                
                let story=createNode('li');
                let article=data.articles[i].title;
                story.innerHTML=article;
                
                append(a, img);
                append(story, a);
                append(articles, story);
            }
        }
    })
.catch((e) => {
    console.log(e,"error");
});

fetch(`${Reuters}`)
.then((res) => res.json())
    .then((data) => {     

        for(let i=0; i<data.articles.length;i++){
            if(data.articles[i].title.indexOf('Trump')>=0){
               
                let link=data.articles[i].url;
                
                let img=new Image();
                img.src="images/plus.svg";
                
                let a=createNode('a');
                a.href=link;
                a.target="_blank";
                
                let story=createNode('li');
                let article=data.articles[i].title;
                story.innerHTML=article;
                
                append(a, img);
                append(story, a);
                append(articles, story);
            }
        }
    })
.catch((e) => {
    console.log(e,"error");
});

fetch(`${Independent}`)
.then((res) => res.json())
    .then((data) => {     

        for(let i=0; i<data.articles.length;i++){
            if(data.articles[i].title.indexOf('Trump')>=0){
               
                let link=data.articles[i].url;
                
                let img=new Image();
                img.src="images/plus.svg";
                
                let a=createNode('a');
                a.href=link;
                a.target="_blank";
                
                let story=createNode('li');
                let article=data.articles[i].title;
                story.innerHTML=article;
                
                append(a, img);
                append(story, a);
                append(articles, story);
            }
        }
    })
.catch((e) => {
    console.log(e,"error");
});

fetch(`${Skynews}`)
.then((res) => res.json())
    .then((data) => {     

        for(let i=0; i<data.articles.length;i++){
            if(data.articles[i].title.indexOf('Trump')>=0){
               
                let link=data.articles[i].url;
                
                let img=new Image();
                img.src="images/plus.svg";
                
                let a=createNode('a');
                a.href=link;
                a.target="_blank";
                
                let story=createNode('li');
                let article=data.articles[i].title;
                story.innerHTML=article;
                
                append(a, img);
                append(story, a);
                append(articles, story);
            }
        }
    })
.catch((e) => {
    console.log(e,"error");
});

fetch(`${Nwswk}`)
.then((res) => res.json())
    .then((data) => {     

        for(let i=0; i<data.articles.length;i++){
            if(data.articles[i].title.indexOf('Trump')>=0){
               
                let link=data.articles[i].url;
                
                let img=new Image();
                img.src="images/plus.svg";
                
                let a=createNode('a');
                a.href=link;
                a.target="_blank";
                
                let story=createNode('li');
                let article=data.articles[i].title;
                story.innerHTML=article;
                
                append(a, img);
                append(story, a);
                append(articles, story);
            }
        }
    })
.catch((e) => {
    console.log(e,"error");
});


fetch(`${timel}`)
.then((res) => res.json())
    .then((data) => {     

        for(let i=0; i<data.articles.length;i++){
            if(data.articles[i].title.indexOf('Trump')>=0){
               
                let link=data.articles[i].url;
                
                let img=new Image();
                img.src="images/plus.svg";
                
                let a=createNode('a');
                a.href=link;
                a.target="_blank";
                
                let story=createNode('li');
                let article=data.articles[i].title;
                story.innerHTML=article;
                
                append(a, img);
                append(story, a);
                append(articles, story);
            }
        }
    })
.catch((e) => {
    console.log(e,"error");
});



fetch(`${APl}`)
.then((res) => res.json())
    .then((data) => {     

        for(let i=0; i<data.articles.length;i++){
            if(data.articles[i].title.indexOf('Trump')>=0){
               
                let link=data.articles[i].url;
                
                let img=new Image();
                img.src="images/plus.svg";
                
                let a=createNode('a');
                a.href=link;
                a.target="_blank";
                
                let story=createNode('li');
                let article=data.articles[i].title;
                story.innerHTML=article;
                
                append(a, img);
                append(story, a);
                append(articles, story);
            }
        }
    })
.catch((e) => {
    console.log(e,"error");
});




fetch(`${Reutersl}`)
.then((res) => res.json())
    .then((data) => {     

        for(let i=0; i<data.articles.length;i++){
            if(data.articles[i].title.indexOf('Trump')>=0){
               
                let link=data.articles[i].url;
                
                let img=new Image();
                img.src="images/plus.svg";
                
                let a=createNode('a');
                a.href=link;
                a.target="_blank";
                
                let story=createNode('li');
                let article=data.articles[i].title;
                story.innerHTML=article;
                
                append(a, img);
                append(story, a);
                append(articles, story);
            }
        }
    })
.catch((e) => {
    console.log(e,"error");
});



fetch(`${Nwswkl}`)
.then((res) => res.json())
    .then((data) => {     

        for(let i=0; i<data.articles.length;i++){
            if(data.articles[i].title.indexOf('Trump')>=0){
               
                let link=data.articles[i].url;
                
                let img=new Image();
                img.src="images/plus.svg";
                
                let a=createNode('a');
                a.href=link;
                a.target="_blank";
                
                let story=createNode('li');
                let article=data.articles[i].title;
                story.innerHTML=article;
                
                append(a, img);
                append(story, a);
                append(articles, story);
            }
        }
    })
.catch((e) => {
    console.log(e,"error");
});


});

 
 
 
 
 

