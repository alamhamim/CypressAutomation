/// <reference types="cypress" />
import { CommnetElements } from "../pagelements/CommentElements";
let comment: string = 'this is a testing comment';
export class UserComment{
    
    clickOnUser(){
        CommnetElements.elements.userOne().click();
    }   
    typeComment(){
        CommnetElements.elements.commentBox().type(comment).type('{enter}');
    }
}