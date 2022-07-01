import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/dataServices/article.service';

@Component({
  selector: 'app-blog-items',
  templateUrl: './blog-items.component.html',
  styleUrls: ['./blog-items.component.css']
})
export class BlogItemsComponent implements OnInit {
dataFull:any;

AuthorFull:any;;

OneArticle:any;
  constructor(private article:ArticleService) { }

  ngOnInit(): void {

    this.article.getAllArticles().subscribe(

      (result)=>{
        this.dataFull=result.data;
    
        
      },(error)=>{

        console.log(error)
      },()=>{
        console.log('dataaaaa',this.dataFull)
      }
    );
  
  }
  displayStyle = "none";

  displayStyle2 = "none";
  
  openPopup() {
    this.displayStyle = "block";
    this.article.getAllAuthors().subscribe(
      (result)=>{
        this.AuthorFull=result.data;
    
        
      },(error)=>{

        console.log(error)
      },()=>{
        console.log('authoor',this.AuthorFull)
      }
    );
  }
  closePopup() {
    this.displayStyle = "none";
  }

  getAuthorList(){

    this.article.getAllAuthors().subscribe(
      (result)=>{
        this.AuthorFull=result;
    
        
      },(error)=>{

        console.log(error)
      },()=>{
        console.log('authoor',this.AuthorFull)
      }
    );
  }


  openPopup2(id) {
    this.displayStyle2 = "block";
    console.log(id)

    this.article.getOneArticle(id).subscribe(

      (result)=>{
        this.OneArticle=result;
    
        
      },(error)=>{

        console.log(error)
      },()=>{
        console.log('Onnneee',this.OneArticle)
      }

    );
    
  }

  closePopup2() {
    this.displayStyle2 = "none";
  }

}
