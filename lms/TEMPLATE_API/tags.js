function CTag(tagName,fn){
  document.createElement(tagName);
  //find all the tags occurrences (instances) in the document
  var tagInstances = document.getElementsByTagName(tagName);
        //for each occurrence run the associated function
        for ( var i = 0; i < tagInstances.length; i++) {
            fn(tagInstances[i]);
        }
}

function zinc_Question(e) {
    attr = e.attributes    
    if(attr.QuestionID && attr.QuestionTitle && attr.Feedback) {
        ID      = attr.QuestionID.value
        TITLE   = attr.QuestionTitle.value
        ANSWERS = querySelectorAll("zinc-answer")
        Ans     = {};
        for(j = 0;j < ANSWERS.length; j += 1) {
            Ans[Answers[j].attributes.answerText.value] = parseFloat(ANSWERS[j].textContent)
            ANSWER[j].removeChild()
        text    = "<h4> " + Ans{
        r_a     = repeat(
        e.innerHTML = "<div id='QuestionID-" + ID + "'>" +
                      "<h3  id='titleID-"    + ID + "'>" +
                      "Question " + ID + ": " + TITLE "" +
                      "</h3>"                            +
                      
