 
     function translateText(text)
     {

       // change it all to uppercase

       text = text.toLowerCase();

       // split the string into an array

       var textArray = text.split(" ");

       // create output and length variables

       var output = "";
       var arrayLength = textArray.length;
       var wordLength;

       // start loop which translates what's written

       for (var i = 0; i < arrayLength; i++)
       {

         // create variable for how long the current word is

         wordLength = textArray[i].length;

         // test if the word is any special words; if so, change it to associated misspelling/abbreviation

         if (textArray[i].indexOf("your") != -1 || textArray[i].indexOf("you're") != -1)
          output += "ur";
         else if (textArray[i].indexOf("you") != -1)
           if (Math.floor(Math.random() * 100) % 2)
           output += "u";
          else
           output += "yHOO";
         else if ((textArray[i] + " " + textArray[i+1]).indexOf("what the") != -1)
         {

           output += "WT";

           if ((textArray[i+2].indexOf("FUCK") != -1) && textArray[i+2].charAt(textArray[i+2].indexOf("FUCK") + 4) != "I")
           {

             // if phrase is "what the fuck", write "F"

             output += "F";
             i++;

           }  // end if
           else if (textArray[i+2].indexOf("HELL") != -1 || textArray[i+2].indexOf("HECK") != -1)
           {

             // if phrase is "what the hell", write "H"

             output += "H";
             i++;

           }  // end if

           i++;

         }  // end if
         else if (textArray[i].indexOf("what") != -1)
          output += "wat";
         else if (textArray[i].indexOf("are") != -1 && textArray[i].indexOf("are") + 3 == wordLength)
          output += "R";
         else if (textArray[i].indexOf("why") != -1)
          output += "Y";
         else if ((textArray[i] + " " + textArray[i+1] + " " + textArray[i+2]).indexOf("be right back") != -1)
         {

           output += "BRB";
           i += 2;

         }  // end if
         else if (textArray[i].indexOf("because") != -1)
          output += "cos";
         else if ((textArray[i] + " " + textArray[i+1] + " " + textArray[i+2]).indexOf("oh my god") != -1)
         {

           output += "OMG";
           i += 2;

         }  // end if
         else if (textArray[i].indexOf("oh") != -1)
          output += "O";
         else if (textArray[i].indexOf("the") != -1 && textArray[i].indexOf("the") + 3 == wordLength)
          if (Math.floor(Math.random() * 100) % 2)
           output += "teh";
          else
           output += "da";
         else if (textArray[i].indexOf("my") != -1 && textArray[i].indexOf("my") + 2 == wordLength)
          output += "MAH";
         else if (textArray[i].indexOf("new") != -1 && textArray[i].indexOf("new") + 3 == wordLength)
          output += "new";
         else if (textArray[i].indexOf("with") != -1 && textArray[i].indexOf("with") + 4 == wordLength)
          output += "wit";
         else if (textArray[i].indexOf("really") != -1)
          output += "rly";
         else if (textArray[i].indexOf("please") != -1)
          output += "pls";
         else if (textArray[i].indexOf("thanks") != -1)
          output += "thanx";
         else if (textArray[i].indexOf("there") != -1)
          if (Math.floor(Math.random() * 100) % 2)
           output += "dere";
          else
           output += "their";
         else if (textArray[i].indexOf("their") != -1)
          if (Math.floor(Math.random() * 100) % 2)
           output += "deir";
          else
           output += "dere";
         else if (textArray[i].indexOf("they're") != -1)
          if (Math.floor(Math.random() * 100) % 2)
           output += "dere";
          else
           output += "dey r";
         else if (textArray[i].indexOf("ok") != -1 && textArray[i].indexOf("ok") + 2 == wordLength && textArray[i].indexOf("ok") == 0)
          output += "K";
         else if (textArray[i].indexOf("ok") != -1 && textArray[i].indexOf("ok") + 4 == wordLength)
          output += "K";
         else if (textArray[i].indexOf("library") != -1)
          output += "libry";
		 else if (textArray[i].indexOf("LIKE") != -1)
          if (Math.floor(Math.random() * 100) % 2)
           output += "lyk";
          else
           output += "Lykkk";
		 else if (textArray[i].indexOf("cried") != -1)
          if (Math.floor(Math.random() * 100) % 2)
           output += "cRieDD";
          else
           output += "cR13DdD";
		 else if (textArray[i].indexOf("2012") != -1)
          if (Math.floor(Math.random() * 100) % 2)
           output += "2k6 + 6";
          else
           output += "2k12 4 lyf";
		  else if (textArray[i].indexOf("this") != -1)
          output += "dis";
		 else if (textArray[i].indexOf("condom") != -1)
          if (Math.floor(Math.random() * 100) % 2)
           output += "ruber mikey";
          else
           output += "jOnII 4 da mikey lyk";
		  else if (textArray[i].indexOf("this") != -1)
          output += "dis";
		else if (textArray[i].indexOf("life") != -1)
          if (Math.floor(Math.random() * 100) % 2)
           output += "lyFFFff";
          else
           output += "luff my lyf";
		  else if (textArray[i].indexOf("this") != -1)
          output += "dis";
         else
         {

           // if the word is none of those things, check to see if individual letters are special letters

           for (var j = 0; j < wordLength; j++)
           {

             // delete double-letters; AOLers aren't that capable of spelling

             if (textArray[i].charAt(j) == textArray[i].charAt(j+1))
             {

               output += textArray[i].charAt(j);

               j++;

             }  // end if

             // change "BE" to "B"

             else if (textArray[i].charAt(j) == "b")
             {

               output += "B";

               if (textArray[i].charAt(j+1) == "e")
                j++;

             }  // end if

             // change "ck" to simply "k"

             else if (textArray[i].charAt(j) == "c")
              if (textArray[i].charAt(j+1) == "k")
              {

                output += "K";
                j++;

              }  // end if
              else
               output += "c";

             // randomly change E's to 3's

             else if (textArray[i].charAt(j) == "E")
              if (Math.floor(Math.random() * 100) % 3 == 2)
               output += "3";
              else if (Math.floor(Math.random() * 100) % 3 == 1)
               output += "a";
              else
               output += "e";

             // do stuff with I's

             else if (textArray[i].charAt(j) == "I")
             {

               // if there's an -ing word, change it to -ng

               if (textArray[i].charAt(j+1) + textArray[i].charAt(j+2) == "ng")
               {

                 output += "ng";
                 j+= 2;

               }  // end if

               // if there is an i-e word, such as "like", put the E in front of the third letter to make it "liek"

               else if (textArray[i].charAt(j+2) == "e")
               {

                 output += "ie" + textArray[i].charAt(j+1);
                 j+= 2;

               }  // end if

               // if a word has "ie" in it, change it to "ei"

               else if (textArray[i].charAt(j+1) == "E")
               {

                 output += "ei";
                 j++;

               }  // end if

               // change "I'm going" or "I am going" to "Ima"

               else if (textArray[i].charAt(j+1) + textArray[i].charAt(j+2) == "'m" && j + 3 == wordLength)
               {

                 if (textArray[i+1] + " " + textArray[i+2] == "going to")
                 {

                   output += "ima";
                   i += 2;
                   j += 2;

                 }  // end if
                 else
                  output += "im";

               }  // end if
               else if (textArray[i+1] == "am")
                if (textArray[i+2] + " " + textArray[i+3] == "going to")
                {

                  output += "ima";
                  i += 3;

                }  // end if
                else
                {

                  output += "im";
                  i++;

                }  // end else
               else
                output += "i";

             }  // end if

             // change "AM" to "M"

             else if (textArray[i].charAt(j) == "a")
              if (textArray[i].charAt(j+1) == "m")
              {

                output += "m";
                j++;

              }  // end if
              else if (textArray[i].charAt(j+1) + textArray[i].charAt(j+2) == "lk")
              {

                output += "ok";
                j += 2;

              }  // end if
              else if (textArray[i].charAt(j+1) == "I")
              {

                output += "a" + textArray[i].charAt(j+2) + "e";
                j += 2;

              }  // end if
              else if (textArray[i].charAt(j+1) + textArray[i].charAt(j+2) + textArray[i].charAt(j+3) == "ter")
              {

                output += "8r";
                j += 3;

              }  // end if
              else if (textArray[i].charAt(j+2) == "e")
              {

                output += "ae" + textArray[i].charAt(j+1);
                j += 2;

              }  // end if
              else
               output += "A";

             else if (textArray[i].charAt(j) == "s")

             

              if (textArray[i].charAt(j+1) + textArray[i].charAt(j+2) + textArray[i].charAt(j+3) + textArray[i].charAt(j+4) + textArray[i].charAt(j+5) == "chool")
              {

                output += "school lyk";
                j += 5;

              }  // end if

             

              else if (textArray[i].charAt(j+1) + textArray[i].charAt(j+2) + " " + textArray[i].charAt(0) + textArray[i].charAt(1) + textArray[i].charAt(2) == "see you")
              {

                output += "cya kiiid";
                j += 5;

              }  // end if
              else if (textArray[i].charAt(j+1) + textArray[i].charAt(j+2) + " " + textArray[i].charAt(0) + textArray[i].charAt(1) == "see ya")
              {

                output += "cya";
                j += 5;

              }  // end if
              else
               output += "S";
             else if (textArray[i].charAt(j) == "o")
             {

               // test to see if it's a double-O word or an OUL word; if so, replace letters with a U

               if (textArray[i].charAt(j+1) == "o")
               {

                 output += "U";
                 j++;

               }  // end if
               else if (textArray[i].charAt(j+1) == "U" && textArray[i].charAt(j+2) == "L")
               {

                 output += "U";
                 j += 2;

               }  // end if
               else
                output += "O";

             }  // end if

             // replace "TO" or "TOO" with "2"

             else if (textArray[i].charAt(j) == "t")
             {

               if (textArray[i].charAt(j+1) == "o")
               {

                output += "2";

                if (textArray[i].charAt(j+2) == "o")
                {

                  j += 2;

                }  // end if
                else
                {

                  j++;

                }  // end else

               }  // end if
               else if (textArray[i].charAt(j+1) + textArray[i].charAt(j+2) + textArray[i].charAt(j+3) == "hat")
               {

                 output += "taht";

                 j += 3;

               }  // end if
               else
                output += "T";

             }  // end if

             // if letter is not special and is not punctuation, simply output the letter

             else if (textArray[i].charAt(j) != "." && textArray[i].charAt(j) != "!" && textArray[i].charAt(j) != "?" && textArray[i].charAt(j) != "'" && textArray[i].charAt(j) != ";" && textArray[i].charAt(j) != "," && textArray[i].charAt(j) != ":" && textArray[i].charAt(j) != "\"" && textArray[i].charAt(j) != "`" && textArray[i].charAt(j) != "~")
              output += textArray[i].charAt(j);

           }  // end for

         }  // end else

         // replace end punctuation with more bebo stunner style punctuation

         if (textArray[i].indexOf(".") != -1 || textArray[i].indexOf("!") != -1 || textArray[i].indexOf("?") != -1)
         {

           // create a loop variable

           var placeInWord;

           // find out which character comes first

           if (textArray[i].indexOf("!") != -1)
            var firstCharacter = "!";
           else if (textArray[i].indexOf(".") != -1)
            var firstCharacter = ".";
           else if (textArray[i].indexOf("?") != -1)
            var firstCharacter = "?";

           if ((textArray[i].indexOf(".") < textArray[i].indexOf(firstCharacter)) && textArray[i].indexOf(".") != -1)
            firstCharacter = ".";

           if ((textArray[i].indexOf("?") < textArray[i].indexOf(firstCharacter)) && textArray[i].indexOf("?") != -1)
            firstCharacter = "?";

           // set where to start in the word

           placeInWord = textArray[i].indexOf(firstCharacter);

           // if there is a question mark...

           if (textArray[i].indexOf("?") != -1)
           {

             // ...ensure there is at least one question mark in the output

             output += "?";

           }  // end if

           for ( ; textArray[i].charAt(placeInWord) == "." || textArray[i].charAt(placeInWord) == "!" || textArray[i].charAt(placeInWord) == "?"; placeInWord++)
           {

             if (textArray[i].charAt(placeInWord) == "!" || textArray[i].charAt(placeInWord) == ".")
             {

               // output a random amount of exclamation marks and 1's

               for (var k = (Math.floor(Math.random() * 100) % 5) + 4; k > 0; k--)
                if (Math.floor(Math.random() * 100) % 2)
                 output += "!";
                else
                 output += "1";

             }  // end if
             else if (textArray[i].charAt(placeInWord) == "?")
             {

               // output a random amount of question marks and exclamation marks

               for (var k = (Math.floor(Math.random() * 100) % 5) + 4; k > 0; k--)
                if (Math.floor(Math.random() * 100) % 2)
                 output += "?";
                else
                 output += "!";

             }  // end else

           }  // end for

           // randomly print any combination of the abbreviations "OMG", "WTF", and "LOL" at the end of sentences

           if (Math.floor(Math.random() * 100) % 2)
            output += " omg";
           if (Math.floor(Math.random() * 100) % 2)
            output += " wtf";
           if (Math.floor(Math.random() * 100) % 2)
            output += " lol";

         }  // end if

         // put a space between each word if it's not the end of a sentence

         if (i != arrayLength - 1 && textArray[i+1] != "")
          output += " ";

       }  // end for

       // output the result to the bottom box

       document.translate.translated.value = output;

     }  // end translateText
   // -->