# flexible-infocard

This app can used as block wherever we need you need to define image with conent as well here you can adjust the size so that, the content size will be expanded/decreased.

![image](https://user-images.githubusercontent.com/86000416/148360198-f7709dff-34c9-4c2e-942f-9f7e58d1d842.png)

# Steps to use this block inside store theme:
# step1
Add "echidna.flexible-infocard":"0.x" in your store theme dependancies.

# step2
Add "flex-image-card" block, in page where you want to display image along with content.

# step3
Declare the block with props as shown below:

"flex-image-card":{
    "props":{
      "imgWidth":"40",
      "imgUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoWt13YYjgo_KrFvaDXlFXeO-DY1dAskIQ&usqp=CAU",
      "contentWidth":"60",
      "heading":"Nissan",
      "headerBlockClass":"content-header",
      "subHeading":"What is Lorem Ipsum?",
      "subHeaderBlockClass":"sub-header",
      "paragraphBlockClass":"paragraph",
      "paragraphs":["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."]
    }
  }
}

# note:
You can increase or reduce the image width and content as per your requirement. For instance, if  "imgWidth":"60", "contentWidth":"40"
# The output will be like:

![image](https://user-images.githubusercontent.com/86000416/148361708-5599b9d6-f99e-49cb-ac7c-9a66f0614056.png)

# Available props:
      imgWidth                                  Integer                 here you can add the width of the img to increase/decrease
      imgUrl                                    Link                    here you can add img url
      contentWidth                              Integer                 here you can add the width of the content to increase/decrease
      headerBlockClass                          String                  here you can add css properties additionally using blockclass          
      subHeading                                String                  here you can add sub heading
      subHeaderBlockClass                       String                  here you can add css properties additionally using blockclass   
      paragraphBlockClass                       String                  here you can add css properties additionally using blockclass   
      paragraphs                                String                  here you as many paragraphs for content inside aaray.  
      
  # css classes:
  .flexContainer
  .flexContentBlock
  .flexImgBlock
  .flexImgBlock img




