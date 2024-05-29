

//Array of Objects

const quiz = [
    {
        q:'1. _____ any information on the computer?',
        options: [
            'Are there',
            'There are',
            'Is there',
            'there is'],
        answer:2
    },
    {
        q:'2. How many students _____ in the classroom?',
        options: [
            'are there',
            'there are',
            'is there',
            'there is'],
        answer:0
    },
    {
        q:'3. _____ some water in the fridge',
        options: [
            'There are',
            'There is',
            'Is there',
            'are there'],
        answer:1
    },
    {
        q:'4. _____ a beautiful garden in our backyard.',
        options: [
            'There are',
            'There is',
            'Is there',
            'are there'],
        answer:1
    },
    {
        q:'5. How many days ____ before your exam?',
        options: [
            'there are',
            'are there',
            'is there',
            'there is'],
        answer:1
    },
    {
        q:'6. ____ a fish in the river?',
        options: [
            'Is there',
            'There is',
            'Are there',
            'there are'],
        answer:0
    },
    {
        q:'7. I am sure. ______ an extra pen in my bag.',
        options: [
            'there are',
            'is there',
            'there is', 
            'there are'],
        answer:2
    },
    {
        q:'8. Today, ______ a terrible traffic.',
        options: [
            'is there',          
            'are there',
            'there is',
            'there are'],
        answer:2
    },
    {
        q:'9. How many beers _____ at your house?',
        options: [
            'is there', 
            'there are',
            'are there',
            'there is'],
        answer:2
    },
    {
        q:'10. _____ any students in your class?',
        options: [
            'There are', 
            'Is there',
            'Are there',
            'there is'],
        answer:2
    },
    {
        q:'11. _____ there a little girl in the room?',
        options: [
            'Has', 
            'are',
            'Is',
            'does'],
        answer:2
    },
    {
        q:'12. Is there a lamp on the wall? Well, there ______ two lamps.',
        options: [
            'is', 
            'have',
            'are',
            'has'],
        answer:2
    },
    {
        q:'13. Is there a dog in the house? No,____',
        options: [
            'there is not', 
            'there is no',
            'there are not',
            'there is'],
        answer:0
    },
    {
        q:'14.Jennifer, _____ tea in the coffee-pot?',
        options: [
            'are there', 
            'are',
            'is there',
            'there is'],
        answer:2
    },
    {
        q:'15. Are there many lamps on the wall? Yes',
        options: [
            'there are', 
            'is there',
            'there is',
            'are there'],
        answer:0
    },
    {
        q:'16. There were no pictures or posters _____ the wall.',
        options: [
            'at', 
            'on',
            'in',
            'under'],
        answer:1
    },
    {
        q:'17. Do you live ____ the city or the countryside?',
        options: [
            'at', 
            'in',
            'on',
            'between'],
        answer:1
    },
    {
        q:'18.Joshua grew up _____ a farm so it was difficult for him at first to get used tothe pace of life in London.',
        options: [
            'at', 
            'in',
            'on',
            'under'],
        answer:2
    },
    {
        q:'19. Please, give me a call when you are _____ the train.',
        options: [
            'at', 
            'in',
            'on',
            'below'],
        answer:1
    },
    {
        q:'20. I will meet Julian _____ the party tonight and tell him you want to see him.',
        options: [
            'at', 
            'in',
            'in',
            'behind'],
        answer:0
    },
    {
        q:'21. I’ll be _____ home tonight so you can call me if you have questions.',
        options: [
            'at', 
            'in',
            'on',
            '-'],
        answer:0
    },
    {
        q:'22. Don’t stand __________ the television. I can’t see!',
        options: [
            'on', 
            'in front of',
            'above',
            'under'],
        answer:1
    },
    {
        q:'23. Come and sit __________ me so that I can hear you better.',
        options: [
            'beside', 
            'under',
            'on',
            'behind'],
        answer:0
    },
    {
        q:'24. From the plane we could see people in the fields __________ us',
        options: [
            'beside', 
            'below',
            'above',
            'through'],
        answer:1
    },
    {
        q:'25. I want to be an astronaut and travel to _______ moon.',
        options: [
            'a', 
            'the',
            'an',
            '-'],
        answer:1
    },
    {
        q:'26. Paris is ______ capital city of France. I would like to visit it one day',
        options: [
            'the', 
            'a',
            '–',
            'an'],
        answer:0
    },
    {
        q:'27. My grandmother has playing ______ tennis since she was 12 years old.',
        options: [
            '-', 
            'the',
            'a',
            'an'],
        answer:1
    },
    {
        q:'28. The teacher is from ____ USA.',
        options: [
            'a', 
            'the',
            'an',
            '-'],
        answer:1
    },
    {
        q:'29. We waited ____ hour for the bus.',
        options: [
            '-', 
            'an',
            'the',
            'a'],
        answer:1
    },
    {
        q:'30. Suraya enjoys eating ____ orange in ____ evening.',
        options: [
            'a,the', 
            '-,the',
            'an,the',
            'the,the'],
        answer:2
    },
    {
        q:'31. I don’t like ____ coffee.',
        options: [
            'a', 
            '-',
            'an',
            'no'],
        answer:0
    },
    {
        q:'32. July ate _____ banana.',
        options: [
            'an', 
            '-',
            'a',
            'some'],
        answer:2
    },
    // 33
    {
        q:'33. Jack sees ____ apple.',
        options: [
            'an', 
            'a',
            '–',
            'no'],
        answer:0
    },
    {
        q:'34. I like going to ____ park',
        options: [
            'a', 
            'the',
            'an',
            '-'],
        answer:1
    },
    {
        q:'35. I saw _____ bear yesterday.',
        options: [
            'a', 
            'the',
            'an',
            '-'],
        answer:1
    },
    {
        q:'36. I want ____ burger.',
        options: [
            'a', 
            'an',
            'the',
            '-'],
        answer:0
    },
    {
        q:'37. The teacher is _____ important person in everyone’s life',
        options: [
            'a', 
            'an',
            'the',
            '-'],
        answer:1
    },
    {
        q:'38. Joanna wants to buy ___ umbrella.',
        options: [
            'the', 
            'an',
            'a',
            '-'],
        answer:1
    },
    {
        q:'39. There is ____ mall near my uncle\'s house.',
        options: [
            'a', 
            'an',
            'the',
            '-'],
        answer:2
    },
    {
        q:'40. ______ you hear that storm yesterday?',
        options: [
            'Can’t', 
            'could',
            'can',
            'does'],
        answer:1
    },
    {
        q:'41. She ____ climb that tree.',
        options: [
            'can', 
            'is can',
            'cans',
            'do'],
        answer:0
    },
    {
        q:'42. His mother can ____ the piano very well.',
        options: [
            'plays', 
            'play',
            'playing',
            'played'],
        answer:1
    },
    {
        q:'43. _____ I have a sandwich please?',
        options: [
            'Can', 
            'am',
            'does',
            'did'],
        answer:0
    },
    {
        q:'44. You have just eaten. You ______ be hungry.',
        options: [
            'can’t', 
            'cans',
            'is can ',
            'are can'],
        answer:0
    },
    {
        q:'45. Penguins _____ swim very well.',
        options: [
            'can', 
            'can’t',
            'can’t',
            'did'],
        answer:0
    },
    {
        q:'46. I ____ run very fast when I was younger.',
        options: [
            'can’t', 
            'couldn’t',
            'can',
            'does'],
        answer:1
    },
    {
        q:'47. It’s snowing, so we _____ go out now.',
        options: [
            'can',
            'could',
            'can’t',
            'couldn’t'],
        answer:2
    },
    {
        q:'48. Yesterday we _____ play.',
        options: [
            'can’t', 
            'can',
            'couldn’t',
            'did'],
        answer:2
    },
    {
        q:'49. ____ you play the piano when you were seven?',
        options: [
            'could', 
            'couldn’t',
            'can',
            'can’t'],
        answer:0
    },
    // 50
    {
        q:'50. I ______ sleep last night.',
        options: [
            'can', 
            'couldn’t',
            'can’t',
            'are could'],
        answer:1
    },
    // 51
    {
        q:'51. You _____ park here. It’s forbidden.',
        options: [
            'can', 
            'could',
            'can’t',
            'couldn’t'],
        answer:2
    },
    {
        q:'52. He hasn’t got a racket, so he ____ play tennis.',
        options: [
            'could', 
            'can’t',
            'can',
            'couldn’t'],
        answer:1
    },
    {
        q:'53. Pamela is a ballerina, so she ____ dance very well.',
        options: [
            'can', 
            'can’t',
            'could',
            'couldn’t'],
        answer:0
    },
    {
        q:'54. They ____ see the lunar eclipse yesterday.',
        options: [
            'can', 
            'can’t',
            'couldn’t',
            'is couldn’t'],
        answer:2
    },
    {
        q:'55. I looked everywhere, but I _____ find my keys.',
        options: [
            'couldn’t', 
            'can',
            'could',
            'can’t'],
        answer:0
    },
    {
        q:'56.A: ______ you swim last year? B: No. I ______',
        options: [
            'Could, couldn’t', 
            'Can, couldn’t',
            'Can, can',
            'could, can'],
        answer:0
    },
    {
        q:'57. A: ___ your brother ride a bike? B: No, he can’t. He is only free.',
        options: [
            'couldn’t', 
            'can',
            'Can’t',
            'could'],
        answer:1
    },
    {
        q:'58. A: ___ you understand the lesson yesterday? B: Yes, I ____',
        options: [
            'Couldn’t – can', 
            'Could – could',
            'Can – can',
            'could, couldn’t'],
        answer:1
    },
    {
        q:'59.A: ____we do this crossword puzzle? B: No, we can’t. It’s really difficult.',
        options: [
            'can’t', 
            'could',
            'can',
            'couldn’t'],
        answer:2
    },
    {
        q:'60. A: Can you see the board, Tom? B: No, I ____',
        options: [
            'can’t', 
            'could',
            'can',
            'couldn’t'],
        answer:0
    },
    {
        q:'61. I know how to speak German and English. I ____ speak two languages.',
        options: [
            'can’t', 
            'can',
            'could',
            'couldn’t'],
        answer:1
    },
    {
        q:'62. He _____ run very fast, but he can now.',
        options: [
            'couldn’t', 
            'can',
            'can’t',
            'could'],
        answer:0
    },
    {
        q:'63. Amy ____ dancing on the stage now.',
        options: [
            'was', 
            'is',
            'are',
            'were'],
        answer:1
    },
    {
        q:'64. The workers _____ resting under a tree now.',
        options: [
            'is', 
            'were',
            'are',
            'was'],
        answer:2
    },
    {
        q:'65. My father _____ talking to the principal',
        options: [
            'were', 
            'is',
            'are',
            'does'],
        answer:1
    },
    {
        q:'66. My dad ______ flying to Wales',
        options: [
            'are not', 
            'am not',
            'is not',
            'were not'],
        answer:2
    },
    {
        q:'67. It is not a funny story but you ____ smiling. What is wrong?',
        options: [
            'is', 
            'am not',
            'are',
            'was not'],
        answer:2
    },
    {
        q:'68. ____ listening to me now?',
        options: [
            'are you', 
            'is you',
            'were you',
            'was you'],
        answer:0
    },
    {
        q:'69. His dog _____ on the floor.',
        options: [
            'lying', 
            'is lying',
            'are lying',
            'am lying'],
        answer:1
    },
    {
        q:'70. My brother ____ his car now.',
        options: [
            'washing', 
            'are washing',
            'is washing',
            '-'],
        answer:2
    },
    {
        q:'71. The boys ____ sleeping now',
        options: [
            'were', 
            'is',
            'are',
            'was'],
        answer:2
    },{
        q:'72. It _____ right at the moment.',
        options: [
            'is not raining', 
            'is not rain',
            'not raining',
            'am not raining'],
        answer:0
    },
    {
        q:'73. I _____ at home last night.',
        options: [
            'were', 
            'was',
            'am',
            'is'],
        answer:1
    },
    {
        q:'74. She ____ doing her homework at 9 am yesterday.',
        options: [
            'wasn’t', 
            'were',
            'weren’t',
            'isn’t'],
        answer:0
    },
    {
        q:'75. ____ Dwayne and Milo at playground last week?',
        options: [
            'was', 
            'are',
            'were',
            'is'],
        answer:2
    },
    {
        q:'76. Where ____ you born?',
        options: [
            'did', 
            'were',
            'was',
            'does'],
        answer:1
    },
    {
        q:'77. How ____ she come yesterday?',
        options: [
            'did', 
            'was',
            'were',
            'does'],
        answer:0
    },
    {
        q:'78. Where ______ they grow up?',
        options: [
            'did', 
            'was',
            'were',
            'do'],
        answer:2
    },
    {
        q:'79. How _____ your day?',
        options: [
            'did', 
            'was',
            'were',
            'do'],
        answer:1
    },
    {
        q:'80. Where _____ your mother born?',
        options: [
            'did', 
            'were',
            'was',
            'does'],
        answer:2
    },
    {
        q:'81. Why _____ she study French?',
        options: [
            'did', 
            'was',
            'were',
            'is'],
        answer:0
    },
    {
        q:'82. Who ____ your best friends in High school?',
        options: [
            'did', 
            'was',
            'were',
            'does'],
        answer:2
    },
    {
        q:'83. How old ______ I in 2008?',
        options: [
            'was', 
            'were',
            'am',
            'is'],
        answer:0
    },
    {
        q:'84. Why ____ we bored last night?',
        options: [
            'did', 
            'was',
            'were',
            'do'],
        answer:2
    },
    {
        q:'85. What book _____ he read last month?',
        options: [
            'did', 
            'was',
            'were',
            'does'],
        answer:0
    },
    {
        q:'86. Where were you yesterday?',
        options: [
            'She was at the park', 
            'they were at the park.',
            'I was at the park',
            'He was at the park'],
        answer:2
    },
    {
        q:'87. They ______ football last month.',
        options: [
            'didn’t play', 
            'doesn’t play',
            'don’t play',
            'weren’t play'],
        answer:0
    },
    {
        q:'88. She _____ home early from the yesterday.',
        options: [
            'camed', 
            'came',
            'didn’t came',
            'doesn’t come'],
        answer:1
    },
    {
        q:'89. Tom: Was Ted at work yesterday? Smith: _______',
        options: [
            'Yes, he wasn’t', 
            'Yes, he wasn’t',
            'Yes, he was',
            'Yes, it was'],
        answer:2
    },
    {
        q:'90. Which sentence is Correct?',
        options: [
            'She knew him very well', 
            'She buy a new car last week',
            'I writes to him yesterday.',
            'They plays football'],
        answer:0
    },
    {
        q:'91. Did you call him _______?',
        options: [
            'yesterday', 
            'tomorrow',
            'right now',
            'always'],
        answer:0
    },
    {
        q:'92. I _______ go to school due to corona virus.',
        options: [
            'doesn’t', 
            'didn’t',
            'don’t',
            'wasn’t'],
        answer:1
    },
    {
        q:'93. Diana ______ her holiday in Bali last holiday.',
        options: [
            'spend', 
            'spends',
            'spent',
            'spents'],
        answer:2
    },
    {
        q:'94. The bed was very uncomfortable. I ______ sleep very well.',
        options: [
            'didn’t', 
            'wasn’t',
            'did',
            'weren’t'],
        answer:0
    },
    {
        q:'95. I ______ my homework, because I was sleepy.',
        options: [
            'didn’t do', 
            'not do',
            'didn’t',
            'wasn’t'],
        answer:0
    },
    {
        q:'96. My childhood ____ happy and I would like to share about it.',
        options: [
            'is', 
            'are',
            'was',
            'were'],
        answer:2
    },
    {
        q:'97. My sister _____ her leg yesterday',
        options: [
            'break', 
            'broke',
            'breaks',
            'broked'],
        answer:1
    },
    {
        q:'98. Which sentence is correct?',
        options: [
            'You didn’t went to the cinema', 
            'You didn’t go to the cinema',
            'You didn’t goes to the cinema',
            'You did go to the cinema'],
        answer:1
    },
    {
        q:'99. ______ Judy and Liz at last month’s meeting?',
        options: [
            'were', 
            'are',
            'was',
            'is'],
        answer:0
    },
    {
        q:'100. He _____ a car.',
        options: [
            'buy', 
            'fly',
            'bought',
            'flyed'],
        answer:2
    }
]
