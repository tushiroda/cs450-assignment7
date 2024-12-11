import { Component } from "react";
import * as d3 from "d3";

class Visualization extends Component {
  state = {
    data: [
      {
        RawTweet:
          "['What\u2019s awkward is that I legit need toilet paper bc I\u2019m straight up out but now bc people are stockpiling im actually paranoid to buy it. We live in a time where normal people can\u2019t buy toilet paper bc stupid people have made it awkward! #coronavirus']",
        Month: "March",
        "Dimension 1": -26.635721,
        "Dimension 2": -14.823018,
        Sentiment: -0.192255892,
        Subjectivity: 0.516666667,
        idx: 1,
      },
      {
        RawTweet:
          "@joydhughes Not sure that\u2019s the goal; it\u2019s fairly necessary to function in society, we just need to wrench it away from the drivers seat sometimes \ud83d\ude09",
        Month: "April",
        "Dimension 1": 1.3111906,
        "Dimension 2": -34.680424,
        Sentiment: -0.125,
        Subjectivity: 0.944444444,
        idx: 2,
      },
      {
        RawTweet:
          "['#News1st #NewsNight  #Repost #COVID\u30fc19 #COVID19 #covid\u30fc19uk #COVID19Nigeria #COVID #BREAKING #BreakingNews #CoronaVirusSA #CoronavirusOutbreak #CoronaVirusUpdates #CoronaVirusGhana \\n\\nIn Burkina Faso, COVID-19 fight complicated by war, displacement\\n\\nhttps:\/\/t.co\/u375VEGtz5', '#News1st #NewsNight  #Repost #COVID\u30fc19 #COVID19 #covid\u30fc19uk #COVID19Nigeria #COVID #BREAKING #BreakingNews #CoronaVirusSA #CoronavirusOutbreak #CoronaVirusUpdates #CoronaVirusGhana \\n\\nIn Burkina Faso, COVID-19 fight complicated by war, displacement\\n\\nhttps:\/\/t.co\/u375VEGtz5']",
        Month: "March",
        "Dimension 1": -16.909525,
        "Dimension 2": -5.4515333,
        Sentiment: -0.5,
        Subjectivity: 1.0,
        idx: 3,
      },
      {
        RawTweet:
          "b'.@WorcsChildren (&amp; others) want to find out about experiences of #mentalhealth &amp; anxiety in children &amp; young people\\xe2\\x80\\xa6 https:\/\/t.co\/ncquG2F5OC'",
        Month: "May",
        "Dimension 1": 11.061246,
        "Dimension 2": -22.017664,
        Sentiment: 0.1,
        Subjectivity: 0.4,
        idx: 4,
      },
      {
        RawTweet:
          "b'RT @tonycperegrin: These men and women are so very brave. Let them speak.  \\xe2\\x80\\x9cThough doing so comes at a very real risk, doctors said they\\xe2\\x80\\x99ll\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 24.44487,
        "Dimension 2": -23.18914,
        Sentiment: 0.63,
        Subjectivity: 0.695,
        idx: 5,
      },
      {
        RawTweet:
          "b'RT @medpie1: My dear friend @DrTsion took this snapshot of me last weekend working in the ED where 90% of the patients were confirmed or su\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -9.3844385,
        "Dimension 2": 40.02142,
        Sentiment: 0.2,
        Subjectivity: 0.533333333,
        idx: 6,
      },
      {
        RawTweet:
          "['COVID-19 and #dravetsyndrome? NO PANIC\u270b\\n\\nWe have written (in Spanish \ud83c\uddea\ud83c\uddf8) some advice for Dravet families on how to prevent and\/or handle a putative infection with #COVID19 . Have a look! \ud83d\udc47\\n\\nhttps:\/\/t.co\/21oIOX62WX https:\/\/t.co\/4x4IphAzFc']",
        Month: "March",
        "Dimension 1": 1.2601945,
        "Dimension 2": -1.6995733,
        Sentiment: -0.041666667,
        Subjectivity: 0.2,
        idx: 7,
      },
      {
        RawTweet:
          "b'Has #COVID19 brought a new appreciation of what science and scientists contribute? Great (and short) interview with\\xe2\\x80\\xa6 https:\/\/t.co\/xNb9lmjokK'",
        Month: "May",
        "Dimension 1": 37.558372,
        "Dimension 2": -6.846301,
        Sentiment: 0.312121212,
        Subjectivity: 0.501515152,
        idx: 8,
      },
      {
        RawTweet:
          "b'The confirmed cases of #COVID19 pandemic is increasing everyday by day, we should all try to help ourselves before\\xe2\\x80\\xa6 https:\/\/t.co\/qcfeq0zJGP'",
        Month: "April",
        "Dimension 1": 9.290137,
        "Dimension 2": 28.795107,
        Sentiment: 0.1,
        Subjectivity: 0.8,
        idx: 9,
      },
      {
        RawTweet:
          "b'RT @ScottGottliebMD: More cases in U.S. today. Numbers will grow quickly as screening gets in place and existing cases (numbering probably\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 9.813964,
        "Dimension 2": 28.544298,
        Sentiment: 0.416666667,
        Subjectivity: 0.5,
        idx: 10,
      },
      {
        RawTweet:
          "b'Hi everyone!\\n\\nJust an update, we are still able to take enquiries and make tentative #photoshoot bookings for when\\xe2\\x80\\xa6 https:\/\/t.co\/EMemzOBLWX'",
        Month: "April",
        "Dimension 1": 38.853413,
        "Dimension 2": 6.212484,
        Sentiment: 0.5,
        Subjectivity: 0.625,
        idx: 11,
      },
      {
        RawTweet:
          "It was a pleasure hosting @PennNursingDean Antonia Villarruel yesterday for a discussion of how we can #advanceequity to end health disparities. For those who missed the virtual event, the video is available here: https:\/\/t.co\/4WcEmPOIUK @BUSPH @PennNursing",
        Month: "April",
        "Dimension 1": 33.668293,
        "Dimension 2": -0.17218319,
        Sentiment: 0.4,
        Subjectivity: 0.4,
        idx: 12,
      },
      {
        RawTweet:
          "[\"Apparently in an 'end of the world' survival situation,the other half's plan to keep me alive is to carry me round in a backpack and arm me with a pointy stick like an ewok..and if that's not love then I don't know what is. #coronavirus\", \"Apparently in an 'end of the world' survival situation,the other half's plan to keep me alive is to carry me round in a backpack and arm me with a pointy stick like an ewok..and if that's not love then I don't know what is. #coronavirus\"]",
        Month: "March",
        "Dimension 1": -10.362031,
        "Dimension 2": -27.787067,
        Sentiment: -0.098611111,
        Subjectivity: 0.381944444,
        idx: 13,
      },
      {
        RawTweet:
          "@NeeleyEunice Sorry about your harassment situation. That is unfortunate and intolerable, but what you\u2019re doing in my messages is harrassment on another level\/category. Please do not @ me again. Thank you.",
        Month: "April",
        "Dimension 1": -23.795874,
        "Dimension 2": -19.699259,
        Sentiment: -0.5,
        Subjectivity: 1.0,
        idx: 14,
      },
      {
        RawTweet:
          "['Next Monday: join @MariaNoelSJ and @TECollab for an online panel discussion about how #COVID19 has impacted working people, what resources are available, and how we can support our neighbors while sheltering in place: https:\/\/t.co\/xx2FAz3FJY', 'Next Monday: join @MariaNoelSJ and @TECollab for an online panel discussion about how #COVID19 has impacted working people, what resources are available, and how we can support our neighbors while sheltering in place: https:\/\/t.co\/xx2FAz3FJY']",
        Month: "March",
        "Dimension 1": 31.010462,
        "Dimension 2": 20.05136,
        Sentiment: 0.2,
        Subjectivity: 0.2,
        idx: 15,
      },
      {
        RawTweet:
          '["Even Bill Gates Said In 2015, The World Isn\'t Ready For A Global Epidemic (The #Coronavirus, #COVID_19)!\\n\\nhttps:\/\/t.co\/hjViaZxPAP\\n\\nEven With The Continued Spread of This Virus, There Are Still Riots &amp; Upheaval!\\n\\nThere Are Still Wildfires, Earthquakes &amp; Locust Swarms!\\n\\nSeek Jesus!"]',
        Month: "March",
        "Dimension 1": -24.229877,
        "Dimension 2": -0.85260457,
        Sentiment: 0.1,
        Subjectivity: 0.25,
        idx: 16,
      },
      {
        RawTweet:
          "b'RT @tomzellerjr: \"Outbreaks have a way of revealing a society\\xe2\\x80\\x99s values. Are these really going to be ours?\" via @devisridhar and @undarkmag\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 10.3315525,
        "Dimension 2": -14.068911,
        Sentiment: 0.2,
        Subjectivity: 0.2,
        idx: 17,
      },
      {
        RawTweet:
          "b'RT @R_H_Ebright: \"The German government just placed an order for 10,000 mechanical ventilators. What\\xe2\\x80\\x99s the US government doing about a pote\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -8.640268,
        "Dimension 2": 35.04982,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 18,
      },
      {
        RawTweet:
          "b'One billion people could become infected with coronavirus worldwide, IRC report claims..... #Coronavirus\\xe2\\x80\\xa6 https:\/\/t.co\/tQ6BFy5vi5'",
        Month: "April",
        "Dimension 1": -13.243155,
        "Dimension 2": 37.402287,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 19,
      },
      {
        RawTweet:
          "['I never ever thought that having agoraphobia would ever be a bonus, but it seems that this time self-isolation is appropriate on many levels. #coronavirus #COVID\u30fc19 #hopeidontrunoutofloopaper']",
        Month: "March",
        "Dimension 1": -39.330902,
        "Dimension 2": -20.308334,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 20,
      },
      {
        RawTweet:
          '"In Chicago, black Americans account for 68 % of city\u2019s 118 deaths &amp; 52% of...#COVID19 cases, despite making up just 30 %..of population...they are dying at a rate nearly 6x higher than that of white Chicagoans" https:\/\/t.co\/NTNNWDl3YD',
        Month: "April",
        "Dimension 1": -21.46032,
        "Dimension 2": 39.79696,
        Sentiment: 0.027777778,
        Subjectivity: 0.311111111,
        idx: 21,
      },
      {
        RawTweet:
          "1st time at @UCSFHospitals we have near real-time data fueling a campus-wide dashboard! Response to #COVID19 includes forming DAV (data\/analyt\/vis) collab, pooling skills across the org, transforming how we work. \ud83e\udd84dash\/mart dev by Rhiannon Croci, J Yim. #healthinformatics https:\/\/t.co\/JOw12oYmnf",
        Month: "April",
        "Dimension 1": 30.278414,
        "Dimension 2": 0.5838747,
        Sentiment: 0.125,
        Subjectivity: 0.4,
        idx: 22,
      },
      {
        RawTweet:
          "['Jack Ma, what a hero. Supporting African countries as well as Asia and South America with testing kits, facial masks and protective suits. The world need more initiatives like this. #corona #COVID19  https:\/\/t.co\/2PjorPKZTa']",
        Month: "March",
        "Dimension 1": 32.09564,
        "Dimension 2": -14.554201,
        Sentiment: 0.1875,
        Subjectivity: 0.1875,
        idx: 23,
      },
      {
        RawTweet:
          "['Trump Berates Reporter, Calls Her \u2018Threatening\u2019 For Asking About Comments He Made on #Coronavirus https:\/\/t.co\/sTnWyKDXD8 https:\/\/t.co\/KZ3HvMjKah']",
        Month: "March",
        "Dimension 1": -22.169598,
        "Dimension 2": -3.0830593,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 24,
      },
      {
        RawTweet:
          "b'The Federal Reserve announced its Paycheck Protection Program Liquidity Facility is fully operational and available\\xe2\\x80\\xa6 https:\/\/t.co\/Xub1R70L3y'",
        Month: "April",
        "Dimension 1": 44.66936,
        "Dimension 2": 9.304743,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 25,
      },
      {
        RawTweet:
          "['The Indian practice of Namaskar has been promoted even by foreign governments as a way to avoid #CoronaVirus infection. There is a spiritual significance as well to this Namaskar.  https:\/\/t.co\/J9PkF9QYFi  #StayInTurnInward']",
        Month: "March",
        "Dimension 1": 30.54157,
        "Dimension 2": -22.730368,
        Sentiment: -0.0625,
        Subjectivity: 0.129166667,
        idx: 26,
      },
      {
        RawTweet:
          "b'How is COVID- 19 affecting the Tech industry? what implications does it have on the supply chain? Join Tech San Die\\xe2\\x80\\xa6 https:\/\/t.co\/lvUbpI4bUS'",
        Month: "May",
        "Dimension 1": 3.8520603,
        "Dimension 2": -10.531499,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 27,
      },
      {
        RawTweet:
          "['The biggest problem we have right now is a government that does not want to disclose information and a public that is dismissive of the situation #coronaviruskenya #COVID19']",
        Month: "March",
        "Dimension 1": -28.879839,
        "Dimension 2": -15.73091,
        Sentiment: 0.142857143,
        Subjectivity: 0.301190476,
        idx: 28,
      },
      {
        RawTweet:
          "['So, we have given up our rights as Americans, and began to pay homage with blood, sweat and tears to this new god .....................are we a third world nation yet? #CoronaLockdown #COVID19 #CoronavirusOutbreak #NancyChokesWhilePeopleGoBroke https:\/\/t.co\/lda4eB5VCx']",
        Month: "March",
        "Dimension 1": -27.88342,
        "Dimension 2": -2.6335363,
        Sentiment: 0.068181818,
        Subjectivity: 0.227272727,
        idx: 29,
      },
      {
        RawTweet:
          "Thank you @NCDCgov &amp; the Government of #Nigeria for the swift &amp; transparent way you have shared the #COVID19 sequence from the country's first case. This a true act of solidarity and an important step in stopping the #coronavirus from spreading further. \r\nhttps:\/\/t.co\/6fv15oMDTm",
        Month: "March",
        "Dimension 1": 31.525785,
        "Dimension 2": -21.609732,
        Sentiment: 0.25,
        Subjectivity: 0.620833333,
        idx: 30,
      },
      {
        RawTweet:
          '["You lose in the game, you have to stay at home, you can\'t watch your favourite channel on television because of you parents \ud83d\ude20\\n\\n\ud83d\ude41\ud83e\udd14\ud83d\ude03 You still can listen to the Mark Tuan songs! \ud83d\udc4d\\n\\n\ud83d\ude12\ud83d\ude12I broke my headphones \ud83c\udfa7\\n\\nUmm okay \ud83d\ude36\\n#COVID19 #StayAtHome"]',
        Month: "March",
        "Dimension 1": -42.16369,
        "Dimension 2": 0.07989783,
        Sentiment: 0.0,
        Subjectivity: 0.45,
        idx: 31,
      },
      {
        RawTweet:
          "['Virus virus \ud83e\udda0 everywhere\ud83d\ude40!\\n\\nDon\u2019t panic. Just swipe for some simple tips to keep safe from the #coronavirus \\n\\nP\/S washing your hands without soap \ud83e\uddfc\ud83e\uddf4 , for less than 20 secs doesn\u2019t count. \\n\\n#washyourhands #hygiene\u2026 https:\/\/t.co\/ek4otlGOFO']",
        Month: "March",
        "Dimension 1": 1.2338622,
        "Dimension 2": -13.8655405,
        Sentiment: 0.111111111,
        Subjectivity: 0.307936508,
        idx: 32,
      },
      {
        RawTweet:
          "b'RT @amcafee: Worth reading RIGHT NOW: @CaitlinPacific on \\nCancer and COVID.\\nThe life-extending power of science and the life-shortening ter\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 37.347607,
        "Dimension 2": -6.7458806,
        Sentiment: 0.292857143,
        Subjectivity: 0.317857143,
        idx: 33,
      },
      {
        RawTweet:
          "['Okay ima just go ahead and say it. This is so fun, life was just the same old cycle, now there\u2019s a pandemic and people are all in the same boat. I mean it\u2019s no zombie apocalypse but you can\u2019t have everything in your lifetime\ud83d\ude02\\n#pandemic #coronavirus #apocalypse2020 #Australia']",
        Month: "March",
        "Dimension 1": -1.3392717,
        "Dimension 2": -12.684178,
        Sentiment: 0.097916667,
        Subjectivity: 0.30625,
        idx: 34,
      },
      {
        RawTweet:
          "b\"RT @PaulSaxMD: If you're in ID right now, you know that life is ... kind of nutty. Tried to outline a bit what it's like. \\nWhat Does (And D\\xe2\\x80\\xa6\"",
        Month: "March",
        "Dimension 1": 2.3368351,
        "Dimension 2": -31.089077,
        Sentiment: 0.442857143,
        Subjectivity: 0.717857143,
        idx: 35,
      },
      {
        RawTweet:
          "['Sad about Walt Disney World Closing due to the Coronavirus? Check Out This Planning Guide from the 25th Anniversary Celebration\\n\\n#Disney #WDW #DisneyWorld #Coronavirus #SocialDistance #CoronavirusPandemic #DisneyParks\\n\\nhttps:\/\/t.co\/2bVgs3Ny7d', 'Sad about Walt Disney World Closing due to the Coronavirus? Check Out This Planning Guide from the 25th Anniversary Celebration\\n\\n#Disney #WDW #DisneyWorld #Coronavirus #SocialDistance #CoronavirusPandemic #DisneyParks\\n\\nhttps:\/\/t.co\/2bVgs3Ny7d']",
        Month: "March",
        "Dimension 1": -32.771797,
        "Dimension 2": 6.711647,
        Sentiment: -0.3125,
        Subjectivity: 0.6875,
        idx: 36,
      },
      {
        RawTweet:
          "Making a beer run in the Ford Focus on the Mean Streets of LA. Hump day. Almost there...\r\n#rolltide https:\/\/t.co\/df4fUPIRqA",
        Month: "May",
        "Dimension 1": -4.5680356,
        "Dimension 2": 16.46246,
        Sentiment: -0.3125,
        Subjectivity: 0.6875,
        idx: 37,
      },
      {
        RawTweet:
          "Calling all #tech #biotech &amp; those concerned about #SARSCoV2! @UWMedicine seeks 25,000 volunteers to try #outbreak predicting #smartphone #app for #COVID19 https:\/\/t.co\/GHTXZ1GSfX via @GeekWire",
        Month: "April",
        "Dimension 1": -3.2607412,
        "Dimension 2": 32.404293,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 38,
      },
      {
        RawTweet:
          "Our health system with multiple payers is simply not set up to track and manage a crisis like #COVID19. Op\/Ed written with @drJoshS &amp; Gerard Anderson https:\/\/t.co\/Rpo5Xp02Su",
        Month: "March",
        "Dimension 1": -34.01889,
        "Dimension 2": -15.219409,
        Sentiment: 0.0,
        Subjectivity: 0.178571429,
        idx: 39,
      },
      {
        RawTweet:
          "b'#India has changed the definition of #MSMEs in terms of #investments and turnover size. \\n\\nWhat other reliefs have b\\xe2\\x80\\xa6 https:\/\/t.co\/f1bdNr9mwX'",
        Month: "May",
        "Dimension 1": 13.8913555,
        "Dimension 2": -14.025295,
        Sentiment: -0.125,
        Subjectivity: 0.375,
        idx: 40,
      },
      {
        RawTweet:
          "['Mass food preparation and distribution following the social distancing and other preventive. An opportunity to serve the poor and needy! Super Glad to see MLA Raja Singh @TigerRajaSingh Jee do that in his constituency with so much passion and commitment! #coronavirus #Donate2Save https:\/\/t.co\/u38jqiyeTk']",
        Month: "March",
        "Dimension 1": 30.987036,
        "Dimension 2": -17.401672,
        Sentiment: 0.070238095,
        Subjectivity: 0.429761905,
        idx: 41,
      },
      {
        RawTweet:
          "We were too late to stop this virus. Full stop. But we can slow it's spread. The virus can't infect those it never meets. Stay inside. Social distancing is the only thing that will save us now. I don't care as much about the economic impact as I do about our ability to save lives",
        Month: "March",
        "Dimension 1": -5.2859807,
        "Dimension 2": -20.534536,
        Sentiment: 0.026190476,
        Subjectivity: 0.430952381,
        idx: 42,
      },
      {
        RawTweet:
          "['Disposable rubber gloves are indispensable in the global fight against the coronavirus, yet a month\u2019s lockdown in Malaysia - where three of every five gloves are made - has disrupted the supply chain via @Reuters https:\/\/t.co\/rSWySh87oB\\n#Coronavirus #Gloves #Health https:\/\/t.co\/QSnyS8sKem']",
        Month: "March",
        "Dimension 1": -25.409752,
        "Dimension 2": 17.229324,
        Sentiment: 0.2,
        Subjectivity: 0.45,
        idx: 43,
      },
      {
        RawTweet:
          "b'Global report: #France to ease lockdown as #Russia becomes #coronavirus hotspot | World news | The Guardian\\xe2\\x80\\xa6 https:\/\/t.co\/lqCxPl2M5W'",
        Month: "May",
        "Dimension 1": -8.208411,
        "Dimension 2": 8.037217,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 44,
      },
      {
        RawTweet:
          "Same 3 steps we have been saying for weeks:\r\n1. Testing, tracing, isolation\r\n2. Protect health workers w\/PPE\r\n3. Buy time to build capacity &amp; to do rapid research.\r\n\r\nWill having yet another study shift policies? https:\/\/t.co\/OK7hZOswYy",
        Month: "March",
        "Dimension 1": 3.3314502,
        "Dimension 2": 43.75308,
        Sentiment: 0.0,
        Subjectivity: 0.125,
        idx: 45,
      },
      {
        RawTweet:
          "@vwademd Sinai's CLIA lab has it (they have tested thousands of samples by now). Many other labs in the US are implementing it. I am not going to disclose locations but we have shared this with hundreds of labs and clinics and many are implementing it. So, not a false statement at all!",
        Month: "April",
        "Dimension 1": 1.496186,
        "Dimension 2": 34.668846,
        Sentiment: 0.28125,
        Subjectivity: 0.49375,
        idx: 46,
      },
      {
        RawTweet:
          "Please welcome to Twitter the face of calm, the voice of reason, and the heart of gold we all need for this moment, my dear friend and former @MGHMedicine co-resident Dr. Taher Modarressi (@tmodarressi). \r\n\r\nOne of my favorite people who I know is thrilled to be on this app. \ud83d\ude09",
        Month: "April",
        "Dimension 1": 40.658978,
        "Dimension 2": -17.062035,
        Sentiment: 0.44,
        Subjectivity: 0.67,
        idx: 47,
      },
      {
        RawTweet:
          'b"I\'m urging @fema to ease the burden on and provide assistance to organizations \\xe2\\x80\\x93 like nonprofits and houses of wors\\xe2\\x80\\xa6 https:\/\/t.co\/P8u4IAgVrl"',
        Month: "April",
        "Dimension 1": 23.043884,
        "Dimension 2": -15.825024,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 48,
      },
      {
        RawTweet:
          "b'Just had to inform my employer that I no longer have child care until this #covid19 thing is over. Let\\xe2\\x80\\x99s see if I get fired.'",
        Month: "March",
        "Dimension 1": -36.711796,
        "Dimension 2": 0.24051231,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 49,
      },
      {
        RawTweet:
          "['@POTUS waiting in a waiting room for a COVID-19 test. I was told it is NOT free and I DID have to pay a copay. My primary physician sent me. \ud83e\udda0\ud83e\udd26\ud83c\udffb\\u200d\u2640\ufe0f.                    #coronavirus #wouldratherleave']",
        Month: "March",
        "Dimension 1": -29.979408,
        "Dimension 2": -6.6864457,
        Sentiment: 0.1,
        Subjectivity: 0.65,
        idx: 50,
      },
      {
        RawTweet:
          "@EricTopol @NatureMedicine Though this study looks at whether masks reduce the spread of viral particles from symptomatic patients (all patients in this study had symptoms; majority with fever, cough and runny nose) and it supports the existing advice that masks could be used by symptomatic patients.",
        Month: "April",
        "Dimension 1": -3.0308683,
        "Dimension 2": 1.6750916,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 51,
      },
      {
        RawTweet:
          "b'RT @Mikel_Jollett: Just some basic stat here:\\n\\nThe odds of like 5 very famous people being among the \\xe2\\x80\\x9c1,200\\xe2\\x80\\x9d infected is very very low.\\n\\nWh\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -20.90662,
        "Dimension 2": 18.478592,
        Sentiment: 0.303333333,
        Subjectivity: 0.505,
        idx: 52,
      },
      {
        RawTweet:
          "b'RT @GHS: \\xe2\\x80\\x9cI know that many people have to work every single day to win their daily bread...If we\\xe2\\x80\\x99re limiting movement, what is going to hap\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 16.349567,
        "Dimension 2": 31.817019,
        Sentiment: 0.307142857,
        Subjectivity: 0.278571429,
        idx: 53,
      },
      {
        RawTweet:
          "Willingness to make decisive, tough calls early, NOT stereotypical feminine traits, is what really distinguished women leaders in Covid https:\/\/t.co\/T6Zb20KwDV",
        Month: "April",
        "Dimension 1": 26.831978,
        "Dimension 2": -22.3619,
        Sentiment: 0.040277778,
        Subjectivity: 0.583333333,
        idx: 54,
      },
      {
        RawTweet:
          '["Sadly due to the #COVID19 situation we have had to postpone our Lunch and Learn seminar with Lauren Watters from @ablechildafrica. We\'ll be rescheduling the seminar, the date is TBC. We apologise for the inconvenience, we hope everyone understands \u2709\ufe0f csg@childhope.org.uk https:\/\/t.co\/VoiA8joXfy"]',
        Month: "March",
        "Dimension 1": -33.545406,
        "Dimension 2": -5.6435924,
        Sentiment: -0.125,
        Subjectivity: 0.375,
        idx: 55,
      },
      {
        RawTweet:
          "b'The #coronavirus #pandemic will keep older &amp; at risk people in their homes for years. Increased #tech use is inevit\\xe2\\x80\\xa6 https:\/\/t.co\/e0oQg1j3Sc'",
        Month: "May",
        "Dimension 1": -19.550785,
        "Dimension 2": 25.52782,
        Sentiment: 0.166666667,
        Subjectivity: 0.333333333,
        idx: 56,
      },
      {
        RawTweet:
          "In Wuhan scientists conducted antibody tests on 3,600 hospital employees, 5,000 visitors; shows about 2.5% positivity for exposure - surprisingly low. \r\n\r\nAccumulating evidence shows overall U.S. exposures likely to be lower than once presumed, 2-5% nationally, more in hot spots. https:\/\/t.co\/oo7jqUY1a9",
        Month: "April",
        "Dimension 1": -19.406412,
        "Dimension 2": 34.984886,
        Sentiment: 0.15,
        Subjectivity: 0.53,
        idx: 57,
      },
      {
        RawTweet:
          "b'Learn how the rules for claiming certain #tax losses have been modified to provide businesses with relief from the\\xe2\\x80\\xa6 https:\/\/t.co\/zWN1V042fd'",
        Month: "May",
        "Dimension 1": 17.287664,
        "Dimension 2": 18.31396,
        Sentiment: 0.214285714,
        Subjectivity: 0.571428571,
        idx: 58,
      },
      {
        RawTweet:
          "[\"#NRWP &amp; it's members across the #USA, it's friends\/Allies across the planet, demand the #WHO recommend ALL flights travel between countries be suspended until #COVID19 Novel #Coronavirus outbreak is contained Internationally &amp; thorough. Contact #WHO soon!\\nhttps:\/\/t.co\/F1x8d31MGa\"]",
        Month: "March",
        "Dimension 1": -23.274502,
        "Dimension 2": 4.3720994,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 59,
      },
      {
        RawTweet:
          "I wrote on this topic in today\u2019s Wall Street Journal. There are high odds that one of these antibody drugs will succeed. They can be developed quickly because the basis for their safety and effectiveness is already well understood. They deserve attention  https:\/\/t.co\/AaMIvsLxFJ",
        Month: "April",
        "Dimension 1": 30.900509,
        "Dimension 2": -10.600153,
        Sentiment: 0.197777778,
        Subjectivity: 0.446666667,
        idx: 60,
      },
      {
        RawTweet:
          "b'RT @davidaxelrod: Pay close attention. This is the new @realDonaldTrump strategy for dealing with the fallout for his slow reaction and dis\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 2.3349326,
        "Dimension 2": -29.640287,
        Sentiment: -0.081818182,
        Subjectivity: 0.427272727,
        idx: 61,
      },
      {
        RawTweet:
          "b'#COVID__19 #JammuAndKashmir update: 16 new persons found #Corona positive in #Kashmir today, among them \\n\\n#Anantnag\\xe2\\x80\\xa6 https:\/\/t.co\/sxldO2r3ZL'",
        Month: "April",
        "Dimension 1": 44.57282,
        "Dimension 2": -2.8374052,
        Sentiment: 0.181818182,
        Subjectivity: 0.5,
        idx: 62,
      },
      {
        RawTweet:
          "[\"#JoeBiden has said he'll pick a female running mate in the 2020 election, its seems he's spoiled for choice. We discuss options, as well as #Coronavirus and all the weeks news...\\nhttps:\/\/t.co\/X4MISCIhsV\\n#TrumpPandemic #Biden2020\"]",
        Month: "March",
        "Dimension 1": -6.1181293,
        "Dimension 2": 23.212103,
        Sentiment: 0.0,
        Subjectivity: 0.166666667,
        idx: 63,
      },
      {
        RawTweet:
          "For yrs I had privilege of working on TB control, learning from Drs. Karel Styblo, Fabio Luelmo of @WHO. Wrote about lessons 10 yr ago https:\/\/t.co\/2ZMNtrk5ZS: importance of political commitment, accountability of health care, patient as VIP, support for labs &amp; front line workers https:\/\/t.co\/pU8Al8vGlF",
        Month: "March",
        "Dimension 1": 27.213835,
        "Dimension 2": 7.643003,
        Sentiment: 0.0,
        Subjectivity: 0.1,
        idx: 64,
      },
      {
        RawTweet:
          'b"@BVoltaire\'s account is temporarily unavailable because it violates the Twitter Media Policy. Learn more."',
        Month: "March",
        "Dimension 1": -24.865026,
        "Dimension 2": -20.256516,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 65,
      },
      {
        RawTweet:
          "7) ...and the receptor binding domain (RBD) which is part of the spike on its own (the red part in #4). Then we run them on a gel to see if they look OK and purified. i=insect, m=mammalian. Here are the recombinant RBD proteins. They turned out very nicely. https:\/\/t.co\/Hhp9F8yqKD",
        Month: "March",
        "Dimension 1": 34.326363,
        "Dimension 2": -7.430269,
        Sentiment: 0.47,
        Subjectivity: 0.625,
        idx: 66,
      },
      {
        RawTweet:
          'b"RT @CyrilPedia: \'The news of coronavirus epidemics around the world involves a flood of numbers that are a challenge for any nonscientist t\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": -9.244446,
        "Dimension 2": 3.122786,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 67,
      },
      {
        RawTweet:
          "b'RT @VirusWhisperer: #COVID19 #Racism Someone spat on me. Last week. Didn\\xe2\\x80\\x99t tell anyone. Thought must be isolated incident. Then saw front s\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -36.520683,
        "Dimension 2": 9.326292,
        Sentiment: 0.0,
        Subjectivity: 0.066666667,
        idx: 68,
      },
      {
        RawTweet:
          "Happening now: Taking questions live on Facebook. Join the conversation to ask me anything about #COVID19, public health, epidemiology, and more. https:\/\/t.co\/7DgqnFb9QR @BU_tweets @BUexperts @bualumni @PublicHealth @societyforepi @AmJEpi @EpiEllie @MassDPH",
        Month: "April",
        "Dimension 1": 11.659977,
        "Dimension 2": 12.295245,
        Sentiment: 0.212121212,
        Subjectivity: 0.355555556,
        idx: 69,
      },
      {
        RawTweet:
          "Seeing evidence is crucial now. Models are based on assumptions. Are these that:\r\n-we can completely separate 80% 'healthy' from 20% who are 'vulnerable'?\r\n-people will actually self-isolate for 7-14 days? Even without testing to know if they're ill?\r\n-that virus won't mutate? https:\/\/t.co\/63e3KqQDq6",
        Month: "March",
        "Dimension 1": -14.965351,
        "Dimension 2": 27.480043,
        Sentiment: -0.066666667,
        Subjectivity: 0.583333333,
        idx: 70,
      },
      {
        RawTweet:
          "b'Exclusive: Airbus shelves plan to add new A321 assembly line #coronavirus #COVID2019 https:\/\/t.co\/uJ2oYHAUE5'",
        Month: "April",
        "Dimension 1": 9.448611,
        "Dimension 2": 1.396367,
        Sentiment: 0.136363636,
        Subjectivity: 0.454545455,
        idx: 71,
      },
      {
        RawTweet:
          '["Can we please respect President Cyril Ramaphosa and allow him and other world leaders space to deal with #COVID19 appropriately. There\'s a reason he is president and you are not."]',
        Month: "March",
        "Dimension 1": -3.9740028,
        "Dimension 2": -15.608031,
        Sentiment: 0.1875,
        Subjectivity: 0.4375,
        idx: 72,
      },
      {
        RawTweet:
          "b'RT @luckytran: On Friday, New York recorded fewer than 100 #COVID19 deaths for the first time since March. There were 590 deaths a day in N\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": -18.496479,
        "Dimension 2": 41.409084,
        Sentiment: 0.193181818,
        Subjectivity: 0.393939394,
        idx: 73,
      },
      {
        RawTweet:
          "b'RT @jenkinshelen: Happy to have contributed to this tip sheet for journalists about how to report on modeling of COVID-19 https:\/\/t.co\/EOo0\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 39.629417,
        "Dimension 2": -11.463795,
        Sentiment: 0.8,
        Subjectivity: 1.0,
        idx: 74,
      },
      {
        RawTweet:
          "['#Romania sends ?#NATO aircraft to bring 100,000 protection suits for doctors from South Korea\\n\\n#COVID2019 #coronavirus \\n\\nhttps:\/\/t.co\/WG39thwlEA']",
        Month: "March",
        "Dimension 1": -8.38734,
        "Dimension 2": 33.967575,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 75,
      },
      {
        RawTweet:
          'b"RT @Napaaqtuk: I don\'t know who needs to hear this: If you practice enough*, you can mute your mike and scream with your mouth closed to re\\xe2\\x80\\xa6"',
        Month: "April",
        "Dimension 1": -5.514444,
        "Dimension 2": -38.4651,
        Sentiment: -0.05,
        Subjectivity: 0.3,
        idx: 76,
      },
      {
        RawTweet:
          "b'#Covid19: Global #FoodCrises report reveals impact on vulnerable countries: https:\/\/t.co\/lmXQmLDPsV via\\xe2\\x80\\xa6 https:\/\/t.co\/nkEjN7uVxl'",
        Month: "April",
        "Dimension 1": 2.1911957,
        "Dimension 2": 11.146178,
        Sentiment: -0.25,
        Subjectivity: 0.25,
        idx: 77,
      },
      {
        RawTweet:
          "b'RT @jeff_cranmer: 50+ late-stage trials are set to yield data for #COVID19 by July. The nearly 50 agents -- all repurposed -- map to a doze\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -8.173753,
        "Dimension 2": 43.086296,
        Sentiment: 0.1,
        Subjectivity: 0.4,
        idx: 78,
      },
      {
        RawTweet:
          "b'RT @ranjitbindra: @VirusesImmunity when this blows over (or stabilizes), maybe we can form a committee to strategize, how best to get our n\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 6.1843586,
        "Dimension 2": -9.467378,
        Sentiment: 1.0,
        Subjectivity: 0.3,
        idx: 79,
      },
      {
        RawTweet:
          "b'Remdesivir is the first medicine to show beneficial results in treating #COVID19 since the new coronavirus emerged\\xe2\\x80\\xa6 https:\/\/t.co\/MtlU7eYjo9'",
        Month: "May",
        "Dimension 1": 2.2195635,
        "Dimension 2": 20.943975,
        Sentiment: 0.193181818,
        Subjectivity: 0.393939394,
        idx: 80,
      },
      {
        RawTweet:
          "b'Safety of our employees during #coronavirus: We made $4 billion investments globally from April to June on COVID-re\\xe2\\x80\\xa6 https:\/\/t.co\/59bq5XXuJp'",
        Month: "May",
        "Dimension 1": -10.004881,
        "Dimension 2": 39.188396,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 81,
      },
      {
        RawTweet:
          "['Dec.31 China reveals cluster of illness USA tries 2 get #CDC in. Jan.20 NIH starts vaccine work. 1st USA case reported Jan.21. #Trump forms task force Jan.29. Travel restrictions start Jan.31. Feb. first US quarantine since 1960. All b4 #COVID19 was trending\\n\\n#TrumpLiedPeopleDied']",
        Month: "March",
        "Dimension 1": -8.2755375,
        "Dimension 2": 29.976532,
        Sentiment: 0.075,
        Subjectivity: 0.366666667,
        idx: 82,
      },
      {
        RawTweet:
          "['Response is all at the moment. But once the storm is over we need to focus on the source of #COVID19 https:\/\/t.co\/CkWCrhwDTo https:\/\/t.co\/H9qw1lcIGF', 'Response is all at the moment. But once the storm is over we need to focus on the source of #COVID19 https:\/\/t.co\/CkWCrhwDTo https:\/\/t.co\/H9qw1lcIGF']",
        Month: "March",
        "Dimension 1": 8.84928,
        "Dimension 2": -23.179867,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 83,
      },
      {
        RawTweet:
          "b'Tonight 9Pm One hour callin show on the Network Channel on Scope !Join us!#COVID19 #COVIDIOTS'",
        Month: "March",
        "Dimension 1": 9.875954,
        "Dimension 2": 40.698788,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 84,
      },
      {
        RawTweet:
          "b'RT @nytimes: For black Americans, whose unemployment rate was double that of white Americans before the pandemic, Covid-19 is particularly\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": -21.651005,
        "Dimension 2": 40.453407,
        Sentiment: -0.055555556,
        Subjectivity: 0.144444444,
        idx: 85,
      },
      {
        RawTweet:
          "b'RT @jwhogan42: Our Zoom seminar is designed to be interactive ... up to 30 mins allocated for audience participation. \\n \\nPlease join to hea\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 1.5108358,
        "Dimension 2": 39.28075,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 86,
      },
      {
        RawTweet:
          "['Post Edited: European markets plunge as coronavirus spreads additional and \\n#coronavirus #European #markets #oil\\nhttps:\/\/t.co\/IN0LpedvsU']",
        Month: "March",
        "Dimension 1": -22.53717,
        "Dimension 2": 13.236082,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 87,
      },
      {
        RawTweet:
          "b'RT @knittedgardens: Agreed, with emphasis. These are sensible things we can do, starting NOW if not already, to fight the #COVID19 epidemic\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 27.527578,
        "Dimension 2": -20.504234,
        Sentiment: 0.0,
        Subjectivity: 0.1,
        idx: 88,
      },
      {
        RawTweet:
          "#COVID19 #SocialDistancing Guiding principles: (4) if you have to talk in person, stand at least 1.5 meters away, better yet, wear a mask (unabated community spread in NYC means assuming anyone can be contagious but not yet overtly symptomatic.)",
        Month: "March",
        "Dimension 1": 0.24811536,
        "Dimension 2": -39.408054,
        Sentiment: -0.183333333,
        Subjectivity: 0.633333333,
        idx: 89,
      },
      {
        RawTweet:
          "['India could become a global hotspot for virus cases, as experts warn that containment measures that proved successful in other Asian countries may not work in India, Bloomberg reported.\\nhttps:\/\/t.co\/Mh3AQKQ3O5\\n#Khabarhub #India #vunerables #COVID19']",
        Month: "March",
        "Dimension 1": -17.346611,
        "Dimension 2": -9.314956,
        Sentiment: 0.15625,
        Subjectivity: 0.33125,
        idx: 90,
      },
      {
        RawTweet:
          "['#tacklingloneliness chair @RachelReevesMP opens APPG on Loneliness. Says there needs to be a renewed effort to tackle loneliness now when need is acute and also when we come out of #coronavirus epidemic. #COVID19 https:\/\/t.co\/rhFxsWsORK', '#tacklingloneliness chair @RachelReevesMP opens APPG on Loneliness. Says there needs to be a renewed effort to tackle loneliness now when need is acute and also when we come out of #coronavirus epidemic. #COVID19 https:\/\/t.co\/rhFxsWsORK']",
        Month: "March",
        "Dimension 1": -10.665517,
        "Dimension 2": -7.1327996,
        Sentiment: 0.6,
        Subjectivity: 0.9,
        idx: 91,
      },
      {
        RawTweet:
          "Israel's new government was sworn into office yesterday. Among the appointed ministers, Ms. Pnina Tamano-Shata, Israel\u2019s first Ethiopia-born minister. https:\/\/t.co\/UsmSbbaIcs",
        Month: "May",
        "Dimension 1": -1.6928898,
        "Dimension 2": 45.644928,
        Sentiment: 0.193181818,
        Subjectivity: 0.393939394,
        idx: 92,
      },
      {
        RawTweet:
          "['Reminder, \u2018A Close Shave with Destiny\u2019 is #free on #kindle, especially if you are in #SelfIsolation and want something else to read (or even if you are not!) https:\/\/t.co\/cj57wgbHY7 #ebook #fantasy #comedy #coronavirus #COVID\u30fc19']",
        Month: "March",
        "Dimension 1": 39.587914,
        "Dimension 2": 1.958327,
        Sentiment: 0.2,
        Subjectivity: 0.9,
        idx: 93,
      },
      {
        RawTweet:
          "b'https:\/\/t.co\/FrGCZoaTOn #ReInvent &amp; #Boost the #Economy \\xf0\\x9f\\x92\\xb5\\xf0\\x9f\\x92\\xb0\\xf0\\x9f\\x92\\xb3 w\/ #New #Contagion #Proof #Business #Model \\xf0\\x9f\\x8f\\xaa\\xf0\\x9f\\x9b\\x92 \\xf0\\x9f\\x92\\x88 \\xf0\\x9f\\x9b\\x8e\\xef\\xb8\\x8f of\\xe2\\x80\\xa6 https:\/\/t.co\/N29pZEZ4ha'",
        Month: "April",
        "Dimension 1": 16.719719,
        "Dimension 2": 23.180113,
        Sentiment: 0.136363636,
        Subjectivity: 0.454545455,
        idx: 94,
      },
      {
        RawTweet:
          "b'Didn\\xe2\\x80\\x99t #California file #bankruptcy yet are spending $125 Million to fund #StimulusChecks  Where are they getting the money? #COVID19'",
        Month: "April",
        "Dimension 1": -8.001837,
        "Dimension 2": 32.67933,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 95,
      },
      {
        RawTweet:
          "The deaths of George Floyd, Breonna Taylor, Ahmaud Arbery, and many others underscore that creating a just world and creating a healthy world are the same task. We can create all the cutting-edge medicines we wish, but while injustice remains, we cannot be fully healthy.",
        Month: "May",
        "Dimension 1": -3.9793212,
        "Dimension 2": -20.156162,
        Sentiment: 0.375,
        Subjectivity: 0.40625,
        idx: 96,
      },
      {
        RawTweet:
          "2\/x I am unbelievably disappointed in Deborah Birx's misrepresentation of modeling studies at yesterday's press conference. @ImperialCollege's @Neil_Ferguson https:\/\/t.co\/Qgp8shkeZN",
        Month: "March",
        "Dimension 1": -31.84125,
        "Dimension 2": -5.295039,
        Sentiment: -0.75,
        Subjectivity: 0.75,
        idx: 97,
      },
      {
        RawTweet:
          "b'#Coronavirus: Man dies after ingesting chloroquine in attempt to ward off COVID-19'",
        Month: "March",
        "Dimension 1": -26.24132,
        "Dimension 2": -1.7347391,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 98,
      },
      {
        RawTweet:
          "['Is #Oil industry facing their biggest crises? Trump is trying to relief oil that is reeling instead  lof #CoronavirusLockdown. He is caught betw economic choice &amp; Humanitarian choice. #COVID19']",
        Month: "March",
        "Dimension 1": -16.206541,
        "Dimension 2": 14.640366,
        Sentiment: 0.2,
        Subjectivity: 0.2,
        idx: 99,
      },
      {
        RawTweet:
          "['If you you are getting sick with #COVID19, follow this step-by-step guide to prevent spreading the virus to others @CDCKenya @WHOKenya @UNICEFKenya @KNH_hospital @PDUDelivery @KEMRI_Kenya @SpokespersonGoK @RedCrossKe @EduMinKenya https:\/\/t.co\/lgT44iQ926']",
        Month: "March",
        "Dimension 1": 0.6502928,
        "Dimension 2": -1.3564677,
        Sentiment: -0.714285714,
        Subjectivity: 0.857142857,
        idx: 100,
      },
      {
        RawTweet:
          'b\'RT @QuickTake: "This virus is dangerous. It exploits cracks between us."\\n\\n@DrTedros of @WHO calls for "national unity" in the fight against\\xe2\\x80\\xa6\'',
        Month: "April",
        "Dimension 1": -14.772052,
        "Dimension 2": -6.8856893,
        Sentiment: -0.6,
        Subjectivity: 0.9,
        idx: 101,
      },
      {
        RawTweet:
          "The long-term #mentalhealth effects of school shootings are a microcosm of the psychological burden of trauma. Collective suffering \u2013 whether from violence, disaster, or pandemic \u2013 demands robust collective response, working on multiple levels to safeguard health. @BUexperts https:\/\/t.co\/AegeF99Rq6",
        Month: "March",
        "Dimension 1": 6.1503515,
        "Dimension 2": -16.73811,
        Sentiment: 0.0,
        Subjectivity: 0.05,
        idx: 102,
      },
      {
        RawTweet:
          "b'RT @Prof_Lowe: @BhadeliaMD And another @US_FDA report on the efficacy of vaporized hydrogen peroxide for disinfecting N95 FFRs #SARSCoV2 #C\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 11.402177,
        "Dimension 2": 3.0453496,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 103,
      },
      {
        RawTweet:
          "b'RT @DYenesew: My friends and I,students in  BahirDar University   have developed an Android informative  app  which will help to create awa\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 44.400623,
        "Dimension 2": 4.146241,
        Sentiment: 0.1,
        Subjectivity: 0.3,
        idx: 104,
      },
      {
        RawTweet:
          "@Cornvelious_Dan Of course, but look at fig. 1b. Even poorly fitted N95 masks are #BetterThanNothing. Don\u2019t let the perfect be the enemy of the good. Those willing to wear masks are already self selected for those who heed advice. Infantalizing the public is paternalistic &amp; borderline unethical.",
        Month: "March",
        "Dimension 1": -12.552115,
        "Dimension 2": -30.744524,
        Sentiment: 0.31,
        Subjectivity: 0.603333333,
        idx: 105,
      },
      {
        RawTweet:
          "Amidst all of the COVID-craziness, I'm very glad to see one of the leading voices be recognized (even if informally) for his commitment to science, public health and, as importantly, communicating the science to the public.\r\n\r\n@mlipsitch \r\n\r\nhttps:\/\/t.co\/82e9zTcjK4",
        Month: "May",
        "Dimension 1": 43.687904,
        "Dimension 2": -17.167934,
        Sentiment: 0.2625,
        Subjectivity: 0.533333333,
        idx: 106,
      },
      {
        RawTweet:
          "b'RT @JohnsHopkinsSPH: \"We want a sense of normalcy back ... but not at the expense of the lives of our friends, families and neighbors,\" wri\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 22.364414,
        "Dimension 2": -33.399998,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 107,
      },
      {
        RawTweet:
          "(3\/n) I\u2019m going to summarize a few quotes from the article to give you all a glimpse of who I am... \r\n\r\n\u201cMy team is responding to the world\u2019s most devastating global pandemic in the last hundred years. And so, there\u2019s something to be said about knowing who you are.\u201d",
        Month: "April",
        "Dimension 1": -4.8522553,
        "Dimension 2": 24.117418,
        Sentiment: -0.14,
        Subjectivity: 0.333333333,
        idx: 108,
      },
      {
        RawTweet:
          "@robyn_s_lee @maiamajumder @onisillos @sciencecohen @CDCgov @CarlosdelRio7 @DrMattMcCarthy I\u2019ll wait til I hear more and will act accordingly.  Unfortunately @CDCgov hasn\u2019t been the most informed in this #epidemic either so if I were you I\u2019d hold my judgment.",
        Month: "March",
        "Dimension 1": -15.172516,
        "Dimension 2": -25.893753,
        Sentiment: 0.166666667,
        Subjectivity: 0.666666667,
        idx: 109,
      },
      {
        RawTweet:
          "b'RT @pbleic: Relaxing #COVID19 social distancing too soon?  What could happen?  1918 has some lessons for us.  When schools and social gathe\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 1.0125197,
        "Dimension 2": -26.27161,
        Sentiment: 0.033333333,
        Subjectivity: 0.066666667,
        idx: 110,
      },
      {
        RawTweet:
          "b'RT @Benioff: How did San Francisco get a jump start against coronavirus? 622 cases. What did those who led the early effort here know that\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 0.49692225,
        "Dimension 2": 23.642717,
        Sentiment: 0.1,
        Subjectivity: 0.3,
        idx: 111,
      },
      {
        RawTweet:
          "Cases in parts of the heartland are starting to spike, raising concern about new hot spots that could quash push to reopen the economy https:\/\/t.co\/o3nvEL3ZKN",
        Month: "April",
        "Dimension 1": -2.8873417,
        "Dimension 2": 12.714373,
        Sentiment: 0.128787879,
        Subjectivity: 0.468181818,
        idx: 112,
      },
      {
        RawTweet:
          "b'RT @angie_rasmussen: I wish I could RT this over and over and over.\\n\\nMasks have some limited utility in reducing droplet production. And ye\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -1.7418574,
        "Dimension 2": -30.245527,
        Sentiment: -0.071428571,
        Subjectivity: 0.142857143,
        idx: 113,
      },
      {
        RawTweet:
          "Finally got to read this very nice preprint article from @MarionKoopmans. Similar to our study their inhouse ELISA is great. The important part here is that they found excellent correlation between neutralizing activity and in house ELISA. https:\/\/t.co\/QXGX0NSDfk",
        Month: "March",
        "Dimension 1": 34.69953,
        "Dimension 2": -8.10713,
        Sentiment: 0.496666667,
        Subjectivity: 0.858333333,
        idx: 114,
      },
      {
        RawTweet:
          "b'ABCD of staying safe\\n\\nA - Avoid gatherings and maintain social distance\\n\\nB - Beware of rumors and fake news\\n\\nC - Co\\xe2\\x80\\xa6 https:\/\/t.co\/Ssl5drHtfn'",
        Month: "April",
        "Dimension 1": -10.472921,
        "Dimension 2": -38.67121,
        Sentiment: -0.233333333,
        Subjectivity: 0.533333333,
        idx: 115,
      },
      {
        RawTweet:
          "@jessiegaeta @Bostonstreetdoc @felicejfreyer @ArunRath @radioopensource this needs media attention- it\u2019s a big deal! And so innovative and will be helpful for other areas doing the same",
        Month: "March",
        "Dimension 1": 36.773613,
        "Dimension 2": -15.1375065,
        Sentiment: 0.09375,
        Subjectivity: 0.4,
        idx: 116,
      },
      {
        RawTweet:
          'b\'RT @DrTedros: I use words "solidarity" &amp; "together" a lot. I mean it in a collective sense: people everywhere are experiencing unprecedente\\xe2\\x80\\xa6\'',
        Month: "April",
        "Dimension 1": 31.5684,
        "Dimension 2": -3.265605,
        Sentiment: -0.3125,
        Subjectivity: 0.6875,
        idx: 117,
      },
      {
        RawTweet:
          "['.@Amazon employees at a #StatenIsland, #NY, warehouse are planning to walk off the job today, as an increasing number of delivery &amp; warehouse workers demand better #pay &amp; #protections in the midst of the #coronavirus \/ #COVID19 #pandemic. https:\/\/t.co\/5Z2FXDiu82']",
        Month: "March",
        "Dimension 1": -35.417126,
        "Dimension 2": 7.6593666,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 118,
      },
      {
        RawTweet:
          "['#COVID19 in #Hokkaido, #Japan to March10. 1094 tested, 111 positive, 59 now hospital, 3 died, 49 already left hospital. Good care working? https:\/\/t.co\/WKdExHc0vx https:\/\/t.co\/F3cgLuYH5s', '#COVID19 in #Hokkaido, #Japan to March10. 1094 tested, 111 positive, 59 now hospital, 3 died, 49 already left hospital. Good care working? https:\/\/t.co\/WKdExHc0vx https:\/\/t.co\/F3cgLuYH5s']",
        Month: "March",
        "Dimension 1": -3.5412147,
        "Dimension 2": 9.869653,
        Sentiment: 0.309090909,
        Subjectivity: 0.381818182,
        idx: 119,
      },
      {
        RawTweet:
          'b"We need #food even under a prolonged LOCKDOWN \\n\\nRT to appreciate #farmers\' great job during this hard time.\\xe2\\x80\\xa6 https:\/\/t.co\/cTePXHnI06"',
        Month: "April",
        "Dimension 1": 1.5494983,
        "Dimension 2": 12.342764,
        Sentiment: 0.254166667,
        Subjectivity: 0.645833333,
        idx: 120,
      },
      {
        RawTweet:
          "b'While deadly #COVID19 is spreading at an alarming rate across #Turkey, the lives of thousands of prisoners and staf\\xe2\\x80\\xa6 https:\/\/t.co\/fYFUJGG89z'",
        Month: "April",
        "Dimension 1": -25.794859,
        "Dimension 2": 35.646645,
        Sentiment: -0.15,
        Subjectivity: 0.5,
        idx: 121,
      },
      {
        RawTweet:
          "A brilliant thread explaining the role of innate immune response in resistance vs. pathology, and strategies for boosting disease tolerance against respiratory virus infection by @padminipillai \ud83d\udc47\ud83c\udffd\ud83d\udc47\ud83c\udffd\ud83d\udc47\ud83c\udffd \r\nA highly relevant discussion for #COVID19 treatment. https:\/\/t.co\/ndx7uP2TVx",
        Month: "March",
        "Dimension 1": 21.05699,
        "Dimension 2": -4.3336473,
        Sentiment: 0.65,
        Subjectivity: 0.95,
        idx: 122,
      },
      {
        RawTweet:
          "b'Contact tracing is about people helping people. Doing it effectively requires a human connection. https:\/\/t.co\/03dMT2ethi'",
        Month: "May",
        "Dimension 1": 21.758926,
        "Dimension 2": -14.534292,
        Sentiment: 0.3,
        Subjectivity: 0.45,
        idx: 123,
      },
      {
        RawTweet:
          "\u201cThe development &amp; implementation of viral &amp; serological tests are only half the battle... [the data] must play a large role in decisions about our future, yet a complete set of these data are not currently publicly available. This Initiative will fill that gap.\u201d @JenniferNuzzo https:\/\/t.co\/TwbV9Gendk",
        Month: "April",
        "Dimension 1": -14.726048,
        "Dimension 2": -26.404453,
        Sentiment: -0.008730159,
        Subjectivity: 0.420039683,
        idx: 124,
      },
      {
        RawTweet:
          "b'#coronavirus update in #Mauritania. New cases confirmed 25, new deaths 3. Total cases in Mauritania confirmed 262,\\xe2\\x80\\xa6 https:\/\/t.co\/0CIJt4Q009'",
        Month: "May",
        "Dimension 1": -11.806996,
        "Dimension 2": 37.875435,
        Sentiment: 0.214545455,
        Subjectivity: 0.731818182,
        idx: 125,
      },
      {
        RawTweet:
          "#COVID19 vaccine. @HelenBranswell is right on the mark. Even if a vaccine passes Phase III trials tomorrow, it takes 6-12 months to manufacture and deal with logistics AT SCALE - little things like glass vials and rubber stoppers become important become limiting! https:\/\/t.co\/MtIMdpDkT3",
        Month: "May",
        "Dimension 1": -12.781004,
        "Dimension 2": 25.452528,
        Sentiment: 0.199404762,
        Subjectivity: 0.678571429,
        idx: 126,
      },
      {
        RawTweet:
          "b'Very good and sobering resource from the Imperial College: \"Short-term forecasts of COVID-19 deaths in multiple cou\\xe2\\x80\\xa6 https:\/\/t.co\/LI0ygg4ZC2'",
        Month: "April",
        "Dimension 1": 3.34735,
        "Dimension 2": -28.04012,
        Sentiment: 0.455,
        Subjectivity: 0.39,
        idx: 127,
      },
      {
        RawTweet:
          "['Our lawyers wrote updates today on how the spread of COVID-19 is affecting employee benefits, mergers and acquisitions, and mutual fund boards. Visit the Ballard Spahr COVID-19 Resource Center for the the latest. https:\/\/t.co\/Y0YJykPqYB #coronavirus #COVID19 https:\/\/t.co\/unVv17rEeR']",
        Month: "March",
        "Dimension 1": 18.89825,
        "Dimension 2": 16.214441,
        Sentiment: 0.2,
        Subjectivity: 0.5,
        idx: 128,
      },
      {
        RawTweet:
          "@haniainabox Hahaha yes I know-  :) just posing the rhetorical question on how and why the heck we got here. It's such an unnecessary non-sequitur in the COVID19 response.",
        Month: "March",
        "Dimension 1": -3.8784232,
        "Dimension 2": -35.501366,
        Sentiment: 0.075,
        Subjectivity: 0.7,
        idx: 129,
      },
      {
        RawTweet:
          "b'#COVID19 #Coronavirus does not discriminate. Anyone can get sick no matter their race or ethnic background. Please\\xe2\\x80\\xa6 https:\/\/t.co\/5Lfw8k9Hud'",
        Month: "April",
        "Dimension 1": -1.0201808,
        "Dimension 2": -13.604836,
        Sentiment: -0.714285714,
        Subjectivity: 0.857142857,
        idx: 130,
      },
      {
        RawTweet:
          "['BT and Sky Sports are not offering subscription refunds to angry fans after top-flight football is cancelled https:\/\/t.co\/N2DgDiSCH6 DailyMailUK #Corona #wiwt #Covid19 #friday #update #who #tbt', 'BT and Sky Sports are not offering subscription refunds to angry fans after top-flight football is cancelled https:\/\/t.co\/N2DgDiSCH6 DailyMailUK #Corona #wiwt #Covid19 #friday #update #who #tbt']",
        Month: "March",
        "Dimension 1": -39.841507,
        "Dimension 2": -1.2559685,
        Sentiment: -0.5,
        Subjectivity: 1.0,
        idx: 131,
      },
      {
        RawTweet:
          "['@POTUS Trump admin strongly considering sending citizens money to help get through coronavirus emergency  https:\/\/t.co\/F5zH5ndVv2\\n\\n@realDonaldTrump @GOP @TheDemocrats ET ALL any funds provided should go directly to and only to #USCitizens #USTaxpayers #COVID19 #ChineseVirus \\n\ud83d\ude4f\ud83c\uddfa\ud83c\uddf8']",
        Month: "March",
        "Dimension 1": -5.4922037,
        "Dimension 2": -1.0067898,
        Sentiment: 0.177777778,
        Subjectivity: 0.711111111,
        idx: 132,
      },
      {
        RawTweet:
          "b'#ITV #Advertising #COVID19 #mediation \\n\\n-ITV \/2 \\n-Every single Ad category hit very hard this year, possibly bar Te\\xe2\\x80\\xa6 https:\/\/t.co\/m1c7tB6mCt'",
        Month: "April",
        "Dimension 1": 7.5660644,
        "Dimension 2": 26.90448,
        Sentiment: -0.150198413,
        Subjectivity: 0.639484127,
        idx: 133,
      },
      {
        RawTweet:
          "b'So basically if we dress like we going for a jog then we can go out unheeded #COVID19'",
        Month: "March",
        "Dimension 1": 8.158795,
        "Dimension 2": -29.459797,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 134,
      },
      {
        RawTweet:
          "6\/ Even as CA opens, as a &gt;60 yr old I won\u2019t go to restaurants &amp; barber yet, though I will do outdoor stuff w\/ 6 ft distancing (golf!). Raises key point: \u201cOpening up\u201d won\u2019t boost economy if folks are still fearful. A huge challenge for all businesses to create sense of security.",
        Month: "May",
        "Dimension 1": -38.766613,
        "Dimension 2": -6.579607,
        Sentiment: -0.09375,
        Subjectivity: 0.775,
        idx: 135,
      },
      {
        RawTweet:
          "['\ud83d\udc49 100-bed isolation centre at the newly designated Infectious Disease Centre, Olodo. \ud83d\udc4910-bed isolation centre at Agbami Chest Centre, Jericho, Ibadan.\ud83d\udc49Two (2) ambulances purchased by the Oyo State Government to convey #COVID19 cases have been refitted and are ready for use. https:\/\/t.co\/iy82Kg2evb']",
        Month: "March",
        "Dimension 1": 27.900587,
        "Dimension 2": 29.281696,
        Sentiment: 0.168181818,
        Subjectivity: 0.477272727,
        idx: 136,
      },
      {
        RawTweet:
          "b'RT @GrantWahl: The Doc @celinegounder is set to go on CNN with Anderson Cooper in a few. Reliable info and analysis on the virus latest.'",
        Month: "April",
        "Dimension 1": 8.205344,
        "Dimension 2": 12.839406,
        Sentiment: 0.15,
        Subjectivity: 0.5,
        idx: 137,
      },
      {
        RawTweet:
          "b'RT @JeremyKonyndyk: Here is the speech that the country *needed* to hear from the President tonight:\\n\\n\"My fellow Americans, the next few mo\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 4.134078,
        "Dimension 2": 37.22167,
        Sentiment: -0.1,
        Subjectivity: 0.05,
        idx: 138,
      },
      {
        RawTweet:
          "b'#COVID19 has surely heightened levels of #stress and #anxiety among the #public. #Psychiatrists such as\\xe2\\x80\\xa6 https:\/\/t.co\/G8QwiDVs4P'",
        Month: "April",
        "Dimension 1": -12.2831545,
        "Dimension 2": -4.2805142,
        Sentiment: 0.166666667,
        Subjectivity: 0.485185185,
        idx: 139,
      },
      {
        RawTweet:
          "b'RT @NoobieMatt: While I am unsure why you would transport the majority of patients in cardiac arrest, the bigger issue is a lack of nationa\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -35.04676,
        "Dimension 2": -16.473587,
        Sentiment: -0.033333333,
        Subjectivity: 0.166666667,
        idx: 140,
      },
      {
        RawTweet:
          "@crabbyabz @Daltmann10 Depends. You need IRB approval if you run a study or IRB exempt if you get deidentified samples to run which were collected by someone else (depends on your IRB). But the testing itself only requires trained people and an equipped lab.",
        Month: "March",
        "Dimension 1": -16.282955,
        "Dimension 2": -27.812487,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 141,
      },
      {
        RawTweet:
          "7. Using lockdowns when needed to slow down spread of virus &amp; using this time to massively increase key public health infrastructure &amp; to do more research. Lockdowns expensive &amp; costly way of buying time -&gt; used as sparingly as possible.",
        Month: "April",
        "Dimension 1": -15.814085,
        "Dimension 2": -11.822165,
        Sentiment: -0.056944444,
        Subjectivity: 0.619444444,
        idx: 142,
      },
      {
        RawTweet:
          "b'RT @AnonDumboOctopi: Found this wonderful article by @VirusesImmunity while moving offices, reading it again! https:\/\/t.co\/jdVKpKeYTm'",
        Month: "March",
        "Dimension 1": 30.925869,
        "Dimension 2": 2.4532745,
        Sentiment: 1.0,
        Subjectivity: 1.0,
        idx: 143,
      },
      {
        RawTweet:
          "['#Chrome skips version release over adjusted #coronavirus work schedules\\nhttps:\/\/t.co\/lJ01w2tdgt', '#Chrome skips version release over adjusted #coronavirus work schedules\\nhttps:\/\/t.co\/lJ01w2tdgt']",
        Month: "March",
        "Dimension 1": -33.59317,
        "Dimension 2": -0.42641568,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 144,
      },
      {
        RawTweet:
          "b'The #Covid19 pandemic can leave us feeling isolated &amp; lonely. For 1 million people affected by Parkinson\\xe2\\x80\\x99s in the U\\xe2\\x80\\xa6 https:\/\/t.co\/h2oyxhBhO5'",
        Month: "April",
        "Dimension 1": -39.182777,
        "Dimension 2": 12.453808,
        Sentiment: -0.1,
        Subjectivity: 0.7,
        idx: 145,
      },
      {
        RawTweet:
          "b'So is the government releasing murder hornets to force people to stay indoors? Just putting that out there for cons\\xe2\\x80\\xa6 https:\/\/t.co\/KHHvxC5c2X'",
        Month: "May",
        "Dimension 1": -26.141642,
        "Dimension 2": -0.01310908,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 146,
      },
      {
        RawTweet:
          "#COVID19 no. of cases in ROW will surpass China\u2019s by ~Mar12-15 unless S\u2019pore style #PubHealth measures are put into place. Fig. 2\u2013Deaths: Linear (left graph) vs Log2 scale (right graph). No. of deaths in ROW will also surpass China\u2019s by ~Mar15-18.  2\/n https:\/\/t.co\/qvnOEe09oj",
        Month: "March",
        "Dimension 1": -14.028559,
        "Dimension 2": 34.017143,
        Sentiment: 0.142857143,
        Subjectivity: 0.267857143,
        idx: 147,
      },
      {
        RawTweet:
          "For example, let's look at positivity rates for flu, where testing is widely available. We're oddly complacent about flu spread, allowing it to become epidemic. With #COVID19, goal will be to test at level to prevent epidemic spread, not simply to track trajectory of the epidemic",
        Month: "April",
        "Dimension 1": -2.0004466,
        "Dimension 2": -10.395325,
        Sentiment: 0.077777778,
        Subjectivity: 0.335714286,
        idx: 148,
      },
      {
        RawTweet:
          "['Fill in the following survey to tell us how your business has been affected by the #Covid19 outbreak, so @HertsGrowthHub can prepare the support you need. \\n\\nhttps:\/\/t.co\/Ak89uBsE3g\\n\\n#hertshour #Covid19Herts @hertscc @TheWentaGroup @biz4biz @AmbitionBrox @WatfordBID @VisitHertsUK']",
        Month: "March",
        "Dimension 1": 16.435934,
        "Dimension 2": 17.373579,
        Sentiment: 0.0,
        Subjectivity: 0.1,
        idx: 149,
      },
      {
        RawTweet:
          "b'#COVID19\\nBlack people in the UK four times more likely to die from Covid-19 than white people, new data shows\\n\\nhttps:\/\/t.co\/M6BoEEA8QV'",
        Month: "May",
        "Dimension 1": -23.511814,
        "Dimension 2": 36.30321,
        Sentiment: 0.159090909,
        Subjectivity: 0.488636364,
        idx: 150,
      },
      {
        RawTweet:
          "b'#covid19 has you on #lockdown at home? That gives you #motivation to get to know #model #Siena-baby \\xe2\\x9e\\xa1\\xef\\xb8\\x8f\\xe2\\x80\\xa6 https:\/\/t.co\/Qq0YdNKviC'",
        Month: "April",
        "Dimension 1": 10.70523,
        "Dimension 2": -7.6748257,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 151,
      },
      {
        RawTweet:
          "b'RT @SaskiaPopescu: \\xe2\\x80\\x9cThe presence of so many U.S. officials undercuts President Trump\\xe2\\x80\\x99s assertion that the WHO\\xe2\\x80\\x99s failure to communicate the\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -20.78247,
        "Dimension 2": -4.5745187,
        Sentiment: 0.091666667,
        Subjectivity: 0.4,
        idx: 152,
      },
      {
        RawTweet:
          "Massive effort by our @hkumed colleagues that we were happy to support. Particularly timely given some other publications today that used totally inappropriate methods to get wildly inflated CFRs. https:\/\/t.co\/RBuMm4cnaN",
        Month: "March",
        "Dimension 1": 38.739872,
        "Dimension 2": -16.178015,
        Sentiment: 0.156944444,
        Subjectivity: 0.643055556,
        idx: 153,
      },
      {
        RawTweet:
          "@JesterMike @UNMC_ID @Prof_Lowe @unmc @NebraskaMed So I saw that email too-- i thought it was from someone from our institution that had talked to him directly but since you have heard it too- now I am starting to wonder about the authenticity of it. someone needs to contact Dr. Tsai and confirm!",
        Month: "March",
        "Dimension 1": 5.603082,
        "Dimension 2": 11.37011,
        Sentiment: 0.05,
        Subjectivity: 0.25,
        idx: 154,
      },
      {
        RawTweet:
          "b'RT @hcmariwala: A reminder that when we lift each other through difficult &amp; challenging tasks, we spread joy.\\n\\n#ThursdayThoughts https:\/\/t.\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 38.171173,
        "Dimension 2": -13.164153,
        Sentiment: -0.041666667,
        Subjectivity: 0.791666667,
        idx: 155,
      },
      {
        RawTweet:
          "This isn\u2019t funny. And it isn\u2019t (just) mansplaining. It is a demonstration of a profound lack of health literacy that will place folks at risk. \r\n\r\nNot sure who may need to hear this today but:\r\n\r\nNever inject or ingest disinfectants. They are toxic and can harm you. https:\/\/t.co\/379zZXFgHR",
        Month: "April",
        "Dimension 1": -30.070982,
        "Dimension 2": -19.966986,
        Sentiment: 0.027777778,
        Subjectivity: 0.962962963,
        idx: 156,
      },
      {
        RawTweet:
          "b'RT @Atul_Gawande: 2. DEPLOY THE FULL PLAYBOOK. Lombardy (10M) and Veneto (5M) both closed shops and did social distancing. Veneto added tes\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -30.611105,
        "Dimension 2": 8.019275,
        Sentiment: 0.094444444,
        Subjectivity: 0.238888889,
        idx: 157,
      },
      {
        RawTweet:
          "['https:\/\/t.co\/5935gnvbxd\\n\\n#shopify #marketing #ecommerce #promotion #fitness #business #Dropshippping #emailmarketing #shopify #salesfunnel #Sales #money #COVID-19 #coronavirus #StayAtHome #SinergitasCegahCovid19 #stayhome']",
        Month: "March",
        "Dimension 1": 13.97234,
        "Dimension 2": 13.727402,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 158,
      },
      {
        RawTweet:
          "Our best way for beating the #COVID19 pandemic is solidarity! Let's sing this song of compassion together because indeed we can only heal as one! Huge thanks to the artists from the #Phillipines for sharing this healing song to the world! #coronavirus \r\nhttps:\/\/t.co\/guqMeyHCnA",
        Month: "March",
        "Dimension 1": 33.13662,
        "Dimension 2": -22.300268,
        Sentiment: 0.4125,
        Subjectivity: 0.6,
        idx: 159,
      },
      {
        RawTweet:
          "b'RT @SueDHellmann: Ending the week sad about terrible suffering - so I took a shot at how we can do better next time. Preparing for the Next\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -12.714835,
        "Dimension 2": 4.5748663,
        Sentiment: -0.25,
        Subjectivity: 0.625,
        idx: 160,
      },
      {
        RawTweet:
          "\u201cIsraeli Prime Minister Benjamin Netanyahu said his government has decided to quarantine anyone arriving from overseas for 14 days.\u201d https:\/\/t.co\/F3XisxbKK1",
        Month: "March",
        "Dimension 1": -4.654518,
        "Dimension 2": 26.979465,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 161,
      },
      {
        RawTweet:
          "The story of #COVID19 is about many things \u2013 politics, geography, the biology of disease. But in the US, it is, I think, most fundamentally a story about race. Some thoughts on why. @RWJF @commonwealthfnd @RockefellerFdn",
        Month: "May",
        "Dimension 1": -8.542956,
        "Dimension 2": -5.9263253,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 162,
      },
      {
        RawTweet:
          'b"RT @KroganLab: Krogan lab and 20 other labs @UCSF and around the globe join forces to tackle this coronavirus pandemic! We\'re a team of res\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": -1.3565161,
        "Dimension 2": 29.786856,
        Sentiment: -0.15625,
        Subjectivity: 0.375,
        idx: 163,
      },
      {
        RawTweet:
          "b'Amid the #COVID19 restrictions, fitness expert, Rose Tavares Finson has taken matters into her own hands, trimming\\xe2\\x80\\xa6 https:\/\/t.co\/ln5gugOhYc'",
        Month: "April",
        "Dimension 1": 24.914484,
        "Dimension 2": -21.427664,
        Sentiment: 0.6,
        Subjectivity: 0.975,
        idx: 164,
      },
      {
        RawTweet:
          '@Mo_Sawyers1 I don\'t know what "standing on your square" is. But, Idc about the receipts, especially since the whole conversation was started with "giving" me credentials which I EARNED. The insinuation that I must be given anything is tiring. Honestly. But, all the love.',
        Month: "April",
        "Dimension 1": 7.3960285,
        "Dimension 2": -31.80377,
        Sentiment: 0.325,
        Subjectivity: 0.725,
        idx: 165,
      },
      {
        RawTweet:
          "b'#covid19 in the novel Executive Orders, when the stock markets crashed, the fix was \"if you don\\'t write it down, it\\xe2\\x80\\xa6 https:\/\/t.co\/W30biTbBWU'",
        Month: "May",
        "Dimension 1": -19.387407,
        "Dimension 2": 12.136646,
        Sentiment: -0.155555556,
        Subjectivity: 0.288888889,
        idx: 166,
      },
      {
        RawTweet:
          "b'RT @RMLWikingerin: If you want a break from COVID-19 and the end of the world, might I recommend reading about #CHIKV and #alphavirus defec\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 7.4956064,
        "Dimension 2": -7.8082404,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 167,
      },
      {
        RawTweet:
          "b'I\\xe2\\x80\\x99m so happy that our politicians listen to the competent medical officials in our various health care systems even\\xe2\\x80\\xa6 https:\/\/t.co\/S5kAcq8ypJ'",
        Month: "April",
        "Dimension 1": 46.83375,
        "Dimension 2": -12.947474,
        Sentiment: 0.325,
        Subjectivity: 0.541666667,
        idx: 168,
      },
      {
        RawTweet:
          "b'@BolognaFishMD Care homes are tricky, and we need to explore options. In my case, I was thinking about older family members who live alone.'",
        Month: "May",
        "Dimension 1": -22.322853,
        "Dimension 2": -21.886126,
        Sentiment: 0.151515152,
        Subjectivity: 0.416666667,
        idx: 169,
      },
      {
        RawTweet:
          '["There\'s one thing this #coronavirus has done. It has shed a huge spotlight on humanity. In time where human can be a danger to human, it is #humanity that is empowering some to risk their lives to meet need and help others.\\n#humanityisstillworking"]',
        Month: "March",
        "Dimension 1": -1.469024,
        "Dimension 2": -6.269523,
        Sentiment: 0.133333333,
        Subjectivity: 0.366666667,
        idx: 170,
      },
      {
        RawTweet:
          "['By order of the Chief Firearms Officer of Ontario, we are suspending all scheduled #cfsc #crfsc courses including a private course which was in progress this weekend until further notice. Notices are being sent to all registered clients. #COVID19']",
        Month: "March",
        "Dimension 1": -38.054916,
        "Dimension 2": 0.99473476,
        Sentiment: 0.0,
        Subjectivity: 0.4375,
        idx: 171,
      },
      {
        RawTweet:
          "b'RT @DocJeffD: Major bottleneck is LACK OF TESTING LOCATIONS in the community, not just lab test. NEED HEALTHCARE PROVIDERS TO SET UP COMMUN\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -33.93208,
        "Dimension 2": -14.732791,
        Sentiment: 0.0625,
        Subjectivity: 0.5,
        idx: 172,
      },
      {
        RawTweet:
          "I just spring cleaned the way my momma used to make us do on the Saturday before Easter... washing baseboards, mopping every single floor, shampooing couches, dusting ceiling fans, bathing the blinds. I feel like my life is renewed... \r\n\r\n(S)he has risen. \ud83d\ude4f\ud83c\udfff",
        Month: "April",
        "Dimension 1": 15.887582,
        "Dimension 2": 37.303196,
        Sentiment: -0.071428571,
        Subjectivity: 0.214285714,
        idx: 173,
      },
      {
        RawTweet:
          "b'\\xf0\\x9f\\x90\\xb6\\xf0\\x9f\\xa6\\xb4While you get to spend more time with your furry friends there are those at the risk of homelessness unable to pu\\xe2\\x80\\xa6 https:\/\/t.co\/ZSEMZnrlF1'",
        Month: "April",
        "Dimension 1": 20.78942,
        "Dimension 2": -29.963362,
        Sentiment: 0.0,
        Subjectivity: 0.5,
        idx: 174,
      },
      {
        RawTweet:
          "I wanted to thank everyone who asked a question about transmission, and hope your questions were answered here!\r\n\r\n@kadiebug12 @djdth31 @50shekels @pjd93920 @kimmyhippielove @constantguide @pdmj007 @debrajepson @travelwithtrent @xanthematy @marlipie",
        Month: "May",
        "Dimension 1": 40.096367,
        "Dimension 2": -11.803567,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 175,
      },
      {
        RawTweet:
          "Life is changing dramatically for many of us, but it\u2019s important to continue looking after your physical and mental health. @WHO provides advice for individuals on how to adjust into a new reality of #COVID19. #HealthyAtHome",
        Month: "March",
        "Dimension 1": 27.670887,
        "Dimension 2": -13.401466,
        Sentiment: 0.187272727,
        Subjectivity: 0.459480519,
        idx: 176,
      },
      {
        RawTweet:
          "b'RT @reichlab: Tom just released the latest results from our expert survey on #COVID19. Highlights are that experts\\n - think we are seeing o\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 27.59215,
        "Dimension 2": -0.48880622,
        Sentiment: 0.5,
        Subjectivity: 0.9,
        idx: 177,
      },
      {
        RawTweet:
          "['Help slow the spread of #COVID19 and identify at risk cases sooner by self-reporting your symptoms daily, even if you feel well  \ud83d\ude4f\ud83c\udffc. Download the app https:\/\/t.co\/B7ns4cFBDx']",
        Month: "March",
        "Dimension 1": 7.5042076,
        "Dimension 2": -25.952326,
        Sentiment: -0.15,
        Subjectivity: 0.2,
        idx: 178,
      },
      {
        RawTweet:
          "b'RT @DrTomFrieden: Impressive\\xe2\\x80\\x94South Africa quickly mobilized more than 28k health workers to contact trace, screen patients, and set up pop-\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 27.89617,
        "Dimension 2": 30.729853,
        Sentiment: 0.416666667,
        Subjectivity: 0.5,
        idx: 179,
      },
      {
        RawTweet:
          "[\"'We'll die like cattle': Kashmiris fear #coronavirus outbreak\\n\\nDoctors say #Kashmir, which has been under a security lockdown since August, is 'ill-equipped' to deal with the pandemic.\\n\\n#LetKashmirSpeak @AIIndia @mbachelet @antonioguterres #IOK\\n\\n#COVID19\\n\\nhttps:\/\/t.co\/fgHLEu2Xl6\"]",
        Month: "March",
        "Dimension 1": -23.92782,
        "Dimension 2": -0.24288845,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 180,
      },
      {
        RawTweet:
          "b'If the government needs to roll out 100,000 new tests &amp; is unsure where to start then why not ask dentists seeing a\\xe2\\x80\\xa6 https:\/\/t.co\/79Gd3ZMry9'",
        Month: "April",
        "Dimension 1": -10.247275,
        "Dimension 2": 34.129177,
        Sentiment: 0.136363636,
        Subjectivity: 0.454545455,
        idx: 181,
      },
      {
        RawTweet:
          "@DrAalami @marclluis @_MiguelHernan @hendrikstreeck consistent with, and perhaps slightly more optimistic than, what other data sources were suggesting -- with the optimism preserved if no more deaths from among that denominator, and reduced if more. Critiques of this reasoning welcome 4\/4",
        Month: "April",
        "Dimension 1": -8.765895,
        "Dimension 2": -31.376938,
        Sentiment: 0.279166667,
        Subjectivity: 0.504166667,
        idx: 182,
      },
      {
        RawTweet:
          "b'RT @BNODesk: BREAKING: California Governor Newsom urges all those who are 65 years and older or have chronic conditions to isolate themselv\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -25.361757,
        "Dimension 2": 4.0770125,
        Sentiment: 0.166666667,
        Subjectivity: 0.333333333,
        idx: 183,
      },
      {
        RawTweet:
          "['As of 2pm on Saturday 21 March, testing has resulted in 22 new positive cases, bringing the total number of confirmed cases in Northern Ireland to 108. #COVID19']",
        Month: "March",
        "Dimension 1": -5.2369194,
        "Dimension 2": 45.2067,
        Sentiment: 0.190909091,
        Subjectivity: 0.6875,
        idx: 184,
      },
      {
        RawTweet:
          "b'RT @marclamonthill: Today is the 95th anniversary of Malcolm X. Giving thanks to Malcolm for his sacrifice, discipline, brilliance, and bou\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 47.77444,
        "Dimension 2": -2.3983104,
        Sentiment: 0.2,
        Subjectivity: 0.2,
        idx: 185,
      },
      {
        RawTweet:
          'b"People 65 and older are at a higher risk for #COVID19. For now, it\'s best to stay home. https:\/\/t.co\/6Tjz4ybIfN"',
        Month: "April",
        "Dimension 1": 9.315047,
        "Dimension 2": -9.182519,
        Sentiment: 0.472222222,
        Subjectivity: 0.377777778,
        idx: 186,
      },
      {
        RawTweet:
          '["#African #health systems have improved substantially, but remain \u201cseverely deficient,\u201d said @tedmiguel @UCBerkeley. Governments may struggle to cope. His conclusion: Without robust int\'l support, #COVID19 impact in Africa could be devastating. https:\/\/t.co\/j6QmDPzpe6"]',
        Month: "March",
        "Dimension 1": -17.317762,
        "Dimension 2": -17.673521,
        Sentiment: -0.466666667,
        Subjectivity: 0.566666667,
        idx: 187,
      },
      {
        RawTweet:
          "b'@grantshapps tells us now that back at the peak of the virus, we all had the option to preempt getting the disease\\xe2\\x80\\xa6 https:\/\/t.co\/UXXhyKKJIu'",
        Month: "May",
        "Dimension 1": 6.355711,
        "Dimension 2": -9.474531,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 188,
      },
      {
        RawTweet:
          "@meganranney @statnews @CDCgov Thank you Megan. Never thought I would write a piece highly critical of @CDCgov. We live in strange and sad times.",
        Month: "April",
        "Dimension 1": -25.96275,
        "Dimension 2": -17.948744,
        Sentiment: -0.103409091,
        Subjectivity: 0.6125,
        idx: 189,
      },
      {
        RawTweet:
          "@kccummins2 @coveljv @zev_dr @washingtonpost And if you confuse approval by a hospital IRB with the FDA, you are either incompetent or dishonest. Anyone who has even a basic working knowledge of drug development or doing human subjects studies would never make this mistake.",
        Month: "May",
        "Dimension 1": -16.556347,
        "Dimension 2": -37.521343,
        Sentiment: -0.1625,
        Subjectivity: 0.272916667,
        idx: 190,
      },
      {
        RawTweet:
          "['Help slow the spread of #COVID19 and identify at risk cases sooner by self-reporting your symptoms daily, even if you feel well  \ud83d\ude4f\ud83c\udffc. Developed by @KingsCollegeLon Download the app https:\/\/t.co\/v5xCpydOne', 'Help slow the spread of #COVID19 and identify at risk cases sooner by self-reporting your symptoms daily, even if you feel well  \ud83d\ude4f\ud83c\udffc. Developed by @KingsCollegeLon Download the app https:\/\/t.co\/v5xCpydOne']",
        Month: "March",
        "Dimension 1": 6.5516744,
        "Dimension 2": -26.051117,
        Sentiment: -0.066666667,
        Subjectivity: 0.233333333,
        idx: 191,
      },
      {
        RawTweet:
          "@angie_rasmussen @KrutikaKuppalli @choo_ek @BhadeliaMD @mugecevik @darakass @uche_blackstock @drjessigold @meganranney @mcfreeID @HelenChuMD @londyloo @devisridhar Thank you. Another line up of women global health leaders  @RoopaDhatt who runs @womeninGH a phenomenal global network of women and another fabulous list of women scientists from   @WHO @doctorsoumya @mvankerkhove and Chief advisor to the DG @DrSenait. No to #manels",
        Month: "May",
        "Dimension 1": 17.44448,
        "Dimension 2": 10.748018,
        Sentiment: 0.225,
        Subjectivity: 0.375,
        idx: 192,
      },
      {
        RawTweet:
          "b'BREAKING: \\n\\n1,237 new cases of #Coronavirus and 149 new deaths in Iran. \\n\\ntotal reaches to 19,644 cases and 1,433 d\\xe2\\x80\\xa6 https:\/\/t.co\/dXLr1QgrFo'",
        Month: "March",
        "Dimension 1": -13.609477,
        "Dimension 2": 37.739975,
        Sentiment: 0.136363636,
        Subjectivity: 0.454545455,
        idx: 193,
      },
      {
        RawTweet:
          "['So now a person cant even get sick in peace without being accused of #COVID19.... \ud83d\ude2b\ud83d\ude2b\ud83d\ude2b https:\/\/t.co\/1R0Y7iVUXC']",
        Month: "March",
        "Dimension 1": -32.41542,
        "Dimension 2": -12.144097,
        Sentiment: -0.714285714,
        Subjectivity: 0.857142857,
        idx: 194,
      },
      {
        RawTweet:
          "b'RT @melismarx: See our seven-step strategy for cities to slow and prevent the transmission of the novel coronavirus (Emily Gurley, Jennifer\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -28.834492,
        "Dimension 2": 1.4488999,
        Sentiment: -0.3,
        Subjectivity: 0.4,
        idx: 195,
      },
      {
        RawTweet:
          "b'My seminars and meetings for finding a job was all canceled by the threat of #coronavirus. Today Tokyo counted\\xe2\\x80\\xa6 https:\/\/t.co\/UwbnhboWBW'",
        Month: "April",
        "Dimension 1": -35.790615,
        "Dimension 2": 2.8761673,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 196,
      },
      {
        RawTweet:
          "b'RT @JamesCHudspeth: 2015 paper discussing impact of Ebola on malaria control &amp; modeling the morbidity\/mortality of this. Lessons for #COVID\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 11.316266,
        "Dimension 2": 5.4086056,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 197,
      },
      {
        RawTweet:
          "So check out this excellent review by @annsea_park and @VirusesImmunity! Dr. Iwasaki's team has done some really seminal work to uncover how the interferon system works, and her lab is well-qualified to write this review piece. Also there are some really beautiful figures!",
        Month: "May",
        "Dimension 1": 35.23641,
        "Dimension 2": -9.316702,
        Sentiment: 0.733333333,
        Subjectivity: 0.733333333,
        idx: 198,
      },
      {
        RawTweet:
          "['In this @HarvardBiz article, @allisonshapira shares 5 ways of effectively communicating with your team to exercise #leadership during a crisis. #COVID19 #coronavirus #crisiscommunication #speakwithimpact #commandtheroom #executivecommunication https:\/\/t.co\/HPWWM1YNlE', 'In this @HarvardBiz article, @allisonshapira shares 5 ways of effectively communicating with your team to exercise #leadership during a crisis. #COVID19 #coronavirus #crisiscommunication #speakwithimpact #commandtheroom #executivecommunication https:\/\/t.co\/HPWWM1YNlE']",
        Month: "March",
        "Dimension 1": 1.5318407,
        "Dimension 2": 29.398842,
        Sentiment: 0.6,
        Subjectivity: 0.8,
        idx: 199,
      },
      {
        RawTweet:
          "I understand all the reasons for testing and contact tracing &amp; following S. Korea example. I don\u2019t understand why mass testing and contact tracing with isolation is not being pursued in the UK? WHO seems to hint this is a strategic decision not a capacity issue.",
        Month: "March",
        "Dimension 1": -10.632341,
        "Dimension 2": -35.94601,
        Sentiment: 0.0,
        Subjectivity: 0.1,
        idx: 200,
      },
      {
        RawTweet:
          "b'Gym file lawsuit over indefinite closure @1851center @OHdeptofhealth @govmikedewine #Gym #Reopening #Fitness\\xe2\\x80\\xa6 https:\/\/t.co\/E1Vc5HAvBI'",
        Month: "May",
        "Dimension 1": -35.3193,
        "Dimension 2": 4.597686,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 201,
      },
      {
        RawTweet:
          "b'RT @ScottGottliebMD: THREAD: Many analyses try to estimate what the \\xe2\\x80\\x9cright\\xe2\\x80\\x9d capacity is for weekly #COVID19 testing. One touchstone is posi\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 3.2064216,
        "Dimension 2": 40.576866,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 202,
      },
      {
        RawTweet:
          "['RBS will allow people affected by the #coronavirus outbreak to defer mortgage and loan repayments for up to three months.\\n\\nThe bank, which runs the RBS, NatWest, and Ulster Bank brands, also said savers could close fixed-term savings accounts early with no charge.']",
        Month: "March",
        "Dimension 1": -11.498203,
        "Dimension 2": 28.176392,
        Sentiment: 0.1,
        Subjectivity: 0.3,
        idx: 203,
      },
      {
        RawTweet:
          "8\/ Although @CDCgov is doing important work, we will all be safer when we're hearing from the agency frequently, letting public health experts guide our response to the pandemic, and fully supporting public health.",
        Month: "May",
        "Dimension 1": 31.294836,
        "Dimension 2": -18.513762,
        Sentiment: 0.15,
        Subjectivity: 0.336666667,
        idx: 204,
      },
      {
        RawTweet:
          "b'RT @DrTsion: I am a front line health worker in #NYC with symptoms of COVID-19. Health workers are NOT getting tested but asymptomatic peop\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -34.192387,
        "Dimension 2": -13.788415,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 205,
      },
      {
        RawTweet:
          "b'Remdesivir has a \\xc2\\xab clear-cut \\xc2\\xbb effect in helping Covid-19 patients recover \\xe2\\xa4\\xb5\\xef\\xb8\\x8f\\n\\n#Coronavirus #Us #News https:\/\/t.co\/5XYlhr5fad'",
        Month: "April",
        "Dimension 1": 8.168573,
        "Dimension 2": 2.286827,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 206,
      },
      {
        RawTweet:
          "Beyond public health policy reasons, testing is crucial to communities as well. Don't you want to know if you live in Brighton whether there are 5, 50 or 5000 cases there? The virus becomes invisible if we follow current UK policy to stop testing those with minor symptoms.",
        Month: "March",
        "Dimension 1": -2.03106,
        "Dimension 2": -19.625477,
        Sentiment: 0.017272727,
        Subjectivity: 0.433333333,
        idx: 207,
      },
      {
        RawTweet:
          "b'RT @ashishkjha: Megan Ranney (@meganranney) is a rock star. \\n\\nHere she is leading the national charge for keeping healthcare workers safe (\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 35.42859,
        "Dimension 2": -19.171885,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 208,
      },
      {
        RawTweet:
          "His mom, an Iowa egg factory worker, got sick first. Soon his little sister, a 22-year-old mom, was on a ventilator. And then his father died at age 58. My look at how the virus has devastated the Martinez family of West Liberty  https:\/\/t.co\/rwlrbWqZvm",
        Month: "May",
        "Dimension 1": -26.696733,
        "Dimension 2": 23.498533,
        Sentiment: -0.217261905,
        Subjectivity: 0.563492063,
        idx: 209,
      },
      {
        RawTweet:
          "An hour later, you are still the bearer of the bad news- this time in person.\r\n\r\nSome things get harder during this pandemic. \r\nSome things get easier during this pandemic.\r\n\r\nWe were finally getting used to informing family members over the phone. \r\n2",
        Month: "April",
        "Dimension 1": -8.198308,
        "Dimension 2": 17.202318,
        Sentiment: -0.2,
        Subjectivity: 0.416666667,
        idx: 210,
      },
      {
        RawTweet:
          "['Apparently this #COVID19SouthAfrica or #COVID2019 will be more severe to older people due their already weak health state so my appeal is that most of us younger ones who are here in Gauteng should not go home until we are tested negative for #coronavirus']",
        Month: "March",
        "Dimension 1": -22.071423,
        "Dimension 2": -15.154264,
        Sentiment: 0.052083333,
        Subjectivity: 0.385416667,
        idx: 211,
      },
      {
        RawTweet:
          "['#SmallBiz - We can help you connect with your clients online through our new #localmarket. It\u2019s an online marketplace where small businesses are gathering to weather the #coronavirus storm!  Join us!  Together we are stronger!! #gototheshack #\\nhttps:\/\/t.co\/2A6eTpo9Zg https:\/\/t.co\/ZXrn22jyXE']",
        Month: "March",
        "Dimension 1": 15.965146,
        "Dimension 2": 15.1339445,
        Sentiment: -0.236993963,
        Subjectivity: 0.427272727,
        idx: 212,
      },
      {
        RawTweet:
          "b'RT @BU_Tweets: Profile: Sarah Lowe. @EdwardAlexandrr profiles Sarah Lowe of @YaleMed to reflect on state-of-the-science about mental #healt\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 20.089067,
        "Dimension 2": 9.556265,
        Sentiment: -0.1,
        Subjectivity: 0.2,
        idx: 213,
      },
      {
        RawTweet:
          "b'RT @T_Inglesby: We need a federal logistics dashboard that shows what hospitals need around the country with high granularity, and when the\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 14.7378435,
        "Dimension 2": 7.5679493,
        Sentiment: 0.16,
        Subjectivity: 0.54,
        idx: 214,
      },
      {
        RawTweet:
          "b'RT @fogari14: @fairytale0716 @DrTsion Folks that are going to use Zoom should download the application or the app ahead of time and have it\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 39.429737,
        "Dimension 2": 5.2640624,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 215,
      },
      {
        RawTweet:
          "Today in our impromptu lab meeting, he brought 2 thermometers with him. He recommended that we each take our temperature every day that we are in lab. This is to establish our basal temperature so we can quickly identify if it changes with fever. Smart idea. 2\/3",
        Month: "March",
        "Dimension 1": -3.1162481,
        "Dimension 2": 33.966408,
        Sentiment: 0.273809524,
        Subjectivity: 0.571428571,
        idx: 216,
      },
      {
        RawTweet:
          "6\/ Per @Rutherford_UCSF: need to think nationally, not just locally. George's fear: if we tamp down cases in SF but other cities stay hot (due to no sheltering), \u201cthey will not only harm themselves, but potentially re-seed places that have done [better].\u201d We're all connected!",
        Month: "April",
        "Dimension 1": -11.745442,
        "Dimension 2": -29.478565,
        Sentiment: 0.058680556,
        Subjectivity: 0.548611111,
        idx: 217,
      },
      {
        RawTweet:
          "b'@CoffeyBlog The swabs are in short supply as are the tests. Similar to a flu test, but not the same.'",
        Month: "March",
        "Dimension 1": -18.371325,
        "Dimension 2": -33.879154,
        Sentiment: 0.0,
        Subjectivity: 0.275,
        idx: 218,
      },
      {
        RawTweet:
          "b'RT @KYT_ThatsME: Check on all your public health, virology and microbiology friends. WE ARE NOT OK! https:\/\/t.co\/CxOEpt3Y25'",
        Month: "March",
        "Dimension 1": -12.754851,
        "Dimension 2": 1.2216526,
        Sentiment: -0.15625,
        Subjectivity: 0.283333333,
        idx: 219,
      },
      {
        RawTweet:
          "In this \u2066@Calefati\u2069 \u2066@PhillyInquirer\u2069 piece I am quoted about the early days of #COVID-19 and how there was enough information available to know this wasn\u2019t going to be contained and how blaming the WHO does not excuse our own inaction https:\/\/t.co\/fdfKKgLxpC",
        Month: "May",
        "Dimension 1": -4.786987,
        "Dimension 2": -34.514435,
        Sentiment: 0.225,
        Subjectivity: 0.45,
        idx: 220,
      },
      {
        RawTweet:
          "['The global coronavirus outbreak has presented a tough scenario for almost every major industry.\\nIn light of the current situation, the benefits of developing a Grocery Delivery App seem more relevant than before.\\n\\nhttps:\/\/t.co\/0KNj2c5WGy\\n#coronavirus #covid19 #pandemiccoronavirus']",
        Month: "March",
        "Dimension 1": -9.414582,
        "Dimension 2": 3.0640235,
        Sentiment: 0.139087302,
        Subjectivity: 0.547619048,
        idx: 221,
      },
      {
        RawTweet:
          "['YouTube reverses coronavirus monetization policy https:\/\/t.co\/bdtdMt7tou #Coronavirus #Creators #Monetization #Video #Youtube https:\/\/t.co\/OaPOAZk5tK', 'YouTube reverses coronavirus monetization policy https:\/\/t.co\/bdtdMt7tou #Coronavirus #Creators #Monetization #Video #Youtube https:\/\/t.co\/OaPOAZk5tK']",
        Month: "March",
        "Dimension 1": 0.46002582,
        "Dimension 2": 6.234386,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 222,
      },
      {
        RawTweet:
          "['New York confirms second #coronavirus case as Jewish schools close over virus fears https:\/\/t.co\/aC6owTaENj']",
        Month: "March",
        "Dimension 1": -28.984518,
        "Dimension 2": 6.9021387,
        Sentiment: 0.045454545,
        Subjectivity: 0.151515152,
        idx: 223,
      },
      {
        RawTweet:
          "b'What do we want our urban neighborhood streets to look like post #COVID19? \\n\\nThe choice is ours. \\xf0\\x9f\\x9a\\xb2 \\xf0\\x9f\\x90\\xb6 \\xf0\\x9f\\x91\\xb6\\xf0\\x9f\\x8f\\xbb \\xf0\\x9f\\x9a\\xb6\\xf0\\x9f\\x8f\\xbe\\xf0\\x9f\\x91\\xa8\\xe2\\x80\\x8d\\xf0\\x9f\\x91\\xa9\\xe2\\x80\\x8d\\xf0\\x9f\\x91\\xa7\\xe2\\x80\\x8d\\xf0\\x9f\\x91\\xa6\\xe2\\x80\\xa6 https:\/\/t.co\/Ussyo9HQT4'",
        Month: "April",
        "Dimension 1": 15.394979,
        "Dimension 2": 5.679392,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 224,
      },
      {
        RawTweet:
          '["#CORONAVIRUS: Sikh devotees receive temperature checks &amp; hand sanitizers before entering Darbar Sahib (Golden Temple), Sikhism\'s holiest Gurudwara. Sikhs are exemplary in leading in community efforts to battle the disease &amp; help needy. #CoronaVirusUpdate \\nhttps:\/\/t.co\/DAtsaWe3fi", "#CORONAVIRUS: Sikh devotees receive temperature checks &amp; hand sanitizers before entering Darbar Sahib (Golden Temple), Sikhism\'s holiest Gurudwara. Sikhs are exemplary in leading in community efforts to battle the disease &amp; help needy. #CoronaVirusUpdate \\nhttps:\/\/t.co\/DAtsaWe3fi"]',
        Month: "March",
        "Dimension 1": 31.197948,
        "Dimension 2": -23.919989,
        Sentiment: 0.3,
        Subjectivity: 0.5,
        idx: 225,
      },
      {
        RawTweet:
          "Everyday people ask me how this is similar to my Ebola experience. Today, I called a fellow healthcare worker friend in isolation to check in and ask, \u201care you ok? did your test come back?\u201d\r\n\r\nYeah\u2014- it\u2019s looking more and more like 2014\/2015 in my world. #covid19",
        Month: "March",
        "Dimension 1": 8.430411,
        "Dimension 2": 23.790668,
        Sentiment: 0.216666667,
        Subjectivity: 0.416666667,
        idx: 226,
      },
      {
        RawTweet:
          "b'Pallister on public service reduced work week: It makes little sense to pay billions into EI and not use it during\\xe2\\x80\\xa6 https:\/\/t.co\/jpymeVZwW3'",
        Month: "April",
        "Dimension 1": -40.544064,
        "Dimension 2": 9.38676,
        Sentiment: -0.09375,
        Subjectivity: 0.283333333,
        idx: 227,
      },
      {
        RawTweet:
          "['We stand by Italy during these trying times. Share your Support for our Italian friends, They are our colleagues, friends and family. Cari amici, siamo con voi. #COVID19 #WeStandWithItaly', 'We stand by Italy during these trying times. Share your Support for our Italian friends, They are our colleagues, friends and family. Cari amici, siamo con voi. #COVID19 #WeStandWithItaly']",
        Month: "March",
        "Dimension 1": 42.778584,
        "Dimension 2": -28.701662,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 228,
      },
      {
        RawTweet:
          "b'RT @TheStalwart: The scene at the Wuhan airport yesterday, as the long lockdown finally came to an end https:\/\/t.co\/Z0wExTTQ8M https:\/\/t.co\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -37.452496,
        "Dimension 2": 7.0376496,
        Sentiment: -0.025,
        Subjectivity: 0.7,
        idx: 229,
      },
      {
        RawTweet:
          "\u201cThis is an unmitigated disaster that the administration has brought upon the population, and I don\u2019t say this lightly,\u201d says Ashish Jha, director of the Harvard Global Health Institute. \u201cWe have had a much worse response than Iran, than Italy, than China https:\/\/t.co\/veDDCWSukh",
        Month: "March",
        "Dimension 1": -20.890211,
        "Dimension 2": -12.654329,
        Sentiment: 0.0,
        Subjectivity: 0.433333333,
        idx: 230,
      },
      {
        RawTweet:
          "b'RT @scarletjpark: WHY IS IT SO FUCKING DIFFICULT FOR @Microsoft WORD TO PLACE AN IMAGE RIGHT WHERE I WANT IT??? Why do you keep moving it t\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": -24.912119,
        "Dimension 2": -25.765032,
        Sentiment: -0.107142857,
        Subjectivity: 0.767857143,
        idx: 231,
      },
      {
        RawTweet:
          "b'\"\\xe2\\x80\\x98Everyone is dying alone\\xe2\\x80\\x99: Italy\\xe2\\x80\\x99s coronavirus crisis taking double toll on families\" https:\/\/t.co\/ukC3IuYFYj #Italy #coronavirus'",
        Month: "April",
        "Dimension 1": -31.289984,
        "Dimension 2": 17.96897,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 232,
      },
      {
        RawTweet:
          "b'Lockdown prevented a surge that would have been difficult to handle, says an official. #FMTNews #India #Pakistan\\xe2\\x80\\xa6 https:\/\/t.co\/pM76OON5gT'",
        Month: "April",
        "Dimension 1": -9.557691,
        "Dimension 2": -34.445335,
        Sentiment: -0.5,
        Subjectivity: 1.0,
        idx: 233,
      },
      {
        RawTweet:
          "b'Happy to provide testimonial for Lunchbox microscopes, good tool to add to home schooling. https:\/\/t.co\/0GN07LQVIx\\xe2\\x80\\xa6 https:\/\/t.co\/tpsoQzpIJh'",
        Month: "April",
        "Dimension 1": 38.808537,
        "Dimension 2": -0.01926997,
        Sentiment: 0.75,
        Subjectivity: 0.8,
        idx: 234,
      },
      {
        RawTweet:
          "We can only fight #COVID19 &amp; keep the world safe in unity. We are so glad that our key partners @gavi, @GlobalFund, @CEPIvaccines, @UNITAID, @ifrc &amp; @wellcometrust are side-by-side with us in this landmark initiative. We will end this pandemic together!",
        Month: "April",
        "Dimension 1": 32.282223,
        "Dimension 2": -22.241581,
        Sentiment: 0.25,
        Subjectivity: 0.875,
        idx: 235,
      },
      {
        RawTweet:
          "['@LindseyGrahamSC #ECE plays an important role during public health &amp; economic emergencies. I agree with @ChildCareAware that Congress needs to support the child care system in their #COVID19 response. Help us!!!']",
        Month: "March",
        "Dimension 1": 24.069944,
        "Dimension 2": -15.734137,
        Sentiment: 0.263541667,
        Subjectivity: 0.422222222,
        idx: 236,
      },
      {
        RawTweet:
          'b"https:\/\/t.co\/DrQUKirknB Holy crap!  $2.3 trillion coming from the CARES Act soon.  That\'s over 3 times as much as w\\xe2\\x80\\xa6 https:\/\/t.co\/6k8yUtnnyO"',
        Month: "April",
        "Dimension 1": -18.298977,
        "Dimension 2": 44.62622,
        Sentiment: -0.4,
        Subjectivity: 0.5,
        idx: 237,
      },
      {
        RawTweet:
          '["https:\/\/t.co\/ekH9zI30AX\\n\\nWe uploaded our live discussion on the COVID-19 situation here in Japan and how we\'re going. Hope you are all safe out there \ud83d\ude4f\\n.\\n.\\n#onthecouchwithus \\n#covid19 \\n#coronavirus \\n#japanlife https:\/\/t.co\/RBDUpBGBuM"]',
        Month: "March",
        "Dimension 1": 5.6198463,
        "Dimension 2": 5.419402,
        Sentiment: 0.318181818,
        Subjectivity: 0.5,
        idx: 238,
      },
      {
        RawTweet:
          "b'RT @DrTedros: The WHO WhatsApp Alert service on COVID-19 las already reached 6 million users since launching yesterday!\\n\\nEveryone is encour\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -8.991345,
        "Dimension 2": 44.726635,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 239,
      },
      {
        RawTweet:
          "['@TuckerCarlson Some hopeful news on #Coronavirus.\\nFarr\u2019s Law states that most if not all epidemics tend to rise and fall in a bell-shaped curve. AIDS, SARS, Ebola \u2014 all followed that pattern. So does seasonal flu each year.\\nhttps:\/\/t.co\/gcepeW7zCG', '@TuckerCarlson Some hopeful news on #Coronavirus.\\nFarr\u2019s Law states that most if not all epidemics tend to rise and fall in a bell-shaped curve. AIDS, SARS, Ebola \u2014 all followed that pattern. So does seasonal flu each year.\\nhttps:\/\/t.co\/gcepeW7zCG']",
        Month: "March",
        "Dimension 1": -2.0300522,
        "Dimension 2": 22.264402,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 240,
      },
      {
        RawTweet:
          "['The \"we\\'re all in this thing together\" catch phrase of this #coronavirus garbage is another reason I think it was worsened by the #Liberal media. They had time to film all those PSAs this week \ud83d\ude44 #dispicable']",
        Month: "March",
        "Dimension 1": -21.993391,
        "Dimension 2": -1.2819041,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 241,
      },
      {
        RawTweet:
          "b'Members of the Indian film industry and the cricket world come together to extend a helping hand towards those affe\\xe2\\x80\\xa6 https:\/\/t.co\/aVIUJ2G5bh'",
        Month: "May",
        "Dimension 1": 36.52484,
        "Dimension 2": -12.997076,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 242,
      },
      {
        RawTweet:
          "['Today on Maritime Connection... managing the anxiety and fear around #COVID19.  With appearances by Dr. Lisa Barrett, Jeff Karabanow of @OutoftheColdHFX and @suzeberkhout to name a few.  Call at 4pmAT 1.800.565.1940.  #cbcmar', 'Today on Maritime Connection... managing the anxiety and fear around #COVID19.  With appearances by Dr. Lisa Barrett, Jeff Karabanow of @OutoftheColdHFX and @suzeberkhout to name a few.  Call at 4pmAT 1.800.565.1940.  #cbcmar']",
        Month: "March",
        "Dimension 1": 5.4027905,
        "Dimension 2": -19.017164,
        Sentiment: -0.2,
        Subjectivity: 0.1,
        idx: 243,
      },
      {
        RawTweet:
          "['#Coronavirus #fatality #analysis for the U.S. using @COVID19Tracking data. Projected #fatalities shown if current trend continues. \\n| #COVID19 | #mortality | #SARSCoV2 | #US | #UnitedStates | #Pandemic | #model | #Regression https:\/\/t.co\/xL34jf0KGA']",
        Month: "March",
        "Dimension 1": -3.6520026,
        "Dimension 2": 5.3060374,
        Sentiment: 0.0,
        Subjectivity: 0.4,
        idx: 244,
      },
      {
        RawTweet:
          "Been wondering why #SARSCoV2 has such a high case fatality rate (CFR)?  \r\n\r\nThis important paper explains its effects on the #cardiovascular system.  #COVID19\r\n\r\nAnyone with #heartdisease should take note. https:\/\/t.co\/8SSvtbGSX0",
        Month: "March",
        "Dimension 1": -9.132409,
        "Dimension 2": -2.3403683,
        Sentiment: 0.186666667,
        Subjectivity: 0.68,
        idx: 245,
      },
      {
        RawTweet:
          "13\/ \u2026 to be fair, over 20 yrs we've failed to gear up for pandemics \u2013 see @ddiamond @politico https:\/\/t.co\/IJZgn8h4WR While this'll be partisan chum, both things can be (&amp; are) true: long-term failure to prep for outbreaks generally, along w\/ poor response to Covid specifically",
        Month: "April",
        "Dimension 1": -41.167377,
        "Dimension 2": 12.243419,
        Sentiment: -0.019444444,
        Subjectivity: 0.541666667,
        idx: 246,
      },
      {
        RawTweet:
          "['Check out hundreds of free books, games and kids activities to enjoy during the #coronavirus #lockdown: \\n\\nhttps:\/\/t.co\/jUVqtFiKoH\\n\\n#boredombusters #kidsactivities #homelearning #homeschool #kids #freebooks #recipes #learning #homeactivities #covid19 #educational #stayhome https:\/\/t.co\/6e4pEIPUdD']",
        Month: "March",
        "Dimension 1": 13.380575,
        "Dimension 2": -4.9358783,
        Sentiment: 0.35,
        Subjectivity: 0.516666667,
        idx: 247,
      },
      {
        RawTweet:
          '["This is a crucial time @efcc and other responsible agencies needs to be proactive to ensure funds disbursed for #COVID19NIGERIA aren\'t diverted for selfish gratifications.\\n\\nAlso it a time we need our leaders to be patriots even if it for just this period. #COVID19 knows no class"]',
        Month: "March",
        "Dimension 1": -3.3621352,
        "Dimension 2": -25.735966,
        Sentiment: -0.10625,
        Subjectivity: 0.73125,
        idx: 248,
      },
      {
        RawTweet:
          "@rkh_md @kari_jerge You\u2019re right, not all do but some are certified at the same Level D protection as N95+face shield and provides broader coverage, so need to check which type you have",
        Month: "April",
        "Dimension 1": -5.389777,
        "Dimension 2": -31.448217,
        Sentiment: 0.142857143,
        Subjectivity: 0.330357143,
        idx: 249,
      },
      {
        RawTweet:
          "b'U.K Prime Minister Boris Johnson casts doubts on discovery of #COVID19 #vaccine. The British premier however suppor\\xe2\\x80\\xa6 https:\/\/t.co\/373XbYeCdR'",
        Month: "May",
        "Dimension 1": -16.842941,
        "Dimension 2": 1.3761241,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 250,
      },
      {
        RawTweet:
          "The U.S. results are based on a limited data set published by the CDC of the early experience. The results are influenced by a limited amount of testing of mild cases and a tragic and early concentration of cases in a nursing facility where there were a high number of fatalities.",
        Month: "March",
        "Dimension 1": -23.438084,
        "Dimension 2": 25.752962,
        Sentiment: -0.028503401,
        Subjectivity: 0.382244898,
        idx: 251,
      },
      {
        RawTweet:
          "b'Thousands of #AtlanticCity residents and casino workers came out for the @CFBNJ and @NJCRDA food distribution event\\xe2\\x80\\xa6 https:\/\/t.co\/LsnkIPogDi'",
        Month: "May",
        "Dimension 1": 16.428274,
        "Dimension 2": 33.65397,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 252,
      },
      {
        RawTweet:
          "b'We are proud to serve our community and hope everyone is staying healthy and safe! Remember that we are here for yo\\xe2\\x80\\xa6 https:\/\/t.co\/cYNb4DRicx'",
        Month: "April",
        "Dimension 1": 40.325478,
        "Dimension 2": -19.651009,
        Sentiment: 0.641666667,
        Subjectivity: 0.666666667,
        idx: 253,
      },
      {
        RawTweet:
          "['Add your name to this petition to ensure paid sick days for ALL workers to slow the spread of #COVID19 https:\/\/t.co\/vdHMktvVms']",
        Month: "March",
        "Dimension 1": -9.731445,
        "Dimension 2": 15.055379,
        Sentiment: -0.507142857,
        Subjectivity: 0.628571429,
        idx: 254,
      },
      {
        RawTweet:
          "b'RT @JasonMillerinDC: Must-read from @ScottGottliebMD: \\n\\n\"Antivirals and antibody therapies are showing promise as treatments for coronaviru\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 22.22506,
        "Dimension 2": -3.0318053,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 255,
      },
      {
        RawTweet:
          "@AuReform @rw2088 You know what makes me sad THE MOST is you\u2019re on my page from reading something about me posted Ill-fully by someone with more followers (And frankly, has caused nothing but mess) but Imma satisfy your inquiries brb...",
        Month: "April",
        "Dimension 1": -23.965956,
        "Dimension 2": -18.593918,
        Sentiment: 0.08125,
        Subjectivity: 0.54375,
        idx: 256,
      },
      {
        RawTweet:
          "['@LindseyGrahamSC #ECE plays an important role during public health &amp; economic emergencies. I agree with @ChildCareAware that Congress needs to support the child care system in their #COVID19 response. Help us!!!']",
        Month: "March",
        "Dimension 1": 24.069944,
        "Dimension 2": -15.734137,
        Sentiment: 0.263541667,
        Subjectivity: 0.422222222,
        idx: 257,
      },
      {
        RawTweet:
          "b'Nurses should refuse to treat #coronavirus patients \"as a last resort\" if they are not given adequate personal prot\\xe2\\x80\\xa6 https:\/\/t.co\/69gMVOhQXF'",
        Month: "April",
        "Dimension 1": -34.737576,
        "Dimension 2": -10.111588,
        Sentiment: 0.111111111,
        Subjectivity: 0.233333333,
        idx: 258,
      },
      {
        RawTweet:
          "@gpollara Thank you @gpollara. Small numbers but in this JAMA article, secondary attack rate of severe cases was higher, whereas it was 0% in contacts of asymptomatic cases. also contacts of severe cases were more likely to develop severe infection. table 2\r\n\r\nhttps:\/\/t.co\/KhUDDik9FH",
        Month: "May",
        "Dimension 1": -14.455679,
        "Dimension 2": -20.268078,
        Sentiment: 0.04,
        Subjectivity: 0.54,
        idx: 259,
      },
      {
        RawTweet:
          "b'#Death by #lockdown\\n\\n#Scientists advising #UK government ministers predict that the extreme restrictions imposed in\\xe2\\x80\\xa6 https:\/\/t.co\/5xP1Rt7YjW'",
        Month: "April",
        "Dimension 1": -18.365242,
        "Dimension 2": -3.3597546,
        Sentiment: -0.125,
        Subjectivity: 1.0,
        idx: 260,
      },
      {
        RawTweet:
          "These face masks come with a straw hole for sipping cocktails https:\/\/t.co\/bAx4r6ydwx https:\/\/t.co\/WtGmn7zNio",
        Month: "May",
        "Dimension 1": 6.883213,
        "Dimension 2": -41.0867,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 261,
      },
      {
        RawTweet:
          "b'The early stages of the #PPP program \\xe2\\x80\\x9cfunctioned less as social insurance to support the hardest-hit #COVID19  area\\xe2\\x80\\xa6 https:\/\/t.co\/2VjIaAyO1Z'",
        Month: "May",
        "Dimension 1": -1.1430326,
        "Dimension 2": -30.150398,
        Sentiment: -0.011111111,
        Subjectivity: 0.144444444,
        idx: 262,
      },
      {
        RawTweet:
          "@skathire @nataliexdean @cmyeaton This is terrific. Thank you Sek. \r\n\r\nOne question I have is that if the specificity is 100% on a sample of 82 negative samples -- what's the confidence interval around that?\r\n\r\nSpecificity is huge driver in all of these serosurvey estimates. \r\n\r\nI'd love it if 4% were truly positive!",
        Month: "April",
        "Dimension 1": 12.595056,
        "Dimension 2": 27.351871,
        Sentiment: 0.176818182,
        Subjectivity: 0.689090909,
        idx: 263,
      },
      {
        RawTweet:
          "b'Plantation #Covid19 Update #64\\n\\nOn April 30th at 6:30pm, Mayor Lynn Stoner will join other local Mayors as well as\\xe2\\x80\\xa6 https:\/\/t.co\/yys2C9auGr'",
        Month: "April",
        "Dimension 1": 8.143474,
        "Dimension 2": 42.138752,
        Sentiment: -0.0625,
        Subjectivity: 0.1875,
        idx: 264,
      },
      {
        RawTweet:
          "b'20 rupees wapa Mask 200 rupees men bhechne waly bhi keh rahe hen TAWAF aur Masajid band kardi gain hen.\\n#COVID19'",
        Month: "March",
        "Dimension 1": -3.0081766,
        "Dimension 2": 37.79112,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 265,
      },
      {
        RawTweet:
          "[\"All the VIP's are make decision of not gather any kind of crowd it's strange all the leaders are moving with their crowd \\n  pm @narendramodi must also  make the announcement about the leaders to move alone wherever they would like  nither it may also spread #COVID19\", \"All the VIP's are make decision of not gather any kind of crowd it's strange all the leaders are moving with their crowd \\n  pm @narendramodi must also  make the announcement about the leaders to move alone wherever they would like  nither it may also spread #COVID19\"]",
        Month: "March",
        "Dimension 1": -38.755684,
        "Dimension 2": -4.063219,
        Sentiment: 0.275,
        Subjectivity: 0.525,
        idx: 266,
      },
      {
        RawTweet:
          "b'With all that\\xe2\\x80\\x99s going on around the world at the moment, we want to share key resources focusing on #COVID19. Wheth\\xe2\\x80\\xa6 https:\/\/t.co\/BYbvBfpaEn'",
        Month: "April",
        "Dimension 1": 15.465149,
        "Dimension 2": -16.556143,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 267,
      },
      {
        RawTweet:
          "Its a beautiful Sunday morning in May\r\n\r\nAbout to be on with @JohnKingCNN and the brilliant @meganranney\r\n\r\nStates starting to relax...with most states NOT meeting President's Opening Up America Again criteria\r\n\r\nThis is a high risk experiment. The cost of getting it wrong will be high",
        Month: "May",
        "Dimension 1": -7.6759443,
        "Dimension 2": 20.820568,
        Sentiment: 0.295714286,
        Subjectivity: 0.654285714,
        idx: 268,
      },
      {
        RawTweet:
          "Four full pages, and only a fraction.\r\n\r\nThe digital version shocked and surprised us.\r\n\r\nBut holding their names and stories in my hands is heavier and harder. https:\/\/t.co\/5d3vB8VMGz",
        Month: "May",
        "Dimension 1": -17.491045,
        "Dimension 2": 26.36053,
        Sentiment: -0.058333333,
        Subjectivity: 0.541666667,
        idx: 269,
      },
      {
        RawTweet:
          "b'RT @jeremyfaust: Unfortunately, ER docs like me have tremendous job security in this particular country. \\xf0\\x9f\\xa4\\xa6\\xf0\\x9f\\x8f\\xbb\\xe2\\x80\\x8d\\xe2\\x99\\x82\\xef\\xb8\\x8f https:\/\/t.co\/LKcc79TRNH'",
        Month: "April",
        "Dimension 1": 11.186336,
        "Dimension 2": -13.265081,
        Sentiment: -9.25e-18,
        Subjectivity: 0.777777778,
        idx: 270,
      },
      {
        RawTweet:
          "['This morning @alwayssavemoney joins us to talk about the financial impact of #Covid19. The threat of the virus is affecting everything from our investments, how we travel and shop. But there is one bright spot. Find out more coming up. https:\/\/t.co\/WRLMldwvYT']",
        Month: "March",
        "Dimension 1": 15.340586,
        "Dimension 2": 18.178757,
        Sentiment: 0.4,
        Subjectivity: 0.433333333,
        idx: 271,
      },
      {
        RawTweet:
          "b'Please join us as we \\xe2\\x80\\x9cride\\xe2\\x80\\x9d together in support of our Lyme Warriors and Frontline Workers in NYC. Register for fre\\xe2\\x80\\xa6 https:\/\/t.co\/GE8Q8dKhEf'",
        Month: "May",
        "Dimension 1": 38.56711,
        "Dimension 2": 14.002063,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 272,
      },
      {
        RawTweet:
          "We CAN open sooner &amp; safely! But only if we act NOW to meet benchmarks of revolutionized public health, stronger health care, &amp; better virus tracking. I outline how here: https:\/\/t.co\/UNU96NZvjK",
        Month: "April",
        "Dimension 1": 26.9031,
        "Dimension 2": -12.420014,
        Sentiment: 0.225,
        Subjectivity: 0.513333333,
        idx: 273,
      },
      {
        RawTweet:
          "b'10\/ There are complex formulas &amp; online calculators to help w\/ the math (I like https:\/\/t.co\/1I0mWeqPZr, use 2nd se\\xe2\\x80\\xa6 https:\/\/t.co\/UnrC2zHRwE'",
        Month: "May",
        "Dimension 1": 13.437348,
        "Dimension 2": -2.5827644,
        Sentiment: -0.15,
        Subjectivity: 0.2,
        idx: 274,
      },
      {
        RawTweet:
          "['The time to act is NOW! Tell governors, the Department of Homeland Security, ICE, mayors, and sheriffs not to leave anyone behind and take immediate #COVID19 action at prisons, jails, and immigrant detention centers. #CoronaVirus https:\/\/t.co\/qLouPJjA0V', 'The time to act is NOW! Tell governors, the Department of Homeland Security, ICE, mayors, and sheriffs not to leave anyone behind and take immediate #COVID19 action at prisons, jails, and immigrant detention centers. #CoronaVirus https:\/\/t.co\/qLouPJjA0V']",
        Month: "March",
        "Dimension 1": -7.5618467,
        "Dimension 2": -18.850859,
        Sentiment: -0.14375,
        Subjectivity: 0.4,
        idx: 275,
      },
      {
        RawTweet:
          "b'We have ALL entered a #COVID19 world in a dark tunnel no rules nor lights. Old rules don\\xe2\\x80\\x99t apply. All figuring out\\xe2\\x80\\xa6 https:\/\/t.co\/qoF3jMa9PG'",
        Month: "May",
        "Dimension 1": -32.728027,
        "Dimension 2": -18.233368,
        Sentiment: -0.025,
        Subjectivity: 0.3,
        idx: 276,
      },
      {
        RawTweet:
          "['How could you stop spread of virus? Ban it. Authorities of Turkmenistan  \ud83c\uddf9\ud83c\uddf2 banned mentions of corona virus.\\nJob well done.\\n#coronavirus #pandemic']",
        Month: "March",
        "Dimension 1": -30.173573,
        "Dimension 2": 1.1435287,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 277,
      },
      {
        RawTweet:
          "But what they have to offer -- the good stuff -- is that both already value theory and evidence. Emphasis may be different, frameworks for thinking may be different, but rational thinking is rational thinking, and blind adherence to arbitrary principles isn't it.",
        Month: "May",
        "Dimension 1": -13.094703,
        "Dimension 2": -33.04412,
        Sentiment: 0.02,
        Subjectivity: 0.613333333,
        idx: 278,
      },
      {
        RawTweet:
          "['Two employees working with IT companies @Dell and @Mindtree_Ltd have been tested positive for #coronavirus, according to company statements.\\n\\n#coronavirusinindia #COVID19 \\n\\nhttps:\/\/t.co\/7wYBaM6QQv']",
        Month: "March",
        "Dimension 1": 0.4423853,
        "Dimension 2": 18.03625,
        Sentiment: 0.227272727,
        Subjectivity: 0.545454545,
        idx: 279,
      },
      {
        RawTweet:
          "['[#COVID19 pandemic] \\nCollections from our centres for hospitals, doctors, health authorities:\\nmore than 71,000 masks (26,000 FFP2&amp;3)\\nmore than 2,300 litres of hydroalcoholic solution or equivalent\\n+ glasses, gloves, head &amp; shoe covers, gowns &amp; overalls\\nhttps:\/\/t.co\/EcYVwGx0Bo https:\/\/t.co\/krTp5m6jic', '[#COVID19 pandemic] \\nCollections from our centres for hospitals, doctors, health authorities:\\nmore than 71,000 masks (26,000 FFP2&amp;3)\\nmore than 2,300 litres of hydroalcoholic solution or equivalent\\n+ glasses, gloves, head &amp; shoe covers, gowns &amp; overalls\\nhttps:\/\/t.co\/EcYVwGx0Bo https:\/\/t.co\/krTp5m6jic']",
        Month: "March",
        "Dimension 1": -6.3361917,
        "Dimension 2": 33.903595,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 280,
      },
      {
        RawTweet:
          "['Coronavirus cases could double every day or two in Alabama https:\/\/t.co\/VFqAC2bkY8 #coronavirus #preparedness https:\/\/t.co\/4rZ9WlrcZ0', 'Coronavirus cases could double every day or two in Alabama https:\/\/t.co\/VFqAC2bkY8 #coronavirus #preparedness https:\/\/t.co\/4rZ9WlrcZ0']",
        Month: "March",
        "Dimension 1": -5.410484,
        "Dimension 2": 41.650238,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 281,
      },
      {
        RawTweet:
          "b'Could the obsession of blaming China be because we know we\\xe2\\x80\\x99re capable of deliberately distributing a disease?\\xe2\\x80\\xa6 https:\/\/t.co\/dWNr2e1RC8'",
        Month: "May",
        "Dimension 1": -17.56562,
        "Dimension 2": 8.489996,
        Sentiment: 0.2,
        Subjectivity: 0.4,
        idx: 282,
      },
      {
        RawTweet:
          "@nabuelezam I used to say this casually, but COVID has reinforced it. Anyone who never has imposter syndrome is likely an overconfident jerk. There are some people like that in the COVID discussion. Key to good science is to work hard to find flaws in one's own reasoning before others do.",
        Month: "March",
        "Dimension 1": -13.71256,
        "Dimension 2": -29.982794,
        Sentiment: 0.084722222,
        Subjectivity: 0.834722222,
        idx: 283,
      },
      {
        RawTweet:
          "Brian Hooker has cast himself as a \u201cCDC whistleblower\u201d based on some flawed reanalysis he did on data about the MMR vaccine. He\u2019s a chemical engineer who currently has a faculty position at a fundamentalist Christian university with no medical school.\r\nhttps:\/\/t.co\/3ThS7NhYt2",
        Month: "May",
        "Dimension 1": -28.584951,
        "Dimension 2": -4.8441234,
        Sentiment: -0.125,
        Subjectivity: 0.225,
        idx: 284,
      },
      {
        RawTweet:
          "b'Air so clean, i can see Nick Land yelling at his computer @Outsideness #neochina #COVID19 #nickland #zerotime\\xe2\\x80\\xa6 https:\/\/t.co\/MCOrTJaqqb'",
        Month: "April",
        "Dimension 1": 20.10721,
        "Dimension 2": -25.116215,
        Sentiment: 0.366666667,
        Subjectivity: 0.7,
        idx: 285,
      },
      {
        RawTweet:
          "b'@onisillos @MackayIM Don\\xe2\\x80\\x99t think so. it\\xe2\\x80\\x99s more of a general symptom than a GI symptom. Like fever.'",
        Month: "March",
        "Dimension 1": -14.125673,
        "Dimension 2": -3.3671412,
        Sentiment: 0.275,
        Subjectivity: 0.5,
        idx: 286,
      },
      {
        RawTweet:
          '["Crumbs for everyday people, a gigantic giveaway for corporations, and a massive power grab by Donald Trump. That\'s what we got in the bill Trump just signed into law. #QuidProCOVID19 #Covid_19 #COVID19 #COVID\u30fc19 #PeoplesBailout 1\/9"]',
        Month: "March",
        "Dimension 1": -14.585914,
        "Dimension 2": 15.467261,
        Sentiment: -0.1,
        Subjectivity: 0.8,
        idx: 287,
      },
      {
        RawTweet:
          "The social sciences have a key role to play in addressing the present crisis. Wrote about this in @timeshighered: https:\/\/t.co\/KmBZt2bsC0 @NIH @socscispace",
        Month: "May",
        "Dimension 1": 16.87254,
        "Dimension 2": -19.006804,
        Sentiment: 0.011111111,
        Subjectivity: 0.355555556,
        idx: 288,
      },
      {
        RawTweet:
          "b'RT @firefoxx66: We desperately seek a better understanding of the USA epidemic.\\n\\nWe lack sequences from *so many states*. From NY we have *\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -18.153303,
        "Dimension 2": -11.260243,
        Sentiment: 0.133333333,
        Subjectivity: 0.666666667,
        idx: 289,
      },
      {
        RawTweet:
          "b'RT @GrantWahl: The Boss @celinegounder just shut things down at our NYC household. No gym or restaurants for the next 2 weeks. Cooking a gi\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -40.997196,
        "Dimension 2": 3.4184172,
        Sentiment: -0.077777778,
        Subjectivity: 0.144444444,
        idx: 290,
      },
      {
        RawTweet:
          "b'Safe Citrus extract a part of this safe sanitizing agent. \\nSouth African biotech company provides surface disinfect\\xe2\\x80\\xa6 https:\/\/t.co\/01hP1ZYmIf'",
        Month: "April",
        "Dimension 1": 3.3320997,
        "Dimension 2": -3.150997,
        Sentiment: 0.333333333,
        Subjectivity: 0.333333333,
        idx: 291,
      },
      {
        RawTweet:
          "['by far the best dashboard I could find to monitor daily real-time updates on #coronavirus in the US: https:\/\/t.co\/g1Y7mXu7Me #coronavirusUS', 'by far the best dashboard I could find to monitor daily real-time updates on #coronavirus in the US: https:\/\/t.co\/g1Y7mXu7Me #coronavirusUS']",
        Month: "March",
        "Dimension 1": 12.77931,
        "Dimension 2": 29.042576,
        Sentiment: 0.366666667,
        Subjectivity: 0.433333333,
        idx: 292,
      },
      {
        RawTweet:
          "['Barry McGuigan Vs Eusebio Pedroza   1985 full fight https:\/\/t.co\/nBwLq7a92h via @YouTube\\nToday\u2019s classic #FightoftheDay is the crowning night of one of Britain\u2019s finest fighters @ClonesCyclone enjoy of the great nights for British fight fans #Boxing #Coronavirus #COVID2019']",
        Month: "March",
        "Dimension 1": 18.348864,
        "Dimension 2": 27.394716,
        Sentiment: 0.343333333,
        Subjectivity: 0.393333333,
        idx: 293,
      },
      {
        RawTweet:
          "b'@darkyears thanks for spotting the error. We have confirmed it is an error and sent a correction to the journal'",
        Month: "April",
        "Dimension 1": 4.8665934,
        "Dimension 2": -30.585922,
        Sentiment: 0.3,
        Subjectivity: 0.6,
        idx: 294,
      },
      {
        RawTweet:
          "['How many positive #COVID19 cases are in #Nebraska?\\nDr. Adi Pour: We have 25 cases in Douglas County. \\nDr. Gary Anthone: There are currently 32 positive cases in the state of Nebraska, and we\u2019ve done over 800 tests.']",
        Month: "March",
        "Dimension 1": -13.639958,
        "Dimension 2": 41.07021,
        Sentiment: 0.318181818,
        Subjectivity: 0.53030303,
        idx: 295,
      },
      {
        RawTweet:
          "b'New and updates about COVID-19 continue to pour in. @GT_Law curated a summary of its recent alerts and upcoming web\\xe2\\x80\\xa6 https:\/\/t.co\/QpMiqxBENd'",
        Month: "May",
        "Dimension 1": 17.090141,
        "Dimension 2": -14.443928,
        Sentiment: 0.068181818,
        Subjectivity: 0.352272727,
        idx: 296,
      },
      {
        RawTweet:
          "b'What did the @McDonalds employee with no sick paid plan SAY to the burger? Cough, cough, cough. #COVID19\\xe2\\x80\\xa6 https:\/\/t.co\/F7zCpmIzwN'",
        Month: "May",
        "Dimension 1": -7.72562,
        "Dimension 2": 12.457375,
        Sentiment: 0.357142857,
        Subjectivity: 0.857142857,
        idx: 297,
      },
      {
        RawTweet:
          "b'Pray for Spain\\nThe economic impact on Spain, which never recovered from the 2008 recession, has sent unemployment s\\xe2\\x80\\xa6 https:\/\/t.co\/ZDcOQEIqYA'",
        Month: "May",
        "Dimension 1": -40.675957,
        "Dimension 2": 9.126904,
        Sentiment: 0.2,
        Subjectivity: 0.2,
        idx: 298,
      },
      {
        RawTweet:
          "b'COVID-19 cases in US crosses 1 million-mark; death toll exceeds American fatalities in Vietnam War.\\xe2\\x80\\xa6 https:\/\/t.co\/wlwnil2tdW'",
        Month: "April",
        "Dimension 1": -15.635588,
        "Dimension 2": 39.347046,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 299,
      },
      {
        RawTweet:
          "b'These \"HEROES\"  of District Administration Quetta are risking their lives for us to fight against #COVID19 \\nLove ,\\xe2\\x80\\xa6 https:\/\/t.co\/eD1WRB6JsD'",
        Month: "April",
        "Dimension 1": 14.506358,
        "Dimension 2": -10.803329,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 300,
      },
      {
        RawTweet:
          "['I can only speak from my own observations and experiences, but far from social distancing, people are actually interacting with each other more than ever, taking about #coronavirus in the supermarket, in the street, to neighbours, friends and total strangers.']",
        Month: "March",
        "Dimension 1": -28.69384,
        "Dimension 2": 11.088979,
        Sentiment: 0.138541667,
        Subjectivity: 0.598958333,
        idx: 301,
      },
      {
        RawTweet:
          "b'@WorldBank says it has approved $100 million grant for Afghanistan to fight #coronavirus. Corruption remains the nu\\xe2\\x80\\xa6 https:\/\/t.co\/TMItcZDYDZ'",
        Month: "April",
        "Dimension 1": -8.569141,
        "Dimension 2": 33.814735,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 302,
      },
      {
        RawTweet:
          "['The @MSCActions NCP team around the world wants tell you something during this isolation time #TogetherWeCan #COVID19 @Net4Mobility #StayAtHome \\n@EU_Commission @EEN_EU @SauerJuliane @crisgomez55 @crisgraciarod @EsHorizonte2020 https:\/\/t.co\/zIzd4Rwpl4']",
        Month: "March",
        "Dimension 1": 21.354317,
        "Dimension 2": -0.037894066,
        Sentiment: 0.2,
        Subjectivity: 0.1,
        idx: 303,
      },
      {
        RawTweet:
          "['In the face of adversity, EU countries are helping each other with \ud83c\udde9\ud83c\uddea taking patients from \ud83c\uddeb\ud83c\uddf7 &amp; \ud83c\uddee\ud83c\uddf9; \ud83c\udde6\ud83c\uddf9 &amp; \ud83c\udde9\ud83c\uddea sending more than 1 million \ud83d\ude37 to \ud83c\uddee\ud83c\uddf9.\\n\\n@EU_Commission is supporting EU countries &amp; working on all fronts to fight #Coronavirus.\ud83d\udc47 https:\/\/t.co\/sOUpnTTf8g', 'In the face of adversity, EU countries are helping each other with \ud83c\udde9\ud83c\uddea taking patients from \ud83c\uddeb\ud83c\uddf7 &amp; \ud83c\uddee\ud83c\uddf9; \ud83c\udde6\ud83c\uddf9 &amp; \ud83c\udde9\ud83c\uddea sending more than 1 million \ud83d\ude37 to \ud83c\uddee\ud83c\uddf9.\\n\\n@EU_Commission is supporting EU countries &amp; working on all fronts to fight #Coronavirus.\ud83d\udc47 https:\/\/t.co\/sOUpnTTf8g', 'In the face of adversity, EU countries are helping each other with \ud83c\udde9\ud83c\uddea taking patients from \ud83c\uddeb\ud83c\uddf7 &amp; \ud83c\uddee\ud83c\uddf9; \ud83c\udde6\ud83c\uddf9 &amp; \ud83c\udde9\ud83c\uddea sending more than 1 million \ud83d\ude37 to \ud83c\uddee\ud83c\uddf9.\\n\\n@EU_Commission is supporting EU countries &amp; working on all fronts to fight #Coronavirus.\ud83d\udc47 https:\/\/t.co\/sOUpnTTf8g']",
        Month: "March",
        "Dimension 1": 2.76943,
        "Dimension 2": 1.2915367,
        Sentiment: 0.208333333,
        Subjectivity: 0.375,
        idx: 304,
      },
      {
        RawTweet:
          "@BluebirdRight @Caroline_OF_B Happy to do so for anyone who thinks we shouldn't even be discussing these issues or they are made up. I'll block you, to spare you from future disappointment.",
        Month: "May",
        "Dimension 1": -6.7828503,
        "Dimension 2": -35.16313,
        Sentiment: 0.066666667,
        Subjectivity: 0.508333333,
        idx: 305,
      },
      {
        RawTweet:
          "Thank you so much for your excellent leadership Mr. Prime Minister. @WHO and #Singapore have been fully aligned from the start on #COVID19 response. Much Gratitude to you and your Health Minister @GANKIMYONG https:\/\/t.co\/Jhrt53BI3A",
        Month: "March",
        "Dimension 1": 42.95757,
        "Dimension 2": -19.171177,
        Sentiment: 0.466666667,
        Subjectivity: 0.466666667,
        idx: 306,
      },
      {
        RawTweet:
          "b'We keep hearing #eatlocal from delivery services. It shouldn\\xe2\\x80\\x99t come as a shock that many #restaurants won\\xe2\\x80\\x99t survive\\xe2\\x80\\xa6 https:\/\/t.co\/9OY8LBOhiH'",
        Month: "April",
        "Dimension 1": -6.013886,
        "Dimension 2": 13.89371,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 307,
      },
      {
        RawTweet:
          "['In 2018, we wrote about prevention messaging for what @CDCgov deemed one of the most severe #FluSeason in decades. Although we face an entirely different situation with #COVID19, we think these strategies based in our behavioral determinants still apply. https:\/\/t.co\/4PvVodozc2', 'In 2018, we wrote about prevention messaging for what @CDCgov deemed one of the most severe #FluSeason in decades. Although we face an entirely different situation with #COVID19, we think these strategies based in our behavioral determinants still apply. https:\/\/t.co\/4PvVodozc2']",
        Month: "March",
        "Dimension 1": -11.21274,
        "Dimension 2": -6.9712586,
        Sentiment: 0.25,
        Subjectivity: 0.55,
        idx: 308,
      },
      {
        RawTweet:
          "THREAD: We must advance therapeutics fast. That requires proper clinical trials, through master protocol where patients in need are randomized to therapy that's already shown indication of effectiveness in earlier studies, but a crash program to scale up manufacturing in parallel",
        Month: "March",
        "Dimension 1": 24.150742,
        "Dimension 2": -10.313297,
        Sentiment: 0.05,
        Subjectivity: 0.3,
        idx: 309,
      },
      {
        RawTweet:
          "['my warmest thoughts go out to my colleagues and friends around the world dealing with this pandemic... Stay safe guys... #coronavirus #coronavirusuk', 'my warmest thoughts go out to my colleagues and friends around the world dealing with this pandemic... Stay safe guys... #coronavirus #coronavirusuk']",
        Month: "March",
        "Dimension 1": 33.226616,
        "Dimension 2": -21.279005,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 310,
      },
      {
        RawTweet:
          "b'#CoronavirusIreland: 12 more deaths &amp; 76 new COVID-19 cases have been confirmed tonight\\n\\nIts\\xe2\\x80\\x99 the sixth day in a ro\\xe2\\x80\\xa6 https:\/\/t.co\/7Q270aWAj9'",
        Month: "May",
        "Dimension 1": -9.389325,
        "Dimension 2": 44.02129,
        Sentiment: 0.345454545,
        Subjectivity: 0.651515152,
        idx: 311,
      },
      {
        RawTweet:
          "b'Nusa Penida Island - Bali\\nStay at home first. Please come after all be good. \\nWe always waiting you to make vocatio\\xe2\\x80\\xa6 https:\/\/t.co\/XhFMfWSKNM'",
        Month: "May",
        "Dimension 1": 11.49427,
        "Dimension 2": -8.4546385,
        Sentiment: 0.475,
        Subjectivity: 0.466666667,
        idx: 312,
      },
      {
        RawTweet:
          "['Sign the Petition: temporarily close all NYC schools to slow the spread of the COVID-19 #Coronavirus: take classes online!  - https:\/\/t.co\/F4yQpn6SHf via @Change', 'Sign the Petition: temporarily close all NYC schools to slow the spread of the COVID-19 #Coronavirus: take classes online!  - https:\/\/t.co\/F4yQpn6SHf via @Change']",
        Month: "March",
        "Dimension 1": -28.54929,
        "Dimension 2": 6.1885543,
        Sentiment: -0.375,
        Subjectivity: 0.4,
        idx: 313,
      },
      {
        RawTweet:
          "@Vespii009 That\u2019s how I know you have not done your research cause you are wrong. And social media works how I want it to cause it\u2019s mine SO if I want to tell you do do BETTER research then that\u2019s what I\u2019ll say. Same as you doing to me as you please.",
        Month: "April",
        "Dimension 1": -7.359534,
        "Dimension 2": -34.682865,
        Sentiment: 0.008333333,
        Subjectivity: 0.397916667,
        idx: 314,
      },
      {
        RawTweet:
          "['Aren\u2019t capitalist systems lauded for stores having plentiful variety &amp; stock?\\n \\n#COVID19 #panicbuying relates to capitalist factors:\\n\\n1) Fear re: no support\/need to care for yourself\\n2) Just-in-time inventory systems avoiding overstock cost\\n3) Scarce supply resale\/profiteering']",
        Month: "March",
        "Dimension 1": -21.394135,
        "Dimension 2": -30.935358,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 315,
      },
      {
        RawTweet:
          "Your personal health is your choice, but the health of others is not. You may feel healthy, but if you get infected you can pass the virus to others who are more vulnerable. You owe it to all of us to do your part in stopping the spread of this virus. https:\/\/t.co\/tqWXjH2n1r",
        Month: "March",
        "Dimension 1": -4.1654673,
        "Dimension 2": -21.480894,
        Sentiment: 0.125,
        Subjectivity: 0.45,
        idx: 316,
      },
      {
        RawTweet:
          '["@Mimimefo237 I\'ve built an automatic tracker for #COVID19 cases in Cameroon (https:\/\/t.co\/aM9mzksKzy), it also includes emergency numbers. And was hoping we could work directly for more information."]',
        Month: "March",
        "Dimension 1": 18.191671,
        "Dimension 2": -8.819059,
        Sentiment: 0.3,
        Subjectivity: 0.45,
        idx: 317,
      },
      {
        RawTweet:
          "b'@PowerGeist If I was a college student I would definitely apply to the #SEAPHAGE program!  Check it out!'",
        Month: "March",
        "Dimension 1": 28.918058,
        "Dimension 2": 23.515446,
        Sentiment: 0.0,
        Subjectivity: 0.5,
        idx: 318,
      },
      {
        RawTweet:
          "b'If you\\xe2\\x80\\x99re a sports star and ask for a #Covid19 test you\\xe2\\x80\\x99re a shitty person and should pay for 10 healthcare workers\\xe2\\x80\\x99 tests.'",
        Month: "March",
        "Dimension 1": -9.982563,
        "Dimension 2": 32.39727,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 319,
      },
      {
        RawTweet:
          'b"3) If you provide testing via appointment, how do you allow people who don\'t have internet or computers to make an appointment? Call-in?"',
        Month: "April",
        "Dimension 1": -17.657259,
        "Dimension 2": -26.877111,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 320,
      },
      {
        RawTweet:
          "['Screen time optimization -- finally learn guitar w\/these digital tools!\\n\\n#guitarlessons #learnguitar #selftaught #diy #coronavirus #selfisolation\\n\\n@JamPlay @Fender @yousician @GuitarTricks @ultimateguitar @justinsandercoe @MartySchwartz @andyguitarleeds\\n\\nhttps:\/\/t.co\/xKb4Mo8uE6 https:\/\/t.co\/zUnYd0gGy6']",
        Month: "March",
        "Dimension 1": 9.807698,
        "Dimension 2": 8.761191,
        Sentiment: 0.0,
        Subjectivity: 0.5,
        idx: 321,
      },
      {
        RawTweet:
          "['#ConnexunNews #WHO \\u2066@GiuseppeConteIT\\u2069\\nWorld Health Organization on Sunday saluted Italy\\'s \"genuine sacrifices\" after the government put a quarter of the population under lockdown to try to halt the spread of the novel #coronavirus #Coronavirusitalia\\nhttps:\/\/t.co\/BjKXrGXULQ', '#ConnexunNews #WHO \\u2066@GiuseppeConteIT\\u2069\\nWorld Health Organization on Sunday saluted Italy\\'s \"genuine sacrifices\" after the government put a quarter of the population under lockdown to try to halt the spread of the novel #coronavirus #Coronavirusitalia\\nhttps:\/\/t.co\/BjKXrGXULQ']",
        Month: "March",
        "Dimension 1": -31.073565,
        "Dimension 2": 17.605911,
        Sentiment: 0.4,
        Subjectivity: 0.5,
        idx: 322,
      },
      {
        RawTweet:
          "If we do these things and if # of new cases declines substantially, we can open up parts of our nation, get back some semblance of normalcy\r\n\r\nBut we'll need aggressive testing\/tracing\/isolation\r\n\r\nShoring up our HC system\r\n\r\nInvesting in Tx, vaccines\r\n\r\nRemaining vigilant for resurgence",
        Month: "March",
        "Dimension 1": 0.0400094,
        "Dimension 2": -20.337551,
        Sentiment: 0.045454545,
        Subjectivity: 0.318181818,
        idx: 323,
      },
      {
        RawTweet:
          "@NonameNino I love WHAT attention? \ud83d\ude02 yeah you REALLY Don\u2019t have a clue about me. I\u2019m done \u201cproving\u201d myself. You will be unsatisfied and that is okay. Stay blessed. https:\/\/t.co\/dTgt5N76hM https:\/\/t.co\/N7WwAq1l8v",
        Month: "April",
        "Dimension 1": -6.1464477,
        "Dimension 2": -37.88224,
        Sentiment: 0.4,
        Subjectivity: 0.433333333,
        idx: 324,
      },
      {
        RawTweet:
          "Public health officials will listen if experts (many, not just me in Boston) get them the message to social distance now.  Urgency lacking many places but building https:\/\/t.co\/hSklwJaXlI",
        Month: "March",
        "Dimension 1": 28.927927,
        "Dimension 2": -5.57744,
        Sentiment: 0.258333333,
        Subjectivity: 0.283333333,
        idx: 325,
      },
      {
        RawTweet:
          "No pants (well, I was wearing \u2018pants\u2019 in the British sense, but not the American one).\r\n\r\nWent with some classy old faded shorts. It\u2019s humid here today in NYC!",
        Month: "May",
        "Dimension 1": -30.167154,
        "Dimension 2": -24.886435,
        Sentiment: 0.05625,
        Subjectivity: 0.275,
        idx: 326,
      },
      {
        RawTweet:
          '["I actually follow my country\'s and provincial updates on how to avoid and keep clear off and be safe from #COVID19 . Tired of all #hollywood #Bollywood #actors , #singers , and #sports #Stars becoming experts. Too many messages from them. #coronavirus"]',
        Month: "March",
        "Dimension 1": -4.106051,
        "Dimension 2": -10.71711,
        Sentiment: 0.191666667,
        Subjectivity: 0.505555556,
        idx: 327,
      },
      {
        RawTweet:
          "b'Has your child tested positive for #COVID19? We want to hear from you! We are interviewing Canadian parents who hav\\xe2\\x80\\xa6 https:\/\/t.co\/9Lidpjbo5e'",
        Month: "April",
        "Dimension 1": 40.592026,
        "Dimension 2": 20.085222,
        Sentiment: 0.284090909,
        Subjectivity: 0.545454545,
        idx: 328,
      },
      {
        RawTweet:
          "b'RT @progressiveMDs: \\xf0\\x9f\\x9a\\xa8 #MedTwitter open letter re: #coronavirus.\\n\\n Demand a proper response to #COVID19.\\n\\n\\xe2\\x8f\\xb0 SIGN THIS NOW. Signature collect\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 8.212683,
        "Dimension 2": -0.5370284,
        Sentiment: 0.0,
        Subjectivity: 0.3,
        idx: 329,
      },
      {
        RawTweet:
          "b'We sat down virtually with Jo Mackie, Customer and People Director at @superdrug - a Working Families employer memb\\xe2\\x80\\xa6 https:\/\/t.co\/a5XvtsYW2O'",
        Month: "May",
        "Dimension 1": 33.92282,
        "Dimension 2": 9.769327,
        Sentiment: -0.155555556,
        Subjectivity: 0.288888889,
        idx: 330,
      },
      {
        RawTweet:
          "Data verifies what I noticed Easter weekend:\r\nSince Stay-at-Home 3 wks ago, violent injury \u2b06\ufe0f30% in region vs same time last year, despite\u2b07\ufe0f30% MVC pts\r\nCaveat: baseline\u2b06\ufe0fGSW: doubled over last 2 yrs anyway! Take-home: Hospitals need Level 1 trauma capacity even in time of #COVID19",
        Month: "April",
        "Dimension 1": -7.10965,
        "Dimension 2": 40.61359,
        Sentiment: -0.2,
        Subjectivity: 0.314583333,
        idx: 331,
      },
      {
        RawTweet:
          "\u201cIn this midwestern city that 6 yrs ago became the focal point for a national debate on race and policing after Michael Brown was killed in the suburb of Ferguson, the racial disparity attached to the Covid-19 death toll held a particular resonance.\u201d \/89\r\n https:\/\/t.co\/ekxPHQog1H",
        Month: "April",
        "Dimension 1": -28.962742,
        "Dimension 2": 31.656507,
        Sentiment: -0.016666667,
        Subjectivity: 0.166666667,
        idx: 332,
      },
      {
        RawTweet:
          "b'Count going up in every minute.\\n\\nTotal Covid positive cases in #Assam now 222\\n\\n6 persons from Tezpur quarantine cen\\xe2\\x80\\xa6 https:\/\/t.co\/8Y7rbYlIlX'",
        Month: "May",
        "Dimension 1": -4.3987155,
        "Dimension 2": 45.38325,
        Sentiment: 0.227272727,
        Subjectivity: 0.545454545,
        idx: 333,
      },
      {
        RawTweet:
          "@Rosewind2007 Thanks! I think this is good science but not sure how the correlation was made to our vaccine lol \ud83d\ude02 but I guess only scientists get correlations.",
        Month: "April",
        "Dimension 1": -18.272194,
        "Dimension 2": -35.330246,
        Sentiment: 0.3,
        Subjectivity: 0.677777778,
        idx: 334,
      },
      {
        RawTweet:
          "['Global Health Emergency\\n#GeneralStrike for Healthcare as a Human Right\\n#GeneralStrike for Economic Equality Now\\n#COVID19 \\n------------------\\nEconomic Update: #MeToo &amp; Corona: System is Key\\nDr. Richard Wolff\\n\\nhttps:\/\/t.co\/RLbXTWdpb4']",
        Month: "March",
        "Dimension 1": 21.071438,
        "Dimension 2": 2.583385,
        Sentiment: 0.066666667,
        Subjectivity: 0.1,
        idx: 335,
      },
      {
        RawTweet:
          "2\/2 ... 7 potentially deadly mistakes in US #COVID19 response:\r\n....\r\n\r\n5. Not effectively communicating risk\r\n6. Not hearing from @CDCgov every day\r\n7. Partisanship\r\n\r\nRead more in my new OpEd for @voxdotcom: https:\/\/t.co\/UKkZNBOuMp",
        Month: "March",
        "Dimension 1": -29.610142,
        "Dimension 2": -8.658747,
        Sentiment: 0.034090909,
        Subjectivity: 0.538636364,
        idx: 336,
      },
      {
        RawTweet:
          "['@kiergroup do you consider yourself to be \u201cessential\u201d in the fight against #COVID19? I only ask as you continue to allow builders to breach #SocialDistancing rules so that they can work on making you profit. Maybe an end to the #coronavirus would be better for home market, no?']",
        Month: "March",
        "Dimension 1": -3.4344962,
        "Dimension 2": -4.302948,
        Sentiment: 0.166666667,
        Subjectivity: 0.6,
        idx: 337,
      },
      {
        RawTweet:
          'b"RT @CyrilPedia: \'Instead, the key to success has been a large, well-organized testing program, combined with extensive efforts to isolate i\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": 27.61175,
        "Dimension 2": -26.06588,
        Sentiment: 0.128571429,
        Subjectivity: 0.44047619,
        idx: 338,
      },
      {
        RawTweet:
          "b'RT @cwoodar41795960: Loss of smell and taste in combination with other symptoms is a strong predictor of COVID-19 infection | medRxiv. If t\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -13.84938,
        "Dimension 2": -2.2729032,
        Sentiment: 0.154166667,
        Subjectivity: 0.554166667,
        idx: 339,
      },
      {
        RawTweet:
          '"And I wish y\u2019all could have seen the beaming smile on my face when not once but twice @OnPointRadio cut to an interview with Dr. Giselle Corbie-Smith (@gcsmd) during our conversation this week on race and #COVID19. \r\n\/15\r\n\r\nhttps:\/\/t.co\/VteA5moUic',
        Month: "April",
        "Dimension 1": 11.018243,
        "Dimension 2": 33.740257,
        Sentiment: 0.3,
        Subjectivity: 0.1,
        idx: 340,
      },
      {
        RawTweet:
          "['\u201cRepublicans Use Corona Virus to Push Rightwing and Pro-Business Agenda\u201d @ReecesPieces8, Alan Singer, Daily Kos\\nhttps:\/\/t.co\/sfwWZs45l1  #pandemicTrumpPoliticsUSA #NYCNeedsCOVIDSuppliesNow #50StatesandWashingtonDC #BernieSandersCOVID19Plan #covid19 #coronavirus #usacovidvirus']",
        Month: "March",
        "Dimension 1": -5.250229,
        "Dimension 2": 8.077301,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 341,
      },
      {
        RawTweet:
          "Abstract: Although L type (\u223c70%) more prevalent than S (\u223c30%), S was ancestral version. L more prevalent in early outbreak in Wuhan, freq decreased after early Jan. Human intervention may have placed more selective pressure on L, which might be more aggressive &amp; spread quicker. https:\/\/t.co\/PqQLHxRXg3",
        Month: "March",
        "Dimension 1": -14.156041,
        "Dimension 2": -21.141441,
        Sentiment: 0.225,
        Subjectivity: 0.425,
        idx: 342,
      },
      {
        RawTweet:
          "b'Stay at home, stay at home but transmission company of Nigeria cannot generate power. LONG LONG 2 weeks ahead.....\\n#COVID19'",
        Month: "March",
        "Dimension 1": -40.675922,
        "Dimension 2": 14.434078,
        Sentiment: -0.05,
        Subjectivity: 0.4,
        idx: 343,
      },
      {
        RawTweet:
          "b'All of you jagoffs who were good at making wallets out of duct tape 15 years ago, this is your time. #TheLockdown #COVID19 #N95masks'",
        Month: "March",
        "Dimension 1": -3.5856383,
        "Dimension 2": 19.780737,
        Sentiment: 0.7,
        Subjectivity: 0.6,
        idx: 344,
      },
      {
        RawTweet:
          "b'RT @CarlosdelRio7: All of us in Infectious Diseases are spending too much time rationing testing rather than doing our job.  We need more a\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -16.239977,
        "Dimension 2": -11.665043,
        Sentiment: 0.35,
        Subjectivity: 0.35,
        idx: 345,
      },
      {
        RawTweet:
          "['Saudi Arabia has started an #oilprice war in the wake of failed talks between OPEC and Russia, slashing prices in the wake of an expected drop in demand due to #coronavirus \\n\\nhttps:\/\/t.co\/CtCXppzi2N']",
        Month: "March",
        "Dimension 1": -23.256985,
        "Dimension 2": -0.82801425,
        Sentiment: -0.241666667,
        Subjectivity: 0.358333333,
        idx: 346,
      },
      {
        RawTweet:
          "['#Coronavirus Death Toll Exceeds 3,000\\nOne after the other, the clerical regime is reluctantly declaring, albeit belatedly, the state of emergency in provinces &amp; cities.#IranRegimeChange #KhameneiSpreadsCoronaVirus #CrimesAgaistHumanity\\n#Iran #COVID19 \\nhttps:\/\/t.co\/0nobrkjaDX']",
        Month: "March",
        "Dimension 1": -25.953352,
        "Dimension 2": 14.806524,
        Sentiment: -0.125,
        Subjectivity: 0.375,
        idx: 347,
      },
      {
        RawTweet:
          "You end your shift.\r\n\r\nYou walk around the ER.\r\n\r\nStill so many struggling to breathe.\r\n\r\nStill so many on life support.\r\n\r\nYou can't help but wonder.\r\n\r\nWould they still call us heroes?\r\n\r\nIf they knew we felt so helpless?",
        Month: "April",
        "Dimension 1": -32.43229,
        "Dimension 2": 13.909658,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 348,
      },
      {
        RawTweet:
          "b'RT @BUSPH: We are starting an online #coronavirusseries to provide the public with state-of-the-science information about the pandemic and\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 7.1813293,
        "Dimension 2": 8.562074,
        Sentiment: 0.0,
        Subjectivity: 0.083333333,
        idx: 349,
      },
      {
        RawTweet:
          "#SARSCoV2 Everything that comes out of @jbloom_lab should be trusted! And cell lines do matter; stable cells expressing ACE2, TMPRSS2, or both gives insight into processing events required for optimal entry. Send me a request, we send ready-to-use SARS-CoV-2pp \u201cout of the box\u201d. https:\/\/t.co\/RO4Soj01iK https:\/\/t.co\/8H4fbsmK8y",
        Month: "May",
        "Dimension 1": 32.55279,
        "Dimension 2": -8.438629,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 350,
      },
      {
        RawTweet:
          "7. If patients delay their presentation, it is not on them, it is ON US, as a system and as providers to get the care to them. \r\n\r\nIn this case, it could be as simple as offering African Americans tests outpatient. How many patients that weren't tested returned sicker?",
        Month: "May",
        "Dimension 1": -19.37413,
        "Dimension 2": -16.112278,
        Sentiment: 0.166666667,
        Subjectivity: 0.285714286,
        idx: 351,
      },
      {
        RawTweet:
          "[\"Be vigilant. Don't let Disaster Capitalists use the #Coronavirus crisis to convince people they don't need public schools. Kids need real schools with real teachers. We have to make sure they're still around &amp; strong when this is over. \\nhttps:\/\/t.co\/BIbEp32jOx #TBATs @TxBats https:\/\/t.co\/ayaemXVAL6\"]",
        Month: "March",
        "Dimension 1": -2.8558464,
        "Dimension 2": -23.958818,
        Sentiment: 0.266666667,
        Subjectivity: 0.457777778,
        idx: 352,
      },
      {
        RawTweet:
          "b'Quarantine day 17 and I found this way more amusing than I should....looks like a drunk. \\n#lockdowneffect\\xe2\\x80\\xa6 https:\/\/t.co\/kINz26IRPz'",
        Month: "April",
        "Dimension 1": -20.137455,
        "Dimension 2": -18.488558,
        Sentiment: 0.2,
        Subjectivity: 0.833333333,
        idx: 353,
      },
      {
        RawTweet:
          "['I don\u2019t know what the people of China were expecting with eating wild animals, continuously polluting their country. But hey, time to wake up and smell the coffee! They brought it on themselves and they\u2019re making other countries pay the price too. Thanks a lot #China!#coronavirus https:\/\/t.co\/YGRb3cptyV']",
        Month: "March",
        "Dimension 1": -21.18977,
        "Dimension 2": 7.278171,
        Sentiment: 0.066666667,
        Subjectivity: 0.325,
        idx: 354,
      },
      {
        RawTweet:
          "In my interview with @statnews today, I explain how we need clear policies, protocols, tools, algorithms, and best practices for contact tracing in order to do it well. It\u2019s hard work but it can work. #COVID19 #BoxItIn https:\/\/t.co\/7ummTiZsnv.",
        Month: "April",
        "Dimension 1": 20.968187,
        "Dimension 2": -12.259313,
        Sentiment: 0.269444444,
        Subjectivity: 0.408333333,
        idx: 355,
      },
      {
        RawTweet:
          'b"In terms of framing &amp; language, let\'s move from sustainability to resilience\\nThis involves cutting waste, creating\\xe2\\x80\\xa6 https:\/\/t.co\/r4kRKZIQZ5"',
        Month: "April",
        "Dimension 1": 11.790051,
        "Dimension 2": -24.673262,
        Sentiment: -0.4,
        Subjectivity: 0.45,
        idx: 356,
      },
      {
        RawTweet:
          "['Help slow the spread of #COVID19 and identify at risk cases sooner by self-reporting your symptoms daily, even if you feel well  \ud83d\ude4f\ud83c\udffc. Download the app\\nhttps:\/\/t.co\/H1PLNDHa79']",
        Month: "March",
        "Dimension 1": 7.554107,
        "Dimension 2": -26.172255,
        Sentiment: -0.15,
        Subjectivity: 0.2,
        idx: 357,
      },
      {
        RawTweet:
          "['How One Dealership Group Generated 288+ Customer Leads Amid COVID-19. More in our blog here: https:\/\/t.co\/bkkEbKpzI8 #automotive #businessintelligence #dealersuccess #communication #email #inthistogether #covid19']",
        Month: "March",
        "Dimension 1": 8.700285,
        "Dimension 2": 35.116543,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 358,
      },
      {
        RawTweet:
          'b\'RT @JohnsHopkinsSPH: "It is true that most people who get [#COVID19] do fine," says @CMYeaton on @PublicHealthPod.\\n\\n"But every single perso\\xe2\\x80\\xa6\'',
        Month: "March",
        "Dimension 1": 36.469055,
        "Dimension 2": -11.318542,
        Sentiment: 0.298809524,
        Subjectivity: 0.466071429,
        idx: 359,
      },
      {
        RawTweet:
          "\u201cpreppers do not see crises such as the coronavirus as \u2018a temporary breakdown in otherwise functioning system\u2019 but as evidence of a \u2018large-scale problem\u2019\u201d https:\/\/t.co\/StSjSLApk7",
        Month: "March",
        "Dimension 1": -13.394028,
        "Dimension 2": -35.349834,
        Sentiment: 0.0,
        Subjectivity: 0.5,
        idx: 360,
      },
      {
        RawTweet:
          "['Cabell County Schools says in communities where #COVID19 is not active, the most important thing for school districts to do is plan and prepare. https:\/\/t.co\/TiJrdoikic']",
        Month: "March",
        "Dimension 1": -1.2926561,
        "Dimension 2": -24.954554,
        Sentiment: 0.322222222,
        Subjectivity: 0.7,
        idx: 361,
      },
      {
        RawTweet:
          "b'9\/x Be honest about policy being dictated by supply and the need to ration, not by the science and need. https:\/\/t.co\/TEOd6r4GuA #GetMePPE'",
        Month: "March",
        "Dimension 1": -11.512451,
        "Dimension 2": -35.712616,
        Sentiment: 0.6,
        Subjectivity: 0.9,
        idx: 362,
      },
      {
        RawTweet:
          '["If anyone wants an anxiety attack over the government\'s incompetence in dealing with #coronavirus watch Nadim Zahawi floundering on #Newsnight right now."]',
        Month: "March",
        "Dimension 1": -22.052343,
        "Dimension 2": -2.101996,
        Sentiment: 0.242857143,
        Subjectivity: 0.317857143,
        idx: 363,
      },
      {
        RawTweet:
          "['A woman\u2019s mother died at the nursing home last night in Kirkland WA, while showing no symptoms and officials claimed it was because of natural causes and would not test her for #coronavirus #covid19 https:\/\/t.co\/ut8Yketx90']",
        Month: "March",
        "Dimension 1": -45.84552,
        "Dimension 2": 8.185448,
        Sentiment: 0.05,
        Subjectivity: 0.233333333,
        idx: 364,
      },
      {
        RawTweet:
          "['Help me share it, petition for mexican government to cancel @vivelatino  and massive events in Mexico #covid19 https:\/\/t.co\/tl15aFUcPq\\n@natszendro  @ruleiro @Reactor105 @sopitas @EMPosts @HelenBranswell @Monitoreo103']",
        Month: "March",
        "Dimension 1": -48.346523,
        "Dimension 2": 1.1369861,
        Sentiment: 0.0,
        Subjectivity: 0.5,
        idx: 365,
      },
      {
        RawTweet:
          'b"RT @wgbh: WGBH\'s @porzucki lists seven podcast producers that will get you caught up to speed on the #coronavirus in no time:\\n\\n\\xf0\\x9f\\x8e\\xa7\\xf0\\x9f\\x93\\xb2 @bbcworld\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": 21.271616,
        "Dimension 2": 31.828506,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 366,
      },
      {
        RawTweet:
          'b"It\'s okay to feel anxious or worried. \\n\\nSearch #EveryMindMatters for some useful tips to help improve your mental h\\xe2\\x80\\xa6 https:\/\/t.co\/H5tOtKhYoA"',
        Month: "May",
        "Dimension 1": 18.076904,
        "Dimension 2": -30.548754,
        Sentiment: 0.1125,
        Subjectivity: 0.425,
        idx: 367,
      },
      {
        RawTweet:
          "['Shameful:\\n\\nPPP stuffing ration committees with Jiyalas - allegations of embezzlement \/ helping only PPP voters.\\n\\nAfter playing politics with #COVID19 response initially, PPP up to what it does best: playing with public money for its own interest! \\n\\nhttps:\/\/t.co\/EBL3SqOIRM', 'Shameful:\\n\\nPPP stuffing ration committees with Jiyalas - allegations of embezzlement \/ helping only PPP voters.\\n\\nAfter playing politics with #COVID19 response initially, PPP up to what it does best: playing with public money for its own interest! \\n\\nhttps:\/\/t.co\/EBL3SqOIRM']",
        Month: "March",
        "Dimension 1": -17.40945,
        "Dimension 2": 5.3929987,
        Sentiment: 0.35,
        Subjectivity: 0.473333333,
        idx: 368,
      },
      {
        RawTweet:
          "['Crisis management non-existent. \\nThey didn\u2019t stop fligths to China, when the rest of the world did.\\nThey did not quarantine #Qom to contain #COVID19.  \\nNo competence to provide the minimum required facilities for doctors and nurses to fight this virus. #AyatollahsSpreadCOVID19']",
        Month: "March",
        "Dimension 1": -38.99694,
        "Dimension 2": -12.827172,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 369,
      },
      {
        RawTweet:
          "b'RT @urdadssidepiece: Gloria Gaynor washing her hands to I Will Survive is the hand washing video I didn\\xe2\\x80\\x99t know I needed https:\/\/t.co\/3HotD7\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 3.4998958,
        "Dimension 2": -14.675844,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 370,
      },
      {
        RawTweet:
          "@DrMarcoDiegoSa1 @TecSurgeon @Some4SurgeryIT1 @juliomayol @Cirbosque @SWexner @NeilFlochMD @iss_sic @SAGES_Updates @pferrada1 @CelestinoGutirr @RodriguezParra_ That is an over-generalization; not everyone bought into concept that laparoscopy itself\u2b06\ufe0f risk so much we should deviate from standards &amp; only offer open surgery to pts; my team did not. IMO was neither basic science nor clinical data convincing enough to support that switch",
        Month: "May",
        "Dimension 1": -34.262344,
        "Dimension 2": -15.788276,
        Sentiment: 0.116666667,
        Subjectivity: 0.554166667,
        idx: 371,
      },
      {
        RawTweet:
          "@HelenBranswell @CDCgov Very reminiscent of the silence after retracting the kits. \r\n\r\nFully agree - cannot believe this is by choice. At a time when the media is 24\/7 Infectious Diseases... CDC remains silent for weeks...?",
        Month: "March",
        "Dimension 1": -40.343243,
        "Dimension 2": 13.592001,
        Sentiment: 0.0,
        Subjectivity: 0.375,
        idx: 372,
      },
      {
        RawTweet:
          "NEW hydroxychloroquine or chloroquine study with 96,032  coronavirus patients from 671 hospitals across six continents (!!!) finds exactly what everyone should expect by now:\r\n\r\n- no benefit\r\n- cardiac toxicity \r\n- decreased in-hospital survival\r\nhttps:\/\/t.co\/f8L6ExaQ7L",
        Month: "May",
        "Dimension 1": -19.22955,
        "Dimension 2": 30.588598,
        Sentiment: 0.016583807,
        Subjectivity: 0.351136364,
        idx: 373,
      },
      {
        RawTweet:
          "Thank you so much for your excellent leadership Mr. Prime Minister. @WHO and #Singapore have been fully aligned from the start on #COVID19 response. Much Gratitude to you and your Health Minister @GANKIMYONG https:\/\/t.co\/Jhrt53BI3A",
        Month: "March",
        "Dimension 1": 42.95757,
        "Dimension 2": -19.171177,
        Sentiment: 0.466666667,
        Subjectivity: 0.466666667,
        idx: 374,
      },
      {
        RawTweet:
          "b'In the first quarter @GenworthMI did not see an increase in defaults due to the #coronavirus, nor has its current d\\xe2\\x80\\xa6 https:\/\/t.co\/SWrR4V9pN5'",
        Month: "May",
        "Dimension 1": -38.688553,
        "Dimension 2": -19.114845,
        Sentiment: 0.041666667,
        Subjectivity: 0.369444444,
        idx: 375,
      },
      {
        RawTweet:
          "b'RT @redfishstream: Chinese medical workers who have been fighting the #coronavirus day and night in Wuhan celebrated the closing of the las\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -22.221796,
        "Dimension 2": 9.245429,
        Sentiment: 0.116666667,
        Subjectivity: 0.25,
        idx: 376,
      },
      {
        RawTweet:
          "b'About to go on with @ChrisJansing on @MSNBC to discuss masks, testing and getting through the surge'",
        Month: "April",
        "Dimension 1": 22.478746,
        "Dimension 2": 17.74469,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 377,
      },
      {
        RawTweet:
          "By using data, governments can find the right balance between public health measures and disruption to society as they respond to #COVID19. The PERC report provides first-of-its-kind data from more than 20,000 respondents.",
        Month: "May",
        "Dimension 1": -5.1819916,
        "Dimension 2": 37.110447,
        Sentiment: 0.261904762,
        Subjectivity: 0.367460317,
        idx: 378,
      },
      {
        RawTweet:
          "b'RT @bobhoffmd: Yesterday on my ER shift I got spit on, had my life threatened, had to restrain several intoxicated patients and broke up a\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": -36.32035,
        "Dimension 2": 9.617009,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 379,
      },
      {
        RawTweet:
          "b'RT @irazoqui_javier: The health care system is projected to be overwhelmed by coronavirus patients unless drastic measures are taken. Use t\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -7.1192656,
        "Dimension 2": 3.5957332,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 380,
      },
      {
        RawTweet:
          'b"RT @AnAbnos: Reminds me of something @celinegounder told me a couple years ago (which I\'m now paraphrasing, hopefully not inaccurately): Th\\xe2\\x80\\xa6"',
        Month: "April",
        "Dimension 1": 24.758972,
        "Dimension 2": 26.053272,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 381,
      },
      {
        RawTweet:
          "['Help slow the spread of #COVID19 and identify at risk cases sooner by self-reporting your symptoms daily, even if you feel well  \ud83d\ude4f\ud83c\udffc. Download the app https:\/\/t.co\/g8gLP7WQbI']",
        Month: "March",
        "Dimension 1": 7.4861536,
        "Dimension 2": -25.980574,
        Sentiment: -0.15,
        Subjectivity: 0.2,
        idx: 382,
      },
      {
        RawTweet:
          "In 2009, public health officials faced ire from politicians after schools were closed and then quickly reopened. Health officials were accused of crying wolf. Criticism may be inevitable, but less likely if we don't overstate value of measures when we aren't fully sure.",
        Month: "March",
        "Dimension 1": -23.220425,
        "Dimension 2": -12.8920555,
        Sentiment: 0.045833333,
        Subjectivity: 0.527777778,
        idx: 383,
      },
      {
        RawTweet:
          "b'RT @megtirrell: \\xe2\\x80\\x9cI\\xe2\\x80\\x99m quite confident that science will come through.\\xe2\\x80\\x9d I got 45 minutes with Columbia\\xe2\\x80\\x99s Dr David Ho yesterday to discuss his\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 24.190977,
        "Dimension 2": 34.003773,
        Sentiment: 0.5,
        Subjectivity: 0.833333333,
        idx: 384,
      },
      {
        RawTweet:
          "@Dr_J_Underwood @gpollara @davidadambarr @onisillos @raseaton66 @DrToniHo @jambuc33 Oh yeah I remember the exercise bikes at RonJon! Glad Pcp diagnosis improved since then. I haven\u2019t seen any data on this but even mild cases report soboe.",
        Month: "March",
        "Dimension 1": 35.267273,
        "Dimension 2": 0.9153634,
        Sentiment: 0.416666667,
        Subjectivity: 0.75,
        idx: 385,
      },
      {
        RawTweet:
          "b'RT @lia_tadesse: To implement #SocialDistancing as a key strategy in containing and preventing the spread of COVID-19, 42% of the Ministry\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 4.302403,
        "Dimension 2": 9.02491,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 386,
      },
      {
        RawTweet:
          "['This has been the craziest day of my life, and the second time I have cried properly in school ever. It\u2019s mad to think I\u2019m going into my last day ever, and have had my last lesson. #coronavirus #alevels']",
        Month: "March",
        "Dimension 1": -36.309532,
        "Dimension 2": 10.650039,
        Sentiment: -0.125,
        Subjectivity: 0.246666667,
        idx: 387,
      },
      {
        RawTweet:
          "['#Ukraine parliament votes to triple salary of medical staff working on #covid19. \\nhttps:\/\/t.co\/muWHzySdyt']",
        Month: "March",
        "Dimension 1": -6.492985,
        "Dimension 2": 34.726883,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 388,
      },
      {
        RawTweet:
          "Also, if you have #PowerofAttorney for a loved one &amp; are faced with the terrible decision of determining whether to withdraw #lifesupport, be sure you ask yourself what THEY would want, not want YOU want.  \r\n\r\nI've been there.\r\n\r\n#ThePerfectPredator #memoir",
        Month: "March",
        "Dimension 1": -22.371231,
        "Dimension 2": -21.435053,
        Sentiment: 0.066666667,
        Subjectivity: 0.896296296,
        idx: 389,
      },
      {
        RawTweet:
          "I'm sure I speak for many of my colleagues when I say we are here and stand ready to work with local and national public health officials and policymakers to address these overwhelming disparities, to diversify triage committees, and serve on COVID-19 health equity panels... \/21",
        Month: "April",
        "Dimension 1": 30.767748,
        "Dimension 2": -5.963114,
        Sentiment: 0.283333333,
        Subjectivity: 0.492592593,
        idx: 390,
      },
      {
        RawTweet:
          "Georgia is also seeing a recent uptick in hospitalizations after showing declines. Again, the trend is early and there are not enough data points to draw conclusions. 3\/x https:\/\/t.co\/J03MinGSWO",
        Month: "May",
        "Dimension 1": -43.20923,
        "Dimension 2": 13.523671,
        Sentiment: 0.033333333,
        Subjectivity: 0.35,
        idx: 391,
      },
      {
        RawTweet:
          "22 million Americans have filed for unemployment in the past four weeks.\r\n \r\nNearly all job gains since Great Recession wiped out.",
        Month: "April",
        "Dimension 1": -19.820076,
        "Dimension 2": 39.7209,
        Sentiment: 0.216666667,
        Subjectivity: 0.466666667,
        idx: 392,
      },
      {
        RawTweet:
          "b'RT @BogochIsaac: Ontario now testing asymptomatic people for #COVID19 in high-risk populations.\\n\\nThis surveillance targets \"First responder\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 40.823833,
        "Dimension 2": 20.26873,
        Sentiment: 0.25,
        Subjectivity: 0.333333333,
        idx: 393,
      },
      {
        RawTweet:
          "b'May it be pandemic, epidemic, recession or war; the sufferer is always a common man. #CoVID19.'",
        Month: "May",
        "Dimension 1": -11.360221,
        "Dimension 2": -5.688491,
        Sentiment: -0.3,
        Subjectivity: 0.5,
        idx: 394,
      },
      {
        RawTweet:
          '["Trump: You take a solid flu vaccine, you don\'t think that would have an impact? Or much of an impact? On #coronavirus?\\nExpert: No. Probably... none.\\n#TrumpVirusCoverup\\n#Pencedemic #TrumpIsAnIdiot #WednesdayWisdom #VoteBlueNoMatterWho #VoteBlueToSaveAmerica https:\/\/t.co\/JMuX5ZEw4l"]',
        Month: "March",
        "Dimension 1": -31.111908,
        "Dimension 2": -0.06705501,
        Sentiment: 0.1,
        Subjectivity: 0.15,
        idx: 395,
      },
      {
        RawTweet:
          "['While it may seem that the majority of people hardest-hit by the novel #coronavirus are in an older age group, that doesn\u2019t mean that COVID-19 isn\u2019t an opportunistic virus that can affect anyone of any age. https:\/\/t.co\/izEQ6a67yM', 'While it may seem that the majority of people hardest-hit by the novel #coronavirus are in an older age group, that doesn\u2019t mean that COVID-19 isn\u2019t an opportunistic virus that can affect anyone of any age. https:\/\/t.co\/izEQ6a67yM']",
        Month: "March",
        "Dimension 1": -36.80044,
        "Dimension 2": -17.197042,
        Sentiment: -0.072916667,
        Subjectivity: 0.510416667,
        idx: 396,
      },
      {
        RawTweet:
          "b'Locals of Gheyzanieh district near Ahvaz in Khuzestan Province, southwest #Iran, held a rally on Monday protesting\\xe2\\x80\\xa6 https:\/\/t.co\/7GrWodRZ0i'",
        Month: "May",
        "Dimension 1": 15.332397,
        "Dimension 2": 43.148003,
        Sentiment: 0.1,
        Subjectivity: 0.4,
        idx: 397,
      },
      {
        RawTweet:
          "b'New York state and local officials are trying to quell public concerns about the spread of #coronavirus on public t\\xe2\\x80\\xa6 https:\/\/t.co\/m2Tborheh0'",
        Month: "March",
        "Dimension 1": -6.114783,
        "Dimension 2": 0.7251808,
        Sentiment: 0.034090909,
        Subjectivity: 0.146969697,
        idx: 398,
      },
      {
        RawTweet:
          "b'#MadhyaPradesh today cross the mark of 2000. AS On 4 pm 26 april 145 new infected reported. Total moves on 2090.mor\\xe2\\x80\\xa6 https:\/\/t.co\/vDOi0RSXNW'",
        Month: "April",
        "Dimension 1": -7.3088465,
        "Dimension 2": 43.551163,
        Sentiment: 0.045454545,
        Subjectivity: 0.401515152,
        idx: 399,
      },
      {
        RawTweet:
          "We must get a drug and eventually vaccine. We can have treatments, antibody prophylaxis, point of care diagnostics for early detection by fall. That must be focus. #COVID19 doesn't go away. Initial wave will run course into summer but it'll be back until our technology stops it. https:\/\/t.co\/N4QRTBrdJe",
        Month: "March",
        "Dimension 1": -10.2504835,
        "Dimension 2": 25.517715,
        Sentiment: 0.033333333,
        Subjectivity: 0.1,
        idx: 400,
      },
      {
        RawTweet:
          "b'Read a special supplement authored by CRS staff in @AJTMH with important #polio lessons for tackling #COVID19. Leve\\xe2\\x80\\xa6 https:\/\/t.co\/HqfXjpy3RB'",
        Month: "April",
        "Dimension 1": 21.902344,
        "Dimension 2": 6.7110815,
        Sentiment: 0.378571429,
        Subjectivity: 0.785714286,
        idx: 401,
      },
      {
        RawTweet:
          'b"Your business might be stagnant right now with all of the changes happening worldwide, but that doesn\'t mean your b\\xe2\\x80\\xa6 https:\/\/t.co\/cbRkg4gwIq"',
        Month: "April",
        "Dimension 1": -21.856611,
        "Dimension 2": -29.173147,
        Sentiment: -0.013392857,
        Subjectivity: 0.611607143,
        idx: 402,
      },
      {
        RawTweet:
          'b"RT @NCStinn: Scientists: you should wash your hands because of Coronavirus.\\n\\nPeople: I\'m gonna stop flying, hoard masks, work from home &amp; t\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": -27.04335,
        "Dimension 2": 4.0962906,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 403,
      },
      {
        RawTweet:
          "@Alex_A_Simons @meechebucco @Craig_A_Spencer @JeremyKonyndyk That's a relief because I guarantee I'd get a lot of shit if I bought a $200 cloche for future getting-dough-everywhere pursuits.",
        Month: "May",
        "Dimension 1": -4.76197,
        "Dimension 2": 20.619478,
        Sentiment: -0.1,
        Subjectivity: 0.4625,
        idx: 404,
      },
      {
        RawTweet:
          "@robyn_s_lee @maiamajumder @onisillos @sciencecohen @CDCgov @CarlosdelRio7 I wonder if that's b\/c: \r\n\r\n1) they would be seen as contradicting themselves\r\n\r\n2) there are not enough masks for HCW.  \r\n\r\nSome transparency would be helpful!",
        Month: "March",
        "Dimension 1": -15.6685095,
        "Dimension 2": -26.230831,
        Sentiment: 0.0,
        Subjectivity: 0.5,
        idx: 405,
      },
      {
        RawTweet:
          "['Panic buying is actually getting worse. You would think everyone has what they need now but people are still buying and the people who missed out the first time are buying just as much and so on and so on. #coronavirus', 'Panic buying is actually getting worse. You would think everyone has what they need now but people are still buying and the people who missed out the first time are buying just as much and so on and so on. #coronavirus']",
        Month: "March",
        "Dimension 1": -25.334917,
        "Dimension 2": -14.513121,
        Sentiment: 0.0125,
        Subjectivity: 0.308333333,
        idx: 406,
      },
      {
        RawTweet:
          "b'RT @jburnmurdoch: NEW: in the @10DowningStreet press conference, a slide showed Britons adhering to lockdown by staying home.\\n\\nI\\xe2\\x80\\x99ve got the\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 11.688202,
        "Dimension 2": -7.091645,
        Sentiment: 0.136363636,
        Subjectivity: 0.454545455,
        idx: 407,
      },
      {
        RawTweet:
          "A really good question without a clear answer. I ask this every time I finish a clinical shift in the hospital these days: https:\/\/t.co\/LbOvbRQbRk",
        Month: "April",
        "Dimension 1": 8.875843,
        "Dimension 2": 22.091825,
        Sentiment: 0.4,
        Subjectivity: 0.491666667,
        idx: 408,
      },
      {
        RawTweet:
          "['#breakingnews: #AAD2020 has been canceled over concerns of #COVID19. The AAD will release further information for attendees, presenters, exhibitors, and sponsors soon. The cancellation follows oseveral other conferences and societal meetings, including #HIMSS, #NCCN, and #ACC20 https:\/\/t.co\/itegT7mBNT', '#breakingnews: #AAD2020 has been canceled over concerns of #COVID19. The AAD will release further information for attendees, presenters, exhibitors, and sponsors soon. The cancellation follows oseveral other conferences and societal meetings, including #HIMSS, #NCCN, and #ACC20 https:\/\/t.co\/itegT7mBNT']",
        Month: "March",
        "Dimension 1": -35.5229,
        "Dimension 2": 1.3779676,
        Sentiment: -0.0625,
        Subjectivity: 0.4375,
        idx: 409,
      },
      {
        RawTweet:
          "b'.@NewSchoolAlumni and Economics PhD. @jacob_assa discusses the conditions and systems that paved the way for the\\xe2\\x80\\xa6 https:\/\/t.co\/ZKpmITax59'",
        Month: "April",
        "Dimension 1": 19.668062,
        "Dimension 2": 20.961178,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 410,
      },
      {
        RawTweet:
          "@EngEongOoi So #SARSCoV2 unlike pH1N1 &amp; #SARSCoV1 is more sensitive to type I IFN likely due to lack of ORF3b and truncation of ORF6 (see https:\/\/t.co\/kzo3kS0KP7) Small effects of prophylaxis during lag time before exponential phase of virus replication might allow time for adaptive immunity",
        Month: "March",
        "Dimension 1": -15.056292,
        "Dimension 2": -23.142117,
        Sentiment: 0.045,
        Subjectivity: 0.635,
        idx: 411,
      },
      {
        RawTweet:
          "b'RT @T_Inglesby: But clinicians and hosps in Wash state, NY, NJ, beyond are seeing full ICUs, rising COVID cases. They recognize potential n\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 27.623842,
        "Dimension 2": 10.271037,
        Sentiment: 0.175,
        Subjectivity: 0.775,
        idx: 412,
      },
      {
        RawTweet:
          "b'British Health Secretary says more patients with #COVID19 are needed for clinical trials https:\/\/t.co\/lxvnYfOybV https:\/\/t.co\/RHW8lUgZ3m'",
        Month: "April",
        "Dimension 1": 23.64485,
        "Dimension 2": 4.466275,
        Sentiment: 0.25,
        Subjectivity: 0.25,
        idx: 413,
      },
      {
        RawTweet:
          "About to be on @amjoyshow with co-guest @Sebelius \r\n\r\nTalking about protecting nurses and doctors so they can care for you. \r\n\r\nAnd making sure that we have enough ventilators to care for the critically ill.\r\n\r\nWe aren't going to get through this crisis without these key supplies.",
        Month: "March",
        "Dimension 1": 26.608284,
        "Dimension 2": -15.663631,
        Sentiment: 0.0,
        Subjectivity: 0.847222222,
        idx: 414,
      },
      {
        RawTweet:
          "b'@mnitabach I mostly scream internally. Hard to explain otherwise to the 6 year old.'",
        Month: "May",
        "Dimension 1": -44.951447,
        "Dimension 2": -3.991241,
        Sentiment: 0.102777778,
        Subjectivity: 0.413888889,
        idx: 415,
      },
      {
        RawTweet:
          "b'RT @cmyeaton: This live map of hospital and ICU capacity in Germany is amazing. In the US we are asking each hospital to send a daily email\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 26.775692,
        "Dimension 2": 12.143003,
        Sentiment: 0.245454545,
        Subjectivity: 0.466666667,
        idx: 416,
      },
      {
        RawTweet:
          "['We are hoping that our #free prize #Covid_19 #COVID\u30fc19 #COVID19  song contest goes VIRAL... https:\/\/t.co\/IViklCTC6q', 'We are hoping that our #free prize #Covid_19 #COVID\u30fc19 #COVID19  song contest goes VIRAL... https:\/\/t.co\/IViklCTC6q']",
        Month: "March",
        "Dimension 1": 39.33,
        "Dimension 2": -23.095732,
        Sentiment: 0.4,
        Subjectivity: 0.8,
        idx: 417,
      },
      {
        RawTweet:
          "Two California deaths now thought to be the earliest Covid19 fatalities in MID Feb! In patients with no travel history! Which means there was community transmission in multiple states as early January. \r\n\r\nhttps:\/\/t.co\/d5dsP442i4",
        Month: "April",
        "Dimension 1": -16.220623,
        "Dimension 2": 31.419558,
        Sentiment: 0.033333333,
        Subjectivity: 0.1,
        idx: 418,
      },
      {
        RawTweet:
          "b'How is #COVID19 impacting youth in foster care? Serita Cox and @therealknelson discuss ways @ifosterorg is helping\\xe2\\x80\\xa6 https:\/\/t.co\/60H832rvmY'",
        Month: "May",
        "Dimension 1": 32.369015,
        "Dimension 2": 14.408473,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 419,
      },
      {
        RawTweet:
          "[\"The #coronavirus isn't as bad as all the hype, or it's just not the same virus here in America.\\n\\nIt's really hard to tell with so much hype and little reporting off of any, emphasis on ANY, actual data here at home.\"]",
        Month: "March",
        "Dimension 1": -37.677086,
        "Dimension 2": -17.145227,
        Sentiment: -0.163194444,
        Subjectivity: 0.355555556,
        idx: 420,
      },
      {
        RawTweet:
          "Glad to speak with @AliceParkNY of @TIME about #COVID19. Pandemic is certain, severity not. \u201cIt could be like an average flu year, or way worse, or not as bad\u2014we just don\u2019t know.\u201d Dr. Messonnier of @CDCgov had it exactly right &amp; was right to speak frankly. https:\/\/t.co\/tueo3bLStv",
        Month: "March",
        "Dimension 1": -2.2474318,
        "Dimension 2": -12.51798,
        Sentiment: 0.122619048,
        Subjectivity: 0.607142857,
        idx: 421,
      },
      {
        RawTweet:
          "b'RT @kron4news: #BREAKING: An Alaska Airlines agent at the #SanFrancisco International Airport has tested positive for the novel #coronaviru\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 0.6657581,
        "Dimension 2": 17.219988,
        Sentiment: 0.113636364,
        Subjectivity: 0.272727273,
        idx: 422,
      },
      {
        RawTweet:
          "['Interesting chart from @WSJ, showing % change in y-o-y sales. @Instacart and @Walmart continue to show strong growth (regardless of #coronavirus), whereas @FreshDirect has more mature growth rates: https:\/\/t.co\/liRh3bNTpB']",
        Month: "March",
        "Dimension 1": 14.725004,
        "Dimension 2": 25.222212,
        Sentiment: 0.383333333,
        Subjectivity: 0.458333333,
        idx: 423,
      },
      {
        RawTweet:
          "['Ford joins 3M, GE in speeding up ventilator, respirator production\\n#stocks #investing #wallstreet #research #coronavirus\\n$F $GE $MMM\\nhttps:\/\/t.co\/MqZgtKFSvL']",
        Month: "March",
        "Dimension 1": -4.2532287,
        "Dimension 2": 29.694992,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 424,
      },
      {
        RawTweet:
          "['#COVID19 | For the first time since the dawn of democracy in 1994, the Commander-in-Chief of the Armed Forces is in full military uniform with an army field cap to mark the commencement of the #SANDFdeployment to help curb the spread of the #coronavirus https:\/\/t.co\/WJpzWDLhfv']",
        Month: "March",
        "Dimension 1": -1.780839,
        "Dimension 2": 25.4103,
        Sentiment: 0.166666667,
        Subjectivity: 0.327777778,
        idx: 425,
      },
      {
        RawTweet:
          "The American health-care system has two especially distinctive features, which often pull against each other. One is the way it intensifies the country\u2019s underlying inequalities and how it encodes social differences in health...\u201d cc @RanaAwdish \/70\r\nhttps:\/\/t.co\/J7s8miuhtp",
        Month: "April",
        "Dimension 1": -14.185707,
        "Dimension 2": -12.749934,
        Sentiment: -0.022916667,
        Subjectivity: 0.360416667,
        idx: 426,
      },
      {
        RawTweet:
          "b'RT @maggiekb1: Supply chains aimed at efficiency are still creating massive amounts of waste.'",
        Month: "April",
        "Dimension 1": -6.6881566,
        "Dimension 2": -9.554306,
        Sentiment: -0.1,
        Subjectivity: 0.5,
        idx: 427,
      },
      {
        RawTweet:
          '["#NEWTODAY! @njdotcom published #RUSCI faculty member @markbealpr\'s #GenZ column online &amp; in the @starledger Sunday print edition. #COVID19 is expediting transformations #GenerationZ was already bringing 2 corporate America &amp; employers #WorkFromHome.\\n\\nhttps:\/\/t.co\/xSCRks4m9J"]',
        Month: "March",
        "Dimension 1": 8.462849,
        "Dimension 2": 35.644848,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 428,
      },
      {
        RawTweet:
          "b'During these critical times, health insurance providers are reaching out to support the dedicated health care heroe\\xe2\\x80\\xa6 https:\/\/t.co\/EyKIOoo8jG'",
        Month: "April",
        "Dimension 1": 29.10777,
        "Dimension 2": -7.9457455,
        Sentiment: 0.0,
        Subjectivity: 0.8,
        idx: 429,
      },
      {
        RawTweet:
          "Testing, Testing, Testing: We must widely test our population, diagnose mild and even asymptomatic cases. Requires point of care diagnostics in doctor's office. We must advance these immediately to market. It means serology to know who was exposed and developed immunity. 9\/n",
        Month: "March",
        "Dimension 1": 24.805891,
        "Dimension 2": -8.558942,
        Sentiment: 0.111111111,
        Subjectivity: 0.4,
        idx: 430,
      },
      {
        RawTweet:
          'b"You actually don\'t need to know anything about the specifics of Bitcoin in order to use it! \\n\\nYou can just create a\\xe2\\x80\\xa6 https:\/\/t.co\/3e7rnJYWPf"',
        Month: "April",
        "Dimension 1": -32.572372,
        "Dimension 2": -21.336212,
        Sentiment: 0.0,
        Subjectivity: 0.1,
        idx: 431,
      },
      {
        RawTweet:
          "b'RT @AdamSerwer: But just to be clear: This was not someone acting out of ignorance. It\\xe2\\x80\\x99s not a thing that can be fixed by \\xe2\\x80\\x9csensitivity trai\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": -31.952307,
        "Dimension 2": -21.421062,
        Sentiment: 0.066666667,
        Subjectivity: 0.194444444,
        idx: 432,
      },
      {
        RawTweet:
          "@DrSusanNasif Agree if a lot of tests are done. Do we know how many tests were done in Italy? In the U.K. &gt; 10,000 tests  were done, 35 cases identified so far.",
        Month: "March",
        "Dimension 1": -18.136002,
        "Dimension 2": 36.89004,
        Sentiment: 0.3,
        Subjectivity: 0.75,
        idx: 433,
      },
      {
        RawTweet:
          "b'RT @propublica: The health care system is projected to be overwhelmed by coronavirus patients unless drastic measures are taken. Social dis\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -7.174739,
        "Dimension 2": 3.547891,
        Sentiment: 0.033333333,
        Subjectivity: 0.066666667,
        idx: 434,
      },
      {
        RawTweet:
          "b'RT @abc730: \"The majority of [#coronavirus] cases are going to be very mild, and many will be indistinguishable from the common cold, which\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -2.9150321,
        "Dimension 2": -13.463179,
        Sentiment: 0.008333333,
        Subjectivity: 0.6625,
        idx: 435,
      },
      {
        RawTweet:
          "THREAD: We\u2019ve provided a new update on total daily testing capacity in U.S. for #coronavirus. This is not total tests run but an estimate of the maximum capacity across all labs that are conducting #COVID19 testing. https:\/\/t.co\/xA7iawXwwr",
        Month: "March",
        "Dimension 1": -0.18601839,
        "Dimension 2": 27.460735,
        Sentiment: 0.034090909,
        Subjectivity: 0.488636364,
        idx: 436,
      },
      {
        RawTweet:
          "b'The new reality in addressing\\xe2\\x80\\xafpandemic crisis will\\xe2\\x80\\xafbe\\xe2\\x80\\xafaugmented and virtual \\xe2\\x80\\x94\\xe2\\x80\\xafbetter training centered on\\xe2\\x80\\xafproduct l\\xe2\\x80\\xa6 https:\/\/t.co\/P6XjkzczgV'",
        Month: "May",
        "Dimension 1": 12.807561,
        "Dimension 2": -15.276855,
        Sentiment: 0.136363636,
        Subjectivity: 0.454545455,
        idx: 437,
      },
      {
        RawTweet:
          "b'\"Hospitals have now turned into effectively ICU hospitals for COVID-19 patients.\"\\n\\nNew York governor Andrew Cuomo s\\xe2\\x80\\xa6 https:\/\/t.co\/Hsh4cDfFC5'",
        Month: "April",
        "Dimension 1": 23.964214,
        "Dimension 2": 10.113777,
        Sentiment: 0.6,
        Subjectivity: 0.8,
        idx: 438,
      },
      {
        RawTweet:
          "b'Sign up for our free #writingforwellbeing course; that uses poetry and prose to get through lockdown, self-isolatio\\xe2\\x80\\xa6 https:\/\/t.co\/eVI2Bj7qbD'",
        Month: "April",
        "Dimension 1": 38.644493,
        "Dimension 2": 2.48858,
        Sentiment: 0.4,
        Subjectivity: 0.8,
        idx: 439,
      },
      {
        RawTweet:
          "b'RT @HarvardChanSPH: \"Since the beginning of the Covid-19 pandemic, the CDC has been inexplicably absent, and Americans are suffering and dy\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -39.99022,
        "Dimension 2": 12.83204,
        Sentiment: -0.6,
        Subjectivity: 0.9,
        idx: 440,
      },
      {
        RawTweet:
          "Take care and stay strong, @idriselba! I admire your brave and powerful message to the world. We're all in this together. Solidarity will beat the #coronavirus. #COVID19\r\nhttps:\/\/t.co\/yYQiWozpKi",
        Month: "March",
        "Dimension 1": 38.531433,
        "Dimension 2": -17.990013,
        Sentiment: 0.547222222,
        Subjectivity: 0.911111111,
        idx: 441,
      },
      {
        RawTweet:
          "['True Economics: 15\/3\/20: Acute beds and hospital beds capacity https:\/\/t.co\/OTvcCkHV4m #Covid19 #Covid2019 #Healthcare #Italy #US #Ireland']",
        Month: "March",
        "Dimension 1": 10.652041,
        "Dimension 2": 17.820244,
        Sentiment: 0.475,
        Subjectivity: 0.775,
        idx: 442,
      },
      {
        RawTweet:
          "b'RT @pwad26: Check out our @JAMA_current article highlighting substantial differences in hospitalization and death rates related to #COVID19\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -10.342879,
        "Dimension 2": -0.8125394,
        Sentiment: 0.0,
        Subjectivity: 0.4,
        idx: 443,
      },
      {
        RawTweet:
          "['.@GavinNewsom showing leadership and courage every step of the way, especially now - asking us all to sacrifice for the greater good. The right call. #SAFEatHome #coronavirus']",
        Month: "March",
        "Dimension 1": 38.459007,
        "Dimension 2": -17.966215,
        Sentiment: 0.371428571,
        Subjectivity: 0.658928571,
        idx: 444,
      },
      {
        RawTweet:
          "This means less damage and infection; the type of disease would be expected to be limited and much less severe.  It also means these reinfected people are less likely to keep spreading the virus due to more immune control.",
        Month: "April",
        "Dimension 1": -8.16143,
        "Dimension 2": -28.586573,
        Sentiment: -0.037053571,
        Subjectivity: 0.327232143,
        idx: 445,
      },
      {
        RawTweet:
          "['Reiner Eichenberger doesnt know that one cant get reinfected by #covid19. Suggesting deliberate infection is not only stupidAF but reprehensible https:\/\/t.co\/eiSMATiSDi', 'Reiner Eichenberger doesnt know that one cant get reinfected by #covid19. Suggesting deliberate infection is not only stupidAF but reprehensible https:\/\/t.co\/eiSMATiSDi']",
        Month: "March",
        "Dimension 1": -27.971842,
        "Dimension 2": -19.859514,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 446,
      },
      {
        RawTweet:
          "@c_drosten We have ~700,000 confirmed cases in US. \r\n\r\nWe still have not scratched the surface with testing here - vast majority of people who should have been tested never were\r\n\r\nTo believe we captured even close to 1 in 10 in the US would be faulty thinking",
        Month: "April",
        "Dimension 1": -44.755344,
        "Dimension 2": -8.940087,
        Sentiment: 0.2,
        Subjectivity: 1.0,
        idx: 447,
      },
      {
        RawTweet:
          "['The Content &amp; Targeting Daily is out! https:\/\/t.co\/SvOx87u2Px Stories via @perryhewitt #coronavirus', 'The Content &amp; Targeting Daily is out! https:\/\/t.co\/SvOx87u2Px Stories via @perryhewitt #coronavirus']",
        Month: "March",
        "Dimension 1": -33.657997,
        "Dimension 2": -0.4998388,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 448,
      },
      {
        RawTweet:
          "['A roundup of healthcare conferences that have been canceled, rescheduled or turned virtual due to #COVID19 https:\/\/t.co\/gXGNcCB1NO', 'A roundup of healthcare conferences that have been canceled, rescheduled or turned virtual due to #COVID19 https:\/\/t.co\/gXGNcCB1NO']",
        Month: "March",
        "Dimension 1": -34.501774,
        "Dimension 2": -2.5341506,
        Sentiment: -0.125,
        Subjectivity: 0.375,
        idx: 449,
      },
      {
        RawTweet:
          "b'RT @NYCMayor: We are the epicenter of this crisis. But we\\xe2\\x80\\x99re also watching our city become an epicenter of hope, of heroism and of love for\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 7.6348567,
        "Dimension 2": -20.574577,
        Sentiment: 0.5,
        Subjectivity: 0.6,
        idx: 450,
      },
      {
        RawTweet:
          "Parts of Florida, including Miami, are becoming a major epicenter of #COVID19 spread; with cases doubling every 3.5 to 4 days. https:\/\/t.co\/WyjsStjh2E",
        Month: "April",
        "Dimension 1": -5.9053507,
        "Dimension 2": 43.073643,
        Sentiment: 0.25625,
        Subjectivity: 0.675,
        idx: 451,
      },
      {
        RawTweet:
          "['The HSE say up to date information on what people should do or information they might need in relation coronavirus can be found on https:\/\/t.co\/gvIDRCHMbd\\n#COVID\u30fc19 #coronavirus #hse']",
        Month: "March",
        "Dimension 1": 5.955758,
        "Dimension 2": 3.8521886,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 452,
      },
      {
        RawTweet:
          "@seabbs Thanks for your good work! I was mostly cautioning people looking to interpret your work, not suggesting you aren\u2019t communicating correctly.",
        Month: "April",
        "Dimension 1": -6.8586035,
        "Dimension 2": -36.214325,
        Sentiment: 0.525,
        Subjectivity: 0.433333333,
        idx: 453,
      },
      {
        RawTweet:
          "b'RT @ashishkjha: If @mlipsitch is right -- if we end up with 40% of adults getting infected w COVID19, we have to spread those infections ou\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -24.64669,
        "Dimension 2": 33.231655,
        Sentiment: 0.285714286,
        Subjectivity: 0.535714286,
        idx: 454,
      },
      {
        RawTweet:
          'To fight this pandemic we must use stories. \r\n\r\nHere\'s a story: So-called superspreader "events" for coronavirus in the US are among the poor, working class and marginalized. And they are at their work. \r\n\r\nTo get ahead and stop this virus we must tell the right stories. (thread)',
        Month: "May",
        "Dimension 1": -2.9991088,
        "Dimension 2": -5.963768,
        Sentiment: -0.057142857,
        Subjectivity: 0.567857143,
        idx: 455,
      },
      {
        RawTweet:
          "I just spoke to @Vbiruta, Foreign Minister #Rwanda. @DrMikeRyan &amp; I congratulated him on \ud83c\uddf7\ud83c\uddfc's strong efforts on testing, contact tracing, hygiene measures &amp; transparency since the pandemic started. We agreed Africa must continue following its continental strategy to beat #COVID19",
        Month: "April",
        "Dimension 1": 32.61743,
        "Dimension 2": -19.879145,
        Sentiment: 0.102777778,
        Subjectivity: 0.319444444,
        idx: 456,
      },
      {
        RawTweet:
          "b'I\\xe2\\x80\\x99m helping to fight #COVID19 \\xe2\\x80\\x93 10549 people are estimated to have COVID symptoms in Jefferson County today. Please\\xe2\\x80\\xa6 https:\/\/t.co\/3NZBeMdghw'",
        Month: "April",
        "Dimension 1": 3.633593,
        "Dimension 2": 6.860633,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 457,
      },
      {
        RawTweet:
          "b'RT @apoorva_nyc: Deeply upsetting to hear that while many of our institutions \\xe2\\x80\\x94 businesses, schools, public libraries, sporting orgs \\xe2\\x80\\x94 are\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -18.829578,
        "Dimension 2": -6.424922,
        Sentiment: 0.166666667,
        Subjectivity: 0.322222222,
        idx: 458,
      },
      {
        RawTweet:
          "b'200 groups, including the@American_Heart, @LungAssociation, and advocacy organizations sent a letter to the Trump a\\xe2\\x80\\xa6 https:\/\/t.co\/ucxtjsVdXU'",
        Month: "April",
        "Dimension 1": 1.0405326,
        "Dimension 2": 36.67641,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 459,
      },
      {
        RawTweet:
          "b'At least 16 killed in Canada\\xe2\\x80\\x99s worst-ever shooting rampage | RIP good souls. #thedesitimes #killervirus\\xe2\\x80\\xa6 https:\/\/t.co\/B6lMyyg7iv'",
        Month: "April",
        "Dimension 1": -32.385815,
        "Dimension 2": 27.880268,
        Sentiment: 0.066666667,
        Subjectivity: 0.333333333,
        idx: 460,
      },
      {
        RawTweet:
          "But we must do our best to make sure all Americans - regardless of economic means - has the opportunity to protect their families and reduce their risk with the kinds of social distancing approaches that we know can work. We must all have an equal shot at staying safe. Be safe!",
        Month: "March",
        "Dimension 1": 24.642496,
        "Dimension 2": -17.804077,
        Sentiment: 0.408333333,
        Subjectivity: 0.386507937,
        idx: 461,
      },
      {
        RawTweet:
          "['@CWCT_Training we are offering a #dedicated #telephone #support #line for #advice and #guidance for #apprentices and their #employers in thee challenging times.  Call 0276 231 122 or enquiries@cw-chambertraining.co.uk\\n\\n@coventrylive #training #COVID19 https:\/\/t.co\/9GVUVtaPJ0']",
        Month: "March",
        "Dimension 1": 30.670563,
        "Dimension 2": 12.888827,
        Sentiment: 0.5,
        Subjectivity: 1.0,
        idx: 462,
      },
      {
        RawTweet:
          "FDA's drug center chief Dr. Janet Woodcock is now on Twitter at @DrWoodcockFDA. Follow her for updates on medical product issues. Would expect updates on the drug center's ongoing work to combat #COVID19 https:\/\/t.co\/yaMF5pMXIy",
        Month: "March",
        "Dimension 1": 16.918505,
        "Dimension 2": 12.052537,
        Sentiment: -0.066666667,
        Subjectivity: 0.066666667,
        idx: 463,
      },
      {
        RawTweet:
          "['800 times better at filtering viruses. So much cooler than an N95 respirator mask. #coronavirus https:\/\/t.co\/4wkSL7iEl9']",
        Month: "March",
        "Dimension 1": 11.417251,
        "Dimension 2": 25.23651,
        Sentiment: 0.35,
        Subjectivity: 0.35,
        idx: 464,
      },
      {
        RawTweet:
          "FDA recommends the use of platform trials such as a trial with a single master protocol in which multiple treatments are evaluated simultaneously as a way to improve efficiency; and the use of tools such as home based monitoring as a way to reduce risk of spread of infection. https:\/\/t.co\/SF3dYKQLaK",
        Month: "May",
        "Dimension 1": 23.299429,
        "Dimension 2": -8.692322,
        Sentiment: -0.017857143,
        Subjectivity: 0.303571429,
        idx: 465,
      },
      {
        RawTweet:
          "We all must do our part to ensure #HealthWorkers' safety:\r\n-manufacturers: boost supplies of personal protective equipment\r\n-individuals: stop using masks if you're healthy. Masks are needed for the sick &amp; those caring for them.\r\nWe cannot fight #COVID19 without health workers! https:\/\/t.co\/jCKAMUpyiP",
        Month: "March",
        "Dimension 1": 26.510822,
        "Dimension 2": -15.834183,
        Sentiment: -0.130952381,
        Subjectivity: 0.552380952,
        idx: 466,
      },
      {
        RawTweet:
          "5...Finally, masks help, but they are not a guarantee you won't get infected. They are similar to a car seat-belt. Seat-belts will help to protect you in many car crashes and have saved many lives. But they are no absolute guarantee that you are not getting injured......",
        Month: "March",
        "Dimension 1": -14.58093,
        "Dimension 2": -36.490376,
        Sentiment: 0.225,
        Subjectivity: 0.575,
        idx: 467,
      },
      {
        RawTweet:
          'This difference in approach leads to a common finding: the most exposed\/susceptible people in the population are more likely to be infected, and their infection is a bigger "hit" to the virus\'s transmission because they were more efficient spreaders.',
        Month: "May",
        "Dimension 1": 4.6487813,
        "Dimension 2": -22.668753,
        Sentiment: 0.2,
        Subjectivity: 0.583333333,
        idx: 468,
      },
      {
        RawTweet:
          "['.@LVMH is converting three of its #perfume factories to make hand sanitizer! Well done! \u270b Read more via @forbes by @RKestenbaum. #retail #covid19 #coronavirus @dior #celine #fashion https:\/\/t.co\/1SpeiiSk9v', '.@LVMH is converting three of its #perfume factories to make hand sanitizer! Well done! \u270b Read more via @forbes by @RKestenbaum. #retail #covid19 #coronavirus @dior #celine #fashion https:\/\/t.co\/1SpeiiSk9v']",
        Month: "March",
        "Dimension 1": 7.326501,
        "Dimension 2": 15.514913,
        Sentiment: 0.640625,
        Subjectivity: 0.5,
        idx: 469,
      },
      {
        RawTweet:
          "b'The Building Engineering Services Association (BESA) has published Government guidance on #COVID19 testing for esse\\xe2\\x80\\xa6 https:\/\/t.co\/d6II8nLdHh'",
        Month: "May",
        "Dimension 1": 18.636854,
        "Dimension 2": 1.5072755,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 470,
      },
      {
        RawTweet:
          "b\"RT @florian_krammer: A reminder, since we have a first case in NYC: No, we are not all going to die. No, this is not like in 'I am Legend'\\xe2\\x80\\xa6\"",
        Month: "March",
        "Dimension 1": -38.911377,
        "Dimension 2": -8.851124,
        Sentiment: 0.25,
        Subjectivity: 0.333333333,
        idx: 471,
      },
      {
        RawTweet:
          "\u201cEven as states move ahead with plans to reopen their economies, the director of the @CDCgov warned Tuesday that a second wave of the novel coronavirus will be far more deadly because it is likely to coincide with the start of flu season\u201d https:\/\/t.co\/YlG8AuZhdU",
        Month: "April",
        "Dimension 1": -6.2491374,
        "Dimension 2": 24.079315,
        Sentiment: 0.08,
        Subjectivity: 0.58,
        idx: 472,
      },
      {
        RawTweet:
          "['Our friends @BBCNewsround talk to Operation Ouch @DoctorChrisVT and @xandvt for straightforward, no-nonsense facts about #Coronavirus.\\n\\n@cbbc https:\/\/t.co\/waHCRKl15L']",
        Month: "March",
        "Dimension 1": 6.86581,
        "Dimension 2": 6.260762,
        Sentiment: 0.375,
        Subjectivity: 0.375,
        idx: 473,
      },
      {
        RawTweet:
          "['Very telling sign of the public panic here in @marksandspencer in Belfast...majority of the \u2018Get Well Soon\u2019, \u2018Thinking of You\u2019, and \u2018Sympathy\u2019 cards appear to be out of stock #belfast #COVID19 #Covid_19 #COVID2019IRELAND https:\/\/t.co\/XDFfz1CopL']",
        Month: "March",
        "Dimension 1": -20.836178,
        "Dimension 2": -17.972343,
        Sentiment: 0.1,
        Subjectivity: 0.183333333,
        idx: 474,
      },
      {
        RawTweet:
          "b'RT @Kal_Kass: Can we all please take the time to appreciate @lia_tadesse, she took power at one of the toughest time for our Health care sy\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 24.77213,
        "Dimension 2": -22.053947,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 475,
      },
      {
        RawTweet:
          "\u201cthis is going to be a long war, &amp; that we need to address the extensive risks to societal continuity,including health care for people w\/ ongoing medical needs such as hypertension &amp; diabetes, &amp; the vulnerability of the supply chain\u201c- \u2066@DrTomFrieden\u2069 https:\/\/t.co\/BPuxkBwFMO",
        Month: "March",
        "Dimension 1": -6.7090173,
        "Dimension 2": -6.347234,
        Sentiment: -0.0125,
        Subjectivity: 0.308333333,
        idx: 476,
      },
      {
        RawTweet:
          "['Someone told me taking magic mushrooms kills the #coronavirus because the mushrooms are a poison. Maybe I hang out with crazy people and please don\u2019t take my medical advice']",
        Month: "March",
        "Dimension 1": -25.040682,
        "Dimension 2": -2.4011652,
        Sentiment: -0.033333333,
        Subjectivity: 0.633333333,
        idx: 477,
      },
      {
        RawTweet:
          "b'RT @isfBob: Here is the March 27 update (with title corrected) of US per-state semi-log chart of case density and trends.  There are now 19\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -0.4434423,
        "Dimension 2": 44.118824,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 478,
      },
      {
        RawTweet:
          "b'While our meeting places for work may have changed, that feeling of being late has not! Happy Saturday!\\xe2\\x80\\xa6 https:\/\/t.co\/Ul57DQAfg4'",
        Month: "May",
        "Dimension 1": -7.9905524,
        "Dimension 2": 19.412231,
        Sentiment: -0.3875,
        Subjectivity: 0.8,
        idx: 479,
      },
      {
        RawTweet:
          "b'Shivraj Singh Chauhan takes oath to become Madhya Pradesh Chief Minister.\\n\\nPriorities for the BJP while the entire nation battles #COVID19.'",
        Month: "March",
        "Dimension 1": -24.643507,
        "Dimension 2": 10.543263,
        Sentiment: 0.0,
        Subjectivity: 0.625,
        idx: 480,
      },
      {
        RawTweet:
          'b"Increased demand for online learning due to #coronavirus is driving massive growth of Indonesia\'s leading #EdTech p\\xe2\\x80\\xa6 https:\/\/t.co\/3b7SVF6DiM"',
        Month: "May",
        "Dimension 1": 13.38863,
        "Dimension 2": 22.819864,
        Sentiment: -0.0625,
        Subjectivity: 0.6875,
        idx: 481,
      },
      {
        RawTweet:
          "There's been a heartening outpouring of support for the #COVID19 Solidarity Response Fund since its launch last week: over $66M in commitments from more than 175,000 individual donors &amp; corporations. My thanks to everyone for their generosity &amp; solidarity. https:\/\/t.co\/mRCMYYtASW",
        Month: "March",
        "Dimension 1": 13.576715,
        "Dimension 2": 31.73699,
        Sentiment: 0.175,
        Subjectivity: 0.291666667,
        idx: 482,
      },
      {
        RawTweet:
          "b'Older age, history of sepsis, heart trouble elevate COVID-19 death risk https:\/\/t.co\/znMQHQonVT via @upi'",
        Month: "March",
        "Dimension 1": -9.948431,
        "Dimension 2": -1.8512983,
        Sentiment: -0.016666667,
        Subjectivity: 0.266666667,
        idx: 483,
      },
      {
        RawTweet:
          "['10,000 ventilators on order from Dyson to help the NHS. The ventilators are being designed from scratch with hundreds of engineers working around the clock &gt; https:\/\/t.co\/46dBGIBeAp #covid19']",
        Month: "March",
        "Dimension 1": -8.818028,
        "Dimension 2": 36.050694,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 484,
      },
      {
        RawTweet:
          "b'We can defeat this virus.. Just stay safe... Maintain social distancing\\n#COVID\\xe3\\x83\\xbc19 #AprilFoolsDay #COVID19\\xe2\\x80\\xa6 https:\/\/t.co\/PErbwS6tIk'",
        Month: "April",
        "Dimension 1": 15.993993,
        "Dimension 2": -25.334099,
        Sentiment: 0.266666667,
        Subjectivity: 0.283333333,
        idx: 485,
      },
      {
        RawTweet:
          "@Mo_Sawyers1 Ya'll are just getting to know me, and with that ya'll will pick and choose what to resonate with. And, that's fine... but you should attempt to find the tweets like this. Or just get to know me beyond the \"hype\" (positive or negative).  https:\/\/t.co\/va4eVX3Gay",
        Month: "April",
        "Dimension 1": 6.7168255,
        "Dimension 2": -34.191956,
        Sentiment: 0.114646465,
        Subjectivity: 0.481818182,
        idx: 486,
      },
      {
        RawTweet:
          "['PwC built a zip code-level pandemic projection model that takes into account age, health status and icu capacity. Yes we did. Here\u2019s more: https:\/\/t.co\/2rq0PwGSYl #COVID19']",
        Month: "March",
        "Dimension 1": 21.209782,
        "Dimension 2": 7.7377663,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 487,
      },
      {
        RawTweet:
          "['Help slow the spread of #COVID19 and identify at risk cases sooner by self-reporting your symptoms daily, even if you feel well  \ud83d\ude4f\ud83c\udffc. Download the app https:\/\/t.co\/2QzEbjUb2L', 'Help slow the spread of #COVID19 and identify at risk cases sooner by self-reporting your symptoms daily, even if you feel well  \ud83d\ude4f\ud83c\udffc. Download the app https:\/\/t.co\/2QzEbjUb2L']",
        Month: "March",
        "Dimension 1": 6.582982,
        "Dimension 2": -26.077147,
        Sentiment: -0.15,
        Subjectivity: 0.2,
        idx: 488,
      },
      {
        RawTweet:
          'b"It\'s normal to feel stressed, confused or scared during a crisis.\\n\\nTalking to people you trust can help. Maintain p\\xe2\\x80\\xa6 https:\/\/t.co\/zafHCDNzEM"',
        Month: "May",
        "Dimension 1": 17.726,
        "Dimension 2": -30.255924,
        Sentiment: -0.125,
        Subjectivity: 0.675,
        idx: 489,
      },
      {
        RawTweet:
          "That is a big point! Your 4\/n. And once again, another major point in our Viewpoint has been made. Just making sure editor know that what\u2019s coming out is not plagiarism! \ud83d\ude2e\ud83d\ude07 https:\/\/t.co\/33riVPWUp5",
        Month: "March",
        "Dimension 1": 14.582186,
        "Dimension 2": -27.833532,
        Sentiment: 0.229166667,
        Subjectivity: 0.496296296,
        idx: 490,
      },
      {
        RawTweet:
          "['@jamesonwhiskey @uhaul \\n\\nThank you for voluntarily supporting people impacted by #COVID19!\\n\\n#charity #CoronaVirusUpdate #voluntaryism\\n\\nhttps:\/\/t.co\/eRxx3G2FTw', '@jamesonwhiskey @uhaul \\n\\nThank you for voluntarily supporting people impacted by #COVID19!\\n\\n#charity #CoronaVirusUpdate #voluntaryism\\n\\nhttps:\/\/t.co\/eRxx3G2FTw']",
        Month: "March",
        "Dimension 1": 38.01239,
        "Dimension 2": -22.90643,
        Sentiment: 0.25,
        Subjectivity: 0.25,
        idx: 491,
      },
      {
        RawTweet:
          "[\"Top story: @SCMPNews: 'South Korea has set up 'phone booths' that can test people for the #coronavirus in just 7 minutes. The country has earned praise for its mass testing amid the #Covid19 pandemic. ' https:\/\/t.co\/eIPJzmkpwu, see more https:\/\/t.co\/nrY0Y7vyJk\"]",
        Month: "March",
        "Dimension 1": 2.6598613,
        "Dimension 2": 17.350819,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 492,
      },
      {
        RawTweet:
          "b'RT @RonaldKlain: Ep3 of \\xe2\\x81\\xa6@EPIDEMICpodcast\\xe2\\x81\\xa9 is here:\\n- latest news w\/ \\xe2\\x81\\xa6@HelenBranswell\\xe2\\x81\\xa9 \\n- flattening the curve!\\n- health care workers w\/ \\xe2\\x81\\xa6@\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 18.136267,
        "Dimension 2": 5.4859047,
        Sentiment: 0.5,
        Subjectivity: 0.9,
        idx: 493,
      },
      {
        RawTweet:
          "\u201cShe remains totally unknown to this day solely because she was born a woman,\u201d\u00a0said Josh Perlin, a writer. He is among several people working to restore Eunice Foote\u2019s legacy. https:\/\/t.co\/7InLiVnxra",
        Month: "April",
        "Dimension 1": -46.083584,
        "Dimension 2": 6.104002,
        Sentiment: -0.05,
        Subjectivity: 0.3,
        idx: 494,
      },
      {
        RawTweet:
          "['Stay on top \\nImagine that within the coming few months, you come up with 10 pieces of content relevant to your industry, revamp your website and gain 1000-1500 followers on social media\\n#coronavirus #effects #digital #marketing #techniques\\nhttps:\/\/t.co\/tlinb5471o https:\/\/t.co\/LvLQqi4bHW', 'Stay on top \\nImagine that within the coming few months, you come up with 10 pieces of content relevant to your industry, revamp your website and gain 1000-1500 followers on social media\\n#coronavirus #effects #digital #marketing #techniques\\nhttps:\/\/t.co\/tlinb5471o https:\/\/t.co\/LvLQqi4bHW']",
        Month: "March",
        "Dimension 1": -5.1014085,
        "Dimension 2": 39.435184,
        Sentiment: 0.146666667,
        Subjectivity: 0.313333333,
        idx: 495,
      },
      {
        RawTweet:
          "How to talk to your friends about social distancing when they\u2019re going to bars . In which yours truly admits to being old, and tries to be a sensitive soul while giving good advice. https:\/\/t.co\/dvofdSoGjw",
        Month: "March",
        "Dimension 1": 3.4308667,
        "Dimension 2": -38.88821,
        Sentiment: 0.166666667,
        Subjectivity: 0.433333333,
        idx: 496,
      },
      {
        RawTweet:
          "b\"RT @Farzad_MD: 1\/ I'm very worried that we don't have a clear strategy for #COVID19 response\\n\\nWe need to clearly define when the public hea\\xe2\\x80\\xa6\"",
        Month: "March",
        "Dimension 1": -24.04735,
        "Dimension 2": -25.189034,
        Sentiment: 0.1,
        Subjectivity: 0.283333333,
        idx: 497,
      },
      {
        RawTweet:
          "b'RT @GrantWahl: 5 years ago my wife Dr @celinegounder volunteered as an Ebola aid worker in Guinea (I was freaked out). She made this video.\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 1.7493205,
        "Dimension 2": 30.949203,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 498,
      },
      {
        RawTweet:
          "I miss Thursdays back in them days: no meetings (just data reviews &amp; planning with the team), lunch at @Chopt, date nights with manicured eyebrows, guiltless bottles of vino, only to wake up and throw together a presentation for Friday Emerging Infectious Diseases Meetings.",
        Month: "April",
        "Dimension 1": -42.241505,
        "Dimension 2": 4.9801965,
        Sentiment: 0.0,
        Subjectivity: 0.5,
        idx: 499,
      },
      {
        RawTweet:
          "b'The heads of the Christian churches of the holy land have issued a statement condemning Israeli plans to annex sect\\xe2\\x80\\xa6 https:\/\/t.co\/dlZuJwwi68'",
        Month: "May",
        "Dimension 1": -28.454176,
        "Dimension 2": -3.2325933,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 500,
      },
      {
        RawTweet:
          "@kentdelay Luckily you also have the constitutional right not to put yourself in danger by seeing him, especially since he's healthy enough to argue the point w suggests not an emergency \ud83e\udd37\u200d\u2640\ufe0f",
        Month: "May",
        "Dimension 1": -9.156296,
        "Dimension 2": -37.720512,
        Sentiment: 0.223809524,
        Subjectivity: 0.673809524,
        idx: 501,
      },
      {
        RawTweet:
          "b'RT @DougSReed: With concern about antibody-dependent enhancement seen with feline coronavirus and possibly in SARS-CoV studies, this seems\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -0.9539709,
        "Dimension 2": 2.9051175,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 502,
      },
      {
        RawTweet:
          "\u201cWhat it suggests to me is that anticoagulation alone might attenuate the disease, but it may not be the answer. We need more data and longer follow-up. Remember, this is just observational data. We don\u2019t have a full picture on all of those patients.\u201d https:\/\/t.co\/bggP3xZoab",
        Month: "May",
        "Dimension 1": -14.460606,
        "Dimension 2": -25.995764,
        Sentiment: 0.425,
        Subjectivity: 0.525,
        idx: 503,
      },
      {
        RawTweet:
          "['While all states are gearing up to fight against the #Coronavirus, Chennai claims to have started their preparation from January itself. The Dean of Madras Medical College speaks about the measures they have undertaken.\\n\\n@madhavpramod1 #COVID19 https:\/\/t.co\/LrQINbKfIm', 'While all states are gearing up to fight against the #Coronavirus, Chennai claims to have started their preparation from January itself. The Dean of Madras Medical College speaks about the measures they have undertaken.\\n\\n@madhavpramod1 #COVID19 https:\/\/t.co\/LrQINbKfIm', 'While all states are gearing up to fight against the #Coronavirus, Chennai claims to have started their preparation from January itself. The Dean of Madras Medical College speaks about the measures they have undertaken.\\n\\n@madhavpramod1 #COVID19 https:\/\/t.co\/LrQINbKfIm']",
        Month: "March",
        "Dimension 1": -1.597302,
        "Dimension 2": 25.964027,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 504,
      },
      {
        RawTweet:
          "In this \u2066@abbyhaglage\u2069 \u2066@YahooNews\u2069 piece I am quoted on when to end self-isolation after a #COVID-19 diagnoses or exposure  https:\/\/t.co\/eRwtz493q4",
        Month: "May",
        "Dimension 1": 6.9353037,
        "Dimension 2": -7.868623,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 505,
      },
      {
        RawTweet:
          "At about the same time, @D_R_Williams1 called for a Marshall Plan to address the racial disparities of #COVID19. https:\/\/t.co\/asenMAuqmf \r\n\r\nAnd @UNCTADKituyi called for a Marshall Plan to mitigate the spread of #COVID19 in Africa. https:\/\/t.co\/dWjaagKeLs",
        Month: "April",
        "Dimension 1": 4.68656,
        "Dimension 2": -5.9836693,
        Sentiment: 0.0,
        Subjectivity: 0.125,
        idx: 506,
      },
      {
        RawTweet:
          "b'Stop worrying about what can go wrong, And get excited about what can go right. COVID-19\\nhttps:\/\/t.co\/CUSr24Mpws\\xe2\\x80\\xa6 https:\/\/t.co\/edKNNcAiux'",
        Month: "April",
        "Dimension 1": 17.182163,
        "Dimension 2": -27.944576,
        Sentiment: 0.053571429,
        Subjectivity: 0.728571429,
        idx: 507,
      },
      {
        RawTweet:
          "b'#MDMC has gone virtual AND is offering free tickets to small &amp; mid-sized businesses impacted by #COVID19. Get the d\\xe2\\x80\\xa6 https:\/\/t.co\/OUreTr1Jwh'",
        Month: "May",
        "Dimension 1": 40.84867,
        "Dimension 2": 2.3902695,
        Sentiment: 0.075,
        Subjectivity: 0.6,
        idx: 508,
      },
      {
        RawTweet:
          'b"RT @HeidiRehm: I\'m very appreciative of the many staff at Broad who have stayed at the lab and been working around the clock to make this h\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": 43.54722,
        "Dimension 2": -11.362091,
        Sentiment: 0.4475,
        Subjectivity: 0.604166667,
        idx: 509,
      },
      {
        RawTweet:
          "Dear @medrxivpreprint, we just submitted an manuscript with very timely COVID19 info. Can you please expedited screening if possible? MEDRXIV\/2020\/056929",
        Month: "April",
        "Dimension 1": 29.827732,
        "Dimension 2": -1.8149371,
        Sentiment: 0.1,
        Subjectivity: 0.65,
        idx: 510,
      },
      {
        RawTweet:
          "b'RT @AbiyAhmedAli: Following receipt of #COVID19 prevention materials from @JackMa, I am pleased to share that with the able leadership at @\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 39.645805,
        "Dimension 2": -12.378103,
        Sentiment: 0.333333333,
        Subjectivity: 0.575,
        idx: 511,
      },
      {
        RawTweet:
          'b"Louisiana Coronavirus Data Update: 4\/17\/20 12 PM\\n\\nwe\'ve averaged about 552 new cases a day for the last 7 days. \\n\\n1\\xe2\\x80\\xa6 https:\/\/t.co\/VMjk4flW1D"',
        Month: "April",
        "Dimension 1": -8.961227,
        "Dimension 2": 43.88169,
        Sentiment: 0.068181818,
        Subjectivity: 0.260606061,
        idx: 512,
      },
      {
        RawTweet:
          "b'RT @DrLindaMD: After Anonymous Tip, 17 Bodies Found at N.J. Nursing Home Hit by Virus https:\/\/t.co\/aEh3A8LGb0'",
        Month: "April",
        "Dimension 1": -15.981519,
        "Dimension 2": 18.982973,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 513,
      },
      {
        RawTweet:
          "New data from patients who presented at the Columbia Presbyterian ICU present a striking picture of income-based health disparities in the #COVID19 era. Wrote about this with Neil Schluger in @PsychToday: https:\/\/t.co\/hzn29O0CzV @davechokshi @NYCHealthSystem @NYCHealthCommr",
        Month: "May",
        "Dimension 1": 22.10071,
        "Dimension 2": 10.551322,
        Sentiment: 0.212121212,
        Subjectivity: 0.484848485,
        idx: 514,
      },
      {
        RawTweet:
          "b'Protesting #Coronavirus in large groups of people must be one of the dumbest actions in human history. #maga\\xe2\\x80\\xa6 https:\/\/t.co\/nq8iUYa0X2'",
        Month: "April",
        "Dimension 1": -22.323952,
        "Dimension 2": -7.5270658,
        Sentiment: 0.107142857,
        Subjectivity: 0.264285714,
        idx: 515,
      },
      {
        RawTweet:
          "b'RT @SkyNews: \"Coming together is the only option we have to defeat this virus.\"\\n\\n@WHO director-general @DrTedros has said that while scient\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -1.2319701,
        "Dimension 2": -15.087601,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 516,
      },
      {
        RawTweet:
          "b'@Ben_LD_Nurse   Hi can you spare 5mins to complete &amp; share our National Snapshot Survey for all UK-based healthcare\\xe2\\x80\\xa6 https:\/\/t.co\/9DK2pJksT8'",
        Month: "May",
        "Dimension 1": 3.1529963,
        "Dimension 2": 30.886467,
        Sentiment: 0.1,
        Subjectivity: 0.4,
        idx: 517,
      },
      {
        RawTweet:
          "b'So let me get this straight\\nThere are now 11 cases of #COVID19 in zim first case report early march\\nSince Zororo di\\xe2\\x80\\xa6 https:\/\/t.co\/BpGTsxnYdx'",
        Month: "April",
        "Dimension 1": -0.42849466,
        "Dimension 2": 45.235714,
        Sentiment: 0.175,
        Subjectivity: 0.316666667,
        idx: 518,
      },
      {
        RawTweet:
          'b"RT @ScottGottliebMD: THREAD: This week tragic reality on ground will overtake events. There are multiple epicenters of U.S. spread. We\'ll g\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": 7.2716093,
        "Dimension 2": 27.400229,
        Sentiment: -0.375,
        Subjectivity: 0.375,
        idx: 519,
      },
      {
        RawTweet:
          "b'72 years ago, on such a day, a country was created that has killed many innocent people\\nA country more deadly than\\xe2\\x80\\xa6 https:\/\/t.co\/E05XCzfvso'",
        Month: "May",
        "Dimension 1": -32.360542,
        "Dimension 2": 27.878893,
        Sentiment: 0.183333333,
        Subjectivity: 0.433333333,
        idx: 520,
      },
      {
        RawTweet:
          "b'On the left, a map of #Covid19 cases in the US\\nOn the right, counties with tumbleweed\\nSo does that mean tumbleweed\\xe2\\x80\\xa6 https:\/\/t.co\/Tfq7SVhqG0'",
        Month: "April",
        "Dimension 1": 8.085974,
        "Dimension 2": -2.8289757,
        Sentiment: -0.008928571,
        Subjectivity: 0.407738095,
        idx: 521,
      },
      {
        RawTweet:
          "['Prime Minister Justin Trudeau has announced that the Canada- U.S. border will close to all non-essential travel, and that the federal government is prepared to spend a combined $82 billion on direct financial help and economic stimulus https:\/\/t.co\/kYMB6E3HsG #cdnpoli #covid19']",
        Month: "March",
        "Dimension 1": -5.599986,
        "Dimension 2": 28.047003,
        Sentiment: 0.1,
        Subjectivity: 0.2,
        idx: 522,
      },
      {
        RawTweet:
          "In my recent interview with @camanpour and @CNN, I discussed how we can all expect the #CoronavirusOutbreak to progress in the coming weeks. Unfortunately, a pandemic is upon us. #Covid19 https:\/\/t.co\/CVdAV0Ake6",
        Month: "March",
        "Dimension 1": -5.601746,
        "Dimension 2": 24.360432,
        Sentiment: -0.25,
        Subjectivity: 0.625,
        idx: 523,
      },
      {
        RawTweet:
          "\u201cIt\u2019s probably four, six, eight weeks before we\u2019re going to have any useful information as to what the trajectory of the virus is and what the actual economic fallout looks like.\u201d https:\/\/t.co\/d5UnYaJbN0",
        Month: "March",
        "Dimension 1": -15.950192,
        "Dimension 2": 27.520628,
        Sentiment: 0.166666667,
        Subjectivity: 0.1,
        idx: 524,
      },
      {
        RawTweet:
          "b'So we can go to a gym and restaurant, but can\\xe2\\x80\\x99t get a haircut?  I can see where that pesky haircut could spike this\\xe2\\x80\\xa6 https:\/\/t.co\/9l2IvTuNck'",
        Month: "April",
        "Dimension 1": 15.960535,
        "Dimension 2": 2.2680197,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 525,
      },
      {
        RawTweet:
          "b'All the front line rallied #stocks are riskier. Get ready for the crash. #StockMarket #COVID19  https:\/\/t.co\/qnW72V1FrK'",
        Month: "April",
        "Dimension 1": -19.191076,
        "Dimension 2": 12.178679,
        Sentiment: 0.2,
        Subjectivity: 0.5,
        idx: 526,
      },
      {
        RawTweet:
          "[\"#Coronavirus markets 'shock' may cost \u00a3$1trn and spark global recession, UN economists warn https:\/\/t.co\/GGVW4yK5Fi\"]",
        Month: "March",
        "Dimension 1": -20.042215,
        "Dimension 2": 13.721102,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 527,
      },
      {
        RawTweet:
          "19\/ On treatment side, Ganem is a bit more hopeful. Remdesivir proves Covid drugs can work, but limited value since requires IV, which means patients who get it will be fairly late in their course. Need oral drugs that can be given early, during active viral replication phase.",
        Month: "May",
        "Dimension 1": -11.141825,
        "Dimension 2": -25.417654,
        Sentiment: 0.065873016,
        Subjectivity: 0.357142857,
        idx: 528,
      },
      {
        RawTweet:
          "[\"#COVID19 viewpoint: Standard business practice in a crisis is to protect cash flow and reduce cost but EY's Economic Advisory's Peter Arnold argues this risks turning a highly disruptive but time-limited crisis into a far more systematic economic threat https:\/\/t.co\/az5mTJXj3a\"]",
        Month: "March",
        "Dimension 1": -7.819783,
        "Dimension 2": -11.7618265,
        Sentiment: 0.193333333,
        Subjectivity: 0.406666667,
        idx: 529,
      },
      {
        RawTweet:
          "b'Now with more cases, more spread, no decrease. We still as citizens will be forced to expose ourselves more to keep\\xe2\\x80\\xa6 https:\/\/t.co\/lgdSeSVZ34'",
        Month: "April",
        "Dimension 1": 7.7814646,
        "Dimension 2": -28.222778,
        Sentiment: 0.3,
        Subjectivity: 0.425,
        idx: 530,
      },
      {
        RawTweet:
          "COVID-19 update for clinicians on the recent developments about virology, diagnostics, clinical presentation, duration of viral shedding and treatment options. \r\n@cggbamford @DrToniHo \r\nhttps:\/\/t.co\/TPqPFEPNHc https:\/\/t.co\/EVQZeZxcY5",
        Month: "April",
        "Dimension 1": 23.885956,
        "Dimension 2": 6.4165306,
        Sentiment: 0.0,
        Subjectivity: 0.25,
        idx: 531,
      },
      {
        RawTweet:
          "@WeaponizedLefse So hang on to \u201cmerit\u201d that is ultimately defined by white men in hiring positions. \u201cMerit\u201d is even defined by predjudices: https:\/\/t.co\/19LEv0Vjfx",
        Month: "April",
        "Dimension 1": -14.177419,
        "Dimension 2": -16.288342,
        Sentiment: 0.0,
        Subjectivity: 0.5,
        idx: 532,
      },
      {
        RawTweet:
          "b'RT @londyloo: My mom is the best person in the world. She dressed up as a rooster to hand out toilet paper &amp; masks to her local 70+ communi\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 34.790596,
        "Dimension 2": 19.012459,
        Sentiment: 0.322222222,
        Subjectivity: 0.1,
        idx: 533,
      },
      {
        RawTweet:
          "b'RT @HelenBranswell: China reported 1 new domestically acquired cases of #Covid19 on March 16, &amp; 20 imported cases.\\n\\n1 domestically acquired\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -2.8626301,
        "Dimension 2": 43.93607,
        Sentiment: 0.136363636,
        Subjectivity: 0.454545455,
        idx: 534,
      },
      {
        RawTweet:
          'b"RT @DrTedros: Another heartbreaking video showing the sacrifice #healthworkers are making to keep us safe from the #coronavirus. Let\'s supp\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": -1.8001695,
        "Dimension 2": -2.6327167,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 535,
      },
      {
        RawTweet:
          "b'RT @DrJCheungEP: I am so inspired and overwhelmed by the spirit of the medical teams who are flying across the country or busing down the s\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 48.017982,
        "Dimension 2": -8.001948,
        Sentiment: -0.077777778,
        Subjectivity: 0.144444444,
        idx: 536,
      },
      {
        RawTweet:
          "b'RT @DrTedros: Some truly unique &amp; inspirational fundraisers have stepped up to bolster the global #COVID19 response:\\n-In NYC,\\xf0\\x9f\\x87\\xba\\xf0\\x9f\\x87\\xb8 a theater g\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 38.624645,
        "Dimension 2": 13.80577,
        Sentiment: 0.291666667,
        Subjectivity: 0.666666667,
        idx: 537,
      },
      {
        RawTweet:
          "b'Let this bless your soul this Great Morning! @rodneyjerkins produced this joint to perfection! #healtheword\\xe2\\x80\\xa6 https:\/\/t.co\/lemTYhvgqA'",
        Month: "May",
        "Dimension 1": 43.793167,
        "Dimension 2": -20.546148,
        Sentiment: 1.0,
        Subjectivity: 0.75,
        idx: 538,
      },
      {
        RawTweet:
          "['My 10yr old was sick last week, I kept her home for 3days. Slight fever, sore throat, cough and blocked sinus. She more than likely got it at school. Should I have kept her home longer? I have so many questions, re this #COVID19']",
        Month: "March",
        "Dimension 1": -20.876196,
        "Dimension 2": 25.169378,
        Sentiment: 0.031292517,
        Subjectivity: 0.470068027,
        idx: 539,
      },
      {
        RawTweet:
          "['Anyone interested in helping in projects to mitigate #COVID19 \\n impact (like #AI, #bots, #Ventilators, etc) and want to get exposure to #RemoteWork during high-pressure times (hey, good for our #Resumes, right?), check this out:\\n\\nhttps:\/\/t.co\/AlLboCzHGJ']",
        Month: "March",
        "Dimension 1": 22.636837,
        "Dimension 2": -7.121133,
        Sentiment: 0.411904762,
        Subjectivity: 0.545238095,
        idx: 540,
      },
      {
        RawTweet:
          "Fauci just read out some of the top line results from the randomized, placebo controlled NIAID study. It is this study people that we were focused on, and it is the news that the drug met the primary endpoint in this trial that triggered the positive reaction this morning. 1\/2 https:\/\/t.co\/g3qQoSIgDd",
        Month: "April",
        "Dimension 1": 41.31885,
        "Dimension 2": -2.7997673,
        Sentiment: 0.375757576,
        Subjectivity: 0.515151515,
        idx: 541,
      },
      {
        RawTweet:
          "b'RT @OutbreakJake: Calling UK hospital staff - we have added #COVID-19 PPE videos to the @PHE_uk YouTube channel. \\nDonning PPE: https:\/\/t.co\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 23.689339,
        "Dimension 2": 8.478643,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 542,
      },
      {
        RawTweet:
          '"How do white decision-makers justify racial discrimination when resources are scarce? Our research suggests they visually perceive minorities in ways they believe make minorities less worthy of those resources\u2014even potentially seeing them as *less human*."\r\n\r\nImportant read. https:\/\/t.co\/7DCr9GwhEd',
        Month: "April",
        "Dimension 1": -15.412013,
        "Dimension 2": -15.668434,
        Sentiment: 0.05,
        Subjectivity: 0.404166667,
        idx: 543,
      },
      {
        RawTweet:
          "b'Protective measures introduced to combat #coronavirus #pandemic will be gradually lifted in #Hungary. Life can part\\xe2\\x80\\xa6 https:\/\/t.co\/M4cPKtiARr'",
        Month: "April",
        "Dimension 1": 6.7891526,
        "Dimension 2": 0.5590984,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 544,
      },
      {
        RawTweet:
          "b'RT @FaceTheNation: As Trump is seen not wearing protective masks, @scottgottliebMD says \"elected leaders should be setting a strong example\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": -5.2452364,
        "Dimension 2": -15.715262,
        Sentiment: 0.433333333,
        Subjectivity: 0.733333333,
        idx: 545,
      },
      {
        RawTweet:
          "b'Working from home this past month @ATT charged us extra for more usage during the #COVID19 pandemic.   \\n\\nIf that wa\\xe2\\x80\\xa6 https:\/\/t.co\/6wY7Oc3GFl'",
        Month: "April",
        "Dimension 1": -2.7663372,
        "Dimension 2": 40.89499,
        Sentiment: 0.083333333,
        Subjectivity: 0.283333333,
        idx: 546,
      },
      {
        RawTweet:
          "b'China airlines, the national carrier of Taiwan is considering a name change after its aircrafts carrying #Covid19 r\\xe2\\x80\\xa6 https:\/\/t.co\/pY9SVF7mbu'",
        Month: "April",
        "Dimension 1": -13.065956,
        "Dimension 2": 9.881807,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 547,
      },
      {
        RawTweet:
          "b'RT @ICNurses: Today on 11 May, one day before #IND2020, shine a light to show your respect for the #nurses and #healthcareworkers lost to t\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 6.1918035,
        "Dimension 2": 24.134771,
        Sentiment: 0.4,
        Subjectivity: 0.7,
        idx: 548,
      },
      {
        RawTweet:
          "b'RT @EOSaphire: Vaccines halt spread. Vaccines save lives. Vaccines are essential (says Captain Obvious, and Captain Grateful-To-See-Them-De\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 28.921305,
        "Dimension 2": -17.311037,
        Sentiment: 0.0,
        Subjectivity: 0.4,
        idx: 549,
      },
      {
        RawTweet:
          '"Beginning this week, the Louisiana Department of Health and Hospitals will release weekly demographics updates on fatal COVID-19 cases. During his Monday press briefing, Gov. Edwards said nearly 70% of the deaths related #COVID19 in Louisiana are Black." \r\nhttps:\/\/t.co\/lnfwY117hV',
        Month: "April",
        "Dimension 1": -9.644526,
        "Dimension 2": 42.675915,
        Sentiment: -0.022222222,
        Subjectivity: 0.411111111,
        idx: 550,
      },
      {
        RawTweet:
          "b'RT @Cleavon_MD: 3\/23\/2020 \\n12,305 cases in New York City and 98 deaths\\n\\nI chronicle my experience as an emergency room doctor on the frontl\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 7.5800567,
        "Dimension 2": 19.52088,
        Sentiment: 0.136363636,
        Subjectivity: 0.454545455,
        idx: 551,
      },
      {
        RawTweet:
          "['Hey \\u2066@shandro\\u2069 \\u2066@UCPCaucus\\u2069 \\n\\nYou realize that taking healthcare away from people who cannot afford it to be privitized is also a death threat. You can make it better by resigning. \\n\\n#AbLeg #peopledeservebetter #COVID19 #alberta  https:\/\/t.co\/99W98NoEhG', 'Hey \\u2066@shandro\\u2069 \\u2066@UCPCaucus\\u2069 \\n\\nYou realize that taking healthcare away from people who cannot afford it to be privitized is also a death threat. You can make it better by resigning. \\n\\n#AbLeg #peopledeservebetter #COVID19 #alberta  https:\/\/t.co\/99W98NoEhG']",
        Month: "March",
        "Dimension 1": -9.644601,
        "Dimension 2": -15.180841,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 552,
      },
      {
        RawTweet:
          'Question for @Twitter friends re California\r\n\r\nWhy there are so many "pending" tests in CA? \r\n\r\nAccording to https:\/\/t.co\/WVPggoRhr1, 2\/3 of all tests performed in California are "pending"\r\n\r\nDoes this match up with your clinical experience?\r\n\r\nAny one understand why?\r\n\r\nPlease RT',
        Month: "April",
        "Dimension 1": 0.60941154,
        "Dimension 2": 27.383463,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 553,
      },
      {
        RawTweet:
          "Thank you @thekillers for helping us all look on the bright side of this public health challenge and modeling great hand hygiene! #SafeHands #COVID19 #coronavirus https:\/\/t.co\/ddtp6IDJ4C",
        Month: "March",
        "Dimension 1": 31.17541,
        "Dimension 2": -20.160337,
        Sentiment: 0.566666667,
        Subjectivity: 0.538888889,
        idx: 554,
      },
      {
        RawTweet:
          "['Thank you .\\n.\\n.\\n.\\n#Indians #tiktokindia #tiktok #madarmy #Madorables #quarantine #janatacurfew #love #pray #coronavirus \\n#mtvroadies #mtvsplitsvilla #madorables #music #rappermaddy #rapper #singer #pahadi #thankyou\u2026 https:\/\/t.co\/sAlA8FEFhg']",
        Month: "March",
        "Dimension 1": 15.172134,
        "Dimension 2": -7.89833,
        Sentiment: 0.5,
        Subjectivity: 0.6,
        idx: 555,
      },
      {
        RawTweet:
          "b'RT @RonaldKlain: If you are reading about hospitals crushed by COVID cases\\xe2\\x80\\x94with inadequate gear\\xe2\\x80\\x94 and want to hear a first hand account, dow\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -10.463841,
        "Dimension 2": -0.53510433,
        Sentiment: 0.075,
        Subjectivity: 0.216666667,
        idx: 556,
      },
      {
        RawTweet:
          "b'.@JohnJCrace destroying the beshitted Johnson this week... \\xe2\\xac\\x87\\xef\\xb8\\x8f How long will it take for the Tory loons to turn agai\\xe2\\x80\\xa6 https:\/\/t.co\/LMPsEZcTAI'",
        Month: "May",
        "Dimension 1": -35.87359,
        "Dimension 2": 6.3832464,
        Sentiment: -0.125,
        Subjectivity: 0.2,
        idx: 557,
      },
      {
        RawTweet:
          "Today's #shoutout to #womenInSTEM goes to Wenling Wang for her @JAMA_Current paper on detection of #SARSCoV2 in Different Types of Clinical Specimens.  #COVID19 #coronavirus https:\/\/t.co\/igdCudNY23",
        Month: "March",
        "Dimension 1": 16.095304,
        "Dimension 2": 10.686588,
        Sentiment: 0.0,
        Subjectivity: 0.6,
        idx: 558,
      },
      {
        RawTweet:
          '["Wait. POTUS and VP were in the same place at the same time meeting the same groups of folks from who knows where, DURING A PANDEMIC?\\n\\n....there\'s no one at the wheel america.\\n\\n#coronavirus", "Wait. POTUS and VP were in the same place at the same time meeting the same groups of folks from who knows where, DURING A PANDEMIC?\\n\\n....there\'s no one at the wheel america.\\n\\n#coronavirus"]',
        Month: "March",
        "Dimension 1": -42.1652,
        "Dimension 2": -16.72973,
        Sentiment: 0.0,
        Subjectivity: 0.125,
        idx: 559,
      },
      {
        RawTweet:
          "b'Doctors in Russia ask President Putin why they\\xe2\\x80\\x99re not getting their bonus payments while holding up a petition for\\xe2\\x80\\xa6 https:\/\/t.co\/6NLnTBysfX'",
        Month: "May",
        "Dimension 1": -10.288069,
        "Dimension 2": 8.310727,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 560,
      },
      {
        RawTweet:
          "['The April 15, 2020 #tax payment deadline has been extended 90 days in light of the #coronavirus pandemic. https:\/\/t.co\/EOypIDq6Rl']",
        Month: "March",
        "Dimension 1": -7.289646,
        "Dimension 2": 37.831635,
        Sentiment: 0.4,
        Subjectivity: 0.7,
        idx: 561,
      },
      {
        RawTweet:
          "USA: Pennsylvania first to release a week 11 #Influenza report adds 10 new #Flu deaths (tot 94) and reveals a sharp uptick in hospital ED visits for Influenza like Illness https:\/\/t.co\/D2biQTl38s https:\/\/t.co\/1pxm5lC0SY",
        Month: "March",
        "Dimension 1": -7.1160436,
        "Dimension 2": 38.112022,
        Sentiment: 0.087121212,
        Subjectivity: 0.512626263,
        idx: 562,
      },
      {
        RawTweet:
          "Justin, we are lucky to have you in our @ucsf family. Thanks for writing this \u2013 it was extraordinarily brave and it will save lives. @NEJM @rebeccabermanmd @CatherineRLucey https:\/\/t.co\/uG4KZkOoC1",
        Month: "March",
        "Dimension 1": 40.217316,
        "Dimension 2": -17.236612,
        Sentiment: 0.444444444,
        Subjectivity: 0.677777778,
        idx: 563,
      },
      {
        RawTweet:
          "['What happens in China\u2019s economy impacts the world at large and #Africa in particular. @eolander , Founder of the China Africa Project, elaborated on the challenges and opportunities for the continent in his recent interview with CNBC Africa.\\nhttps:\/\/t.co\/TXaHwsoVsS\\n#covid19', 'What happens in China\u2019s economy impacts the world at large and #Africa in particular. @eolander , Founder of the China Africa Project, elaborated on the challenges and opportunities for the continent in his recent interview with CNBC Africa.\\nhttps:\/\/t.co\/TXaHwsoVsS\\n#covid19']",
        Month: "March",
        "Dimension 1": -14.181311,
        "Dimension 2": 11.566807,
        Sentiment: 0.126984127,
        Subjectivity: 0.337301587,
        idx: 564,
      },
      {
        RawTweet:
          "Protests in America? \r\nCrowded markets in Ethiopia?\r\nThe cause of my nightmares from the past two days. I am just a worried ER Doctor witnessing death after death in NYC. We have tried to teach &amp; inform the public. But what are we doing wrong? So much denial, arrogance &amp; ignorance https:\/\/t.co\/cqlhBJI15R",
        Month: "April",
        "Dimension 1": -34.35864,
        "Dimension 2": 9.752349,
        Sentiment: -0.1375,
        Subjectivity: 0.354166667,
        idx: 565,
      },
      {
        RawTweet:
          "b'Just watched &amp; recommend this fascinating made in 2018 documentary about the Spanish flu, its influence on public h\\xe2\\x80\\xa6 https:\/\/t.co\/uuU9LbsGFu'",
        Month: "April",
        "Dimension 1": 13.188355,
        "Dimension 2": 4.102061,
        Sentiment: 0.175,
        Subjectivity: 0.229166667,
        idx: 566,
      },
      {
        RawTweet:
          "b'UAP\\'s CEO, LtCol David \"Bull\" Gurfein, shared some updates from home earlier! We\\'re hard at work for our warriors d\\xe2\\x80\\xa6 https:\/\/t.co\/UyPg4EKfnl'",
        Month: "May",
        "Dimension 1": 26.271656,
        "Dimension 2": 15.665321,
        Sentiment: -0.145833333,
        Subjectivity: 0.520833333,
        idx: 567,
      },
      {
        RawTweet:
          "b'@ForrestLHurst High school through grad school, so really closer to 12 years. 14-26.'",
        Month: "May",
        "Dimension 1": 1.7252967,
        "Dimension 2": 46.60605,
        Sentiment: 0.18,
        Subjectivity: 0.37,
        idx: 568,
      },
      {
        RawTweet:
          'b"@BishopBlougram @bigpapapump111 It\'s really just germ theory denial. The idea that microbes could have that effect\\xe2\\x80\\xa6 https:\/\/t.co\/wS2xzMyQ4J"',
        Month: "May",
        "Dimension 1": -17.393444,
        "Dimension 2": -22.922665,
        Sentiment: 0.2,
        Subjectivity: 0.2,
        idx: 569,
      },
      {
        RawTweet:
          "['Real question. Does chlorine kill the corona virus? It\u2019s about to be 80 on Friday in DC in March and I would like to go to the pool #coronavirus #QuarantineAndChill']",
        Month: "March",
        "Dimension 1": -9.007763,
        "Dimension 2": 28.586575,
        Sentiment: 0.2,
        Subjectivity: 0.3,
        idx: 570,
      },
      {
        RawTweet:
          "b'RT @florian_krammer: Here are some potentially good news. The ratio of deaths versus infections is much lower in South Korea (0.53%) than i\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -21.718277,
        "Dimension 2": 19.713907,
        Sentiment: 0.45,
        Subjectivity: 0.4,
        idx: 571,
      },
      {
        RawTweet:
          "b'\\xe2\\x80\\x98But the issue is not just the cost to individual income. Freezing public sector income not only acts against effor\\xe2\\x80\\xa6 https:\/\/t.co\/H4F7klTZMw'",
        Month: "April",
        "Dimension 1": -8.524083,
        "Dimension 2": -12.702311,
        Sentiment: 0.0,
        Subjectivity: 0.488888889,
        idx: 572,
      },
      {
        RawTweet:
          "b'RT @trvrb: I know all the discussion is about a possible \"2nd wave\", but I\\'ve found this odd given that we haven\\'t finished the first one.\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": -23.055714,
        "Dimension 2": -26.061098,
        Sentiment: 0.020833333,
        Subjectivity: 0.395833333,
        idx: 573,
      },
      {
        RawTweet:
          "['Sobering. \\nAnd younger people and healthy who are spreading it... you are doing this. \\nYou are not just killing people *with* the virus, but by then getting denied care. \\n\\nYour parents - would be allowed to die.\\n\\n#coronavirus \\nhttps:\/\/t.co\/aRrzHLG5zT']",
        Month: "March",
        "Dimension 1": -4.6249065,
        "Dimension 2": -21.773088,
        Sentiment: 0.25,
        Subjectivity: 0.25,
        idx: 574,
      },
      {
        RawTweet:
          "['#coronavirusupdate Latest report in #Hubei\\nTotal confirmed cases in Hubei: 67,332 (49,540 in Wuhan)\\nTotal deaths: 2,871 (2,282 Wuhan)\\nNew confirmed cases: 15 \\nNew deaths: 37\\n#CoronaOutbreak #coronavirusoutbreak #covid19 #China']",
        Month: "March",
        "Dimension 1": -13.609284,
        "Dimension 2": 35.530285,
        Sentiment: 0.433333333,
        Subjectivity: 0.966666667,
        idx: 575,
      },
      {
        RawTweet:
          "b'@jjdolence @UNKearney Yes. I agree this seems risky. Any chance to postpone or do remote conferencing?'",
        Month: "March",
        "Dimension 1": -21.142746,
        "Dimension 2": -26.895073,
        Sentiment: -0.1,
        Subjectivity: 0.2,
        idx: 576,
      },
      {
        RawTweet:
          "['@MSNBC hey there, a team of researchers in 50 countries are doing a study to understand the spread and effects of #coronavirus Please retweet this to help us reach as many people as possible. Here is the link to the online survey https:\/\/t.co\/cVZ5OXhtZB', '@MSNBC hey there, a team of researchers in 50 countries are doing a study to understand the spread and effects of #coronavirus Please retweet this to help us reach as many people as possible. Here is the link to the online survey https:\/\/t.co\/cVZ5OXhtZB']",
        Month: "March",
        "Dimension 1": -1.2373582,
        "Dimension 2": 30.922297,
        Sentiment: 0.25,
        Subjectivity: 0.75,
        idx: 577,
      },
      {
        RawTweet:
          "b'Gratitude for @ChrisCuomo - my goodness, he is sharing and speaking truth and reassuring other victims of #COVID19.\\xe2\\x80\\xa6 https:\/\/t.co\/54HjLhCPUa'",
        Month: "April",
        "Dimension 1": 40.186535,
        "Dimension 2": -12.956436,
        Sentiment: -0.125,
        Subjectivity: 0.375,
        idx: 578,
      },
      {
        RawTweet:
          "POC are also at higher risk for infection because they're more likely to work in *essential* frontline jobs, whether that's in transportation, food services, agriculture, or healthcare. https:\/\/t.co\/jkuVrjnpzt &amp; https:\/\/t.co\/IfdwFL26tJ &amp; https:\/\/t.co\/sLGUvCXSfh",
        Month: "April",
        "Dimension 1": 4.5302825,
        "Dimension 2": -22.086128,
        Sentiment: 0.1875,
        Subjectivity: 0.575,
        idx: 579,
      },
      {
        RawTweet:
          'b"@mcsassymd Covid pt I treated had D dimer of 92,000 - highest value I\'ve ever seen"',
        Month: "May",
        "Dimension 1": -17.206224,
        "Dimension 2": 44.54601,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 580,
      },
      {
        RawTweet:
          "\u201cGov. Greg Abbott announced an expansion of the state\u2019s testing capacity that includes 10 public health labs across Texas.\u201d https:\/\/t.co\/gaBgOgHlVa",
        Month: "March",
        "Dimension 1": -6.2360597,
        "Dimension 2": 38.884342,
        Sentiment: 0.0,
        Subjectivity: 0.066666667,
        idx: 581,
      },
      {
        RawTweet:
          '"the reductions in morbidity seen in this trial, while not the primary endpoint, are important and suggest that azithromycin may offer benefit to children with HIV and lung disease." https:\/\/t.co\/XU5eaj7bDu',
        Month: "March",
        "Dimension 1": -9.5427065,
        "Dimension 2": -29.565493,
        Sentiment: 0.4,
        Subjectivity: 0.75,
        idx: 582,
      },
      {
        RawTweet:
          "@derekahunter The IHME model has improved, projections overall -- on the total burden nationally -- have improved over the last week as more data was fed in on the ensuing trends.",
        Month: "April",
        "Dimension 1": 43.555794,
        "Dimension 2": -7.890754,
        Sentiment: 0.125,
        Subjectivity: 0.329166667,
        idx: 583,
      },
      {
        RawTweet:
          "b'@Modeydm @OfficialKDwow Well, I am happy you can turn off reality so easily. Relax and enjoy your life.'",
        Month: "March",
        "Dimension 1": 20.617846,
        "Dimension 2": -34.848072,
        Sentiment: 0.544444444,
        Subjectivity: 0.777777778,
        idx: 584,
      },
      {
        RawTweet:
          "b'Rebel Football Players go on Google Classroom, I posted a question. @rebelhfc @IraSampson9 @vincedeusanio\\xe2\\x80\\xa6 https:\/\/t.co\/JDFNwWQ4eU'",
        Month: "April",
        "Dimension 1": 8.864036,
        "Dimension 2": 9.69252,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 585,
      },
      {
        RawTweet:
          "['Some of our neighbors in South County need some assistance right now due to #COVID19. I will match the first $500 donated. If you can, please donate here: https:\/\/t.co\/ua6qYCHzT4']",
        Month: "March",
        "Dimension 1": -0.20149674,
        "Dimension 2": 32.78342,
        Sentiment: 0.136904762,
        Subjectivity: 0.41468254,
        idx: 586,
      },
      {
        RawTweet:
          "b'Interesting\\xf0\\x9f\\xa4\\x94\\nCoronavirus: Tanzania testing kits questioned after goat and papaya test positive | World News | Sky N\\xe2\\x80\\xa6 https:\/\/t.co\/R8azSsdaOh'",
        Month: "May",
        "Dimension 1": 0.065541856,
        "Dimension 2": 2.7782946,
        Sentiment: 0.227272727,
        Subjectivity: 0.545454545,
        idx: 587,
      },
      {
        RawTweet:
          'b"RT @Laurie_Garrett: The curve today is underscoring a trend I\'ve noted for days -- the epicenter of the #COVID19 #pandemic is shifting to t\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": 8.528865,
        "Dimension 2": 28.822376,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 588,
      },
      {
        RawTweet:
          "['Italian Evidence Base Test Test Test = Reduces Infection Rate #coronavirus #TestTestTest #NHS #UK  https:\/\/t.co\/RiCKUiKQOT']",
        Month: "March",
        "Dimension 1": 10.269986,
        "Dimension 2": 17.802826,
        Sentiment: -0.4,
        Subjectivity: 0.5,
        idx: 589,
      },
      {
        RawTweet:
          "b'RT @HelenBranswell: Thank you @Craig_A_Spencer, @meganranney &amp; @laxswamy for giving me time you couldn\\xe2\\x80\\x99t spare to talk about what front lin\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 22.418451,
        "Dimension 2": -26.725922,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 590,
      },
      {
        RawTweet:
          "Our 2018-2019 Results Report is now out and provides a comprehensive picture of what @WHO, its Member States and partners have achieved in the past two years: https:\/\/t.co\/O8IuR96Dp6 #WHOImpact #WHA73 https:\/\/t.co\/nt7ske7Crd",
        Month: "May",
        "Dimension 1": 1.0440147,
        "Dimension 2": 42.16423,
        Sentiment: -0.25,
        Subjectivity: 0.25,
        idx: 591,
      },
      {
        RawTweet:
          "b'Interesting point about how many positions could be fully remote even in the absence of the current context  https:\/\/t.co\/6jzGQEc4YE'",
        Month: "March",
        "Dimension 1": 0.26238167,
        "Dimension 2": -32.23975,
        Sentiment: 0.1775,
        Subjectivity: 0.32,
        idx: 592,
      },
      {
        RawTweet:
          "b'\\xe2\\x9a\\xa0\\xef\\xb8\\x8f\\xf0\\x9f\\xa6\\xa0 Coronavirus: Whisky production to resume despite virus concerns - https:\/\/t.co\/qlcR1EBd1a CLICK to read \\xf0\\x9f\\x91\\x88 Virus\\xe2\\x80\\xa6 https:\/\/t.co\/n3VBenI3Vj'",
        Month: "April",
        "Dimension 1": 8.323318,
        "Dimension 2": 0.8310798,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 593,
      },
      {
        RawTweet:
          "@justsomeoneDK This is one of those thoughts: \r\n\r\nA dutch study found 3% blood donors positive for antibodies (Ab). Blood collected early April\r\n\r\nAb detectable ~12 days post infection =&gt; 3%+ by ~March 25\r\n\r\nThat was early in Netherland epi curve. \r\n\r\nToday - probably ~3x cases since end March... 10%+?",
        Month: "April",
        "Dimension 1": -6.8023705,
        "Dimension 2": 41.453674,
        Sentiment: 0.142424242,
        Subjectivity: 0.381818182,
        idx: 594,
      },
      {
        RawTweet:
          "b'RT @SquawkCNBC: \"Local governments, state governments should be looking at seeing what activities they can move outside because things are\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 14.201148,
        "Dimension 2": -21.931791,
        Sentiment: 0.0,
        Subjectivity: 0.025,
        idx: 595,
      },
      {
        RawTweet:
          "b'RT @NYGovCuomo: What we do next will have a massive impact on the trajectory of this virus in New York.\\n \\nWe can only maintain public healt\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -14.549125,
        "Dimension 2": 0.28918335,
        Sentiment: 0.027272727,
        Subjectivity: 0.504242424,
        idx: 596,
      },
      {
        RawTweet:
          "b'RT @WHO: \"Parliaments can:\\n-build accountability through oversight of governement emergency management policies &amp; programs\\n-can ensure a mu\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 22.922068,
        "Dimension 2": -17.762085,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 597,
      },
      {
        RawTweet:
          "@COVID19 is NOT the Zombie Apocalypse. Far too many people will become severely ill, and, tragically, too many will die. We must learn more fast, protect the vulnerable, preserve health care, protect society &amp; economy to the greatest extent possible. This, too, will pass.",
        Month: "March",
        "Dimension 1": -3.1810293,
        "Dimension 2": -20.765266,
        Sentiment: 0.2,
        Subjectivity: 0.733333333,
        idx: 598,
      },
      {
        RawTweet:
          "b'News: please pay attention to #coronavirus and all thats going on \\nAlso the news:  You have reached your article limit for the month...'",
        Month: "March",
        "Dimension 1": -6.446552,
        "Dimension 2": 26.099785,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 599,
      },
      {
        RawTweet:
          'When asked if the Scottish and U.K. governments wanted 60% of the public to get coronavirus to build up herd immunity, @JeaneF1MSP, the Scottish Health Secretary said :"Not at all - that is not our policy at all". #coronavirus #PoliticsScotland',
        Month: "March",
        "Dimension 1": -19.782469,
        "Dimension 2": 30.234535,
        Sentiment: 0.0,
        Subjectivity: 0.066666667,
        idx: 600,
      },
      {
        RawTweet:
          "b'RT @gtwhitesides: Go science.  Despite headline, this is a great and ultimately hopeful explanation of steps to four keys: vaccines, antivi\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 23.008606,
        "Dimension 2": -2.8659534,
        Sentiment: 0.4,
        Subjectivity: 0.875,
        idx: 601,
      },
      {
        RawTweet:
          "I signed this open letter @VP that calls for what's really needed to address #COVID19 #SARSCoV2 : leadership, funding, accountability, transparency, health equity &amp; social justice. Thx @gregggonsalves &amp; colleagues @Yale for initiating this. https:\/\/t.co\/u6vSV3JcMW",
        Month: "March",
        "Dimension 1": 34.434986,
        "Dimension 2": -4.0259333,
        Sentiment: 0.077777778,
        Subjectivity: 0.255555556,
        idx: 602,
      },
      {
        RawTweet:
          "[\"Luxembourg's Minister of Finance, @PierreGramegna explains the government's COVID-19 economic support package:\\n\\n\ud83d\udc49 https:\/\/t.co\/ypSprohQII\\n\\n#SMEs #Business #COVID19 #Fintech #Luxembourg https:\/\/t.co\/f9kje00HR9\"]",
        Month: "March",
        "Dimension 1": 19.116013,
        "Dimension 2": 20.912977,
        Sentiment: 0.2,
        Subjectivity: 0.2,
        idx: 603,
      },
      {
        RawTweet:
          "b'Are the fucking cruise ships going to take any responsibility?\\n\\nOh, they asked for a bail out?\\n\\nOk #COVID19'",
        Month: "March",
        "Dimension 1": -29.631544,
        "Dimension 2": -1.0654285,
        Sentiment: -0.6,
        Subjectivity: 0.8,
        idx: 604,
      },
      {
        RawTweet:
          "['Help slow the spread of #COVID19 and identify at risk cases sooner by self-reporting your symptoms daily, even if you feel well  \ud83d\ude4f\ud83c\udffc. Download the app https:\/\/t.co\/8uHDcuKrgX']",
        Month: "March",
        "Dimension 1": 7.6936145,
        "Dimension 2": -26.032366,
        Sentiment: -0.15,
        Subjectivity: 0.2,
        idx: 605,
      },
      {
        RawTweet:
          "[\"They've estimated 80% of the UK will contract #COVID19. \\n\\nGov's best case scenario is a 1% death rate.\\n\\nItaly is already at 10%.\\n\\nBrace yourselves.\"]",
        Month: "March",
        "Dimension 1": -16.622866,
        "Dimension 2": 39.02653,
        Sentiment: 1.0,
        Subjectivity: 0.3,
        idx: 606,
      },
      {
        RawTweet:
          "In this \u2066@germanrlopez\u2069 \u2066@voxdotcom\u2069 piece I am quoted about how states reopen and what #covid19 metrics are important guides (for me, it has always been hospital capacity) https:\/\/t.co\/ILu0ri1IT6",
        Month: "May",
        "Dimension 1": 26.486012,
        "Dimension 2": 11.060095,
        Sentiment: 0.4,
        Subjectivity: 1.0,
        idx: 607,
      },
      {
        RawTweet:
          "b'RT @rleguern: \"Women make up more than 50% of graduate students in biomedical sciences in the US. Yet, the percentage of women declines alo\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -19.549364,
        "Dimension 2": 35.470234,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 608,
      },
      {
        RawTweet:
          "My colleague just shared a story of a healthy 49 year old who was diagnosed with #COVID19 and died in a chair in the ER.\r\n\r\nOur ERs and ICUs are filling up, despite what you hear at task force updates. \r\n\r\nWe are not near the end of this. We are hardly at the beginning.",
        Month: "March",
        "Dimension 1": -19.086561,
        "Dimension 2": 32.510105,
        Sentiment: 0.064583333,
        Subjectivity: 0.410416667,
        idx: 609,
      },
      {
        RawTweet:
          "b'RT @nassefi: socioeconomic status, co-morbidities and degree of air pollution (prob related to SES) may explain why African-Americans do wo\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -14.556401,
        "Dimension 2": -14.818798,
        Sentiment: 0.0,
        Subjectivity: 0.4,
        idx: 610,
      },
      {
        RawTweet:
          "@awsamuel Yes, and in case you need a visual, here's one from #ThePerfectPredator.  #Superbugs are the silent #pandemic lurking behind this one, and my family knows firsthand.  https:\/\/t.co\/J9voqqsxDZ https:\/\/t.co\/MnpgF64bfr",
        Month: "April",
        "Dimension 1": 0.8912307,
        "Dimension 2": -17.351618,
        Sentiment: -0.133333333,
        Subjectivity: 0.266666667,
        idx: 611,
      },
      {
        RawTweet:
          "b'RT @DrTedros: This is great news from the \\xf0\\x9f\\x87\\xac\\xf0\\x9f\\x87\\xa7. @gavi has played a critical role in providing life-saving tools to millions of children aroun\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 46.67085,
        "Dimension 2": -6.3230367,
        Sentiment: 0.4,
        Subjectivity: 0.775,
        idx: 612,
      },
      {
        RawTweet:
          "@PaulSaxMD @ChefMichaelMina You are right. It really does prove just how nuts things have gotten because of COVID. \r\n\r\nThese types of interactions are the silver linings.",
        Month: "April",
        "Dimension 1": -8.521608,
        "Dimension 2": -8.13475,
        Sentiment: 0.242857143,
        Subjectivity: 0.367857143,
        idx: 613,
      },
      {
        RawTweet:
          "Taking seriously the risk of #SARSCoV2 #COVID19 #coronavirus transmission at political campaign events is a way for politicians to show they care about the health and well-being of their supporters. \r\nhttps:\/\/t.co\/TZ1Z5v0M69",
        Month: "March",
        "Dimension 1": -3.7129962,
        "Dimension 2": -1.9217736,
        Sentiment: -0.166666667,
        Subjectivity: 0.383333333,
        idx: 614,
      },
      {
        RawTweet:
          "b'The #coronavirus is a front for ushering In the new world order. Order out of chaos is how they will do it.'",
        Month: "March",
        "Dimension 1": 0.6347862,
        "Dimension 2": -6.6955166,
        Sentiment: 0.136363636,
        Subjectivity: 0.454545455,
        idx: 615,
      },
      {
        RawTweet:
          "['Tell @senatemajldr and @SpeakerPelosi to protect people from financial hardship due to the #coronavirus pandemic. Put people first, not corporations.  Sign the @CRAdvocacy petition: https:\/\/t.co\/IELCvPAUXE https:\/\/t.co\/zrAhfBgEFL']",
        Month: "March",
        "Dimension 1": -4.6575494,
        "Dimension 2": -1.5299417,
        Sentiment: 0.041666667,
        Subjectivity: 0.236111111,
        idx: 616,
      },
      {
        RawTweet:
          "@theodora_nyc @LongnookBeach @mlipsitch @DrEricDing @MattFrieman This is not hindsight. This is the lack of attention that is paid by people in charge to what is going on in the world. SARS-1 didn't go away. It was killed by a heroic effort. And we were extremely close to a pandemic in 2003.",
        Month: "April",
        "Dimension 1": -36.677517,
        "Dimension 2": -11.493271,
        Sentiment: 0.125,
        Subjectivity: 0.633333333,
        idx: 617,
      },
      {
        RawTweet:
          "b'Just like electricity, indoor plumbing, and laws against incest, West Virginia is the last state to get everything. #COVID\\xe3\\x83\\xbc19  #coronavirus'",
        Month: "March",
        "Dimension 1": -29.50187,
        "Dimension 2": 3.2573638,
        Sentiment: 0.0,
        Subjectivity: 0.066666667,
        idx: 618,
      },
      {
        RawTweet:
          "In 2020, the same mutations were \u201cplugged\u201d into the novel coronavirus spike sequence leading to @McLellan_Lab being able to see the high definition details of the protein. \r\n\r\n(\u201cplug and play\u201d reference) \r\n\r\nhttps:\/\/t.co\/qRqyTLfQpW",
        Month: "April",
        "Dimension 1": 23.665798,
        "Dimension 2": 0.24778236,
        Sentiment: 0.22,
        Subjectivity: 0.43,
        idx: 619,
      },
      {
        RawTweet:
          "['@NASCIO Finally got a chance to listen to the #NASCIOVoices with Jim Weaver, WA CIO! Good session and relevant recommendations from Jim on how states can address #COVID19 from a tech perspective.']",
        Month: "March",
        "Dimension 1": 39.621166,
        "Dimension 2": -8.909403,
        Sentiment: 0.366666667,
        Subjectivity: 0.833333333,
        idx: 620,
      },
      {
        RawTweet:
          "via \u2066@nytimes\u2069 | Scenarios depicted in NYT was known since early Mar. Middle scenario (some control measures unevenly applied) is what will happen in \ud83c\uddfa\ud83c\uddf8. No caveats: cases will peak in June +\/- 2 wks. #FlattenTheCurve #EveryDayDelayedSavesLives https:\/\/t.co\/5U1ZCk7Pzi",
        Month: "March",
        "Dimension 1": -0.42644343,
        "Dimension 2": 48.038414,
        Sentiment: -0.033333333,
        Subjectivity: 0.166666667,
        idx: 621,
      },
      {
        RawTweet:
          "In this @korinmiller @PreventionMag piece I am quoted about how critical illness that occurs with #COVID19 (or any infection or condition) can lead to dramatic weight loss and muscle wasting https:\/\/t.co\/3PEf59PNjK",
        Month: "May",
        "Dimension 1": -10.417606,
        "Dimension 2": -2.936489,
        Sentiment: -0.216666667,
        Subjectivity: 0.7,
        idx: 622,
      },
      {
        RawTweet:
          "['Watch this beautiful, emotional scene as Italy\\'s Air Force displays the Italian flag with Pavarotti\\'s \"Nessun Dorma\" playing in the background. #coronavirus #italy\\n\\nhttps:\/\/t.co\/ZudD0vJJyZ']",
        Month: "March",
        "Dimension 1": 42.325165,
        "Dimension 2": -30.253864,
        Sentiment: 0.283333333,
        Subjectivity: 0.55,
        idx: 623,
      },
      {
        RawTweet:
          "['Murtala Mohammed briefing the press about the #COVID19 updates in Lagos today. He spoke about the importance of social distancing in this period. #Buharichallenge https:\/\/t.co\/734LfP5B0K']",
        Month: "March",
        "Dimension 1": 21.15466,
        "Dimension 2": 18.570475,
        Sentiment: 0.033333333,
        Subjectivity: 0.066666667,
        idx: 624,
      },
      {
        RawTweet:
          "Thanks, @KCBSRadio \u2013\u00a0I enjoy these segments (play arrow is one at foot of page, BTW) \u2013 a great thing about Bay Area is that folks want to know science &amp; facts, which leads to thoughtful &amp; provocative questions. \r\n\r\nThanks to my @UCSF colleagues, who constantly teach me about Covid. https:\/\/t.co\/PZep5T2Re2",
        Month: "May",
        "Dimension 1": 38.30022,
        "Dimension 2": -9.952473,
        Sentiment: 0.333333333,
        Subjectivity: 0.413888889,
        idx: 625,
      },
      {
        RawTweet:
          "b'Countries all over the world are cancelling public events, limiting public gatherings in order to prevent person-to\\xe2\\x80\\xa6 https:\/\/t.co\/g8Qs37lSSR'",
        Month: "March",
        "Dimension 1": -37.34774,
        "Dimension 2": -2.612717,
        Sentiment: 0.0,
        Subjectivity: 0.066666667,
        idx: 626,
      },
      {
        RawTweet:
          "b'RT @WHO: FACT: #COVID19 is NOT airborne. \\n\\nThe #coronavirus is mainly transmitted through droplets generated when an infected person coughs\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -40.635986,
        "Dimension 2": -16.851107,
        Sentiment: 0.166666667,
        Subjectivity: 0.333333333,
        idx: 627,
      },
      {
        RawTweet:
          "b'RT @EricTopol: So good and essential to see these folks recognized.\\nThe paramedics, respiratory therapists, cafeteria workers, environmenta\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 44.80092,
        "Dimension 2": -14.562017,
        Sentiment: 0.35,
        Subjectivity: 0.45,
        idx: 628,
      },
      {
        RawTweet:
          "b'CHINA: Zhang Ming believes that #COVID19 can be an opportunity to explore new areas of bilateral cooperation\\xe2\\x80\\xa6 https:\/\/t.co\/hTOT3EfArh'",
        Month: "April",
        "Dimension 1": -13.995366,
        "Dimension 2": 9.999277,
        Sentiment: 0.136363636,
        Subjectivity: 0.454545455,
        idx: 629,
      },
      {
        RawTweet:
          "[\"#CoronaVirus ... maybe we should hold some 'coughing' protests.... find your nearest senator's office, go in coughing demanding they get more tests out from the @CDC.\"]",
        Month: "March",
        "Dimension 1": -23.413061,
        "Dimension 2": 3.3247416,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 630,
      },
      {
        RawTweet:
          "b'There\\xe2\\x80\\x99s a virus that\\xe2\\x80\\x99s more deadly than #COVID19 it\\xe2\\x80\\x99s called HUNGER, pls support the cause, let\\xe2\\x80\\x99s fight HUNGER toge\\xe2\\x80\\xa6 https:\/\/t.co\/ALyagQ9jcL'",
        Month: "April",
        "Dimension 1": -15.429462,
        "Dimension 2": -5.3913093,
        Sentiment: 0.15,
        Subjectivity: 0.45,
        idx: 631,
      },
      {
        RawTweet:
          "b'RT @ASMicrobiology: Speaking about #coronavirus in your community? Need to explain #COVID19 to the public? ASM has developed a toolkit that\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 7.097963,
        "Dimension 2": 8.603485,
        Sentiment: 0.05,
        Subjectivity: 0.183333333,
        idx: 632,
      },
      {
        RawTweet:
          "['Can ultra violet disinfection lamp kill the new corona virus ? | Myth 03 https:\/\/t.co\/rUqBWXjDRk via @YouTube #CoronaVirus #corona #WHO #TamilPuppets']",
        Month: "March",
        "Dimension 1": 0.52067065,
        "Dimension 2": 6.365756,
        Sentiment: 0.136363636,
        Subjectivity: 0.454545455,
        idx: 633,
      },
      {
        RawTweet:
          "b'#Coronavirus news: Skin rashes emerge as possible symptom of COVID-19, dermatologists say https:\/\/t.co\/qO6YzVabMp via @abc7newsbayarea'",
        Month: "April",
        "Dimension 1": -2.2495003,
        "Dimension 2": 3.8546293,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 634,
      },
      {
        RawTweet:
          "From @CarolineYLChen:\r\n\r\n\u201cI think there should be more pushback when people are not providing their methodology,\u201d said Dean. \u201cYou should explain what you did. How do we know what you did, if it\u2019s credible or not?\u201d\r\n\r\nhttps:\/\/t.co\/APaIxbb4A8",
        Month: "April",
        "Dimension 1": -6.0639462,
        "Dimension 2": -26.14052,
        Sentiment: 0.45,
        Subjectivity: 0.6,
        idx: 635,
      },
      {
        RawTweet:
          "b'RT @WHO: \"We are facing an unprecedented global health crisis that demands an unprecedented response.\\n\\nFrom the beginning of this pandemic\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -6.150842,
        "Dimension 2": -6.7150183,
        Sentiment: 0.4,
        Subjectivity: 0.6,
        idx: 636,
      },
      {
        RawTweet:
          "b'RT @maiamajumder: Case fatality rate (CFR) is time- &amp; population-varying. Given that mild cases of #COVID19 are generally identified at a s\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -12.365859,
        "Dimension 2": -1.8853339,
        Sentiment: 0.191666667,
        Subjectivity: 0.5,
        idx: 637,
      },
      {
        RawTweet:
          "b'RT @ValaAfshar: The man who does not read has no advantage over the man who cannot read. \\xe2\\x80\\x94Mark Twain https:\/\/t.co\/guqAkEk6vt'",
        Month: "March",
        "Dimension 1": -30.687382,
        "Dimension 2": -19.101421,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 638,
      },
      {
        RawTweet:
          "b'As #HealthcareWorkers continue their important work on the front lines of #COVID19, @BLS_gov shows that last May re\\xe2\\x80\\xa6 https:\/\/t.co\/YQZMrUADfj'",
        Month: "May",
        "Dimension 1": 26.953152,
        "Dimension 2": 10.635652,
        Sentiment: 0.2,
        Subjectivity: 0.533333333,
        idx: 639,
      },
      {
        RawTweet:
          "b'@adamhfinn Yes. No perfect solution for large populations in free countries'",
        Month: "April",
        "Dimension 1": -14.99847,
        "Dimension 2": -33.60516,
        Sentiment: 0.038095238,
        Subjectivity: 0.742857143,
        idx: 640,
      },
      {
        RawTweet:
          "['16,500 people have died from covid-19 \\n110,600 have dies from seasonal flu\\n244,000 have died from suicide.\\nDon\\'t give into the fear. Don\\'t give up liberties for the government to run to your rescue. Keep the \"crisis\" in perspective. \\n#coronavirus #freedom #COVID19', '16,500 people have died from covid-19 \\n110,600 have dies from seasonal flu\\n244,000 have died from suicide.\\nDon\\'t give into the fear. Don\\'t give up liberties for the government to run to your rescue. Keep the \"crisis\" in perspective. \\n#coronavirus #freedom #COVID19']",
        Month: "March",
        "Dimension 1": -26.72135,
        "Dimension 2": 23.948307,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 641,
      },
      {
        RawTweet:
          "b'Westwood\\xe2\\x80\\x99s stores are struggling to stay open as the #COVID19 pandemic continues to reduce foot traffic in the Vill\\xe2\\x80\\xa6 https:\/\/t.co\/PuLG05XsHo'",
        Month: "April",
        "Dimension 1": -27.710241,
        "Dimension 2": -8.417517,
        Sentiment: 0.0,
        Subjectivity: 0.5,
        idx: 642,
      },
      {
        RawTweet:
          "['68 million French people confined by #COVID19 vs. 256 selfish tennis players who complain that they were not consulted on the report of @rolandgarros : is that a joke? #RolandGarros #SpoiledChildren', '68 million French people confined by #COVID19 vs. 256 selfish tennis players who complain that they were not consulted on the report of @rolandgarros : is that a joke? #RolandGarros #SpoiledChildren']",
        Month: "March",
        "Dimension 1": -28.223845,
        "Dimension 2": -13.091479,
        Sentiment: -0.25,
        Subjectivity: 0.5,
        idx: 643,
      },
      {
        RawTweet:
          ".@Refugees know the importance of solidarity during crises. \r\n\r\nMy deepest thanks to those serving their communities as #healthworkers and fighting #COVID19! \r\n\r\nhttps:\/\/t.co\/AZXs7hkSNX",
        Month: "April",
        "Dimension 1": 34.21648,
        "Dimension 2": -17.844927,
        Sentiment: 0.25,
        Subjectivity: 0.2,
        idx: 644,
      },
      {
        RawTweet:
          "b'RT @_b_meyer: A reminder for all journalists:\\nYour reports, pieces, words matter a lot these days. Your words are read more than that of sc\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 31.57444,
        "Dimension 2": -3.2082658,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 645,
      },
      {
        RawTweet:
          "['Man, who knew all our spending on military defense still left us vulnerable? #coronavirus #MedicareForAll https:\/\/t.co\/yVwFDBLHyX']",
        Month: "March",
        "Dimension 1": -20.679676,
        "Dimension 2": 0.9174614,
        Sentiment: -0.2,
        Subjectivity: 0.2,
        idx: 646,
      },
      {
        RawTweet:
          "['ATTENTION all #PhDs in Life Sciences, #MDs and #PharmDs\\n\\nThe #Coronavirus #Portal is now OPEN to Guest #Authors \\n\\nWe welcome articles on the following SEVEN topics:\\n\\n1.Development of #Medical #Counter-measures for Coronavirus\\ne\u2013m\u2026https:\/\/t.co\/UaqriLKo1p https:\/\/t.co\/dSVIB1aI0Y']",
        Month: "March",
        "Dimension 1": 22.410957,
        "Dimension 2": 8.884454,
        Sentiment: 0.2,
        Subjectivity: 0.375,
        idx: 647,
      },
      {
        RawTweet:
          "['USASOCNews: RT usarec: All #USAREC recruiting stations are shifting to mobile and virtual communications to limit in-person contact. #COVID19 TRADOC https:\/\/t.co\/DjDx7JfrpY', 'USASOCNews: RT usarec: All #USAREC recruiting stations are shifting to mobile and virtual communications to limit in-person contact. #COVID19 TRADOC https:\/\/t.co\/DjDx7JfrpY']",
        Month: "March",
        "Dimension 1": -9.360445,
        "Dimension 2": -19.492418,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 648,
      },
      {
        RawTweet:
          "4\u20e3Community transmission - aim to slow transmission, reduce case numbers, end community outbreaks by:\r\n-Applying self-initiated isolation for symptomatic individuals\r\n-Adapting existing surveillance systems\r\n-Testing suspect cases\r\n-Prioritizing care\r\n-Activating triage procedures",
        Month: "March",
        "Dimension 1": -0.0012042982,
        "Dimension 2": -23.562439,
        Sentiment: -0.3,
        Subjectivity: 0.4,
        idx: 649,
      },
      {
        RawTweet:
          "Our transition back to elements of our normal way of life can only come after we've broken chains of epidemic spread of #COVID19; and then only gradually as we put public health tools and policies in place to make sure that we can contain future outbreaks. https:\/\/t.co\/EUIvhV3tc0",
        Month: "March",
        "Dimension 1": -0.441561,
        "Dimension 2": -20.473412,
        Sentiment: 0.03125,
        Subjectivity: 0.516319444,
        idx: 650,
      },
      {
        RawTweet:
          "The writer from @business sent me a slide deck of Ramanan's talk. I was unsure what point it was trying to make, but after several reads I took it to make the following claims: 1) India's current lockdown is not sustainable and will kill many through economic damage.",
        Month: "April",
        "Dimension 1": -22.652191,
        "Dimension 2": -12.103359,
        Sentiment: 0.14,
        Subjectivity: 0.24,
        idx: 651,
      },
      {
        RawTweet:
          "b'RT @BNODesk: BREAKING: Spain reports 1,890 new cases of coronavirus and 25 new deaths, raising total to 13,716 cases and 533 dead https:\/\/t\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -13.726378,
        "Dimension 2": 38.31084,
        Sentiment: 0.018181818,
        Subjectivity: 0.514772727,
        idx: 652,
      },
      {
        RawTweet:
          "b'Kate McCann telling us to stay in with loved ones!! Dunno like Kate, what if I fancied some tapas? #covid #COVID19 #coronavirus'",
        Month: "March",
        "Dimension 1": 8.298596,
        "Dimension 2": -4.6838436,
        Sentiment: 1.0,
        Subjectivity: 0.8,
        idx: 653,
      },
      {
        RawTweet:
          "b'Lockdown has led to 60% drop in #cash withdrawals although Bigger sums being taken out. Payment card usage up with\\xe2\\x80\\xa6 https:\/\/t.co\/Y6X12qpuSa'",
        Month: "April",
        "Dimension 1": -22.659994,
        "Dimension 2": 37.35047,
        Sentiment: 0.0,
        Subjectivity: 0.5,
        idx: 654,
      },
      {
        RawTweet:
          '@BlackPhysicists You want a job? haha. The strategy you are proposing is what many including us (to and extent) have thought about... it is a called "universal" vaccine. There was an article recently that I can\'t find right now. But, you should lol',
        Month: "April",
        "Dimension 1": -18.784348,
        "Dimension 2": -25.786469,
        Sentiment: 0.297619048,
        Subjectivity: 0.380952381,
        idx: 655,
      },
      {
        RawTweet:
          "['The world has stocked up on everything but faith. Isaiah 41:10 So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.\\n\\nFaith &gt; Fear\\nGod &gt; #COVID19 \\n(Repost from Pastor D.)']",
        Month: "March",
        "Dimension 1": 32.722683,
        "Dimension 2": -30.910238,
        Sentiment: 0.285714286,
        Subjectivity: 0.535714286,
        idx: 656,
      },
      {
        RawTweet:
          "#WomenInSTEM in Southern Calif:  Join me for a Q&amp;A discussion @Zoom on my memoir, #ThePerfectPredator sponsored by Women in Bio on April 30:\r\n\r\nhttps:\/\/t.co\/bD747ZlOUV",
        Month: "April",
        "Dimension 1": 12.223892,
        "Dimension 2": 37.221943,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 657,
      },
      {
        RawTweet:
          "b'@DavidNJ ... And a racist conspiracy theorist, per his social media account.'",
        Month: "April",
        "Dimension 1": -19.402817,
        "Dimension 2": -9.009082,
        Sentiment: 0.033333333,
        Subjectivity: 0.066666667,
        idx: 658,
      },
      {
        RawTweet:
          "b'people who get to stay home during this #COVID19 thing, are LUCKY. my ass is working dor y\\xe2\\x80\\x99alls foods. beware of that yes, thanks'",
        Month: "March",
        "Dimension 1": 26.36923,
        "Dimension 2": -34.027313,
        Sentiment: 0.266666667,
        Subjectivity: 0.516666667,
        idx: 659,
      },
      {
        RawTweet:
          "@Pathologists #COVID19 #capchat This is the problem today. The test kits themselves (aka primer\/probe mixes) are plentiful - frankly, should not have ever been the limiting reagent. These are fast reagents to produce in bulk. What is limiting are instruments (ABI7500 = low throughput) 1\/...",
        Month: "March",
        "Dimension 1": -16.38217,
        "Dimension 2": -31.227793,
        Sentiment: 0.1,
        Subjectivity: 0.45,
        idx: 660,
      },
      {
        RawTweet:
          "You cannot make this up: \u201cIt\u2019s not a concern,\u201d he said. \u201cThe virus, we believe, is politically motivated. We hold our religious rights dear and we are going to assemble no matter what someone says.\u201d This would be a..unique..view in the religious community.\r\nhttps:\/\/t.co\/0X5XeGCH0l",
        Month: "March",
        "Dimension 1": -9.364866,
        "Dimension 2": -36.06798,
        Sentiment: 0.0,
        Subjectivity: 0.2,
        idx: 661,
      },
      {
        RawTweet:
          "@LarryZeitlin @ACasadevall1 @ShohamTxID @JohnsHopkins @ACasadevall1 let me know if you need reagents and an ELISA protocol. We can identify seroconverters (to both RBD and full length spike) easily.",
        Month: "March",
        "Dimension 1": 28.131683,
        "Dimension 2": 4.2361093,
        Sentiment: 0.391666667,
        Subjectivity: 0.691666667,
        idx: 662,
      },
      {
        RawTweet:
          "b'@BloomPringle Any true friend knows how I feel about the Pats but if anyone could get me to like an Edelman-related tweets it\\xe2\\x80\\x99s you.\\xf0\\x9f\\x91\\x8c\\xf0\\x9f\\x8f\\xbe\\xf0\\x9f\\x98\\xb7'",
        Month: "April",
        "Dimension 1": 22.261877,
        "Dimension 2": -27.885708,
        Sentiment: 0.35,
        Subjectivity: 0.65,
        idx: 663,
      },
      {
        RawTweet:
          "b'#Chechen Leader #RamzanKadyrov has been taken to Hospital with suspected #Coronavirus, #Russian media report. https:\/\/t.co\/hYZMLSmIcj'",
        Month: "May",
        "Dimension 1": -9.750321,
        "Dimension 2": 9.582136,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 664,
      },
      {
        RawTweet:
          "b'The Case for Keeping Students With the Same Teacher Next Year ~ @rogersmarkd @teachplus #COVID19 #SchoolClosures\\xe2\\x80\\xa6 https:\/\/t.co\/aGBV611uXT'",
        Month: "April",
        "Dimension 1": 32.456436,
        "Dimension 2": 25.930243,
        Sentiment: 0.0,
        Subjectivity: 0.0625,
        idx: 665,
      },
      {
        RawTweet:
          "More analysis of the data from NY today of 21% exposure to covid on seroprevalence study: finding fits within prior estimates that 1\/10 to 1\/20 covid cases likely being diagnosed. Also consistent with prior CFRs; here infection fatality rate 1% (17,000 deaths \/ 1.7M infections). https:\/\/t.co\/Ua2KFbeqhQ",
        Month: "April",
        "Dimension 1": -6.105895,
        "Dimension 2": 37.2737,
        Sentiment: 0.15,
        Subjectivity: 0.35,
        idx: 666,
      },
      {
        RawTweet:
          "b'While the #COVID_19 crisis caused the average 401(K) balance to fall by nearly 20% in the first quarter, your\\xe2\\x80\\xa6 https:\/\/t.co\/3yZE9NaMGi'",
        Month: "May",
        "Dimension 1": -21.870441,
        "Dimension 2": 37.29913,
        Sentiment: 0.066666667,
        Subjectivity: 0.377777778,
        idx: 667,
      },
      {
        RawTweet:
          "b'Day 49: eldest child (20, working &amp; with her own apartment) came over for a bit yesterday for some distanced chatti\\xe2\\x80\\xa6 https:\/\/t.co\/CHG3nZe7OW'",
        Month: "May",
        "Dimension 1": 3.5432973,
        "Dimension 2": 48.134144,
        Sentiment: 0.6,
        Subjectivity: 1.0,
        idx: 668,
      },
      {
        RawTweet:
          "['There is a lot of worry about Covid-19 and the rate at which it is spreading, including the amount of false information. The first thing is to stay calm, the second is to follow this link. It has the answers you need. https:\/\/t.co\/yEOGk8VYUp #COVID2019 #coronavirus https:\/\/t.co\/15EzQiJpkJ']",
        Month: "March",
        "Dimension 1": -13.290338,
        "Dimension 2": -6.746742,
        Sentiment: 0.0375,
        Subjectivity: 0.420833333,
        idx: 669,
      },
      {
        RawTweet:
          "b'Dr. Birx\\'s statements today https:\/\/t.co\/AAff8ThmuF indicated that \"when people start talking about 20% of a popula\\xe2\\x80\\xa6 https:\/\/t.co\/afztqzTPg0'",
        Month: "March",
        "Dimension 1": -3.2946713,
        "Dimension 2": 37.909016,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 670,
      },
      {
        RawTweet:
          "b'RT @Semira_AM: If you are wondering who we are testing:\\n1. Those is quarantine (mainly) \\n2. Patients with respiratory infection (Testing is\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 19.535341,
        "Dimension 2": 6.166234,
        Sentiment: 0.166666667,
        Subjectivity: 0.333333333,
        idx: 671,
      },
      {
        RawTweet:
          "A hard time to be living alone and a hard time to be living together.\r\nDon't forget to be kind.",
        Month: "March",
        "Dimension 1": 0.34378028,
        "Dimension 2": -36.04213,
        Sentiment: 0.005555556,
        Subjectivity: 0.661111111,
        idx: 672,
      },
      {
        RawTweet:
          "b'RT @Rover829: Reuters: WORLD HEALTH ORGANIZATION SPOKESMAN SAYS THERE ARE TWO CONFIRMED CASES OF CORONAVIRUS AMONG STAFF'",
        Month: "March",
        "Dimension 1": -0.5844895,
        "Dimension 2": 18.768751,
        Sentiment: 0.4,
        Subjectivity: 1.0,
        idx: 673,
      },
      {
        RawTweet:
          "Wow! The Surgery Board Exam will happen this year from home, to accommodate requirements of the Covid era. @AmBdSurg led by @BuyskeJ continues to lead the way in fast, flexible adaptation to the demands of our time. https:\/\/t.co\/U0k98Wd4lG",
        Month: "May",
        "Dimension 1": 26.288517,
        "Dimension 2": 17.261465,
        Sentiment: 0.1625,
        Subjectivity: 0.8,
        idx: 674,
      },
      {
        RawTweet:
          "b'The WHO just declared coronavirus a pandemic. We won\\xe2\\x80\\x99t see any toilet paper for years now. #coronavirus'",
        Month: "March",
        "Dimension 1": -30.052639,
        "Dimension 2": 4.3052893,
        Sentiment: -0.033333333,
        Subjectivity: 0.0,
        idx: 675,
      },
      {
        RawTweet:
          "b'Coronavirus: #UAE conducts 1.3 mln tests, number of recoveries doubles in two weeks \\n#COVID19 #Corona \\nhttps:\/\/t.co\/lFi5TtvV8O'",
        Month: "May",
        "Dimension 1": -6.7193346,
        "Dimension 2": 41.538097,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 676,
      },
      {
        RawTweet:
          "['What were the key points from our virtual summit about #innovation to fight #coronavirus ? \\u2066@JimGreenwood\\u2069 shares. #COVID19  https:\/\/t.co\/dmWznY2WSw']",
        Month: "March",
        "Dimension 1": 6.2127604,
        "Dimension 2": 7.176037,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 677,
      },
      {
        RawTweet:
          "['Today I have a super cool &amp; nerdy exercise. My #thermodynamics prof. during my BSc at @UNAM_MX, @miltonmedeiros came up with a two-step kinetic scheme to model the infection of #COVID19 \\nThese are graphs of %population infected and dead vs t. Anyone wants to work out the scheme? https:\/\/t.co\/v9uba1ej0o']",
        Month: "March",
        "Dimension 1": 9.832129,
        "Dimension 2": 7.5791345,
        Sentiment: 0.170833333,
        Subjectivity: 0.454166667,
        idx: 678,
      },
      {
        RawTweet:
          "b'The husband and wife team behind @ThreeBsPubBrid have announced that their new site will begin takeaway and deliver\\xe2\\x80\\xa6 https:\/\/t.co\/CqF187Yr5U'",
        Month: "April",
        "Dimension 1": 20.951658,
        "Dimension 2": 38.819588,
        Sentiment: -0.131818182,
        Subjectivity: 0.577272727,
        idx: 679,
      },
      {
        RawTweet:
          "@RizaHawkeye8 @DrEricDing @ScottGottliebMD @VirusWhisperer @KrutikaKuppalli @TinfoilTricorn @VGKnightinArmor Exactly this is the root cause of the disaster. It's not the virus. We knew by early February how to effectively control #SARSCoV2 Courageous experts (see video) told the world what to do. https:\/\/t.co\/jUkH88uKyM\r\n\r\nBut cowardly experts acompliced with politicians to do *nothing*",
        Month: "March",
        "Dimension 1": -37.377617,
        "Dimension 2": -11.006609,
        Sentiment: 0.316666667,
        Subjectivity: 0.45,
        idx: 680,
      },
      {
        RawTweet:
          "['Hospices are still open, running as normally as possible. NHS are doing an amazing job but there are other healthcare workers in hospices, care homes, etc facing #COVID19 but still caring for our patients. Some have inadequate PPE, some even had to put out requests for sanitiser!']",
        Month: "March",
        "Dimension 1": 47.020157,
        "Dimension 2": -14.673072,
        Sentiment: 0.1109375,
        Subjectivity: 0.69375,
        idx: 681,
      },
      {
        RawTweet:
          'b"Today\'s #arizona #coronavirus data from https:\/\/t.co\/cZstPVFRQI. I thought total deaths would finally cross the num\\xe2\\x80\\xa6 https:\/\/t.co\/VkVirxhB1X"',
        Month: "April",
        "Dimension 1": -1.5072347,
        "Dimension 2": 15.892752,
        Sentiment: 0.0,
        Subjectivity: 0.375,
        idx: 682,
      },
      {
        RawTweet:
          "['ALICE Receptionist is helping our customers screen building guest to help protect our clients employees from COVID-19 (coronavirus). Learn More about steps your company can take.\\nhttps:\/\/t.co\/WCCwn1NQGz\\n#coronavirus']",
        Month: "March",
        "Dimension 1": 18.139715,
        "Dimension 2": 15.477867,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 683,
      },
      {
        RawTweet:
          '[\'"Americans don\\\'t have a queueing mentality."\\n\\nFormer economic adviser to George W Bush, Pippa Malmgren tells Sky News that US citizens "are not inclined" to listen to government advice.\\n\\nGet the latest #coronavirus news here: https:\/\/t.co\/RzzfrJ9SH5 https:\/\/t.co\/FVDERnG6Gu\']',
        Month: "March",
        "Dimension 1": -37.82211,
        "Dimension 2": -10.126226,
        Sentiment: 0.35,
        Subjectivity: 0.55,
        idx: 684,
      },
      {
        RawTweet:
          "b'RT @TheLancetPH: NEW\\xe2\\x80\\x94Study suggests testing &amp; contact tracing &amp; population behavioural changes\\xe2\\x80\\x94measures that have less disruptive social &amp;\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 13.126909,
        "Dimension 2": -12.960311,
        Sentiment: -0.066666667,
        Subjectivity: 0.066666667,
        idx: 685,
      },
      {
        RawTweet:
          "b'RT @WHO: \"As a former parliamentarian myself, I know the critical role parliaments can play in enhancing resilience against health emergenc\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 22.654188,
        "Dimension 2": -18.80928,
        Sentiment: 0.0,
        Subjectivity: 0.4,
        idx: 686,
      },
      {
        RawTweet:
          "\u201cWhere are all the regular patients? Where did they go? What the heck is happening with them? And who\u2019s going to be thinking about the non-Covid mortality, the impact of Covid on non-Covid patients?\u201d\u2014\u2066\u2066@Craig_A_Spencer\u2069  https:\/\/t.co\/C23ULzw7Eq",
        Month: "March",
        "Dimension 1": -34.721653,
        "Dimension 2": -3.2506852,
        Sentiment: 0.0,
        Subjectivity: 0.076923077,
        idx: 687,
      },
      {
        RawTweet:
          "I am sending my sincere thanks to every health worker around the \ud83c\udf0d fighting the #coronavirus. We know that #COVID19 is putting a huge burden on you &amp; your families.\r\nYou have our admiration &amp; commitment to doing everything we can to keep you safe &amp; enable you to do your job. https:\/\/t.co\/fY7ZqvLoxk",
        Month: "March",
        "Dimension 1": 33.73382,
        "Dimension 2": -18.756462,
        Sentiment: 0.4,
        Subjectivity: 0.525,
        idx: 688,
      },
      {
        RawTweet:
          "b'RT @thedoctormaz: small but mighty\\nI &lt;3 this pack of cute illustrations of #blackpeople with a variety of hairstyles! download &amp; use in you\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 18.667715,
        "Dimension 2": -31.44265,
        Sentiment: 0.1875,
        Subjectivity: 0.7,
        idx: 689,
      },
      {
        RawTweet:
          '["If 3 weeks ago, when I was wringing my hands about whether or not to send my kid on a school trip to NYC, you responded with a scoff or compared #coronavirus to the flu, please know I\'m side-eyeing the hell outta you right now.", "If 3 weeks ago, when I was wringing my hands about whether or not to send my kid on a school trip to NYC, you responded with a scoff or compared #coronavirus to the flu, please know I\'m side-eyeing the hell outta you right now."]',
        Month: "March",
        "Dimension 1": -39.071503,
        "Dimension 2": 4.4458275,
        Sentiment: 0.285714286,
        Subjectivity: 0.535714286,
        idx: 690,
      },
      {
        RawTweet:
          "b'Bay to Bay dedicates to help fight the spread of #Covid19. We\\xe2\\x80\\x99re able and ready to supply certified medical PPE in\\xe2\\x80\\xa6 https:\/\/t.co\/iEUlwoQoJ2'",
        Month: "April",
        "Dimension 1": 19.81989,
        "Dimension 2": 5.6896267,
        Sentiment: 0.233333333,
        Subjectivity: 0.375,
        idx: 691,
      },
      {
        RawTweet:
          "In this paper my \u2066@JHSPH_CHS\u2069 colleagues and I wrote, we discuss how to harness innovations in vaccine technologies to enable mass vaccination in the context of #COVID19  https:\/\/t.co\/f2CnFYpCoI",
        Month: "April",
        "Dimension 1": 25.224674,
        "Dimension 2": 1.923999,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 692,
      },
      {
        RawTweet:
          "Much of the data we collect around health is really data about our interactions with the health care system. We should balance this with data on the non medical conditions that shape our health. Wrote about this with @mdsteinmd in the @OUPAcademic Blog. https:\/\/t.co\/nk4cypOA8g",
        Month: "May",
        "Dimension 1": 28.258057,
        "Dimension 2": -5.7164807,
        Sentiment: 0.133333333,
        Subjectivity: 0.133333333,
        idx: 693,
      },
      {
        RawTweet:
          "b'JLR Retail Sales Fell by More Than 30% in the First Three Months of 2020 - Why Do People Think This is The Case? (v\\xe2\\x80\\xa6 https:\/\/t.co\/J3LYEke4iH'",
        Month: "May",
        "Dimension 1": -21.80882,
        "Dimension 2": 37.33887,
        Sentiment: 0.375,
        Subjectivity: 0.416666667,
        idx: 694,
      },
      {
        RawTweet:
          "Thoughtful article showing what \ud83d\udebaHeads of State did so differently from most of their counterparts in tackling #COVID19 that worked so well https:\/\/t.co\/c9n9561nmq",
        Month: "April",
        "Dimension 1": -3.754453,
        "Dimension 2": -32.565815,
        Sentiment: 0.3,
        Subjectivity: 0.533333333,
        idx: 695,
      },
      {
        RawTweet:
          "Manufacturers should make available more information about their plans to seek EUA for new test types, like antigen testing that can be point of care. When a new test comes online, manufacturers should disclose planned capacity, identify options for increasing capacity. 6\/n",
        Month: "April",
        "Dimension 1": 24.491426,
        "Dimension 2": -11.25554,
        Sentiment: 0.293181818,
        Subjectivity: 0.452272727,
        idx: 696,
      },
      {
        RawTweet:
          "b'RT @FutureDocs: I \\xe2\\x9d\\xa4\\xef\\xb8\\x8f idea of #sewing cloth masks. Why not if CDC recs say #bandanas &amp; scarves last resort? \\n\\nThen saw this: RCT shows 13 ti\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 17.006123,
        "Dimension 2": 4.496957,
        Sentiment: 0.0,
        Subjectivity: 0.066666667,
        idx: 697,
      },
      {
        RawTweet:
          "Dr Richard served as an example to all who had the privilege of working with him. His courageous colleagues have continued to work in #DRC to end #Ebola, and to honour his memory. Thanks to them we\u2019ve made huge progress containing the outbreak. https:\/\/t.co\/1VcQDj7sTl",
        Month: "April",
        "Dimension 1": 33.522404,
        "Dimension 2": -18.851673,
        Sentiment: 0.3,
        Subjectivity: 0.55,
        idx: 698,
      },
      {
        RawTweet:
          "['My harp instructor just called to cancel our lesson this week as the music store she works out of has been closed due to the Governor\u2019s order.\\nThis is going to have outstanding and long lasting consequences for all of us, especially small businesses.\\n\\n#Coronavirus']",
        Month: "March",
        "Dimension 1": -39.154297,
        "Dimension 2": 2.5161517,
        Sentiment: -0.045833333,
        Subjectivity: 0.425,
        idx: 699,
      },
      {
        RawTweet:
          'b"I\'ve just signed a petition urging the Government to protect domestic abuse survivors during the coronavirus crisis\\xe2\\x80\\xa6 https:\/\/t.co\/soAG4yj5F3"',
        Month: "April",
        "Dimension 1": -3.8236377,
        "Dimension 2": -0.66437054,
        Sentiment: 0.0,
        Subjectivity: 0.1,
        idx: 700,
      },
      {
        RawTweet:
          "['Read PART 2: How to Maintain Business Innovation During a Global Crisis https:\/\/t.co\/s6i7FWqvZR\\n\\n#businessinnovation #coronavirus #globalcrisis #blackswan #recessionproofstrategy #contactcenter #conversationalai']",
        Month: "March",
        "Dimension 1": 15.914577,
        "Dimension 2": 17.370346,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 701,
      },
      {
        RawTweet:
          "In a study of estimated deaths due to social factors in the US in the year 2000, for example, we found 176,\u200a000 deaths were attributable to racial segregation alone. https:\/\/t.co\/SrirzJohwx v @AMJPublicHealth",
        Month: "May",
        "Dimension 1": -21.763035,
        "Dimension 2": 39.688194,
        Sentiment: -0.045833333,
        Subjectivity: 0.220833333,
        idx: 702,
      },
      {
        RawTweet:
          "I've been talking to other academics, science journalists, private companies, &amp; gov't people all of today and still struggling to understand this. The gov't seems to be following flu playbook strategy. But this is not the flu. COVID-19 is much worse &amp; health outcomes are sobering https:\/\/t.co\/VIU8iJ18EQ",
        Month: "March",
        "Dimension 1": -29.223906,
        "Dimension 2": -9.069892,
        Sentiment: -0.13125,
        Subjectivity: 0.3625,
        idx: 703,
      },
      {
        RawTweet:
          "b'We submitted @agri_share, an innovative digital solution to address the #coronavirus crisis, at\\xe2\\x80\\xa6 https:\/\/t.co\/q3GLftIwtU'",
        Month: "April",
        "Dimension 1": 7.6955495,
        "Dimension 2": 7.5738144,
        Sentiment: 0.25,
        Subjectivity: 0.5,
        idx: 704,
      },
      {
        RawTweet:
          "If we're able to slowly substitute case-based interventions for population wide mitigation in areas where transmission is suppressed or declining, these kinds of surveillance tools are critical. We should be replicating this nationwide. #COVID19 @trvrb https:\/\/t.co\/piaY40Sb1D",
        Month: "March",
        "Dimension 1": 14.920681,
        "Dimension 2": -22.064255,
        Sentiment: 0.025,
        Subjectivity: 0.55625,
        idx: 705,
      },
      {
        RawTweet:
          "b'RT @EricTopol: So good and essential to see these folks recognized.\\nThe paramedics, respiratory therapists, cafeteria workers, environmenta\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 44.80081,
        "Dimension 2": -14.561957,
        Sentiment: 0.35,
        Subjectivity: 0.45,
        idx: 706,
      },
      {
        RawTweet:
          "I have tried to mark the fourth week of January, where possible. That is when cases started to be detected outside of mainland China and when Wuhan was locked down. Links to source in each figure.",
        Month: "March",
        "Dimension 1": -16.47389,
        "Dimension 2": 28.833797,
        Sentiment: -0.038888889,
        Subjectivity: 0.334722222,
        idx: 707,
      },
      {
        RawTweet:
          '["Respected @KTRTRS @Eatala_Rajender @narendramodi Ji @TelanganaCMO @PMOIndia @trsharish @MVenkaiahNaidu Sir\'s  as TRS govt. Conducted household survey earlier. Likewise do conduct corona tests in total country. Diz wat came in my mind. #coronavirus  #CoronavirusOutbreak", "Respected @KTRTRS @Eatala_Rajender @narendramodi Ji @TelanganaCMO @PMOIndia @trsharish @MVenkaiahNaidu Sir\'s  as TRS govt. Conducted household survey earlier. Likewise do conduct corona tests in total country. Diz wat came in my mind. #coronavirus  #CoronavirusOutbreak"]',
        Month: "March",
        "Dimension 1": 7.4760337,
        "Dimension 2": 4.726142,
        Sentiment: 0.0,
        Subjectivity: 0.625,
        idx: 708,
      },
      {
        RawTweet:
          "b'RT @TheLancet: In Italy last week, data reported that 20% of health-care workers responding to #COVID19 were infected, and some have died.\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -19.619267,
        "Dimension 2": 37.75998,
        Sentiment: 0.0,
        Subjectivity: 0.066666667,
        idx: 709,
      },
      {
        RawTweet:
          "b'Maybe this whole pandemic is just a ploy to prove that I\\xe2\\x80\\x99ll never be satisfied with what\\xe2\\x80\\x99s in the pantry. #coronavirus #CoronaLockdown'",
        Month: "April",
        "Dimension 1": -24.242598,
        "Dimension 2": -3.294575,
        Sentiment: 0.35,
        Subjectivity: 0.7,
        idx: 710,
      },
      {
        RawTweet:
          "\ud83d\udd39Why is this the case? Because we need to preserve space and staff for the sickest patients. Each severe COVID patient takes a lot of staff &amp; a lot of time. Many hospitals are at capacity.\r\n\r\n\ud83d\udd39 So to be very clear, really sick patients aren't being sent home. Anywhere. Full stop.",
        Month: "April",
        "Dimension 1": -31.625395,
        "Dimension 2": 13.670547,
        Sentiment: 0.066428571,
        Subjectivity: 0.601369048,
        idx: 711,
      },
      {
        RawTweet:
          "b'@spacecowlady Unlikely. Things are supposed to start slowly opening here as of May 1.'",
        Month: "April",
        "Dimension 1": -0.3275726,
        "Dimension 2": 49.920177,
        Sentiment: -0.4,
        Subjectivity: 0.45,
        idx: 712,
      },
      {
        RawTweet:
          '["Don\'t be a nuisance, keep your social distance #Covidiots \\nLike many others I resisted what I initially thought might be fear mongering about #COVID19; however it is now abundantly clear we are dealing with a serious\u2026 https:\/\/t.co\/eFJK2Zd54I"]',
        Month: "March",
        "Dimension 1": -8.317868,
        "Dimension 2": -35.641403,
        Sentiment: 0.158333333,
        Subjectivity: 0.2375,
        idx: 713,
      },
      {
        RawTweet:
          'b"This week\'s top posts: Council closes Factory Lane dump due to number of visitors https:\/\/t.co\/UiS73XoIaR #Croydon\\xe2\\x80\\xa6 https:\/\/t.co\/STJKLh5WbS"',
        Month: "May",
        "Dimension 1": -36.20698,
        "Dimension 2": 7.384919,
        Sentiment: 0.1875,
        Subjectivity: 0.4375,
        idx: 714,
      },
      {
        RawTweet:
          "['In the next few days, this will double. Every new human you come into contact with is an opportunity for infection. Stay home and make due, eat leftovers, use up supplies. Only go out for the essentials when it is essential to do so. #CoronaVirus https:\/\/t.co\/Jf7puurgHM', 'In the next few days, this will double. Every new human you come into contact with is an opportunity for infection. Stay home and make due, eat leftovers, use up supplies. Only go out for the essentials when it is essential to do so. #CoronaVirus https:\/\/t.co\/Jf7puurgHM']",
        Month: "March",
        "Dimension 1": 16.179897,
        "Dimension 2": 35.69751,
        Sentiment: -0.023579545,
        Subjectivity: 0.291193182,
        idx: 715,
      },
      {
        RawTweet:
          "\u201cIncrease your total ICU capacity. Identify early hospitals that can manage the initial surge in a safe way. Get ready to prepare ICU areas \u2026 in every hospital if necessary.\u201d https:\/\/t.co\/p3Avvxw9lZ",
        Month: "March",
        "Dimension 1": 26.40338,
        "Dimension 2": -9.210693,
        Sentiment: 0.133333333,
        Subjectivity: 0.508333333,
        idx: 716,
      },
      {
        RawTweet:
          "13\/ Other news that caught my eye this week: \r\n\r\nNew @TheLancet study puts a nail in hydroxychloroquine's coffin https:\/\/t.co\/QbkUz3Jj1q It's observational, but strong methods https:\/\/t.co\/hTekyXuwuN It's time to leave HCQ to our rheumatology patients (and Trump, if he wants).",
        Month: "May",
        "Dimension 1": -9.503555,
        "Dimension 2": 22.559477,
        Sentiment: 0.161174242,
        Subjectivity: 0.415719697,
        idx: 717,
      },
      {
        RawTweet:
          "b'@EllenPotts13 @MarinaP63 @arnaucasanovas Yes. We need sterile swabs to collect patients samples. Thanks!'",
        Month: "March",
        "Dimension 1": 28.401335,
        "Dimension 2": 1.8226079,
        Sentiment: 0.25,
        Subjectivity: 0.2,
        idx: 718,
      },
      {
        RawTweet:
          "b'RT @alikhan28: Great survey design:\\n\\xe2\\x98\\x91\\xef\\xb8\\x8f highly relevant (#COVID19)\\n\\xe2\\x98\\x91\\xef\\xb8\\x8f easy to complete (oft not the norm)\\n\\xe2\\x98\\x91\\xef\\xb8\\x8f thought provoking \\n\\xe2\\x98\\x91\\xef\\xb8\\x8f clear pub\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 27.814774,
        "Dimension 2": -27.900429,
        Sentiment: 0.366666667,
        Subjectivity: 0.653333333,
        idx: 719,
      },
      {
        RawTweet:
          "Understand fully what @c_drosten says: 'for many Germans I\u2019m the evil guy who is crippling the economy. I get death threats, which I pass on to the police. More worrying to me are the other emails, the ones from people who say they have three kids and they\u2019re worried...' https:\/\/t.co\/xEIPP2Pz1b",
        Month: "April",
        "Dimension 1": -21.339962,
        "Dimension 2": -9.390273,
        Sentiment: -0.03125,
        Subjectivity: 0.59375,
        idx: 720,
      },
      {
        RawTweet:
          "['China, the US, the EU and other countries are going to have to inject more cash into their economies and step up medical support to counter the #coronavirus fallout. The economic fallout, not to mention human casualties, is going to be significant.', 'China, the US, the EU and other countries are going to have to inject more cash into their economies and step up medical support to counter the #coronavirus fallout. The economic fallout, not to mention human casualties, is going to be significant.']",
        Month: "March",
        "Dimension 1": -14.724276,
        "Dimension 2": 7.075462,
        Sentiment: 0.158333333,
        Subjectivity: 0.341666667,
        idx: 721,
      },
      {
        RawTweet:
          "b'RT @TheAtlantic: \"Fauci is offering an unusually clear lesson to all others who have submitted to Trump: This is how it looks when you\\xe2\\x80\\x99re n\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 18.26446,
        "Dimension 2": -2.141145,
        Sentiment: 0.1,
        Subjectivity: 0.383333333,
        idx: 722,
      },
      {
        RawTweet:
          "b'Today the @RedSoxFund announced the Emergency Hardship Fund to help address the overwhelming need for food security\\xe2\\x80\\xa6 https:\/\/t.co\/B0Y6GaRo0U'",
        Month: "April",
        "Dimension 1": 1.9273119,
        "Dimension 2": 11.350102,
        Sentiment: 0.5,
        Subjectivity: 1.0,
        idx: 723,
      },
      {
        RawTweet:
          "b'RT @CarolineYLChen: NYC is hiring 1,000 #coronavirus contact tracers. This is really important to being able to \"reopen\" safely, so the cit\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 0.4809501,
        "Dimension 2": 25.086845,
        Sentiment: 0.466666667,
        Subjectivity: 0.708333333,
        idx: 724,
      },
      {
        RawTweet:
          "b'RT @Ddrekonja: @ASlavitt Please note multiple people who study viral evolution (@BrianRWasik is one) and epidemiology (@aetiology) and ID c\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 26.631542,
        "Dimension 2": 5.542878,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 725,
      },
      {
        RawTweet:
          "b'\\xe2\\x80\\x9cA wise man can learn more from a foolish question than a fool can learn from a wise answer.\\xe2\\x80\\x9d \\nBruce Lee\\xe2\\x80\\xa6 https:\/\/t.co\/k3UDzcYjnO'",
        Month: "April",
        "Dimension 1": -15.430604,
        "Dimension 2": -31.689583,
        Sentiment: 0.633333333,
        Subjectivity: 0.766666667,
        idx: 726,
      },
      {
        RawTweet:
          "b'3,000! Dead in China from the virus. \\nDoes anyone know a good stock that investors can buy to solve for #coronavirus ?'",
        Month: "March",
        "Dimension 1": -22.672653,
        "Dimension 2": 16.130503,
        Sentiment: 0.25,
        Subjectivity: 0.5,
        idx: 727,
      },
      {
        RawTweet:
          "#CoronavirusPandemic #COVID19 Thread from Mar 2nd. I said the Ides of Mar will tell (1) Confirmed cases in ROW will exceed China \u2705  (2) USA confirmed cases will reach  ~4K \u2705  I wish I were wrong. https:\/\/t.co\/Ig4U5wQRjD",
        Month: "March",
        "Dimension 1": -14.052407,
        "Dimension 2": 34.031498,
        Sentiment: 0.075,
        Subjectivity: 0.725,
        idx: 728,
      },
      {
        RawTweet:
          "['SIGN: Emergency minimum wage and suspend tax for all #selfemployed people! Join me now #coronavirus https:\/\/t.co\/NRBFEo7Is9']",
        Month: "March",
        "Dimension 1": -24.59064,
        "Dimension 2": 5.852806,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 729,
      },
      {
        RawTweet:
          "b'Living in the US right now feels like being stuck in that mindblowing chapter of a novel about a totalitarian regim\\xe2\\x80\\xa6 https:\/\/t.co\/sHkXFXaeQH'",
        Month: "April",
        "Dimension 1": -30.485023,
        "Dimension 2": -31.650843,
        Sentiment: 0.285714286,
        Subjectivity: 0.535714286,
        idx: 730,
      },
      {
        RawTweet:
          "b'@elle_woods2 Yessssss! I wake up to more and more and I\\'m like \"who is writing these pieces\". It\\'s lowkey probably my friends lol'",
        Month: "April",
        "Dimension 1": 12.209221,
        "Dimension 2": -30.784676,
        Sentiment: 0.6,
        Subjectivity: 0.566666667,
        idx: 731,
      },
      {
        RawTweet:
          "['53rd #Coronavirus case confirmed in #Ghana. The one additional case is also from the 1030 persons currently on mandatory quarantine https:\/\/t.co\/u0qP4rILiQ']",
        Month: "March",
        "Dimension 1": -11.942244,
        "Dimension 2": 36.507416,
        Sentiment: 0.2,
        Subjectivity: 0.7,
        idx: 732,
      },
      {
        RawTweet:
          "['Trump is a full ass moron. He is really out here trying to give the virus a nickname and insulting it like he does to people. Meanwhile the Coronavirus is like IDGAF about stupid ass Trump and his tweets or the crashing stock market\ud83d\ude37\\n\\n#TrumpPandemic #DowJones #COVID19']",
        Month: "March",
        "Dimension 1": -22.35033,
        "Dimension 2": -3.664709,
        Sentiment: -0.41,
        Subjectivity: 0.75,
        idx: 733,
      },
      {
        RawTweet:
          "b'So far over the number of Americans #coronavirus has killed is equal to over 30 9\/11s. And folks are still out here like \"NBD!\"'",
        Month: "May",
        "Dimension 1": -15.5307045,
        "Dimension 2": 39.816746,
        Sentiment: -0.033333333,
        Subjectivity: 0.416666667,
        idx: 734,
      },
      {
        RawTweet:
          "The limitation with the assessments is the assumptions based on other CoVs &amp; what we know about long-term immunity. \r\n\r\nIt is possible that #SARS2 is an exception, and somehow it will come back and do this again.  I\u2019m not betting on it.\r\n\r\nGiven time, my money is on host immunity",
        Month: "April",
        "Dimension 1": -13.026181,
        "Dimension 2": -27.860634,
        Sentiment: -0.041666667,
        Subjectivity: 0.458333333,
        idx: 735,
      },
      {
        RawTweet:
          "This Thursday at 4 pm I'm hosting a Facebook live Q&amp;A w\/ Dr. @JenniferNuzzo from Johns Hopkins Center for Health Security on the importance of #COVID19 testing to safely reopening our communities. \r\n\r\nHave any questions? Submit yours at https:\/\/t.co\/TCgeCvWTv8. https:\/\/t.co\/RlyYxHUJ5T",
        Month: "May",
        "Dimension 1": 10.41712,
        "Dimension 2": 37.429924,
        Sentiment: 0.178787879,
        Subjectivity: 0.366666667,
        idx: 736,
      },
      {
        RawTweet:
          '\u201cWhat black folks are accustomed to in Milwaukee and anywhere in the country, really, is pain not being acknowledged and constant inequities that happen in health care delivery." Also quoted, the remarkable Dr. @CamaraJones. 2\/\r\n\r\nH\/T @RobertTessler\r\nhttps:\/\/t.co\/aAJJAbAWOB',
        Month: "April",
        "Dimension 1": -18.041805,
        "Dimension 2": -16.794426,
        Sentiment: 0.195833333,
        Subjectivity: 0.429166667,
        idx: 737,
      },
      {
        RawTweet:
          "In this @bencschmitt @TribLIVE piece, I discuss how #COVID19 economic shutdowns are increasingly likely to cause irreparable harm and the consequences to the lives of individuals must be considered https:\/\/t.co\/CB7AZu4Z9v",
        Month: "March",
        "Dimension 1": -10.200731,
        "Dimension 2": -11.66544,
        Sentiment: 0.1,
        Subjectivity: 0.6,
        idx: 738,
      },
      {
        RawTweet:
          "b'Can I just say, that it will be so nice next year to not have to listen to Susan Collins and her hypocritical self.\\xe2\\x80\\xa6 https:\/\/t.co\/EZ6ox5jQ5A'",
        Month: "May",
        "Dimension 1": -9.659166,
        "Dimension 2": 19.79452,
        Sentiment: 0.3,
        Subjectivity: 0.5,
        idx: 739,
      },
      {
        RawTweet:
          "[\"_\\nPublic figures meeting people all day &amp; that's a way to get #Covid19\\n|\\nWill be interesting to see how leaders getting sick affects that policy choices\\n|\\nI don't think leaders lost jobs from the GFC, for example\\nhttps:\/\/t.co\/bfrHVS5ODt\"]",
        Month: "March",
        "Dimension 1": -8.111382,
        "Dimension 2": 16.826225,
        Sentiment: -0.107142857,
        Subjectivity: 0.678571429,
        idx: 740,
      },
      {
        RawTweet:
          "@grobbins @kprather88 @sdut @latimes @nytimes @UCSanDiego @JonathanWosen @EricTopol @UC_Newsroom @KPBSnews @mcdiana @abbyhamblin @SFGate Awesome news.  #flatteningthecurve never looked so good!  Very proud of my colleagues leading the #ReturnToLearn initiative @UCSDMedSchool",
        Month: "May",
        "Dimension 1": 39.445656,
        "Dimension 2": -5.260258,
        Sentiment: 0.958333333,
        Subjectivity: 0.866666667,
        idx: 741,
      },
      {
        RawTweet:
          "['\u2022We did not get WHO tests when they were available. \\n\u2022We were unable to contain those infected. \\n\u2022Our only salvation is social distancing. \\n\u2022If we don\u2019t do it, people will die. \\n\u2022How many? Ask Italy. \\n#COVID19 https:\/\/t.co\/KPKWtTbKh4']",
        Month: "March",
        "Dimension 1": -36.97496,
        "Dimension 2": -7.343551,
        Sentiment: 0.086666667,
        Subjectivity: 0.493333333,
        idx: 742,
      },
      {
        RawTweet:
          "['Be safe, smart, kind. More at https:\/\/t.co\/McVrcLkX7T. #coronavirus #COVID19 https:\/\/t.co\/P0pO15Gt9n', 'Be safe, smart, kind. More at https:\/\/t.co\/McVrcLkX7T. #coronavirus #COVID19 https:\/\/t.co\/P0pO15Gt9n']",
        Month: "March",
        "Dimension 1": 35.759533,
        "Dimension 2": -23.50698,
        Sentiment: 0.453571429,
        Subjectivity: 0.635714286,
        idx: 743,
      },
      {
        RawTweet:
          "b'RT @SCBriand: Early isolation of cases and contacts is critical to stop the spread.  #Covid_19 https:\/\/t.co\/xI0PJlHmkU'",
        Month: "March",
        "Dimension 1": -8.631701,
        "Dimension 2": -21.424852,
        Sentiment: 0.05,
        Subjectivity: 0.55,
        idx: 744,
      },
      {
        RawTweet:
          "@annaboconnell Listen!!! This is what my DMs look like after I criticize Dr. Sebi and his lies. It\u2019s exhausting but here we are in these positions to make change... https:\/\/t.co\/kUEvqeoKgW",
        Month: "April",
        "Dimension 1": -22.67784,
        "Dimension 2": -20.308891,
        Sentiment: -0.4,
        Subjectivity: 0.5,
        idx: 745,
      },
      {
        RawTweet:
          "Amazing compared with SF. Will be fascinating to see what seroprevalence rates for antibodies are in these districts. What\u2019s your guess? https:\/\/t.co\/EcZFiDQfpa",
        Month: "April",
        "Dimension 1": 20.673035,
        "Dimension 2": -1.8285354,
        Sentiment: 0.65,
        Subjectivity: 0.875,
        idx: 746,
      },
      {
        RawTweet:
          "It is unsustainable (effort grows with epidemic size). We need measures that while painful for all will slow social contact - cancelling public gatherings, paid sick leave, working from home, and the like. Social distancing is the general name for these interventions.",
        Month: "March",
        "Dimension 1": -22.465536,
        "Dimension 2": -18.560524,
        Sentiment: -0.228231293,
        Subjectivity: 0.408163265,
        idx: 747,
      },
      {
        RawTweet:
          "b'@caitlinmurr @GrantWahl We\\xe2\\x80\\x99ve known for sometime that something like this would hit.'",
        Month: "March",
        "Dimension 1": 12.249713,
        "Dimension 2": -34.676285,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 748,
      },
      {
        RawTweet:
          '@Mo_Sawyers1 Okay. So since I\'m letting my forward actions speak for the "apology", what else do you suggest? If the issue is "intent" then... why not just take the full scope of what I say and (said\/typed)? \r\n\r\nThis applies here. &gt; https:\/\/t.co\/cabHhXPXw9',
        Month: "April",
        "Dimension 1": 6.6412363,
        "Dimension 2": -34.18464,
        Sentiment: 0.425,
        Subjectivity: 0.525,
        idx: 749,
      },
      {
        RawTweet:
          "b'The @dnc needs to redo the primary in order to properly adapt to the #CoronavirusPandemic. \\n\\nI say open it up to al\\xe2\\x80\\xa6 https:\/\/t.co\/vwl7HGWY3o'",
        Month: "April",
        "Dimension 1": 8.381067,
        "Dimension 2": -1.1713136,
        Sentiment: 0.133333333,
        Subjectivity: 0.366666667,
        idx: 750,
      },
      {
        RawTweet:
          "b'heading back to @foxnews with the great @BillHemmer \\n\\nTalking travel bans, did we all get this pandemic wrong and much more.\\n\\nTune in!'",
        Month: "May",
        "Dimension 1": -21.152033,
        "Dimension 2": -6.3133383,
        Sentiment: 0.1375,
        Subjectivity: 0.4625,
        idx: 751,
      },
      {
        RawTweet:
          "b'Help slow the spread of #COVID19 and identify at risk cases sooner by self-reporting your symptoms daily, even if y\\xe2\\x80\\xa6 https:\/\/t.co\/gSWyFfHn7P'",
        Month: "April",
        "Dimension 1": 7.377217,
        "Dimension 2": -26.813162,
        Sentiment: -0.15,
        Subjectivity: 0.2,
        idx: 752,
      },
      {
        RawTweet:
          "['#CardiffUni scientists will take a leading role in mapping the spread of #coronavirus as part of a new \u00a320m project confirmed by the UK\u2019s chief scientific adviser. Watch the @BBCWalesToday report here \ud83d\udc49 https:\/\/t.co\/bJVESrGIVD']",
        Month: "March",
        "Dimension 1": -1.6905419,
        "Dimension 2": 28.946352,
        Sentiment: 0.268181818,
        Subjectivity: 0.727272727,
        idx: 753,
      },
      {
        RawTweet:
          "b'RT @ClancyNeil: Hearing from friends that they will not intubate anyone &gt;80 yo and may go to  &gt;70 yo in Strasbourg France due to COVID situ\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -39.098984,
        "Dimension 2": -7.579052,
        Sentiment: -0.125,
        Subjectivity: 0.375,
        idx: 754,
      },
      {
        RawTweet:
          "['Sooo I was on hold to 111 for 2 1\/2 hours and I cba, can someone tell me if you\u2019re meant to self isolate if you\u2019ve recently become ill in general or only if you\u2019ve been to Italy\/being tested etc? Ik I most likely don\u2019t have #coronavirus , just don\u2019t wanna make anyone else sick\u270c\ud83c\udffb']",
        Month: "March",
        "Dimension 1": -37.435608,
        "Dimension 2": -7.4930453,
        Sentiment: 0.008333333,
        Subjectivity: 0.708333333,
        idx: 755,
      },
      {
        RawTweet:
          "b'Snake peeps, identity? Out today on a hike in NE Ohio, hanging out in a puddle. Might be ~2 feet long if stretched\\xe2\\x80\\xa6 https:\/\/t.co\/G1nm7pCgyh'",
        Month: "May",
        "Dimension 1": -4.824389,
        "Dimension 2": 32.574677,
        Sentiment: -0.05,
        Subjectivity: 0.4,
        idx: 756,
      },
      {
        RawTweet:
          '["For years we\'ve been designing #IT solutions for our Center City Philly customers to be able to continue working in case their buildings were shut down for an emergency. We never expected this but glad we planned for it.  #COOP #WFH #BusinessContinuity #COVID19 #MakingTechWork4U https:\/\/t.co\/ISG6DF071J", "For years we\'ve been designing #IT solutions for our Center City Philly customers to be able to continue working in case their buildings were shut down for an emergency. We never expected this but glad we planned for it.  #COOP #WFH #BusinessContinuity #COVID19 #MakingTechWork4U https:\/\/t.co\/ISG6DF071J", "For years we\'ve been designing #IT solutions for our Center City Philly customers to be able to continue working in case their buildings were shut down for an emergency. We never expected this but glad we planned for it.  #COOP #WFH #BusinessContinuity #COVID19 #MakingTechWork4U https:\/\/t.co\/ISG6DF071J"]',
        Month: "March",
        "Dimension 1": -12.089544,
        "Dimension 2": 18.091825,
        Sentiment: 0.158888889,
        Subjectivity: 0.482777778,
        idx: 757,
      },
      {
        RawTweet:
          "b'Dallan and I are livestreaming today\\xe2\\x80\\x99s news summary at 3pm eastern. Get a quick look at the state of the\\xe2\\x80\\xa6 https:\/\/t.co\/qPpEaMFgr7'",
        Month: "April",
        "Dimension 1": 7.098532,
        "Dimension 2": 39.578896,
        Sentiment: 0.333333333,
        Subjectivity: 0.5,
        idx: 758,
      },
      {
        RawTweet:
          "['If health workers got #COVID19 we will never find anyone to take care of us in case need of help\\n\ud83d\ude31\ud83d\ude31\ud83d\ude31\\nTHIS IS SIMPLY CALLED A TRAGEDY #StayHome #CoronaLockdown #ChineseVirus #CoronavirusPandemic']",
        Month: "March",
        "Dimension 1": -38.91506,
        "Dimension 2": -13.132478,
        Sentiment: 0.0,
        Subjectivity: 0.357142857,
        idx: 759,
      },
      {
        RawTweet:
          "b'@amoryamargo Guys, do you deliver cocktails? Because I would totally order some!'",
        Month: "March",
        "Dimension 1": 6.834004,
        "Dimension 2": -41.049522,
        Sentiment: 0.0,
        Subjectivity: 0.75,
        idx: 760,
      },
      {
        RawTweet:
          "['Queensland records two new #coronavirus cases after revelations patient visited nightclub. What is worry some is the fact that young people are diagnosed for coronavirus in Australia who are also very active in public dealings. #DigitalIndia @DisasterReliefs @DigitalIndiaLaw https:\/\/t.co\/8a5LrAvWqW']",
        Month: "March",
        "Dimension 1": -25.586504,
        "Dimension 2": 12.586647,
        Sentiment: 0.015757576,
        Subjectivity: 0.42530303,
        idx: 761,
      },
      {
        RawTweet:
          "This is tragic and inhumane, especially considering that ppl like Manafort are getting early release due to #COVID concerns! https:\/\/t.co\/dPdL6Sy7CS",
        Month: "May",
        "Dimension 1": -24.098331,
        "Dimension 2": -24.563011,
        Sentiment: -0.34125,
        Subjectivity: 0.665,
        idx: 762,
      },
      {
        RawTweet:
          'b"#COVID19 @GOVUK *Sage words; time to end the rhetoric* Nick Ferrari\'s message to the Prime Minister: Start answerin\\xe2\\x80\\xa6 https:\/\/t.co\/gsrqBIHLM9"',
        Month: "April",
        "Dimension 1": -8.132803,
        "Dimension 2": -15.984022,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 763,
      },
      {
        RawTweet:
          "b'The US Postal Service warned it may have to shut down by JUNE! The Congressional #coronavirus stimulus package prov\\xe2\\x80\\xa6 https:\/\/t.co\/qSKGUnb2ml'",
        Month: "April",
        "Dimension 1": -32.503353,
        "Dimension 2": 2.84196,
        Sentiment: -0.194444444,
        Subjectivity: 0.288888889,
        idx: 764,
      },
      {
        RawTweet:
          "['This too shall pass. Our teams make us proud. Our leads inspire us. #coronavirus #workfromhome #stayhomesavelives \\nhttps:\/\/t.co\/dFg6CPyk7Q', 'This too shall pass. Our teams make us proud. Our leads inspire us. #coronavirus #workfromhome #stayhomesavelives \\nhttps:\/\/t.co\/dFg6CPyk7Q']",
        Month: "March",
        "Dimension 1": 38.389366,
        "Dimension 2": -18.877375,
        Sentiment: 0.8,
        Subjectivity: 1.0,
        idx: 765,
      },
      {
        RawTweet:
          "As of today, 365 #COVID19 deaths in NYC. Each a tragedy, including at least one HCW. Similar number died of HIV, ovarian cancer; more than died from homicide. Numbers will increase a lot. Painful, tragic. Must #FlattenTheCurve before we #LoosenTheFaucet  https:\/\/t.co\/rIl31McM45",
        Month: "March",
        "Dimension 1": -25.360321,
        "Dimension 2": 33.55618,
        Sentiment: -0.25,
        Subjectivity: 0.59,
        idx: 766,
      },
      {
        RawTweet:
          "['.@RegSprecher, as a @GlblCtzn I am very proud that \ud83c\udde9\ud83c\uddea has stepped up and taken responsibility at home and abroad to fight #COVID19. Please keep up the great efforts and continue to provide more funding as @WHO needs grow! @BMG_Bund @jensspahn @BMZ_Bund']",
        Month: "March",
        "Dimension 1": 38.283607,
        "Dimension 2": -15.006766,
        Sentiment: 0.808333333,
        Subjectivity: 0.75,
        idx: 767,
      },
      {
        RawTweet:
          "b'So now \\xe2\\x81\\xa6@SkyNews\\xe2\\x81\\xa9 goes international in its eagerness to bash Boris. Disgraceful behaviour by a British broadcaster\\xe2\\x80\\xa6 https:\/\/t.co\/VXRb6T9Slt'",
        Month: "April",
        "Dimension 1": -19.352142,
        "Dimension 2": -4.654138,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 768,
      },
      {
        RawTweet:
          "b\"Daily Covid 19 update.\\nOur death numbers are creeping up relative to Italy +15 days, it's too early to say if we're\\xe2\\x80\\xa6 https:\/\/t.co\/PQes5Bqj6u\"",
        Month: "April",
        "Dimension 1": -2.7255237,
        "Dimension 2": 40.987926,
        Sentiment: 0.033333333,
        Subjectivity: 0.1,
        idx: 769,
      },
      {
        RawTweet:
          "Finally, there is the psychological strain caused by the physical distancing measures we have adopted on an unprecedented scale to slow the spread of #COVID19. This new confinement is something for which few of us have a frame of reference. We have never seen anything like it.",
        Month: "April",
        "Dimension 1": -27.278187,
        "Dimension 2": -16.094069,
        Sentiment: 0.033766234,
        Subjectivity: 0.442486085,
        idx: 770,
      },
      {
        RawTweet:
          "b'RT @KBibbinsDomingo: Striking maps of Milwaukee by @compujeramey overlaying COVID cases on high African American (left) or White population\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -13.829825,
        "Dimension 2": -14.946294,
        Sentiment: 0.11,
        Subjectivity: 0.256666667,
        idx: 771,
      },
      {
        RawTweet:
          "[\"I don't know who needs to hear this, but don't take that fucking #coronavirus vaccine we straight drink water, eat fruit love healthy fuck the #media trust Allah\", \"I don't know who needs to hear this, but don't take that fucking #coronavirus vaccine we straight drink water, eat fruit love healthy fuck the #media trust Allah\", \"I don't know who needs to hear this, but don't take that fucking #coronavirus vaccine we straight drink water, eat fruit love healthy fuck the #media trust Allah\"]",
        Month: "March",
        "Dimension 1": -40.872475,
        "Dimension 2": -13.008094,
        Sentiment: 0.04,
        Subjectivity: 0.58,
        idx: 772,
      },
      {
        RawTweet:
          "\u201cTo get a better handle on the new symptom and its ties to coronavirus..as well as those experiencing anosmia who have tested negative. That will allow them to compare both groups and understand whether anosmia is truly a core coronavirus symptom\u201d https:\/\/t.co\/hctdmRLKro",
        Month: "March",
        "Dimension 1": -1.5879548,
        "Dimension 2": 1.8773037,
        Sentiment: 0.112121212,
        Subjectivity: 0.451515152,
        idx: 773,
      },
      {
        RawTweet:
          "b'RT @Farzad_MD: 5\/ As befits these amazing doctors I am proud to serve, they are desperately worried about their patients. \\n\\nThey have seen\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 24.35475,
        "Dimension 2": -23.347603,
        Sentiment: 0.266666667,
        Subjectivity: 0.966666667,
        idx: 774,
      },
      {
        RawTweet:
          "b'#Serbia #Belgrad #Coronavirus\\n\\nSerbia is taking the first, slight steps towards easing the corona measures that hav\\xe2\\x80\\xa6 https:\/\/t.co\/T5Ml7N6Feg'",
        Month: "April",
        "Dimension 1": 6.986524,
        "Dimension 2": 0.8446258,
        Sentiment: 0.041666667,
        Subjectivity: 0.25,
        idx: 775,
      },
      {
        RawTweet:
          "b'@martafilizola @SesmaLab @CesarMFontela I learned Italian at school. The only thing that stuck are swear words.'",
        Month: "May",
        "Dimension 1": 9.554263,
        "Dimension 2": -31.890339,
        Sentiment: 0.0,
        Subjectivity: 0.5,
        idx: 776,
      },
      {
        RawTweet:
          "['Still in quarantine. Still Team Warren. \\n#covid19 #socialdistancing #quarantine #5months #babyarlo #stillteamwarren #teamwarren #warrenforvp #vicepresidentwarren #vpwarren #dreambig #fighthard #napoften @ewarren https:\/\/t.co\/Ob5nVBsOQ0', 'Still in quarantine. Still Team Warren. \\n#covid19 #socialdistancing #quarantine #5months #babyarlo #stillteamwarren #teamwarren #warrenforvp #vicepresidentwarren #vpwarren #dreambig #fighthard #napoften @ewarren https:\/\/t.co\/Ob5nVBsOQ0']",
        Month: "March",
        "Dimension 1": 10.053751,
        "Dimension 2": -3.6092858,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 777,
      },
      {
        RawTweet:
          'b"RT @DShaywitz: Outstanding morning listen, and most informative discussion of coronavirus I\'ve heard all week, combining insight and empath\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": 12.753443,
        "Dimension 2": 29.281237,
        Sentiment: 0.5,
        Subjectivity: 0.6875,
        idx: 778,
      },
      {
        RawTweet:
          '[\'A&amp;E medic @BBCEssex source "Amanda" tells me the hospital she works at is now "in complete lockdown" with #Coronavirus.  The hospital has been divided into a "hot and a cold zone" to protect non-infected patients.\', \'A&amp;E medic @BBCEssex source "Amanda" tells me the hospital she works at is now "in complete lockdown" with #Coronavirus.  The hospital has been divided into a "hot and a cold zone" to protect non-infected patients.\']',
        Month: "March",
        "Dimension 1": -27.172266,
        "Dimension 2": 2.3614576,
        Sentiment: -0.083333333,
        Subjectivity: 0.75,
        idx: 779,
      },
      {
        RawTweet:
          "['Dr Mary Favier, Irish College of General Practitioners president, says it is important during #covid19 #coronavirus for people with non-virus related issues to still contact GPs by phone.\\n\\nShe says not doing so could result in non-virus related issues when the outbreak ends.']",
        Month: "March",
        "Dimension 1": -2.258537,
        "Dimension 2": -17.875887,
        Sentiment: 0.09,
        Subjectivity: 0.46,
        idx: 780,
      },
      {
        RawTweet:
          "['We are working to slow the progression of #COVID19 so our health care system will not be overwhelmed.\\n\\nAll Houstonians have the power to take heed of the certain precautions we have asked so we can help to slow the progression. #Covid_19']",
        Month: "March",
        "Dimension 1": -1.9143909,
        "Dimension 2": -22.015203,
        Sentiment: -0.128571429,
        Subjectivity: 0.457142857,
        idx: 781,
      },
      {
        RawTweet:
          "Really interesting article and I think it points to the fact that we need to treat ARDS better and factor in lung compliance into decisions to intubate. I\u2019ve seen the compliance alter rapidly in an intubated patients https:\/\/t.co\/zlHYFsXSIB",
        Month: "April",
        "Dimension 1": 20.126926,
        "Dimension 2": -7.0517144,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 782,
      },
      {
        RawTweet:
          "@KHiveStings Think what you think. I meant what I said (always do). And, if you can\u2019t see through to the meaning, you\u2019re living life too seriously orrrrrr just here in my days old tweets picking a fight. I have \u201cvagina-ology\u201d in my header on purpose. It\u2019s a movement... catch on \ud83d\udc51",
        Month: "April",
        "Dimension 1": 8.596749,
        "Dimension 2": -31.082092,
        Sentiment: -0.116666667,
        Subjectivity: 0.433333333,
        idx: 783,
      },
      {
        RawTweet:
          "This article describes a radical approach to (not) managing the COVID epidemic in India. It misrepresents my views worse than almost any article I have ever been quoted in. We talked for 1\/2 an hour and my quote is wildly unrepresentative of what I said https:\/\/t.co\/6r2YfrBXUU",
        Month: "April",
        "Dimension 1": -42.27558,
        "Dimension 2": -5.294293,
        Sentiment: -0.15,
        Subjectivity: 0.5,
        idx: 784,
      },
      {
        RawTweet:
          "b'RT @PMEthiopia: Halting of movement around borders pertains to land border.'",
        Month: "March",
        "Dimension 1": -24.464499,
        "Dimension 2": -32.750927,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 785,
      },
      {
        RawTweet:
          "First is entry for most CoVs requires receptor binding and proteolytic cleavage for activation of fusion. Unlike Flavi which seem to be driven by pH for fusion, without cleavage to activate the CoV spike to fusion form, have doubts it can complete action.",
        Month: "March",
        "Dimension 1": -14.460167,
        "Dimension 2": -27.278654,
        Sentiment: 0.2375,
        Subjectivity: 0.333333333,
        idx: 786,
      },
      {
        RawTweet:
          "['Maple grove Sams - lady purchasing a bunch - limit is supposed to be 5 per person .:: so clearly this is common core math bc when asked she said well \u201c5 of each type\u201d?  #covid19 https:\/\/t.co\/oHlfedMPRn']",
        Month: "March",
        "Dimension 1": 3.3596952,
        "Dimension 2": 30.926733,
        Sentiment: -0.1,
        Subjectivity: 0.441666667,
        idx: 787,
      },
      {
        RawTweet:
          "['COVID-19: Further Evidence that the Virus Originated in the US - Global Research   This is something to understand, haven\u2019t fact checked this. #coronavirus \\u2066@CBCAlerts\\u2069 \\u2066@CBCToronto\\u2069 \\u2066@nytimes\\u2069 \\u2066@washingtonpost\\u2069 \\u2066@CBCNews\\u2069  https:\/\/t.co\/xxGQC1a5Ia']",
        Month: "March",
        "Dimension 1": -15.815151,
        "Dimension 2": 2.0981681,
        Sentiment: 0.0,
        Subjectivity: 0.25,
        idx: 788,
      },
      {
        RawTweet:
          "b\"Why don't politicians accept badges &amp; medals in lieu of a pay rise? We're all in it together, aren't we?\\xe2\\x80\\xa6 https:\/\/t.co\/Fh2FpaTwuq\"",
        Month: "April",
        "Dimension 1": -5.7630763,
        "Dimension 2": -2.3736897,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 789,
      },
      {
        RawTweet:
          "b'RT @Dante_Licona: Awesome @pictoline animation for @DrTedros message: \\xe2\\x80\\x9cTest, test, test every suspected #COVID19 case\\xe2\\x80\\x9d https:\/\/t.co\/0qtQNBF\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 33.295055,
        "Dimension 2": -11.029719,
        Sentiment: 1.0,
        Subjectivity: 1.0,
        idx: 790,
      },
      {
        RawTweet:
          "b'@ljr334 @engele @fleetwoodeldred @medrxivpreprint This is getting transferred to a clinical micro lab for validation right now.'",
        Month: "March",
        "Dimension 1": 24.81873,
        "Dimension 2": 6.881087,
        Sentiment: 0.285714286,
        Subjectivity: 0.535714286,
        idx: 791,
      },
      {
        RawTweet:
          "The analysis is trying to suggest that reopening is safe or even preferred. But most states are rightly moving cautiously. I wouldn\u2019t expect to see a spike from eg opening trails, so it makes sense that trends from pre-reopening wld continue. That's on purpose. 3\/",
        Month: "May",
        "Dimension 1": -7.893819,
        "Dimension 2": -33.46228,
        Sentiment: 0.428571429,
        Subjectivity: 0.511904762,
        idx: 792,
      },
      {
        RawTweet:
          "b'Add your name to this petition to ensure paid sick days for ALL workers to slow the spread of #COVID19 https:\/\/t.co\/MTsq3MZf0V'",
        Month: "March",
        "Dimension 1": -9.738292,
        "Dimension 2": 15.055147,
        Sentiment: -0.507142857,
        Subjectivity: 0.628571429,
        idx: 793,
      },
      {
        RawTweet:
          "b'17\/ eg @nejm hydroxychloroquine study showed no benefit https:\/\/t.co\/Ptn27EzrHb. Observational, but authors tried t\\xe2\\x80\\xa6 https:\/\/t.co\/Pd8e0WSElK'",
        Month: "May",
        "Dimension 1": -33.552574,
        "Dimension 2": -18.856707,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 794,
      },
      {
        RawTweet:
          "['Sales leaders: While planning around #COVID19 disruptions, @Gartner_inc  recommend focusing on these top 3 priorities. Read more: https:\/\/t.co\/gbLkDCjWoK #Coronavirus', 'Sales leaders: While planning around #COVID19 disruptions, @Gartner_inc  recommend focusing on these top 3 priorities. Read more: https:\/\/t.co\/gbLkDCjWoK #Coronavirus']",
        Month: "March",
        "Dimension 1": 6.647183,
        "Dimension 2": 14.999972,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 795,
      },
      {
        RawTweet:
          "Getting ready for a live interview at \u2066@WFSBnews\u2069! Join us for the Facebook live interview. Happening at 1pm. https:\/\/t.co\/GBgLeq6dLc",
        Month: "March",
        "Dimension 1": 9.3208275,
        "Dimension 2": 39.373295,
        Sentiment: 0.168939394,
        Subjectivity: 0.5,
        idx: 796,
      },
      {
        RawTweet:
          "['Defying #covid19, we\u2019ve got an excellent turnout for today\u2019s #CSDconference: Beyond the State: Rethinking Mechanisms for Peace, Security, and Development!\\n\\nFantastic work by our @KingsSSPP MA students in @CSDRG @KingsIntDev in organizing a set of excellent discussions. https:\/\/t.co\/GuUKD09p5H', 'Defying #covid19, we\u2019ve got an excellent turnout for today\u2019s #CSDconference: Beyond the State: Rethinking Mechanisms for Peace, Security, and Development!\\n\\nFantastic work by our @KingsSSPP MA students in @CSDRG @KingsIntDev in organizing a set of excellent discussions. https:\/\/t.co\/GuUKD09p5H']",
        Month: "March",
        "Dimension 1": 39.192142,
        "Dimension 2": -9.832966,
        Sentiment: 1.0,
        Subjectivity: 1.0,
        idx: 797,
      },
      {
        RawTweet:
          "['\ud83d\udd8b Support Robin by signing \u201cPro Family first initiative for coronavirus response\u201d and I\u2019ll deliver a copy to your officials too: https:\/\/t.co\/SUjpnAlO63\\n\\n\ud83d\udce8 Last delivered to @SenatorBurr, @RepDavidEPrice and @senthomtillis #NC04 #NCpolitics #COVID19 https:\/\/t.co\/KMAxsTNYzP', '\ud83d\udd8b Support Robin by signing \u201cPro Family first initiative for coronavirus response\u201d and I\u2019ll deliver a copy to your officials too: https:\/\/t.co\/SUjpnAlO63\\n\\n\ud83d\udce8 Last delivered to @SenatorBurr, @RepDavidEPrice and @senthomtillis #NC04 #NCpolitics #COVID19 https:\/\/t.co\/KMAxsTNYzP']",
        Month: "March",
        "Dimension 1": 5.8154836,
        "Dimension 2": 4.7271132,
        Sentiment: 0.125,
        Subjectivity: 0.2,
        idx: 798,
      },
      {
        RawTweet:
          'b"\'With more than 800 million going without adequate food worldwide, hunger is still likely to kill more people than\\xe2\\x80\\xa6 https:\/\/t.co\/aObWLW7Nt4"',
        Month: "April",
        "Dimension 1": -24.452915,
        "Dimension 2": 35.459225,
        Sentiment: 0.333333333,
        Subjectivity: 0.583333333,
        idx: 799,
      },
      {
        RawTweet:
          "b'RT @michaelethox: Important evidence about possible uptake of mobile phone app for rapid contact tracing  and testing for COVID-19 in the U\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 44.322456,
        "Dimension 2": 4.129462,
        Sentiment: 0.2,
        Subjectivity: 1.0,
        idx: 800,
      },
      {
        RawTweet:
          "b'RT @leorahorwitzmd: Non medical friends, let\\xe2\\x80\\x99s have a chat about masks. So, you\\xe2\\x80\\x99ve bought yourself a box of N95 masks and you think you\\xe2\\x80\\x99re\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 15.992705,
        "Dimension 2": -2.445536,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 801,
      },
      {
        RawTweet:
          "I thank \ud83c\uddec\ud83c\uddf7 Prime Minister @kmitsotakis for his leadership in the fight against #COVID19 and for Greece's contribution of \u20ac3M to the global response. #UnitedAgainstCoronavirus",
        Month: "May",
        "Dimension 1": 37.021255,
        "Dimension 2": -21.097158,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 802,
      },
      {
        RawTweet:
          "Today's #shoutout to #womenInSTEM goes to @sheeyau &amp; Gwenael Piganeau for their cool @ScienceAdvances paper on #Virus-host coexistence in #phytoplankton through the #genomic lens. https:\/\/t.co\/z1Ak2dTrGt",
        Month: "April",
        "Dimension 1": 16.18928,
        "Dimension 2": 10.457644,
        Sentiment: 0.35,
        Subjectivity: 0.65,
        idx: 803,
      },
      {
        RawTweet:
          "Chart from @AEI: Change in confirmed cases in the last 7 days by major cities with active spread. This shows the relative growth in the absolute number of cases across different metropolitan areas. More graphics and data available at AEI at https:\/\/t.co\/riria57ugj https:\/\/t.co\/DG6iqg8igd",
        Month: "March",
        "Dimension 1": -8.096262,
        "Dimension 2": 46.23768,
        Sentiment: 0.158796296,
        Subjectivity: 0.507407407,
        idx: 804,
      },
      {
        RawTweet:
          "#COVID19 is a serious disease, it\u2019s the defining global health crisis of our time. That\u2019s why we\u2019re calling on every country &amp; every individual to do everything they can to help us stop the #coronavirus transmission.\r\nhttps:\/\/t.co\/cOOs5wMCZE",
        Month: "March",
        "Dimension 1": -3.8627584,
        "Dimension 2": -7.331679,
        Sentiment: -0.111111111,
        Subjectivity: 0.355555556,
        idx: 805,
      },
      {
        RawTweet:
          "['.@USAIDMarkGreen @JBarsaUSAID @SecAzar @RepMarkMeadows @NitaLowey @RepKayGranger @RepHalRogers:  To save as many lives as possible from #COVID19, we need the US and other world leaders to urgently fund vaccine development. Will you help fund @CEPIvaccines and stop #coronavirus?']",
        Month: "March",
        "Dimension 1": 0.45079395,
        "Dimension 2": -4.306175,
        Sentiment: 0.125,
        Subjectivity: 0.625,
        idx: 806,
      },
      {
        RawTweet:
          "We need to remember all the people who are hurt most by the measures we must take: the elderly, lower income Americans, the gig economy, those in services and hospitality sectors, and many others. And most of all, our front line providers who are risking everything to save us.",
        Month: "March",
        "Dimension 1": -12.32584,
        "Dimension 2": -11.441654,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 807,
      },
      {
        RawTweet:
          "b'@McLNeuro Thanks, @McLNeuro! I appreciate all the responses and RT with comments around this journal club from so many people.'",
        Month: "March",
        "Dimension 1": 41.647568,
        "Dimension 2": -12.219763,
        Sentiment: 0.375,
        Subjectivity: 0.35,
        idx: 808,
      },
      {
        RawTweet:
          "Are you curious about how #temperature and #humidity affects #SARSCoV2? There is a cool web tool that provides a quick answer to this question. Slide the temperature and humidity scales to find out how long the virus survives on plastic\/steel surface. \r\n\r\nhttps:\/\/t.co\/b8dLi9uIDi",
        Month: "May",
        "Dimension 1": 10.128866,
        "Dimension 2": 7.117737,
        Sentiment: 0.133333333,
        Subjectivity: 0.6375,
        idx: 809,
      },
      {
        RawTweet:
          "b'Imagine the video, photo, and phone sex going down around the world right now. mutual masturbation on video chat. hot af #covid19'",
        Month: "March",
        "Dimension 1": -25.92752,
        "Dimension 2": -3.8452065,
        Sentiment: 0.126719577,
        Subjectivity: 0.558201058,
        idx: 810,
      },
      {
        RawTweet:
          "b'The fight against the pandemic is our top priority and everything that is needed to stop it and eradicate the virus\\xe2\\x80\\xa6 https:\/\/t.co\/AYQRbqLanQ'",
        Month: "April",
        "Dimension 1": -3.5734634,
        "Dimension 2": -7.724667,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 811,
      },
      {
        RawTweet:
          "b'Covid-19 Modeling: Impact of Missing Data and Ignoring Key Features\\n#covid19 #dataanalytics https:\/\/t.co\/EtU9HGm69y'",
        Month: "April",
        "Dimension 1": -10.332859,
        "Dimension 2": -21.912724,
        Sentiment: -0.1,
        Subjectivity: 0.525,
        idx: 812,
      },
      {
        RawTweet:
          "We know much about health\u2019s link to income, less re its link to savings\/wealth. Enjoyed exploring this, led by @CatherineEttman. We found low family savings predicted higher probability of depression at all income levels. https:\/\/t.co\/YdKpjW2lGP v Ann. Epidemiol. @GregoryHCohen",
        Month: "March",
        "Dimension 1": -13.859019,
        "Dimension 2": -19.067545,
        Sentiment: 0.156666667,
        Subjectivity: 0.353333333,
        idx: 813,
      },
      {
        RawTweet:
          "We will be stuck in an endless cycle of lockdown\/release for next 18 months, if we do not start mass testing, tracing, &amp; isolating those who are carriers of the virus while pursuing rapid research for antiviral treatment or vaccine. This is the message the public needs to hear.",
        Month: "March",
        "Dimension 1": -4.26598,
        "Dimension 2": 25.501879,
        Sentiment: -0.041666667,
        Subjectivity: 0.272222222,
        idx: 814,
      },
      {
        RawTweet:
          "b'Very excited to be collaborating with @thermofisher  and @WuXi_AppTec to develop the diagnostic tools needed to fig\\xe2\\x80\\xa6 https:\/\/t.co\/LiLvCP8JXm'",
        Month: "May",
        "Dimension 1": 37.079308,
        "Dimension 2": -9.307277,
        Sentiment: 0.4875,
        Subjectivity: 0.975,
        idx: 815,
      },
      {
        RawTweet:
          "b'RT @abbydphillip: One thing that I see so often in these videos of violent arrests by law enforcement is when onlookers are recording and v\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": -10.039682,
        "Dimension 2": 5.599159,
        Sentiment: -0.8,
        Subjectivity: 1.0,
        idx: 816,
      },
      {
        RawTweet:
          "b'@HobbyLobby  You need to stop the nonsense and follow state orders NOT TO OPEN. Just who do you think you are? You\\xe2\\x80\\xa6 https:\/\/t.co\/nGyW7N8vmh'",
        Month: "April",
        "Dimension 1": -9.036677,
        "Dimension 2": -20.629463,
        Sentiment: 0.0,
        Subjectivity: 0.5,
        idx: 817,
      },
      {
        RawTweet:
          "['I signed this, will you join me? Tell Congress and the White House to protect people from financial hardship due to the #coronavirus pandemic. Sign the @CRAdvocacy petition: https:\/\/t.co\/imO1LMdIo1 https:\/\/t.co\/vfeXn3AZuw']",
        Month: "March",
        "Dimension 1": -4.2919545,
        "Dimension 2": -0.98672295,
        Sentiment: -0.041666667,
        Subjectivity: 0.125,
        idx: 818,
      },
      {
        RawTweet:
          "['Hi @eucopresident @vonderleyen the @WHO @DrTedros urgently needs at least USD $675 million to fight #COVID19. Will you and all @g20org states please step up and release much needed funds for #coronavirus response efforts? Together, we can beat this pandemic and keep the \ud83c\udf0d safe.']",
        Month: "March",
        "Dimension 1": -2.6591935,
        "Dimension 2": 27.846127,
        Sentiment: 0.133333333,
        Subjectivity: 0.366666667,
        idx: 819,
      },
      {
        RawTweet:
          "13\/ Outcomes @ 54:40: 34 patients intubated\/vented, out of 54 total in ICU. Among those intubated: 4 died out of 34 (2 others died without going on vent due to patient preferences). 17\/34 vented have been discharged home, 4 went to outside facility. Only 6 patients still on vent.",
        Month: "May",
        "Dimension 1": -19.468914,
        "Dimension 2": 33.695515,
        Sentiment: -0.03125,
        Subjectivity: 0.54375,
        idx: 820,
      },
      {
        RawTweet:
          "\u201cwhat an opportunity to make a fortune\u201d\u2014 it is well known that pharmaceutical companies find most infectious disease products to not be lucrative, especially so for an emerging infectious disease. This type of rhetoric is why we don\u2019t have a Zika vaccine  https:\/\/t.co\/TguLMNw1Si",
        Month: "March",
        "Dimension 1": -27.185694,
        "Dimension 2": -14.058845,
        Sentiment: 0.25,
        Subjectivity: 0.75,
        idx: 821,
      },
      {
        RawTweet:
          "b'#ALLINCHALLENGE continues to grow! It\\xe2\\x80\\x99s a way to raise $$ to feed the elderly, kids and frontline workers during th\\xe2\\x80\\xa6 https:\/\/t.co\/wDAEfqMb3g'",
        Month: "April",
        "Dimension 1": 15.827038,
        "Dimension 2": 30.678165,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 822,
      },
      {
        RawTweet:
          "Our list of what's closed on the Upper West Side was pretty short at noon yesterday. Now it's...damn near everything:\r\n\r\nhttps:\/\/t.co\/0ZR3mRcJcg",
        Month: "March",
        "Dimension 1": -1.2323983,
        "Dimension 2": 48.37072,
        Sentiment: 0.05,
        Subjectivity: 0.36,
        idx: 823,
      },
      {
        RawTweet:
          "b'In today\\xe2\\x80\\x99s #farming #adventure the #goats got themselves out and went for a #walk around the #farm you can see they\\xe2\\x80\\xa6 https:\/\/t.co\/K4KEadaGrW'",
        Month: "May",
        "Dimension 1": 1.47227,
        "Dimension 2": 14.30059,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 824,
      },
      {
        RawTweet:
          "Here\u2019s the U-shaped curve of concern for #tuberculosis. Massive budget cuts led to a resurgence of #TB in  the early 90s, which @DrTomFrieden &amp; others made their mark controlling. https:\/\/t.co\/ykQvoZCbhY",
        Month: "March",
        "Dimension 1": -28.582788,
        "Dimension 2": 18.499783,
        Sentiment: 0.05,
        Subjectivity: 0.65,
        idx: 825,
      },
      {
        RawTweet:
          "@Defyantofficial Please do tell me what is happening in the black community \u2018cause I got time to lay you out ta-night. (Nothing I said about Korea was bad OR wrong so don\u2019t try it.) https:\/\/t.co\/bv7hghXqdT",
        Month: "April",
        "Dimension 1": -2.6718235,
        "Dimension 2": -37.886784,
        Sentiment: -0.455555556,
        Subjectivity: 0.666666667,
        idx: 826,
      },
      {
        RawTweet:
          "We also know the psychological sequelae of large-scale traumatic events can last a lifetime, their effects mediated by contextual factors like income, community social capital, and prior experience of trauma. https:\/\/t.co\/NNH6n1xiEL",
        Month: "April",
        "Dimension 1": 6.5370097,
        "Dimension 2": -16.842022,
        Sentiment: 0.008333333,
        Subjectivity: 0.058333333,
        idx: 827,
      },
      {
        RawTweet:
          "b'RT @drdeannasanter: Great review by Park and @VirusesImmunity summarizing #IFNs to combat #COVID2019! Great visuals as well to contrast typ\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 16.239048,
        "Dimension 2": -5.988012,
        Sentiment: 0.9,
        Subjectivity: 0.75,
        idx: 828,
      },
      {
        RawTweet:
          "['Over 100 countries and regions have reported confirmed cases of #COVID19 as of Sunday morning, @WHO spokesperson Fadela Chaib told Xinhua.\\n\\nFollow live updates: https:\/\/t.co\/Z95VdCptk6 https:\/\/t.co\/ynEhBy67Ml', 'Over 100 countries and regions have reported confirmed cases of #COVID19 as of Sunday morning, @WHO spokesperson Fadela Chaib told Xinhua.\\n\\nFollow live updates: https:\/\/t.co\/Z95VdCptk6 https:\/\/t.co\/ynEhBy67Ml']",
        Month: "March",
        "Dimension 1": -4.659118,
        "Dimension 2": 40.42362,
        Sentiment: 0.268181818,
        Subjectivity: 0.75,
        idx: 829,
      },
      {
        RawTweet:
          "b'There\\xe2\\x80\\x99s no shame in addressing feelings of anxiety or grief! Seek relief and peace of mind in healthy ways.\\xe2\\x80\\xa6 https:\/\/t.co\/EvWOTAKCdw'",
        Month: "May",
        "Dimension 1": 21.45694,
        "Dimension 2": -33.33878,
        Sentiment: -0.25,
        Subjectivity: 0.35,
        idx: 830,
      },
      {
        RawTweet:
          "Infection is present for days before symptoms when the virus is incubating, replicating exponentially inside &amp; it is possible to transmit it to others (pre-symptom). Unclear how often, but can happen. \r\n\r\nWe can each act like we\u2019re in that phase and social distance appropriately",
        Month: "March",
        "Dimension 1": 8.935772,
        "Dimension 2": 30.698126,
        Sentiment: 0.133333333,
        Subjectivity: 0.391666667,
        idx: 831,
      },
      {
        RawTweet:
          'b"I\'m joining a global call for immediate debt cancellation for low-income countries in response to the #Coronavirus\\xe2\\x80\\xa6 https:\/\/t.co\/a1bo0o97hm"',
        Month: "April",
        "Dimension 1": -24.21524,
        "Dimension 2": 6.18984,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 832,
      },
      {
        RawTweet:
          "[\"We know the #Coronavirus is causing chaos in #higered as schools try to quickly adapt. We hope that even as you contemplate closing your doors, you don't have to shut down your services. Here's our official statement on immediate assistance for partners:\\xa0https:\/\/t.co\/9sgYaZqk95\", \"We know the #Coronavirus is causing chaos in #higered as schools try to quickly adapt. We hope that even as you contemplate closing your doors, you don't have to shut down your services. Here's our official statement on immediate assistance for partners:\\xa0https:\/\/t.co\/9sgYaZqk95\"]",
        Month: "March",
        "Dimension 1": -3.1035557,
        "Dimension 2": -23.47203,
        Sentiment: 0.088888889,
        Subjectivity: 0.394444444,
        idx: 833,
      },
      {
        RawTweet:
          "b'RT @TheLeadCNN: Former Trump FDA Commissioner: the reality is we will be back to work before we have the capacity to test at an optimal lev\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 4.851789,
        "Dimension 2": 1.8285216,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 834,
      },
      {
        RawTweet:
          "In places with many known &amp; suspected COVID cases it is getting really intense. Efforts to do contact tracing are overwhelming even the top health departments https:\/\/t.co\/SeI2cRoEV9. At this stage it is wrongheaded to pour exponentially growing resources into this strategy.",
        Month: "March",
        "Dimension 1": -8.289054,
        "Dimension 2": 1.7101065,
        Sentiment: 0.425,
        Subjectivity: 0.75,
        idx: 835,
      },
      {
        RawTweet:
          "@DavidGauke @LizzieBillingt1 Exactly. This behavior is not 'bad' or dangerous at all. As long as there are no crowds (like in Central Park every day) and people keep distance walking\/hiking\/running\/biking outside is pretty safe and healthy.",
        Month: "March",
        "Dimension 1": 21.34355,
        "Dimension 2": -36.82386,
        Sentiment: 0.133333333,
        Subjectivity: 0.501851852,
        idx: 836,
      },
      {
        RawTweet:
          "b'RT @WHO: \"\\xf0\\x9f\\x87\\xb5\\xf0\\x9f\\x87\\xb0\\xe2\\x80\\x99s #COVID19 Response Plan is a joint strategy of the Government of #Pakistan, the @UN and partners. It is aligned with the @Glo\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 16.138521,
        "Dimension 2": -10.213171,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 837,
      },
      {
        RawTweet:
          "b'RT @statnews: Bracing for a surge of #Covid19 patients, hospitals and governments are grappling an unimaginable question: If ventilators an\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -7.0037074,
        "Dimension 2": 2.6242416,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 838,
      },
      {
        RawTweet:
          "Well, it\u2019s started. \r\n\r\nInstead of being asked about how we improve our #COVID19 response in the coming months, doctors are being asked to comment on why people shouldn\u2019t drink things like bleach or isopropyl alcohol.\r\n\r\nThis has to stop. \r\n\r\nThis is the problem. \r\n\r\nThis has to stop.",
        Month: "April",
        "Dimension 1": -31.025522,
        "Dimension 2": -7.3611674,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 839,
      },
      {
        RawTweet:
          "b'RT @TomBossert: There is a large perception gap between confirmed cases and unknown infections of #COVID19. This requires school closures,\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -26.951452,
        "Dimension 2": -7.707064,
        Sentiment: 0.171428571,
        Subjectivity: 0.676190476,
        idx: 840,
      },
      {
        RawTweet:
          "b'For many of our low-income and vulnerable neighbors, local food banks\\xe2\\x80\\x94like the @CleFoodBank\\xe2\\x80\\x94helps them to put nutri\\xe2\\x80\\xa6 https:\/\/t.co\/uXxukWKq6n'",
        Month: "April",
        "Dimension 1": -5.98705,
        "Dimension 2": 13.417516,
        Sentiment: 0.0,
        Subjectivity: 0.333333333,
        idx: 841,
      },
      {
        RawTweet:
          "['I strongly feel that our economy and stock market will regain sharply if we had stop community spread of #Covid19.\\n\\nOtherwise there will not be any requirement of economy and market.\\n\\nBe at home . Be safe .']",
        Month: "March",
        "Dimension 1": 23.143602,
        "Dimension 2": -33.583767,
        Sentiment: 0.269444444,
        Subjectivity: 0.661111111,
        idx: 842,
      },
      {
        RawTweet:
          "['WHO Expert: Aggressive Action Against #Coronavirus Cuts Down On Spread. Lack of proper testing in the U.S. means active cases are far more widespread than reported...and continuing to spread. https:\/\/t.co\/FoM5LjyurE']",
        Month: "March",
        "Dimension 1": -17.949467,
        "Dimension 2": -11.678384,
        Sentiment: 0.068518519,
        Subjectivity: 0.431481481,
        idx: 843,
      },
      {
        RawTweet:
          "['To my friends throughout the years who chastised me for FaceTiming you (instead of calling\/texting) it was getting you ready for this time.\\n\\nStay ready, so you don\u2019t have to get ready.\\n\\nYOU\u2019RE WELCOME.\\n\\n#socialdistancing #COVID19', 'To my friends throughout the years who chastised me for FaceTiming you (instead of calling\/texting) it was getting you ready for this time.\\n\\nStay ready, so you don\u2019t have to get ready.\\n\\nYOU\u2019RE WELCOME.\\n\\n#socialdistancing #COVID19']",
        Month: "March",
        "Dimension 1": -7.6500845,
        "Dimension 2": -35.989006,
        Sentiment: 0.2,
        Subjectivity: 0.5,
        idx: 844,
      },
      {
        RawTweet:
          "b'RT @Liz_Cheney: Important report describing coming phases in battle against #COVID19. Staying at home and continuing social separation are\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 10.43954,
        "Dimension 2": -7.7380447,
        Sentiment: 0.216666667,
        Subjectivity: 0.533333333,
        idx: 845,
      },
      {
        RawTweet:
          "b'RT @FaceTheNation: ICYMI: @GileadSciences $GILD #Remdesivir will likely be helpful for patients if administered early, @ScottGottliebMD tol\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 19.263985,
        "Dimension 2": -13.51439,
        Sentiment: 0.05,
        Subjectivity: 0.65,
        idx: 846,
      },
      {
        RawTweet:
          "b'Send a personal message to a @valleywise_az employee!\\n\\nAs our health care heroes take on #COVID19, send them a  mes\\xe2\\x80\\xa6 https:\/\/t.co\/QVsE0b13id'",
        Month: "April",
        "Dimension 1": 28.228563,
        "Dimension 2": 7.8923717,
        Sentiment: 0.0,
        Subjectivity: 0.3,
        idx: 847,
      },
      {
        RawTweet:
          "['NEW: @HouseDemocrats just introduced our third #FamiliesFirst proposal\u2014the Take Responsibility for Workers and Families Act. The bill provides more than $2.5 trillion to boldly address the impacts of the #coronavirus on families, businesses, &amp; communities. https:\/\/t.co\/Gl3u4I7o4q', 'NEW: @HouseDemocrats just introduced our third #FamiliesFirst proposal\u2014the Take Responsibility for Workers and Families Act. The bill provides more than $2.5 trillion to boldly address the impacts of the #coronavirus on families, businesses, &amp; communities. https:\/\/t.co\/Gl3u4I7o4q']",
        Month: "March",
        "Dimension 1": -2.7356482,
        "Dimension 2": 28.886383,
        Sentiment: 0.242424242,
        Subjectivity: 0.40530303,
        idx: 848,
      },
      {
        RawTweet:
          "b'In our latest blog, Jessica Delaney hopes for long-term social change. \"In valuing the comfortable or the normal, w\\xe2\\x80\\xa6 https:\/\/t.co\/L3C463A6i5'",
        Month: "May",
        "Dimension 1": 25.376709,
        "Dimension 2": -3.1363995,
        Sentiment: 0.270833333,
        Subjectivity: 0.604166667,
        idx: 849,
      },
      {
        RawTweet:
          "b'Beware of Sub-Standard Nose Masks in the market\\xe2\\x80\\xbc\\xef\\xb8\\x8f\\n\\nShop our Triple Layered nose masks, which are WHO\/MOH compliant\\xe2\\x80\\xa6 https:\/\/t.co\/LRzVFhlGOa'",
        Month: "May",
        "Dimension 1": 11.2977915,
        "Dimension 2": -12.803527,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 850,
      },
      {
        RawTweet:
          "Not surprising: the first day NYC Public Health lab gets testing online, a #COVID19 positive individual with no known links was found. Community spread has unfortunately been brewing for some time now...\r\n\r\nhttps:\/\/t.co\/CO5z198maI",
        Month: "March",
        "Dimension 1": -42.208866,
        "Dimension 2": -7.391395,
        Sentiment: -0.062121212,
        Subjectivity: 0.474242424,
        idx: 851,
      },
      {
        RawTweet:
          "Happening now: Join our first weekly #COVID19 Community Conversation, on how the @BUSPH community is responding to the #coronavirus. https:\/\/t.co\/ZRMQkyj6V7 @ActivistLabSPH @BU_tweets @PubHealthPost @PopHealthEx @bualumni",
        Month: "March",
        "Dimension 1": 10.375154,
        "Dimension 2": 36.425697,
        Sentiment: 0.25,
        Subjectivity: 0.333333333,
        idx: 852,
      },
      {
        RawTweet:
          "b'In this interview with \\xe2\\x81\\xa6@HoopsHD\\xe2\\x81\\xa9 I discuss some of the considerations regarding basketball in the era of #COVID19  https:\/\/t.co\/t7ReqRoesi'",
        Month: "May",
        "Dimension 1": 14.960448,
        "Dimension 2": 1.1517389,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 853,
      },
      {
        RawTweet:
          "['Running low on toilet paper? Just take advantage of the free delivery option for 12 weeks on certain newspapers! You are welcome #coronavirus #COVID19 #toiletpaper #ukcoronavirus https:\/\/t.co\/vjPnWgSAku']",
        Month: "March",
        "Dimension 1": -12.659403,
        "Dimension 2": 22.157314,
        Sentiment: 0.286904762,
        Subjectivity: 0.514285714,
        idx: 854,
      },
      {
        RawTweet:
          "['The @apmff was going to bring @metheridge, @HappyWoman9 and more to @inAsburyParkNJ. Due to #coronavirus the event has been postponed. Here\u2019s what we know so far: https:\/\/t.co\/5wI8lVBa9O @APBoardwalk #COVID19 #CoronavirusPandemic #NewJersey', 'The @apmff was going to bring @metheridge, @HappyWoman9 and more to @inAsburyParkNJ. Due to #coronavirus the event has been postponed. Here\u2019s what we know so far: https:\/\/t.co\/5wI8lVBa9O @APBoardwalk #COVID19 #CoronavirusPandemic #NewJersey']",
        Month: "March",
        "Dimension 1": -32.71647,
        "Dimension 2": 0.74722195,
        Sentiment: 0.158333333,
        Subjectivity: 0.625,
        idx: 855,
      },
      {
        RawTweet:
          "b'We are sad to report that 9\\xef\\xb8\\x8f\\xe2\\x83\\xa33\\xef\\xb8\\x8f\\xe2\\x83\\xa3 heroes have died in the line of duty due to #COVID19\\n\\nElected Officials: It\\xe2\\x80\\x99s time\\xe2\\x80\\xa6 https:\/\/t.co\/upmg7FFcty'",
        Month: "May",
        "Dimension 1": -35.62116,
        "Dimension 2": 13.480117,
        Sentiment: -0.3125,
        Subjectivity: 0.6875,
        idx: 856,
      },
      {
        RawTweet:
          "b'@xamm0x @US_FDA All the links are there and the journal citations. It was my labor of love. Click on pic and expand for details.'",
        Month: "March",
        "Dimension 1": 29.501356,
        "Dimension 2": 4.3486624,
        Sentiment: 0.5,
        Subjectivity: 0.6,
        idx: 857,
      },
      {
        RawTweet:
          "[\"And all the roads we have to walk are winding\\nAnd all the lights that lead us there are blinding\\nThere are many things that I\\nWould like to say to you but I don't know how\\nBecause maybe, you're gonna be the one that saves me\\nAnd after all, you're my wonderwall  #coronavirus https:\/\/t.co\/FCgeszC882\", \"And all the roads we have to walk are winding\\nAnd all the lights that lead us there are blinding\\nThere are many things that I\\nWould like to say to you but I don't know how\\nBecause maybe, you're gonna be the one that saves me\\nAnd after all, you're my wonderwall  #coronavirus https:\/\/t.co\/FCgeszC882\"]",
        Month: "March",
        "Dimension 1": -20.385847,
        "Dimension 2": -7.275801,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 858,
      },
      {
        RawTweet:
          "b'RT @acsifferlin: A great piece from @sandrogalea on Covid-19: \"While empathy tends to be concerned with individuals, compassion focuses on\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 16.444248,
        "Dimension 2": -31.768822,
        Sentiment: 0.8,
        Subjectivity: 0.75,
        idx: 859,
      },
      {
        RawTweet:
          "We need global coordination for the development of a #COVID19 vaccine. @WHO stands ready to convene a scientific advisory mechanism of the highest quality to drive this forward and to work with @gavi to save lives! We welcome G7 &amp; @g20org support.\r\nhttps:\/\/t.co\/jLqxvOwUTa",
        Month: "March",
        "Dimension 1": 29.544544,
        "Dimension 2": -13.687991,
        Sentiment: 0.35,
        Subjectivity: 0.466666667,
        idx: 860,
      },
      {
        RawTweet:
          "b'How AI, Data Science &amp; Technology is used to fight the Pandemic by @BernardMarr v\/ @Forbes #Coronavirus #COVID19\\xe2\\x80\\xa6 https:\/\/t.co\/ISMhupakO8'",
        Month: "April",
        "Dimension 1": 2.3604722,
        "Dimension 2": 7.1045814,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 861,
      },
      {
        RawTweet:
          "['Flag March By Police &amp; Rangers at Various Parts of Lyari Regarding #lockdown  in Sindh. \\n\\nFinally it\u2019s officially #lockdown in Sindh. So Please Stay in your Home to Save your and many people Life from #COVID19 \\n\\n@BBhuttoZardari @murtazawahab1 \\n\\n#LockdownSindh \\n#CoronaFreePakistan https:\/\/t.co\/e20kPSwyf1']",
        Month: "March",
        "Dimension 1": 9.693357,
        "Dimension 2": -7.408276,
        Sentiment: 0.25,
        Subjectivity: 0.5,
        idx: 862,
      },
      {
        RawTweet:
          "There is a print in a colleague\u2019s office at @JHSPH_CHS commemorating the eradication of smallpox. It\u2019s signed Never Again! I want us to say that about pandemics. And mean it. 1\/",
        Month: "May",
        "Dimension 1": -27.860521,
        "Dimension 2": 4.369716,
        Sentiment: -0.3125,
        Subjectivity: 0.6875,
        idx: 863,
      },
      {
        RawTweet:
          '"Commercial tests \u2014 such as those developed by companies like Cepheid, Hologic and Qiagen \u2014 are expected to greatly increase capacity, but representatives for those companies said they were weeks away from approval" https:\/\/t.co\/EJRIJ0m2AU',
        Month: "March",
        "Dimension 1": -11.926348,
        "Dimension 2": 19.38757,
        Sentiment: 0.16,
        Subjectivity: 0.39,
        idx: 864,
      },
      {
        RawTweet:
          "b'Colour by numbers FREE to download!\\nSimply click on the image, tap three dots in the top right corner, click save.\\xe2\\x80\\xa6 https:\/\/t.co\/6CJO8MWcgb'",
        Month: "April",
        "Dimension 1": 40.222923,
        "Dimension 2": 4.0274754,
        Sentiment: 0.395238095,
        Subjectivity: 0.611904762,
        idx: 865,
      },
      {
        RawTweet:
          "Economic harms of #COVID19 may be largely immune to economic action. This is a public health emergency, best treated by public health action. Later today: the 4 most important questions we need answers to and how public health experts might be able to answer those questions. https:\/\/t.co\/1IpDCVW3wn",
        Month: "March",
        "Dimension 1": -8.753023,
        "Dimension 2": -26.183731,
        Sentiment: 0.247252747,
        Subjectivity: 0.281043956,
        idx: 866,
      },
      {
        RawTweet:
          "b'@letthemtalk6 Please use protective equipment. Here is the guideline from Center for Disease Control in the USA.\\n\\nhttps:\/\/t.co\/yDsxz3KNxO'",
        Month: "March",
        "Dimension 1": 20.16713,
        "Dimension 2": 5.6239576,
        Sentiment: -0.1,
        Subjectivity: 0.1,
        idx: 867,
      },
      {
        RawTweet:
          "b'HELP STOP THE SPREAD OF #COVID19 \\n\\nThe @WHO recommends washing your hands at regular intervals for at least 20 seco\\xe2\\x80\\xa6 https:\/\/t.co\/GwU6dKQ5Gu'",
        Month: "April",
        "Dimension 1": -11.07583,
        "Dimension 2": 14.048815,
        Sentiment: -0.15,
        Subjectivity: 0.238461538,
        idx: 868,
      },
      {
        RawTweet:
          "b'RT @ICRAF: \"Resilience of #women to adversity might be perceived as weakness by those who fail to see the bigger picture.\" ~ Dr. Aster Gebr\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -2.5256658,
        "Dimension 2": -29.389277,
        Sentiment: -0.25,
        Subjectivity: 0.4,
        idx: 869,
      },
      {
        RawTweet:
          "Important @NEJM study on nursing home outbreak in Washington State. More than 3\/4 of residents &amp; nearly 1\/3 of staff were infected. Crucial to protect residents and health care workers. https:\/\/t.co\/dNuj7GdTED https:\/\/t.co\/YpcaSFUUQf",
        Month: "March",
        "Dimension 1": -23.432796,
        "Dimension 2": 24.479809,
        Sentiment: 0.25,
        Subjectivity: 0.725,
        idx: 870,
      },
      {
        RawTweet:
          "b'Gov Tony Evers @Tony4WI extended #covid19 stay at home order to May 26\\n\\nPublic libraries + arts &amp; crafts stores may\\xe2\\x80\\xa6 https:\/\/t.co\/PtN0TefNdM'",
        Month: "April",
        "Dimension 1": 11.9691,
        "Dimension 2": -7.1535497,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 871,
      },
      {
        RawTweet:
          "b'If someone in your home is displaying #COVID19 symptoms, \"Make sure the sick person drinks a lot of fluids to stay\\xe2\\x80\\xa6 https:\/\/t.co\/Lrkqpc2vGi'",
        Month: "April",
        "Dimension 1": -10.835937,
        "Dimension 2": 1.2473755,
        Sentiment: -0.107142857,
        Subjectivity: 0.873015873,
        idx: 872,
      },
      {
        RawTweet:
          "b'#Covid19 Stay home and stop the spread. The virus moves when you move. \\n\\nLike and Share (Retweet) to qualify\\nReach\\xe2\\x80\\xa6 https:\/\/t.co\/vIeKTtYq9m'",
        Month: "April",
        "Dimension 1": 9.1776495,
        "Dimension 2": -7.051177,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 873,
      },
      {
        RawTweet:
          "['The last few days have been exhausting for school leadership and everyone pulled together to do #WhateverItTakes. We saw today that the adults in @StarCitySchools care deeply about students! Very thankful to serve alongside our staff. #COVID19 https:\/\/t.co\/BYMKUUdgOs']",
        Month: "March",
        "Dimension 1": 44.49323,
        "Dimension 2": -9.883348,
        Sentiment: -0.08,
        Subjectivity: 0.273333333,
        idx: 874,
      },
      {
        RawTweet:
          "b'A moment of silence to those people who lost their loved ones caused by #COVID19. To my family and friends that los\\xe2\\x80\\xa6 https:\/\/t.co\/gcdGzLdGlK'",
        Month: "April",
        "Dimension 1": -38.011852,
        "Dimension 2": -29.286905,
        Sentiment: 0.7,
        Subjectivity: 0.8,
        idx: 875,
      },
      {
        RawTweet:
          "\u201cDid the U.S. conclude containment wasn't possible, but not tell anyone?\u201d\u2014 containment of a respiratory virus that spreads efficiently and has had a head start since November is not possible  https:\/\/t.co\/oOfEJPh35h",
        Month: "March",
        "Dimension 1": -36.948788,
        "Dimension 2": -14.727702,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 876,
      },
      {
        RawTweet:
          "I am so glad @Craig_A_Spencer posted this spot-on thread that I had been meaning to write the last few days. So I am just going to say ditto. This is how I think of community mask wear issues from an infection control &amp; public health perspective. https:\/\/t.co\/NczU744r7Z",
        Month: "April",
        "Dimension 1": 33.480087,
        "Dimension 2": -0.29794607,
        Sentiment: 0.075,
        Subjectivity: 0.308333333,
        idx: 877,
      },
      {
        RawTweet:
          "This thread by @vivek_murthy (former US #SurgeonGeneral) on the impact of US testing shortage on #COVID19 #SARSCoV2  is the scariest news I've read in a while and deserves to be shared widely. Please RT\r\n\r\nhttps:\/\/t.co\/XzDjb6CpDo",
        Month: "March",
        "Dimension 1": -12.168913,
        "Dimension 2": -7.359327,
        Sentiment: -0.05,
        Subjectivity: 0.2,
        idx: 878,
      },
      {
        RawTweet:
          "['#Robotic arm designed in #China could help save lives on medical frontline #coronavirus  https:\/\/t.co\/5qmCf1jwMP', '#Robotic arm designed in #China could help save lives on medical frontline #coronavirus  https:\/\/t.co\/5qmCf1jwMP']",
        Month: "March",
        "Dimension 1": 1.997697,
        "Dimension 2": 1.0768431,
        Sentiment: -0.05,
        Subjectivity: 0.1,
        idx: 879,
      },
      {
        RawTweet:
          'b"RT @DrTedros: Another heartbreaking video showing the sacrifice #healthworkers are making to keep us safe from the #coronavirus. Let\'s supp\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": -1.800281,
        "Dimension 2": -2.6326687,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 880,
      },
      {
        RawTweet:
          "b'RT @RachelYorlets: Prospective MPHs can now apply through June 1!  \\n\\nIf you have questions about @Brown_Epi, global health, @HealthyBrown i\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 8.432443,
        "Dimension 2": 44.331593,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 881,
      },
      {
        RawTweet:
          '["Times like these show the very best and the very worse in humanity. \\n\\nThis just came through the door from a neighbour I\'ve never met.\\n\\n#spreadthekindnessnotthevirus\\n#thanksPauline\\n#coronavirus\\nGet the hashtag tending yeah? Yeah. https:\/\/t.co\/JVOoLmklED"]',
        Month: "March",
        "Dimension 1": -19.990717,
        "Dimension 2": -0.8448068,
        Sentiment: 0.24,
        Subjectivity: 0.585,
        idx: 882,
      },
      {
        RawTweet:
          "14\/ A case of #COVID19 in a 30w pregnant woman who underwent emergency C-section due to concerns about deterioration &amp; delivered a healthy baby with no evidence of #SARSCoV2 in throat and stool samples and -ve amniotic fluid, placenta and breastmilk. \r\n\r\nhttps:\/\/t.co\/4o5tGMujrn https:\/\/t.co\/IgdeDM1gHA",
        Month: "March",
        "Dimension 1": -45.696934,
        "Dimension 2": 8.895597,
        Sentiment: 0.177083333,
        Subjectivity: 0.36875,
        idx: 883,
      },
      {
        RawTweet:
          ".@WHO &amp; @EIB will also collaborate on:\r\n-facilitating the distribution of #COVID19 diagnostics, personal protective equipment &amp; other medical supplies to countries that need them most\r\n-studying how innovative financing could help increase access to lifesaving products &amp; services.",
        Month: "May",
        "Dimension 1": 27.797981,
        "Dimension 2": -9.673533,
        Sentiment: 0.175,
        Subjectivity: 0.435,
        idx: 884,
      },
      {
        RawTweet:
          "b'I actually think trump is freaking out being trapped not golfing \\nIts stunning he is such a shit human being when p\\xe2\\x80\\xa6 https:\/\/t.co\/GRr8LOezR9'",
        Month: "April",
        "Dimension 1": -26.521416,
        "Dimension 2": -11.157428,
        Sentiment: 0.016666667,
        Subjectivity: 0.416666667,
        idx: 885,
      },
      {
        RawTweet:
          "I was teaching a class virtually to a group of @Harvard_Law students. \r\n\r\nCome out, check twitter and discover this. \r\n\r\nTo be clear -- I don't believe we should test all 300 million Americans. \r\n\r\nBut many more than we are doing now. Yes. https:\/\/t.co\/RCcMIGnzpQ",
        Month: "March",
        "Dimension 1": 3.0486865,
        "Dimension 2": 34.72668,
        Sentiment: 0.366666667,
        Subjectivity: 0.461111111,
        idx: 886,
      },
      {
        RawTweet:
          'b"RT @EvanFeigenbaum: Colorado\'s first drive-up COVID-19 testing facility opens in Denver, is free of charge https:\/\/t.co\/DvLBDdVJkC"',
        Month: "March",
        "Dimension 1": 41.011932,
        "Dimension 2": 0.6994737,
        Sentiment: 0.325,
        Subjectivity: 0.566666667,
        idx: 887,
      },
      {
        RawTweet:
          "['WATCH Anne Marie, a respiratory nurse consultant, said: \"Thousands of people could die here. Help us reduce that number. Play your part. Save a life. Stay at home.\"   #covid19 #coronavirus https:\/\/t.co\/Pyf7lP5FM1']",
        Month: "March",
        "Dimension 1": -24.174644,
        "Dimension 2": 23.549328,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 888,
      },
      {
        RawTweet:
          'b"RT @FaceTheNation: ICYMI: @ScottGottliebMD told @facethenation \\xe2\\x80\\x9cwe need to plan for what we\'re going to do in the Fall to prevent another e\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": 11.532583,
        "Dimension 2": -16.85641,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 889,
      },
      {
        RawTweet:
          "['Taiwan implements electronic security system to track individuals under #COVID19 quarantine\\nhttps:\/\/t.co\/ORceU8ngPA https:\/\/t.co\/92ODtlbGXt']",
        Month: "March",
        "Dimension 1": -1.5827901,
        "Dimension 2": 10.337052,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 890,
      },
      {
        RawTweet:
          "b'RT @AbraarKaran: 1\/ NEW @JAMA_current research letter out today. \\n\\n-Important findings w\/ regard to extensive level of room contamination w\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 11.767673,
        "Dimension 2": -11.252871,
        Sentiment: 0.068181818,
        Subjectivity: 0.393939394,
        idx: 891,
      },
      {
        RawTweet:
          "Why Is Washing Your Hands So Important Anyway?\r\n\r\nThe brilliant @KatherineJWu discusses the science behind how washing hand with soap and using hand sanitizer kill #COVID19. Including expert quotes from @kelliejurado @VirusWhisperer and others\ud83d\udc47\ud83c\udffd\r\n \r\nhttps:\/\/t.co\/8JN1KHG4jZ",
        Month: "March",
        "Dimension 1": 2.6715853,
        "Dimension 2": -14.402862,
        Sentiment: 0.3,
        Subjectivity: 0.9,
        idx: 892,
      },
      {
        RawTweet:
          "If you care to learn how my first day in this COVID-19 vaccine trial went, I've just published some thoughts:\r\n\r\nhttps:\/\/t.co\/s1tizNs1pQ\r\n\r\nMy deepest thanks go to the researchers &amp; clinical staff who made this Phase 1 trial possible.",
        Month: "April",
        "Dimension 1": 32.352837,
        "Dimension 2": -0.460217,
        Sentiment: 0.15,
        Subjectivity: 0.511111111,
        idx: 893,
      },
      {
        RawTweet:
          'b"RT @GrantWahl: Cuomo\'s briefings are a case study in competent crisis management. Honest, empathetic and representing all his constituents,\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": 42.532955,
        "Dimension 2": -14.25044,
        Sentiment: 0.55,
        Subjectivity: 0.783333333,
        idx: 894,
      },
      {
        RawTweet:
          "@vaisampayan Total isolation not needed across population. But keeping distance and awareness is key. Not going to big group events is more important than not seein best friend, for example.",
        Month: "March",
        "Dimension 1": -10.15851,
        "Dimension 2": -37.71891,
        Sentiment: 0.316666667,
        Subjectivity: 0.608333333,
        idx: 895,
      },
      {
        RawTweet:
          "We are in this position b\/c we chose a certain path a few weeks back. S. Korea has not locked down entire cities or taken extreme measures. 3,736 cases &amp; 21 death b\/c of mass testing, tracing &amp; mandatory quarantine for carriers of virus for 2 weeks. https:\/\/t.co\/54Ejz0TQaW",
        Month: "March",
        "Dimension 1": -13.773455,
        "Dimension 2": 29.719543,
        Sentiment: -0.044378307,
        Subjectivity: 0.430886243,
        idx: 896,
      },
      {
        RawTweet:
          "b'Every worker on the frontlines deserves enforceable, science-based protections from #COVID19. Tell your members of\\xe2\\x80\\xa6 https:\/\/t.co\/9FnNuo8MGg'",
        Month: "May",
        "Dimension 1": 33.675285,
        "Dimension 2": 3.2784302,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 897,
      },
      {
        RawTweet:
          "b'RT @MackayIM: Paper highlighting importance of sample type. #COVID19 #SARSCoV2\\n\"Here we reported a case of COVID-19 pneumonia 30 diagnosed\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 13.554045,
        "Dimension 2": 4.7718244,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 898,
      },
      {
        RawTweet:
          "b'Little over a month ago, I sat in self quarantine with a sore throat, a mild cold, and major paranoia. That was  ea\\xe2\\x80\\xa6 https:\/\/t.co\/4oa1GFip7R'",
        Month: "April",
        "Dimension 1": -39.10414,
        "Dimension 2": 13.9647,
        Sentiment: -0.097916667,
        Subjectivity: 0.625,
        idx: 899,
      },
      {
        RawTweet:
          "['#CoronavirusPandemic | Ministry of Health and Family Welfare: Total number of positive coronavirus cases in India is 83 \\n\\nFor more updates, follow: https:\/\/t.co\/uzIA0etunq \\n\\n#CoronaOutbreak #Coronavirus https:\/\/t.co\/xpk4WpYBoi']",
        Month: "March",
        "Dimension 1": 4.0977654,
        "Dimension 2": 13.283743,
        Sentiment: 0.242424242,
        Subjectivity: 0.598484848,
        idx: 900,
      },
      {
        RawTweet:
          "['#COVID19  #polloftheday \\n\\nPls #VOTE &amp; #Retweet\\n\\nWill ub able 2 pay #rent #mortgage on #April1\\n\\nPls feel free 2 share #City #State #Country or personal situation below #GodBless \ud83c\udf3b\ud83d\udc9b\ud83c\udf3c']",
        Month: "March",
        "Dimension 1": 41.28382,
        "Dimension 2": 2.4037147,
        Sentiment: 0.3,
        Subjectivity: 0.575,
        idx: 901,
      },
      {
        RawTweet:
          "b'Experts say lifting lockdown measures without knowing where new cases are coming from, as Ontario &amp;Quebec are doing\\xe2\\x80\\xa6 https:\/\/t.co\/aRaDCdk4PL'",
        Month: "May",
        "Dimension 1": -10.779613,
        "Dimension 2": -17.150288,
        Sentiment: 0.136363636,
        Subjectivity: 0.454545455,
        idx: 902,
      },
      {
        RawTweet:
          "b'\\xf0\\x9f\\x93\\x9d | \\xe2\\x80\\x9cHe is stable and remains in good spirits...\\xe2\\x80\\x9d\\n\\n@h0lgrace looks at what we can still do to help the Prime Minist\\xe2\\x80\\xa6 https:\/\/t.co\/TXOd9vViHP'",
        Month: "April",
        "Dimension 1": 40.211338,
        "Dimension 2": -18.52467,
        Sentiment: 0.7,
        Subjectivity: 0.6,
        idx: 903,
      },
      {
        RawTweet:
          "I went to the grocery store this afternoon. As I was walking in I heard a woman yell to me from her car. I walked over and found an elderly woman and her husband. She cracked her window open a bit more, and explained to me nearly in tears that they are afraid to go in the store.",
        Month: "March",
        "Dimension 1": -31.027756,
        "Dimension 2": 10.031518,
        Sentiment: 0.0,
        Subjectivity: 0.575,
        idx: 904,
      },
      {
        RawTweet:
          "b'RT @IHME_UW: We strongly believe decision-makers should draw on a variety of #COVID19 models.'",
        Month: "April",
        "Dimension 1": 16.431202,
        "Dimension 2": -16.35568,
        Sentiment: 0.433333333,
        Subjectivity: 0.733333333,
        idx: 905,
      },
      {
        RawTweet:
          "['What if the last option is to stay at home. What have you got in savings? is your iPhone11 edible??\\n#stayathomeNigerians #IWillStayAtHome #StayHome #21daysLockdown #COVID19 #COVIDIDIOTS #UltimateLoveNG #Covid19Out #dangote']",
        Month: "March",
        "Dimension 1": 12.7177515,
        "Dimension 2": -6.4795575,
        Sentiment: 0.0,
        Subjectivity: 0.066666667,
        idx: 906,
      },
      {
        RawTweet:
          "['From now on if you wanna talk to me about the #coronavirus in a paniced sense, you have to pay me $5 first. I listen to doctors and the surgeon general, not the media. Society has chosen mass panic again.']",
        Month: "March",
        "Dimension 1": -20.83966,
        "Dimension 2": 29.88741,
        Sentiment: 0.15,
        Subjectivity: 0.416666667,
        idx: 907,
      },
      {
        RawTweet:
          "@Kejriwal_rocks @Kejriwal_rocks : Vaccine trials may take as long as 12 months. There are multiple clinical trials looking at different treatment options, but we currently don't know whether this combination is effective and safe for patients. #AskReuters",
        Month: "March",
        "Dimension 1": -14.271296,
        "Dimension 2": 25.580978,
        Sentiment: 0.175,
        Subjectivity: 0.45,
        idx: 908,
      },
      {
        RawTweet:
          "b'@J_Allure Racism in general which in turn means less access to adequate healthcare and just plain CARE.'",
        Month: "April",
        "Dimension 1": -28.041763,
        "Dimension 2": -17.234888,
        Sentiment: 0.000595238,
        Subjectivity: 0.314285714,
        idx: 909,
      },
      {
        RawTweet:
          "@DiseaseEcology Wearing my other hat (testing) - no place on Earth had testing in place upon virus entry. So early curves in every country are severely obscured by simultaneous (exponential) growth of test capacity. Data driving many models are likely off qualitatively and quantitatively.",
        Month: "April",
        "Dimension 1": -44.569244,
        "Dimension 2": -7.79308,
        Sentiment: 0.11875,
        Subjectivity: 0.54375,
        idx: 910,
      },
      {
        RawTweet:
          "The best way of ending restrictions and easing their economic effects is to attack the #coronavirus with an aggressive &amp; comprehensive package of measures. Countries must find, test, isolate and treat every #COVID19 case &amp; trace every contact.\r\nhttps:\/\/t.co\/uemVvQqN03",
        Month: "April",
        "Dimension 1": -3.0912988,
        "Dimension 2": -8.427607,
        Sentiment: 0.6,
        Subjectivity: 0.25,
        idx: 911,
      },
      {
        RawTweet:
          "[\".@piercepenniless and @novaramedia produced the best daily podcast of the election campaign - now 'The Burner' is back with a daily review of #covid19 developments and the politics surrounding them. Apple podcast link here, or find it via Novara's website https:\/\/t.co\/00dkzhfjPB\", \".@piercepenniless and @novaramedia produced the best daily podcast of the election campaign - now 'The Burner' is back with a daily review of #covid19 developments and the politics surrounding them. Apple podcast link here, or find it via Novara's website https:\/\/t.co\/00dkzhfjPB\"]",
        Month: "March",
        "Dimension 1": 11.559351,
        "Dimension 2": 33.22627,
        Sentiment: 0.25,
        Subjectivity: 0.075,
        idx: 912,
      },
      {
        RawTweet:
          "['https:\/\/t.co\/PFLdlgFLEb\\n\\nEveryone should watch this video from an ER in Italy. This will be us soon. Be prepared, they are warning us. This is the worst I\u2019ve watched. \\n#COVID19 #corona #PPEshortage #wheresmyPPE #GetMePPE', 'https:\/\/t.co\/PFLdlgFLEb\\n\\nEveryone should watch this video from an ER in Italy. This will be us soon. Be prepared, they are warning us. This is the worst I\u2019ve watched. \\n#COVID19 #corona #PPEshortage #wheresmyPPE #GetMePPE']",
        Month: "March",
        "Dimension 1": 12.788168,
        "Dimension 2": -39.63553,
        Sentiment: -1.0,
        Subjectivity: 1.0,
        idx: 913,
      },
      {
        RawTweet:
          "Dear @neil_ferguson, please take good care of yourself - we are all thinking of you @WHO. My thanks and appreciation to you and your colleagues for the important contributions you've been making in the fight #COVID19! #coronavirus https:\/\/t.co\/K7CiLuphny",
        Month: "March",
        "Dimension 1": 37.69676,
        "Dimension 2": -17.770086,
        Sentiment: 0.466666667,
        Subjectivity: 0.6,
        idx: 914,
      },
      {
        RawTweet:
          ".@WHO remains committed to working with the NAM to tackle #COVID19 &amp; reinforce the critical principles of multilateralism, national unity &amp; global solidarity.\r\nTogether, we can create an equitable, peaceful &amp; prosperous world &amp; achieve the ever more urgent goal of #HealthForAll. https:\/\/t.co\/1K1B2ZntE4",
        Month: "May",
        "Dimension 1": 30.22859,
        "Dimension 2": -13.531186,
        Sentiment: 0.1875,
        Subjectivity: 0.45,
        idx: 915,
      },
      {
        RawTweet:
          "12\/x Yes, people will be scared. But we need people to fear and leverage that fear for good. Yes, people are emotional. That's what it is to be human. But to withhold or misrepresent the science because you don't want to cause panic? That's just wrong.",
        Month: "March",
        "Dimension 1": -26.90242,
        "Dimension 2": -21.416933,
        Sentiment: 0.05,
        Subjectivity: 0.5625,
        idx: 916,
      },
      {
        RawTweet:
          "What is it like for people of Hong Kong right now? My incredible friend \r\n@ReunionIslaGirl clinician w @MSF working there now writes wise words applicable to all of us in US at precipice of more cases. \r\n\r\nWe are in this together.\r\n\r\n #covid19 #Covid19usa \r\n\r\nhttps:\/\/t.co\/K2hUX5uELU https:\/\/t.co\/ODLPka3G1w",
        Month: "March",
        "Dimension 1": 45.76001,
        "Dimension 2": -13.028504,
        Sentiment: 0.596428571,
        Subjectivity: 0.708928571,
        idx: 917,
      },
      {
        RawTweet:
          "b'RT @WHO: \"Everyday we learn more &amp; more about #COVID19 &amp; new apps &amp; courses for #healthworkers and the general public allow us to dissemina\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 27.41493,
        "Dimension 2": 16.73802,
        Sentiment: 0.164393939,
        Subjectivity: 0.436868687,
        idx: 918,
      },
      {
        RawTweet:
          "b'RT @VIhekweazu: We remain eternally grateful to the great team @NCDCgov working tirelessly, round the clock, responding to the #COVID19 out\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 40.597454,
        "Dimension 2": -15.162913,
        Sentiment: 0.3,
        Subjectivity: 0.575,
        idx: 919,
      },
      {
        RawTweet:
          "b'Trying hard to create a #vaccine before the #virus dies out         So why do we need a #vaccine #COVID19'",
        Month: "May",
        "Dimension 1": 0.80527127,
        "Dimension 2": -4.4090266,
        Sentiment: -0.291666667,
        Subjectivity: 0.541666667,
        idx: 920,
      },
      {
        RawTweet:
          "['A doctor is 3D printing face masks to help meet the desperate need for protective gear - CNN\\n#PPEshortage #PPENow #COVID19 https:\/\/t.co\/MEfZKLdQiK']",
        Month: "March",
        "Dimension 1": 18.908073,
        "Dimension 2": 3.7231383,
        Sentiment: -0.6,
        Subjectivity: 1.0,
        idx: 921,
      },
      {
        RawTweet:
          "Today's #shoutout to #womenInSTEM goes to Jiaye Liu for her EID paper on Community Transmission of Severe Acute Respiratory Syndrome #Coronavirus 2 in Shenzhen, China. #COVID19 #SARSCoV2 https:\/\/t.co\/wRp9LOGbfI",
        Month: "March",
        "Dimension 1": 15.185969,
        "Dimension 2": 11.547717,
        Sentiment: 0.6,
        Subjectivity: 0.9,
        idx: 922,
      },
      {
        RawTweet:
          "b'RT @Travelito24: Some of Italian nurses &amp; doctors after long hours of work in intensive care. \\xe2\\x9d\\xa4\\xef\\xb8\\x8f\\xf0\\x9f\\x87\\xae\\xf0\\x9f\\x87\\xb9 https:\/\/t.co\/YAG9oVcgrq'",
        Month: "March",
        "Dimension 1": 8.029231,
        "Dimension 2": 22.101519,
        Sentiment: -0.025,
        Subjectivity: 0.2,
        idx: 923,
      },
      {
        RawTweet:
          '["Social distancing in full effect at the @nbc15_madison TV studio. You won\'t see us in the same camera shot, and if you do, we will be at least 6 feet apart. We are doing our part to #StopTheSpread #coronavirus @Isabel_NBC15 @Charlie_NBC15 https:\/\/t.co\/02NK3SpHAC"]',
        Month: "March",
        "Dimension 1": -26.466223,
        "Dimension 2": 1.1687915,
        Sentiment: 0.020833333,
        Subjectivity: 0.285416667,
        idx: 924,
      },
      {
        RawTweet:
          "@MsLisa_J Lol \ud83d\ude02 everyone says that, but I feel like he brings out her hidden authentic self maybe? Thanksgiving touched me tho, the chittlings was not genuine lol.",
        Month: "April",
        "Dimension 1": -28.916605,
        "Dimension 2": -10.536036,
        Sentiment: 0.346666667,
        Subjectivity: 0.596666667,
        idx: 925,
      },
      {
        RawTweet:
          "['Managing #coronavirus emergency needs also management of its devastating economic and social impact. The Government - people, families, businesses have the right to expect your resolute and rapid action.']",
        Month: "March",
        "Dimension 1": -2.152017,
        "Dimension 2": -6.967423,
        Sentiment: -0.076190476,
        Subjectivity: 0.38047619,
        idx: 926,
      },
      {
        RawTweet:
          "Though #COVID19 is new, we can and should learn from past outbreaks. Gathering and analyzing data about spread is absolutely critical to developing an effective response. https:\/\/t.co\/S28VcgPVZy",
        Month: "March",
        "Dimension 1": 19.372118,
        "Dimension 2": -12.322652,
        Sentiment: 0.121590909,
        Subjectivity: 0.576136364,
        idx: 927,
      },
      {
        RawTweet:
          "b'@LibyaLiberty Already are. Tried to order one for my uncle a month ago and delivery date is June 3.'",
        Month: "April",
        "Dimension 1": 1.9366856,
        "Dimension 2": 44.199104,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 928,
      },
      {
        RawTweet:
          "@DoctorPfeff @SimonTiberi There is some data demonstrating potential benefit with various antivirals however we have no clinical data yet. In fact, some adverse events reported in small cohorts (in the thread above). Supportive treatment remains the mainstay of treatment at present.",
        Month: "March",
        "Dimension 1": -18.372883,
        "Dimension 2": -34.947853,
        Sentiment: 0.041666667,
        Subjectivity: 0.5,
        idx: 929,
      },
      {
        RawTweet:
          "b'RT @CT_Bergstrom: 1. I hate to invest precious time on taking apart the atrocious @aginnt article pictured below, but it is getting too muc\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -24.102402,
        "Dimension 2": -24.83052,
        Sentiment: -0.333333333,
        Subjectivity: 0.966666667,
        idx: 930,
      },
      {
        RawTweet:
          "b'As an organization in official relations with WHO, IUHPE values greatly the work done by this organization worldwid\\xe2\\x80\\xa6 https:\/\/t.co\/9XuUOogd6e'",
        Month: "April",
        "Dimension 1": 41.023026,
        "Dimension 2": -14.415755,
        Sentiment: 0.8,
        Subjectivity: 0.75,
        idx: 931,
      },
      {
        RawTweet:
          "b'RT @WHO: On 30 January 2020, WHO triggered its highest global emergency alert \\xf0\\x9f\\x9a\\xa8 by declaring #COVID19 a Public Health Emergency of Internat\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 4.9340763,
        "Dimension 2": 27.142029,
        Sentiment: 0.0,
        Subjectivity: 0.033333333,
        idx: 932,
      },
      {
        RawTweet:
          "b'RT @TaranaBurke: A few months ago my dude was looking for a tote bag to carry some things to the post office. I gave the biggest bag I had\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 19.78387,
        "Dimension 2": 39.103832,
        Sentiment: -0.2,
        Subjectivity: 0.1,
        idx: 933,
      },
      {
        RawTweet:
          "['Cruises to the Bahamas are like $70 for 7 days... if I\u2019m going out, it\u2019s gonna be with a day drink in my hand and the sun on my face in paradise. Now I just need the $70. \ud83d\ude02\ud83e\udd26\\u200d\u2642\ufe0f I\u2019m your huckleberry guinea pig. #COVID19 #coronavirus']",
        Month: "March",
        "Dimension 1": -11.01453,
        "Dimension 2": 30.315071,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 934,
      },
      {
        RawTweet:
          "b'The World May Have To Live With Coronavirus For Years To Come: Top Scientist Warns Vaccine May Never Be Created And\\xe2\\x80\\xa6 https:\/\/t.co\/nhLrJt4YFa'",
        Month: "May",
        "Dimension 1": -31.844255,
        "Dimension 2": 2.3471668,
        Sentiment: 0.318181818,
        Subjectivity: 0.5,
        idx: 935,
      },
      {
        RawTweet:
          'b"Coronavirus pandemic: When will we go back to normal? Hopefully never, says @IFTF\'s Marina Gorbis\\xe2\\x80\\xa6 https:\/\/t.co\/QkvvaRm3au"',
        Month: "April",
        "Dimension 1": -31.577219,
        "Dimension 2": 1.2321965,
        Sentiment: 0.075,
        Subjectivity: 0.325,
        idx: 936,
      },
      {
        RawTweet:
          "b'RT @Atul_Gawande: What it takes: \\xe2\\x80\\x9cFrom Buffalo to NYC, hospitals will be sharing staff, patients and supplies for the foreseeable future, w\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 38.006287,
        "Dimension 2": 14.609303,
        Sentiment: 0.0,
        Subjectivity: 0.125,
        idx: 937,
      },
      {
        RawTweet:
          "['Billy Joel Condensed Concert!\\nName all seven @billyjoel hits or better yet: record yourself singing along! #CoronaLockdown #COVID19 #billyjoel @TheGarden https:\/\/t.co\/RQdEDsw2ff']",
        Month: "March",
        "Dimension 1": 22.794155,
        "Dimension 2": 29.289635,
        Sentiment: 0.625,
        Subjectivity: 0.5,
        idx: 938,
      },
      {
        RawTweet:
          "We should work our hardest to create the conditions to make the scenarios being described here (one bad wave, contained by social distancing, and we're down to a point of controllable spread) a reality. Doing so will make us better prepared, even if they don't come to pass.",
        Month: "March",
        "Dimension 1": -5.2516356,
        "Dimension 2": -28.791876,
        Sentiment: -0.080555556,
        Subjectivity: 0.380555556,
        idx: 939,
      },
      {
        RawTweet:
          "['4 resources to help you weather this storm #coronavirus #covid19 #mondaymotivation @kiwielements \\n\\nhttps:\/\/t.co\/CnnILSPes9', '4 resources to help you weather this storm #coronavirus #covid19 #mondaymotivation @kiwielements \\n\\nhttps:\/\/t.co\/CnnILSPes9', '4 resources to help you weather this storm #coronavirus #covid19 #mondaymotivation @kiwielements \\n\\nhttps:\/\/t.co\/CnnILSPes9']",
        Month: "March",
        "Dimension 1": -0.38323483,
        "Dimension 2": 8.422554,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 940,
      },
      {
        RawTweet:
          '["I\'ve just signed a petition asking @BorisJohnson and @RishiSunak to give everyone a universal basic income in light of #coronavirus #COVID-19 #Budget2020 https:\/\/t.co\/l1U21Ox0Jm via @38_degrees", "I\'ve just signed a petition asking @BorisJohnson and @RishiSunak to give everyone a universal basic income in light of #coronavirus #COVID-19 #Budget2020 https:\/\/t.co\/l1U21Ox0Jm via @38_degrees"]',
        Month: "March",
        "Dimension 1": 30.320423,
        "Dimension 2": 5.370501,
        Sentiment: 0.133333333,
        Subjectivity: 0.275,
        idx: 941,
      },
      {
        RawTweet:
          "b'RT @FaceTheNation: ICYMI: @WhiteHouse officials and public health experts appear optimistic the U.S. will be able to develop a #COVID vacci\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 25.863276,
        "Dimension 2": -0.54461175,
        Sentiment: 0.25,
        Subjectivity: 0.345833333,
        idx: 942,
      },
      {
        RawTweet:
          "b'Trying to make #COVID19 a Republican vs Democrat thing is stupid &amp; wrong. Something like 65% of the population live\\xe2\\x80\\xa6 https:\/\/t.co\/YYTzoxFzx9'",
        Month: "April",
        "Dimension 1": -38.802956,
        "Dimension 2": 11.03635,
        Sentiment: -0.65,
        Subjectivity: 0.95,
        idx: 943,
      },
      {
        RawTweet:
          "['@realDonaldTrump #BREAKING #BreakingNews \\nExclusive: Captain of aircraft carrier with growing #coronavirus outbreak pleads for help from @USNavy https:\/\/t.co\/aLo7nLwDFh']",
        Month: "March",
        "Dimension 1": -23.00874,
        "Dimension 2": 4.4970145,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 944,
      },
      {
        RawTweet:
          "b'5\/ Terrific piece @theatlantic by @EdYong209 on debate re: masks\\xe2\\x80\\x93hot topic https:\/\/t.co\/iFfDREUmMb Feds poised to r\\xe2\\x80\\xa6 https:\/\/t.co\/qCJTKkdjFt'",
        Month: "April",
        "Dimension 1": 10.427451,
        "Dimension 2": -14.362638,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 945,
      },
      {
        RawTweet:
          "This would eliminate the need for individual compassionate use requests and approvals, which is burdensome in the setting of a major public health crisis. It would help our overburdened doctors access potential treatments. 4\/n",
        Month: "March",
        "Dimension 1": -8.6408825,
        "Dimension 2": -26.600904,
        Sentiment: 0.015625,
        Subjectivity: 0.491666667,
        idx: 946,
      },
      {
        RawTweet:
          "['\"Under the Australian Consumer Law, retailers don\u2019t have to give you a refund or exchange if you simply change your mind,\" an ACCC spokesperson said.\\n#Woolworths\\n#panicbuying\\n#COVID19\\nhttps:\/\/t.co\/LFWdVcqKRe']",
        Month: "March",
        "Dimension 1": -36.947224,
        "Dimension 2": -23.530832,
        Sentiment: 0.0,
        Subjectivity: 0.178571429,
        idx: 947,
      },
      {
        RawTweet:
          "b'RT @aehmd01: We need to be careful in being judgmental. N95 masks have  uses in construction, metalwork, and w other particulates. Someone\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 10.264624,
        "Dimension 2": -19.00902,
        Sentiment: -0.1125,
        Subjectivity: 0.6875,
        idx: 948,
      },
      {
        RawTweet:
          "@DrMattMcCarthy This is precisely why we need leadership at the federal level when governors won't do their job to protect #publichealth from #COVID19.  #ShelterInPlace",
        Month: "April",
        "Dimension 1": -3.9005103,
        "Dimension 2": -25.592274,
        Sentiment: 0.4,
        Subjectivity: 0.8,
        idx: 949,
      },
      {
        RawTweet:
          "['Daniel Richards, Senior Economist of Emirates NBD  on #DubaiEyeOnOne gives details on Gulf economies amid #COVID19 pandemic. #DubaiOneTv @DubaiEye1038  @richardradiodxb https:\/\/t.co\/0fkF1WmWVw']",
        Month: "March",
        "Dimension 1": 19.62215,
        "Dimension 2": 20.968107,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 950,
      },
      {
        RawTweet:
          "b'RT @WSJ: From @WSJopinion: Employers can stagger breaks, deep-clean surfaces, limit meetings and offer on-site testing, write @ScottGottlie\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 15.939149,
        "Dimension 2": -0.8716433,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 951,
      },
      {
        RawTweet:
          "@kat__stafford Thank you for all you\u2019re doing to spread the word about race and this pandemic. \r\n\r\nAlso need more black health professionals, scientists, researchers, and public health \/ health system leaders...",
        Month: "April",
        "Dimension 1": 32.101482,
        "Dimension 2": -15.429691,
        Sentiment: 0.111111111,
        Subjectivity: 0.333333333,
        idx: 952,
      },
      {
        RawTweet:
          "['Summing it all up was Sen. John Neely Kennedy (R-La.): \u201cThis country was founded by geniuses but it\u2019s being run by a bunch of idiots.\u201d\\n\\n\u201cThe brain is an amazing organ. It starts working in a mother\u2019s womb and it doesn\u2019t stop working til you get elected to Congress.\u201d #COVID19']",
        Month: "March",
        "Dimension 1": -4.938088,
        "Dimension 2": 18.781055,
        Sentiment: -0.1,
        Subjectivity: 0.85,
        idx: 953,
      },
      {
        RawTweet:
          "['We stand by Italy during these trying times. Share your Support for our Italian friends, They are our colleagues, friends and family. Cari amici, siamo con voi. #COVID19 #WeStandWithItaly']",
        Month: "March",
        "Dimension 1": 43.06605,
        "Dimension 2": -28.194803,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 954,
      },
      {
        RawTweet:
          "[\"#coronavirus\\n\\nFolks, keep in mind, while you're social distancing, don't just stay home and eat junk food.\\n\\nThat would count as a mass gathering.\\n\\nGet it? mass gathering!\"]",
        Month: "March",
        "Dimension 1": -5.7459526,
        "Dimension 2": 11.696377,
        Sentiment: 0.041666667,
        Subjectivity: 0.066666667,
        idx: 955,
      },
      {
        RawTweet:
          "Wearing a mask should be easy, understood, and expected. It's one thing all of us can do to keep people around us healthy and reduce spread of #COVID19. https:\/\/t.co\/jX1nihEW3x",
        Month: "May",
        "Dimension 1": 21.157894,
        "Dimension 2": -34.939598,
        Sentiment: 0.277777778,
        Subjectivity: 0.577777778,
        idx: 956,
      },
      {
        RawTweet:
          "If we're going to get back to a semblance of normality, we will need an army of public health workers\r\n\r\nWe should tap into the millions of folks who are jobless and train them\r\n\r\nIt will require true public-private partnership\r\n\r\nGreat @NYT piece by @drJoshS \r\n\r\nhttps:\/\/t.co\/n62HH8WGS2",
        Month: "March",
        "Dimension 1": -11.01558,
        "Dimension 2": 16.484486,
        Sentiment: 0.2875,
        Subjectivity: 0.366666667,
        idx: 957,
      },
      {
        RawTweet:
          "Our team @ResolveTSL has been tracking some of the nearly 300 scientific articles about #COVID19 with informal, unofficial, subjective - but we hope useful - summaries. We're now posting those on our site and will update them daily. Visit us at: https:\/\/t.co\/yqG85A0mFS",
        Month: "March",
        "Dimension 1": 2.5371847,
        "Dimension 2": 34.722893,
        Sentiment: 0.133333333,
        Subjectivity: 0.133333333,
        idx: 958,
      },
      {
        RawTweet:
          "b'RT @rkwadhera: Hospitals face \\xe2\\xac\\x86\\xef\\xb8\\x8fshortage of personal protective gear for healthcare workers\\n\\n@CDCgov now recommends using #bandanas &amp; #scar\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 19.312605,
        "Dimension 2": 5.2258987,
        Sentiment: 0.0,
        Subjectivity: 0.3,
        idx: 959,
      },
      {
        RawTweet:
          "15\/ Finally, on my panel @goforward, privileged to be with Dr. Sara Cody, @HealthySCC health director, whose courage led Santa Clara to be first county to shut down. Also w\/ Dr. Jim Kim, co-founder of Partners-in-Health @PIH, past-President @Dartmouth, and past-CEO @WorldBank. https:\/\/t.co\/jzT07vm1Mh",
        Month: "May",
        "Dimension 1": -11.043615,
        "Dimension 2": 11.833584,
        Sentiment: 0.031481481,
        Subjectivity: 0.540740741,
        idx: 960,
      },
      {
        RawTweet:
          "b'@mosabstrakt @Call_Me_Lum Good morning, Don. Stay blessed and vet my resume all inclusive. K, beloved? https:\/\/t.co\/1KLNQUNVM0'",
        Month: "April",
        "Dimension 1": 44.007927,
        "Dimension 2": -20.910658,
        Sentiment: 0.7,
        Subjectivity: 0.8,
        idx: 961,
      },
      {
        RawTweet:
          "['New guidelines for managing COVID-19 patients will be of particular interest to ID and critical care docs and PharmDs. https:\/\/t.co\/vYUXFuzRtt @SCCM @AlhazzaniW @McMasterU @pittpharmacy #COVID19 #coronavirus #SARSCoV2 #guidelines #criticalcare #idtwitter #pharmacist']",
        Month: "March",
        "Dimension 1": 22.965506,
        "Dimension 2": 5.9749756,
        Sentiment: 0.101010101,
        Subjectivity: 0.529292929,
        idx: 962,
      },
      {
        RawTweet:
          "The allegation that doctors\/providers are \u201cmurdering\u201d Black &amp; Hispanic patients, I can\u2019t believe I have to say this in public but people are starting to believe it. It\u2019s the most absurd &amp; absolutely ridiculous accusation.Let\u2019s focus on the real issue, century old systemic racism.",
        Month: "May",
        "Dimension 1": -17.104094,
        "Dimension 2": -14.106613,
        Sentiment: -0.025,
        Subjectivity: 0.45,
        idx: 963,
      },
      {
        RawTweet:
          "b'Amid #COVID19, the need for learning materials that are accessible at home is more urgent than ever. \\n\\nIn response,\\xe2\\x80\\xa6 https:\/\/t.co\/DlSNmokn8G'",
        Month: "April",
        "Dimension 1": 13.190536,
        "Dimension 2": -18.027817,
        Sentiment: 0.4375,
        Subjectivity: 0.4375,
        idx: 964,
      },
      {
        RawTweet:
          "b'RT @JLo: TONIGHT! Don\\xe2\\x80\\x99t miss my performance on @GlblCtzn\\xe2\\x80\\x99s One World: #TogetherAtHome! \\xe2\\x9c\\xa8\\xf0\\x9f\\x92\\x95\\xe2\\x9c\\xa8 Tune-in at 8 p.m. ET to support local relief eff\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -36.991573,
        "Dimension 2": 5.565894,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 965,
      },
      {
        RawTweet:
          "['@RepAnnWagner @SenHawleyPress @RoyBlunt Protect health care providers during the #COVID19 crisis. We need more #PPE, financial safeguards for professionals and GI practices and less regulatory reporting burdens. #specialtydocs #saveworkers', '@RepAnnWagner @SenHawleyPress @RoyBlunt Protect health care providers during the #COVID19 crisis. We need more #PPE, financial safeguards for professionals and GI practices and less regulatory reporting burdens. #specialtydocs #saveworkers']",
        Month: "March",
        "Dimension 1": 19.396408,
        "Dimension 2": -17.787086,
        Sentiment: 0.111111111,
        Subjectivity: 0.188888889,
        idx: 966,
      },
      {
        RawTweet:
          "\u201cI, too, am distressed by the ever-changing guidelines, the seemingly inconsistent messages, the uncertainty.\u201d Thank you @DrHelenOuyang for the beautiful article on the importance of social media during COVID. @DrSenait @DrTomFrieden @DrTedros @jameschau  https:\/\/t.co\/6lpxd8O4lz",
        Month: "March",
        "Dimension 1": 3.306532,
        "Dimension 2": -18.091778,
        Sentiment: 0.441666667,
        Subjectivity: 0.533333333,
        idx: 967,
      },
      {
        RawTweet:
          "@ashishkjha @EpiEllie Ah, didn't see the other ones. Seems to diverge from some of the early data from China then? All the strange clotting outcomes have made me sensitized to this as well.",
        Month: "May",
        "Dimension 1": -16.735752,
        "Dimension 2": 9.725293,
        Sentiment: -0.025,
        Subjectivity: 0.275,
        idx: 968,
      },
      {
        RawTweet:
          "['If you have the ability to donate Personal Protective Equipment (PPE) to the health care providers who are putting their health on the line to take care of us, go to https:\/\/t.co\/M4u5vZ7Wxf #COVID19 #Virginia']",
        Month: "March",
        "Dimension 1": 29.085703,
        "Dimension 2": -7.842178,
        Sentiment: 0.0,
        Subjectivity: 0.3,
        idx: 969,
      },
      {
        RawTweet:
          'b"RT @grahamwalker: ER docs\' recommendations:\\n1) Nationalize production of PPE, testing kits, ventilators (like in wartime)\\n2) Suspend EMTALA\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": 9.364054,
        "Dimension 2": -1.1492076,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 970,
      },
      {
        RawTweet:
          "b'RT @PostOpinions: We finally have the sustainable coronavirus strategy Trump has been demanding, @marcthiessen writes https:\/\/t.co\/DhZFHNmt\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 7.0466857,
        "Dimension 2": 2.4165618,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 971,
      },
      {
        RawTweet:
          "['Yeah. Let\u02bbs encourage everyone to serve us food while sick with #COVID19.\\n\\nTrump on Fox News speculated that \u201cthousands or hundreds of thousands\u201d of people might have recovered \u201cby, you know, sitting around &amp; even going to work \u2014 some of them go to work but they get better.\u201d', 'Yeah. Let\u02bbs encourage everyone to serve us food while sick with #COVID19.\\n\\nTrump on Fox News speculated that \u201cthousands or hundreds of thousands\u201d of people might have recovered \u201cby, you know, sitting around &amp; even going to work \u2014 some of them go to work but they get better.\u201d']",
        Month: "March",
        "Dimension 1": -7.61634,
        "Dimension 2": 16.050842,
        Sentiment: -0.107142857,
        Subjectivity: 0.678571429,
        idx: 972,
      },
      {
        RawTweet:
          "So the number infected in Wuhan to date (more than confirmed, but still small relative to size of the city) is nowhere near the ultimate number that must be infected to achieve herd immunity so that infection can't transmit readily even with normal social interaction",
        Month: "March",
        "Dimension 1": -37.90592,
        "Dimension 2": -16.546091,
        Sentiment: 0.125925926,
        Subjectivity: 0.501851852,
        idx: 973,
      },
      {
        RawTweet:
          "Great op-ed by @BillGates about the #COVID19 response. I thank him for his support of @WHO\u2019s call for global solidarity, investing in new tools now before it\u2019s too late and ensuring equitable access. \r\nhttps:\/\/t.co\/UyDhCUkEzN",
        Month: "April",
        "Dimension 1": 39.410355,
        "Dimension 2": -13.88942,
        Sentiment: 0.159090909,
        Subjectivity: 0.451136364,
        idx: 974,
      },
      {
        RawTweet:
          "About to go on live on @NPRWeekend to discuss where we are with COVID19. \r\n\r\nWe are making progress but still playing catch up. \r\n\r\nWe need to ramp up testing. \r\n\r\nContinue social distancing \r\n\r\nPrepare our hospitals (am very worried about where we are on this)",
        Month: "March",
        "Dimension 1": 23.21838,
        "Dimension 2": -10.053305,
        Sentiment: 0.123232323,
        Subjectivity: 0.288888889,
        idx: 975,
      },
      {
        RawTweet:
          "['Just my opinion here: I think over the next couple weeks you are going to see states start having sporting events with no spectators. California first then other others will follow suit. \\n\\n#coronavirus']",
        Month: "March",
        "Dimension 1": -10.843469,
        "Dimension 2": 27.37222,
        Sentiment: 0.041666667,
        Subjectivity: 0.236111111,
        idx: 976,
      },
      {
        RawTweet:
          "@jgeltzer This is not just crazy paranoia, it is deadly public policy on #SARSCoV2 #coronavirus #covid19 that will come back to haunt this administration b\/c it will cost us in lives, not just $.\r\n\r\n@sciencecohen @HelenBranswell @Laurie_Garrett @EpiEllie",
        Month: "March",
        "Dimension 1": -14.875303,
        "Dimension 2": -6.870002,
        Sentiment: -0.2,
        Subjectivity: 0.322222222,
        idx: 977,
      },
      {
        RawTweet:
          "['Italy is overwhelmed with COVID-19 cases. They\u2019re putting a huge strain on their healthcare system. In America we have even fewer hospital beds per capita, so it\u2019s even more important for us to act early. https:\/\/t.co\/prBl0AlaMJ\\n#CoronaVirusUpdate \\n #Covid_19 #coronavirus #COVID']",
        Month: "March",
        "Dimension 1": -29.878908,
        "Dimension 2": 17.703335,
        Sentiment: 0.35,
        Subjectivity: 0.675,
        idx: 978,
      },
      {
        RawTweet:
          "@justin_hart Are you implying that the whole peer review process has failed throughout history? That reviewers don\u2019t help improve science? I\u2019m fairly certain that is not the case.",
        Month: "May",
        "Dimension 1": -35.839134,
        "Dimension 2": -19.47011,
        Sentiment: -0.028571429,
        Subjectivity: 0.423809524,
        idx: 979,
      },
      {
        RawTweet:
          "My coauthor @j_g_allen keeps on leading the effort to turn epidemiology, hygiene, and building engineering knowledge into practical advice. Proud to be working with him on this latest oped @USATODAY  @HarvardChanSPH https:\/\/t.co\/WYgCSrVOEb",
        Month: "March",
        "Dimension 1": 35.188694,
        "Dimension 2": -4.2927265,
        Sentiment: 0.65,
        Subjectivity: 0.95,
        idx: 980,
      },
      {
        RawTweet:
          "Totally agree w\/ my colleagues @gregggonsalves &amp; @svermund:  We Need An Army Of #PublicHealth Workers To Safely Return To a New Normal https:\/\/t.co\/qrm7xgTJJ7",
        Month: "April",
        "Dimension 1": 35.546463,
        "Dimension 2": -2.3225288,
        Sentiment: 0.196590909,
        Subjectivity: 0.588636364,
        idx: 981,
      },
      {
        RawTweet:
          "11\/ Are we close? \u2018fraid not. True, w\/o antibody testing we\u2019re guessing. Best data prob @ScienceMagazine paper (China): 86% of infections undocumented https:\/\/t.co\/kJvR0bSSJJ If right, then NYC\u2019s 110K cases =  ~700K actual cases (diagnosed &amp; undiagnosed), still &lt;10% of population",
        Month: "April",
        "Dimension 1": -14.2426405,
        "Dimension 2": 35.520252,
        Sentiment: 0.277678571,
        Subjectivity: 0.396428571,
        idx: 982,
      },
      {
        RawTweet:
          "b'Texans deserve up-to-date information about #COVID19. We need widespread testing and we need it now. We cannot poss\\xe2\\x80\\xa6 https:\/\/t.co\/HJG2aFXRpy'",
        Month: "April",
        "Dimension 1": -2.7434494,
        "Dimension 2": -26.073317,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 983,
      },
      {
        RawTweet:
          "b'A classic populist move to deflect the growing criticism of his leadership onto 2 obvious bogeyman (UN and China) h\\xe2\\x80\\xa6 https:\/\/t.co\/qfB2qKwiGc'",
        Month: "April",
        "Dimension 1": -17.405914,
        "Dimension 2": 8.244297,
        Sentiment: 0.083333333,
        Subjectivity: 0.333333333,
        idx: 984,
      },
      {
        RawTweet:
          "@LongnookBeach @mlipsitch @DrEricDing Come on, a lot of us were ringing the alarm bell in early January. Basically everybody in the virology field was alarming people after the sequence came out on January 10th.",
        Month: "April",
        "Dimension 1": -19.54327,
        "Dimension 2": 23.130077,
        Sentiment: 0.0,
        Subjectivity: 0.45,
        idx: 985,
      },
      {
        RawTweet:
          "@schneiderleonid @MicrobiomDigest wow, this thead is stunning.  \r\n\r\nThx @MicrobiomDigest for her relentless pursuit of scientific integrity.  It has no doubt saved lives.",
        Month: "March",
        "Dimension 1": 43.97394,
        "Dimension 2": -17.310041,
        Sentiment: 0.3,
        Subjectivity: 1.0,
        idx: 986,
      },
      {
        RawTweet:
          "5\/ We are at war vs the coronavirus. In prior wars, we asked families to donate wedding rings, jewelry, &amp; other items to the war effort. We should be pleading w\/public &amp; corporations who're hoarding respirator masks to donate their N95s to those serving on the frontlines. \/\/",
        Month: "March",
        "Dimension 1": -4.530133,
        "Dimension 2": 0.032685593,
        Sentiment: -0.0625,
        Subjectivity: 0.1875,
        idx: 987,
      },
      {
        RawTweet:
          "@trvrb I have been thinking a lot about this last strategy too- it is going to be important for quicker economic recovery and some semblance normalcy- will make huge difference for us healthcare workers",
        Month: "March",
        "Dimension 1": 28.29845,
        "Dimension 2": -11.990349,
        Sentiment: 0.25,
        Subjectivity: 0.541666667,
        idx: 988,
      },
      {
        RawTweet:
          "b'RT @NTI_WMD: \"Like other countries, the U.S. will have to significantly scale up its preparedness for COVID-19 \\xe2\\x80\\x93 in short order and across\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 14.014315,
        "Dimension 2": -14.918534,
        Sentiment: 0.083333333,
        Subjectivity: 0.516666667,
        idx: 989,
      },
      {
        RawTweet:
          'b"Thanks for having me! Those who have followed science denial know it\'s largely the same playbook. Here we talked ab\\xe2\\x80\\xa6 https:\/\/t.co\/JQioMvPii3"',
        Month: "April",
        "Dimension 1": 36.549133,
        "Dimension 2": -10.9153385,
        Sentiment: 0.154761905,
        Subjectivity: 0.251190476,
        idx: 990,
      },
      {
        RawTweet:
          'b"Oh that\'s cute. #Mississippi wants to remind us of our (fucking racist and genocidal) history. I hope the governor\\xe2\\x80\\xa6 https:\/\/t.co\/oOFAPN0EQm"',
        Month: "April",
        "Dimension 1": 4.66568,
        "Dimension 2": -5.9581566,
        Sentiment: 0.033333333,
        Subjectivity: 0.633333333,
        idx: 991,
      },
      {
        RawTweet:
          "b'I surveyed small landlords from across Ontario about their rent collection results for the month of April amid\\xe2\\x80\\xa6 https:\/\/t.co\/yCEg72yVbG'",
        Month: "April",
        "Dimension 1": 5.537416,
        "Dimension 2": 42.346165,
        Sentiment: -0.25,
        Subjectivity: 0.4,
        idx: 992,
      },
      {
        RawTweet:
          "['INBOX: #Kentucky @RepJohnYarmuth, chairman of the House Budget Committee, is calling on the @US_FDA to allow distillers to produce hand sanitizers and sprays with current supplies. #Louisville #KY03 #COVID19 https:\/\/t.co\/0tsZT5KlUS']",
        Month: "March",
        "Dimension 1": 16.315361,
        "Dimension 2": 7.1850505,
        Sentiment: 0.0,
        Subjectivity: 0.4,
        idx: 993,
      },
      {
        RawTweet:
          "['Being all #coopedup, due to the #COVID19 #pandemic, has got me thinking that this country could sure use some cross-country escapism right about now with ... \ud83d\ude03 https:\/\/t.co\/ac5Li1iTTg']",
        Month: "March",
        "Dimension 1": 2.0776417,
        "Dimension 2": -6.504967,
        Sentiment: 0.220238095,
        Subjectivity: 0.599867725,
        idx: 994,
      },
      {
        RawTweet:
          "b'We are advised to stay at home, wash our hands with soap and running water, the question is WHERE IS THE WATER? #COVID19'",
        Month: "March",
        "Dimension 1": 27.515175,
        "Dimension 2": -32.342587,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 995,
      },
      {
        RawTweet:
          "b'RT @DrSenait: 5. specific cultural &amp; faith practices such as mass prayer gatherings, large weddings and funerals during which super-spreadi\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 4.766129,
        "Dimension 2": 33.24689,
        Sentiment: 0.078571429,
        Subjectivity: 0.288392857,
        idx: 996,
      },
      {
        RawTweet:
          "When infectious disease epidemics strike, community-based care &amp; a dramatic expansion of telemedicine will help keep our most vulnerable people, &amp; their health care providers, out of harm\u2019s way. Read my new OpEd on #COVID19 &amp; #NCDs at @FoxNews https:\/\/t.co\/uPOQyEBEU9",
        Month: "March",
        "Dimension 1": 22.438738,
        "Dimension 2": -11.977485,
        Sentiment: -0.074242424,
        Subjectivity: 0.513636364,
        idx: 997,
      },
      {
        RawTweet:
          "b'RT @BNODesk: The number of confirmed coronavirus cases worldwide has surpassed 200,000. Of those, 7,990 have died, 82,037 have recovered, a\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -14.741701,
        "Dimension 2": 39.914402,
        Sentiment: 0.4,
        Subjectivity: 1.0,
        idx: 998,
      },
      {
        RawTweet:
          '["Doug\'s sole Christmas present from me was tickets to the Sharks\/Bruins game which has been cancelled because #coronavirus and he had the audacity to ask me if he could return my gifts."]',
        Month: "March",
        "Dimension 1": -40.32474,
        "Dimension 2": 1.8033767,
        Sentiment: -0.133333333,
        Subjectivity: 0.216666667,
        idx: 999,
      },
      {
        RawTweet:
          "[': i am slowly inching towards total fear. #COVID19 https:\/\/t.co\/uBN8v7h9bM', ': i am slowly inching towards total fear. #COVID19 https:\/\/t.co\/uBN8v7h9bM']",
        Month: "March",
        "Dimension 1": -25.918888,
        "Dimension 2": -28.643446,
        Sentiment: -0.15,
        Subjectivity: 0.575,
        idx: 1000,
      },
      {
        RawTweet:
          "['State Democrats being diagnosed with #CoronaVirus so of course they want the state shut down. Now you know you all have to practice what you want us do now. #sixfeet #COVID19 #WashYourHands #georgia']",
        Month: "March",
        "Dimension 1": -25.705423,
        "Dimension 2": 2.530538,
        Sentiment: -0.155555556,
        Subjectivity: 0.288888889,
        idx: 1001,
      },
      {
        RawTweet:
          'This week we continue to see upticks in "influenza like illness" that is not influenza, some of which may be COVID-19. BUT @reichlab has some careful caveats to consider as well. \u2b07\ufe0f https:\/\/t.co\/L6JH6so1fz',
        Month: "March",
        "Dimension 1": -2.3757217,
        "Dimension 2": 22.329214,
        Sentiment: -0.1,
        Subjectivity: 1.0,
        idx: 1002,
      },
      {
        RawTweet:
          '["#gapol #coronavirus Surely it\'s not the best idea to have this presser with @BrianKempGA with this many people bumping into each other at the microphone. Also, coughing in a hand before putting hands all over podium. #whyNotRemote #washYourHands #pandemic"]',
        Month: "March",
        "Dimension 1": -22.602152,
        "Dimension 2": -5.9780693,
        Sentiment: 0.28125,
        Subjectivity: 0.515972222,
        idx: 1003,
      },
      {
        RawTweet:
          "b'Thank you, dear @TalindaB, as always, for standing side-by-side with @WHO. Together, we can beat #COVID19.\\nhttps:\/\/t.co\/U8YX8ku2zk'",
        Month: "April",
        "Dimension 1": 40.186096,
        "Dimension 2": -15.200357,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1004,
      },
      {
        RawTweet:
          "b'RT @megtirrell: \\xe2\\x80\\x9cI\\xe2\\x80\\x99m quite confident that science will come through.\\xe2\\x80\\x9d I got 45 minutes with Columbia\\xe2\\x80\\x99s Dr David Ho yesterday to discuss his\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 24.191633,
        "Dimension 2": 34.005665,
        Sentiment: 0.5,
        Subjectivity: 0.833333333,
        idx: 1005,
      },
      {
        RawTweet:
          "The @CDCgov is the best public health agency in the world.\r\n\r\nThey have world class scientists.\r\n\r\nFolks like @DrNancyM_CDC and Dr. Anne Schuchat are national treasures.\r\n\r\nJust saying.",
        Month: "March",
        "Dimension 1": 45.95105,
        "Dimension 2": -17.91108,
        Sentiment: 0.5,
        Subjectivity: 0.183333333,
        idx: 1006,
      },
      {
        RawTweet:
          "b'RT @trvrb: In many ways, this should be entirely obvious, but we now have strong evidence that social distancing results in decreased #COVI\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 0.76423496,
        "Dimension 2": -30.504244,
        Sentiment: 0.113333333,
        Subjectivity: 0.5,
        idx: 1007,
      },
      {
        RawTweet:
          "This is what we rely on when we define a significant #covid19 exposure \u2014 fleeting proximity to someone with the infection does not equal unavoidable transmission risk \r\nhttps:\/\/t.co\/gs46POtrme",
        Month: "May",
        "Dimension 1": -18.914251,
        "Dimension 2": -31.266333,
        Sentiment: 0.1875,
        Subjectivity: 0.5625,
        idx: 1008,
      },
      {
        RawTweet:
          "@toxicwaste0830 So this is the thing... you can just ask orrrrrr better yet do your OWN research. The people pulling my history left out anything good for effect and it\u2019s sickening to me. Take care and think freely!",
        Month: "April",
        "Dimension 1": -23.498032,
        "Dimension 2": -19.367495,
        Sentiment: 0.233333333,
        Subjectivity: 0.65,
        idx: 1009,
      },
      {
        RawTweet:
          "b'RT @JeffDean: Nicely written, @EricTopol!\\n\\nI completely agree with the conclusion: \"The handling of the COVID-19 pandemic in the United Sta\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 35.11021,
        "Dimension 2": -11.764114,
        Sentiment: 0.35,
        Subjectivity: 0.7,
        idx: 1010,
      },
      {
        RawTweet:
          "b'@TaterSaladJD \\xf0\\x9f\\x98\\x82 Am I too young for the reference? Haha... adding this movie to my procrastination watch list.'",
        Month: "April",
        "Dimension 1": 13.330763,
        "Dimension 2": 1.0013089,
        Sentiment: 0.15,
        Subjectivity: 0.35,
        idx: 1011,
      },
      {
        RawTweet:
          "[\"It may be that the UK's prevarication and treacly reaction time in this #COVID19 crisis reflects the government's reckoning that the UK has not the means to work magic any more. It's a rainy day without an umbrella, a wallet with no cards or cash: it has used its resources fully.\"]",
        Month: "March",
        "Dimension 1": -30.176146,
        "Dimension 2": -16.176699,
        Sentiment: 0.5,
        Subjectivity: 0.75,
        idx: 1012,
      },
      {
        RawTweet:
          '["It\'s amazing scientific thinking &amp; bold experiment  #JantaCurfew. Practically it will start from 7-8PM on Saturday &amp; will end around 7-8 AM on Monday making it about #36hours. This will help beat #coronavirus to great extent if not completely. \\n@MoHFW_INDIA @narendramodi"]',
        Month: "March",
        "Dimension 1": -7.4099717,
        "Dimension 2": 24.221853,
        Sentiment: 0.420833333,
        Subjectivity: 0.679166667,
        idx: 1013,
      },
      {
        RawTweet:
          "b'RT @neil_ferguson: 1\/4 - I think it would be helpful if I cleared up some confusion that has emerged in recent days. Some have interpreted\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -3.3159168,
        "Dimension 2": -31.217669,
        Sentiment: 0.0,
        Subjectivity: 0.25,
        idx: 1014,
      },
      {
        RawTweet:
          "b'What are the odds that the climate change deniers are also questioning coronavirus data ... more than likely high. #coronavirus'",
        Month: "March",
        "Dimension 1": -18.685688,
        "Dimension 2": 1.9431589,
        Sentiment: 0.22,
        Subjectivity: 0.68,
        idx: 1015,
      },
      {
        RawTweet:
          "b'How will this period of forced homeschooling and online education change K-12 education? #COVID19 #education https:\/\/t.co\/EHdwNsccup'",
        Month: "April",
        "Dimension 1": 32.961327,
        "Dimension 2": 25.614002,
        Sentiment: -0.3,
        Subjectivity: 0.2,
        idx: 1016,
      },
      {
        RawTweet:
          "This is unfortunate. Monica Bharel is awesome and her leadership has been essential.\r\n\r\nWishing her a quick recovery. \r\n\r\nWe need her leadership to continue to fight COVID19 in Massacusetts. https:\/\/t.co\/ERIdcID5mX",
        Month: "March",
        "Dimension 1": 27.042456,
        "Dimension 2": -21.66014,
        Sentiment: 0.208333333,
        Subjectivity: 0.7,
        idx: 1017,
      },
      {
        RawTweet:
          "b'RT @cmyeaton: These R(e) estimates are implausibly precise. The credible intervals, if shown, would take up the most of this plot. A move f\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 27.739853,
        "Dimension 2": -27.871183,
        Sentiment: 0.433333333,
        Subjectivity: 0.666666667,
        idx: 1018,
      },
      {
        RawTweet:
          "When I was a medical resident in NYC, AIDS was front and center and I remember getting a letter from the Surgeon General w\/ lifesaving information. I hope we all receive a similar letter on #COVID19 risks and what we can do. New OpEd for @FoxNews https:\/\/t.co\/tqWXjH2n1r",
        Month: "March",
        "Dimension 1": 22.379637,
        "Dimension 2": 12.14532,
        Sentiment: 0.017272727,
        Subjectivity: 0.290909091,
        idx: 1019,
      },
      {
        RawTweet: "#NAME?",
        Month: "March",
        "Dimension 1": 10.70102,
        "Dimension 2": -34.838078,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1020,
      },
      {
        RawTweet:
          "@hoodjourno Well the opinions are obviously established hence me asking for the facts so that I can be clear about my argument about MY vaccine having a chip in it. I need to know where it ORIGINATED, and the answer is not bill gates, it's in the 90s somewhere.",
        Month: "April",
        "Dimension 1": 4.3644342,
        "Dimension 2": 3.3084369,
        Sentiment: 0.05,
        Subjectivity: 0.441666667,
        idx: 1021,
      },
      {
        RawTweet:
          "b'Oh will you look at that, #coronavirus has officially gotten my ass out of school. Huh.'",
        Month: "March",
        "Dimension 1": -29.936508,
        "Dimension 2": 4.8398986,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1022,
      },
      {
        RawTweet:
          "b'Join Mayor Young on tomorrow for the second #COVID19 Telephone Town Hall at 6:30 PM. We will discuss the city\\xe2\\x80\\x99s con\\xe2\\x80\\xa6 https:\/\/t.co\/sTWPlHPFJ8'",
        Month: "May",
        "Dimension 1": 8.527907,
        "Dimension 2": 42.26674,
        Sentiment: 0.05,
        Subjectivity: 0.2,
        idx: 1023,
      },
      {
        RawTweet:
          "['@StephenAtHome @colbertlateshow an old friend and physician from Manhattan tested positive for #coronavirus #COVID\u30fc19 - this is good information! https:\/\/t.co\/kDAWBwEudY']",
        Month: "March",
        "Dimension 1": 0.9189023,
        "Dimension 2": 18.243135,
        Sentiment: 0.400757576,
        Subjectivity: 0.448484848,
        idx: 1024,
      },
      {
        RawTweet:
          "['In line today at the pharmacy. Guy in front of me wanders off to the school supply aisle. When it\\'s his turn we need to call him back. \"I was looking at the crayons. Because, you know, there\\'s no sports.\" (Later asked me if he should be buying \"cans of stuff.\") #coronavirus']",
        Month: "March",
        "Dimension 1": -26.97941,
        "Dimension 2": 6.014763,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1025,
      },
      {
        RawTweet:
          "['Holy cow! Seriously! #IdiotInChief asking about the media capacity in the White House briefing room!?! #WTF #COVID\u30fc19 #COVID19 #WHbriefing #cornoravirusus People are scared and he has the gull to be a pompous jerk standing on the stage looking like a 12 yr old']",
        Month: "March",
        "Dimension 1": -22.574753,
        "Dimension 2": -5.531878,
        Sentiment: -0.196666667,
        Subjectivity: 0.406666667,
        idx: 1026,
      },
      {
        RawTweet:
          "Importing new report in @CDCMMWR gives insight on how #COVID19 may spread from people who don\u2019t have sx. Exactly the kind of important epidemiologic information we need to protect people. @CDCgov https:\/\/t.co\/ZMYcBfOvVc",
        Month: "March",
        "Dimension 1": 21.306215,
        "Dimension 2": -11.230814,
        Sentiment: 0.346590909,
        Subjectivity: 0.651136364,
        idx: 1027,
      },
      {
        RawTweet:
          "To win the war against the virus, we must box in #COVID19. To #BoxItIn we must: 1) Test widely, 2) Isolate infected people safely, 3) Expand contact tracing efforts, 4) Quarantine contacts for 14 days. https:\/\/t.co\/VEtu2w8YBP",
        Month: "April",
        "Dimension 1": -3.819253,
        "Dimension 2": 26.120197,
        Sentiment: 0.4,
        Subjectivity: 0.433333333,
        idx: 1028,
      },
      {
        RawTweet:
          "b'Weekend Reader: \"It used to be a joke: \\'Big #Tech runs my life.\\' Now, in the middle of a global #pandemic, we can s\\xe2\\x80\\xa6 https:\/\/t.co\/KnPFSRb5i5'",
        Month: "May",
        "Dimension 1": 13.12885,
        "Dimension 2": 20.36004,
        Sentiment: -0.0625,
        Subjectivity: 0.275,
        idx: 1029,
      },
      {
        RawTweet:
          "b'@pjweyers Nope; we figured that would be too busy. This was the meadow area at Munroe Falls metro park.'",
        Month: "May",
        "Dimension 1": -24.830992,
        "Dimension 2": -33.398617,
        Sentiment: 0.1,
        Subjectivity: 0.3,
        idx: 1030,
      },
      {
        RawTweet:
          "b'RT @ScottGottliebMD: What businesses can be doing now to help America re-open: some steps for reducing #COVID19 risk in the workplace. Our\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 17.923416,
        "Dimension 2": 18.10329,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1031,
      },
      {
        RawTweet:
          "Speaking of @newyorker, nice to see @Atul_Gawande get back on the writing saddle. (The med student writing group @penn calls themselves \u201cThe Gawanabees.\u201d) Atul describes how Hong Kong &amp; Singapore flattened their curves https:\/\/t.co\/rMjRBOwiaA The piece is hopeful\/reassuring (2\/6)",
        Month: "March",
        "Dimension 1": 33.937256,
        "Dimension 2": 13.096433,
        Sentiment: 0.3,
        Subjectivity: 0.5,
        idx: 1032,
      },
      {
        RawTweet:
          "b'RT @davidalim: This @AEI estimate is more or less in line with what my personal tracking has put the daily max of #COVID19 testing in the U\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 3.351602,
        "Dimension 2": 40.554836,
        Sentiment: 0.083333333,
        Subjectivity: 0.216666667,
        idx: 1033,
      },
      {
        RawTweet:
          '["The world seems a scary place at the moment with this #Covid19 but then it\'s all better when a picture of @AlexaBliss_WWE pops up on your feed \ud83d\udc4d\ud83d\ude0a", "The world seems a scary place at the moment with this #Covid19 but then it\'s all better when a picture of @AlexaBliss_WWE pops up on your feed \ud83d\udc4d\ud83d\ude0a"]',
        Month: "March",
        "Dimension 1": -27.629936,
        "Dimension 2": -28.322302,
        Sentiment: 0.0,
        Subjectivity: 0.75,
        idx: 1034,
      },
      {
        RawTweet:
          "b'RT @biniamkidaneMD: If in some smothering dreams, you too could pace\/ Behind the wagon that we flung him in\/ &amp; watch the white eyes writhin\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 15.102854,
        "Dimension 2": -1.3283465,
        Sentiment: -0.2,
        Subjectivity: 0.35,
        idx: 1035,
      },
      {
        RawTweet:
          "['Harford County resident in her 80s tested positive for #coronavirus #COVID\u30fc19. She is in the hospital. Montgomery Co man in his 60s is the other new case. Both recently traveled internationally. @wjz #BREAKING']",
        Month: "March",
        "Dimension 1": -18.26282,
        "Dimension 2": 31.779446,
        Sentiment: 0.047727273,
        Subjectivity: 0.325,
        idx: 1036,
      },
      {
        RawTweet:
          "['You people say trust issue.. But Putin have another level..\ud83d\ude00\ud83d\ude00\ud83d\ude00\\n#coronavirus https:\/\/t.co\/YwEz08bJ9S']",
        Month: "March",
        "Dimension 1": 5.339461,
        "Dimension 2": -2.0604768,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1037,
      },
      {
        RawTweet:
          "b'I can\\xe2\\x80\\x99t possibly be first to this take but can\\xe2\\x80\\x99t find anything. There HAVE to be people who believe #coronavirus is\\xe2\\x80\\xa6 https:\/\/t.co\/SRxjRJDVLy'",
        Month: "April",
        "Dimension 1": 7.950786,
        "Dimension 2": -11.4222765,
        Sentiment: 0.25,
        Subjectivity: 0.333333333,
        idx: 1038,
      },
      {
        RawTweet:
          "b'#StayHomeSaveLives #COVID #Coronavirus Cl=Utter? Don\\xe2\\x80\\x99t Fret n Complain, Instead Re-Focus\/Redefine the Direction U\\xe2\\x80\\x99r\\xe2\\x80\\xa6 https:\/\/t.co\/emlOet61Ni'",
        Month: "April",
        "Dimension 1": 7.9350147,
        "Dimension 2": -1.1428429,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1039,
      },
      {
        RawTweet:
          "1\/ Covid (@UCSF) Chronicles, Day 23\r\n\r\n@UCSFhospitals, 20 Covid pts, up one. 4 on vents (Fig). ZSFG still at 30 pts, 12 vents, same. Numbers remain stable.\r\n\r\nI\u2019ll be brief today, since I hope you\u2019ll watch today\u2019s superb grand rounds https:\/\/t.co\/Whu0rWRfwr. It's 75 min of insights https:\/\/t.co\/zsbQkgNuK8",
        Month: "April",
        "Dimension 1": -0.37863272,
        "Dimension 2": 38.976677,
        Sentiment: 0.375,
        Subjectivity: 0.614583333,
        idx: 1040,
      },
      {
        RawTweet:
          "b'As the world responds to the #COVID19 crisis, the Global Energy industry is headed towards unprecedented challenges\\xe2\\x80\\xa6 https:\/\/t.co\/CphwjM5s5F'",
        Month: "April",
        "Dimension 1": -6.0171227,
        "Dimension 2": -6.889103,
        Sentiment: 0.3,
        Subjectivity: 0.45,
        idx: 1041,
      },
      {
        RawTweet:
          "['The Jupiter Hotel in #PDX is offering 81 rooms in one of its buildings to house homeless people who need to socially distance themselves from others in the shelter due to illness. #koin6news #coronavirus #Oregon #COVID19 #COVID2019 #COVID #virus #outbreak #pandemic #PNW #Portland https:\/\/t.co\/BATL4a3pAr']",
        Month: "March",
        "Dimension 1": -29.054777,
        "Dimension 2": 22.524805,
        Sentiment: -0.045833333,
        Subjectivity: 0.220833333,
        idx: 1042,
      },
      {
        RawTweet:
          "['\ud83d\udce2Twitter algorithms ATM:\\n\\n\ud83d\udcafMUST contain the following words..\\nCOVID-19, Virus, or toilet paper\ud83d\ude2b\ud83d\ude2b\\n\\n#CoronavirusPandemic\\n#CoronaVirusUpdate #Covid_19 #COVID19 #coronavirus #CoronaOutbreak #retweetforimmunity']",
        Month: "March",
        "Dimension 1": -0.76224786,
        "Dimension 2": 5.296211,
        Sentiment: -0.016666667,
        Subjectivity: 0.05,
        idx: 1043,
      },
      {
        RawTweet:
          "BREAKING:\r\n\r\nMMRV Vaccine is still very safe and still very effective. (95% efficacy to prevent measles after one dose, 96% after two). \r\n\r\nMultiple decades on, glad to see not not too much has changed with this vaccine (of course addition of varicella)\r\n\r\nhttps:\/\/t.co\/IYyc1RiIro",
        Month: "May",
        "Dimension 1": 4.27383,
        "Dimension 2": 22.080025,
        Sentiment: 0.426,
        Subjectivity: 0.57,
        idx: 1044,
      },
      {
        RawTweet:
          "['#CoronaOutbreak #NotoriousRBG  broken by winding streams of black water. They were covered with a  #virgo #ecliptic https:\/\/t.co\/25qslfm3r0']",
        Month: "March",
        "Dimension 1": -16.877905,
        "Dimension 2": -6.6908655,
        Sentiment: -0.283333333,
        Subjectivity: 0.416666667,
        idx: 1045,
      },
      {
        RawTweet:
          "This \u2066@AlJazeera_World\u2069 story on how the Institute Pasteur in #Senegal is making $1 #CovidTesting kits shows #Africa is capable of responding to this virus. https:\/\/t.co\/vVrjJxywkp",
        Month: "April",
        "Dimension 1": 10.229071,
        "Dimension 2": 14.830952,
        Sentiment: 0.2,
        Subjectivity: 0.4,
        idx: 1046,
      },
      {
        RawTweet:
          "b'Positivity &amp; Love spreads 420% faster than #coronavirus. This is a whole entire scientific fact right here. \\nILY \\xf0\\x9f\\xa4\\x98\\xe2\\x9d\\xa4\\xef\\xb8\\x8f\\xe2\\x9d\\xa4\\xef\\xb8\\x8f\\xe2\\x9d\\xa4\\xef\\xb8\\x8f'",
        Month: "April",
        "Dimension 1": 12.403125,
        "Dimension 2": 25.80515,
        Sentiment: 0.246428571,
        Subjectivity: 0.540178571,
        idx: 1047,
      },
      {
        RawTweet:
          "['#iran: The spread of #coronavirus, which is a direct result of the regime\u2019s cover-up, mismanagement, and pervasive government corruption, has led to confusion and aggravated internal feuding among the ruling factions.']",
        Month: "March",
        "Dimension 1": -21.048544,
        "Dimension 2": -2.66227,
        Sentiment: 0.05,
        Subjectivity: 0.2,
        idx: 1048,
      },
      {
        RawTweet:
          "b'RT @JMBooyah: Sweetie everyone\\xe2\\x80\\x99s already washing their hands five+ times a day, covering their face, not shaking hands + avoiding bars. Not\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -12.567594,
        "Dimension 2": 13.971674,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1049,
      },
      {
        RawTweet:
          "['The Ontario Government announced it is closing at-risk businesses to help combat the spread of #COVID19. To find out what businesses have been deemed essential, visit https:\/\/t.co\/ngNxOID32m']",
        Month: "March",
        "Dimension 1": -10.97828,
        "Dimension 2": -16.470684,
        Sentiment: 0.0,
        Subjectivity: 0.3,
        idx: 1050,
      },
      {
        RawTweet:
          "['@christufton is on nationwide with Cliff discussing the cruise ship issue #COVID19 https:\/\/t.co\/9GyeuUYM3E']",
        Month: "March",
        "Dimension 1": 21.478157,
        "Dimension 2": 23.037216,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1051,
      },
      {
        RawTweet:
          'b"Put your arms around me baby,\\nI just wanna fly,\\nMake it last before we die and I know you want a ride,\\nWhat\'s on your mind ??\\n#COVID19"',
        Month: "March",
        "Dimension 1": 11.793664,
        "Dimension 2": -27.487434,
        Sentiment: 0.0,
        Subjectivity: 0.066666667,
        idx: 1052,
      },
      {
        RawTweet:
          "\ud83d\ude4f everyone for your outpouring of support &amp; concrete offerings. I apologize to those I haven\u2019t responded personally. I have already corresponded to some of you personally- I thank you on behalf of everyone who is working. It gratifies my heart to see the world coming together. https:\/\/t.co\/GUO0Yn0w6o",
        Month: "March",
        "Dimension 1": 39.56066,
        "Dimension 2": -15.583518,
        Sentiment: 0.05,
        Subjectivity: 0.3,
        idx: 1053,
      },
      {
        RawTweet:
          "NEW: United Kingdom confirms 4,324 new cases of coronavirus and 544 new deaths, raising total to 29,474 cases and 2,352 dead https:\/\/t.co\/47MXF0XUJ0",
        Month: "April",
        "Dimension 1": -13.230554,
        "Dimension 2": 39.214005,
        Sentiment: 0.041818182,
        Subjectivity: 0.502727273,
        idx: 1054,
      },
      {
        RawTweet:
          "b'For all our vulnerable people and older people #Covid19 in all our communities who are Cocooning. Please share. https:\/\/t.co\/ox7WtYTzf1'",
        Month: "April",
        "Dimension 1": 33.83352,
        "Dimension 2": 8.301474,
        Sentiment: -0.166666667,
        Subjectivity: 0.416666667,
        idx: 1055,
      },
      {
        RawTweet:
          "b'@LaurenWhitticom Layers. But, long-story short: vaccines (all-inclusive) will aim to produce (long-lasting) immunity.'",
        Month: "April",
        "Dimension 1": 28.8766,
        "Dimension 2": -14.851837,
        Sentiment: 0.0,
        Subjectivity: 0.3,
        idx: 1056,
      },
      {
        RawTweet:
          "b'Full marks to @CMO_England for his role in this briefing. Superb presentation on the paradox of the risks posed by #COVID19 #ChrisWhitty'",
        Month: "May",
        "Dimension 1": 27.472961,
        "Dimension 2": -25.799042,
        Sentiment: 0.675,
        Subjectivity: 0.775,
        idx: 1057,
      },
      {
        RawTweet:
          "Thank you @ladygaga for leading the way with your kindness, solidarity and advice for the world in response to #COVID19. Staying at home these days can help stop the #coronavirus from spreading and protect the health of our loved ones. https:\/\/t.co\/5kFMGbk41t",
        Month: "March",
        "Dimension 1": 34.25969,
        "Dimension 2": -20.411894,
        Sentiment: 0.7,
        Subjectivity: 0.8,
        idx: 1058,
      },
      {
        RawTweet:
          '["We have updated our health advice following the UK Prime Minister\'s coronavirus press conference and will provide more information for staff and students tomorrow.\\n\\nhttps:\/\/t.co\/eomy9Q9Oq8\\n\\n#COVID19 #Coronavirus #WeAreUoN https:\/\/t.co\/2IhWwopN02"]',
        Month: "March",
        "Dimension 1": 25.099157,
        "Dimension 2": 16.786724,
        Sentiment: 0.25,
        Subjectivity: 0.3,
        idx: 1059,
      },
      {
        RawTweet:
          "Here is the Boston Mayor's Health Hotline number- where they are currently also fielding  #COVID19 questions.\r\n617-534-5050 or Toll-Free: 1-800-847-0710\r\n\r\n If you have medical issues, you should, of course, call your medical provider or clinic. https:\/\/t.co\/hhCX13DVCI",
        Month: "March",
        "Dimension 1": 28.947927,
        "Dimension 2": -4.8331113,
        Sentiment: 0.0,
        Subjectivity: 0.133333333,
        idx: 1060,
      },
      {
        RawTweet:
          "['#Covid19 if you\u2019re wondering how  this will play out, think 1 becomes 2 then 4,8,16,32,64,128,256,512,1024,2048,4096,8196 and so on. With honest reporting it doubles every 6.1 days. Containment not possible only mitigation and slowing will give the medical system any hope!']",
        Month: "March",
        "Dimension 1": -11.939669,
        "Dimension 2": 25.478298,
        Sentiment: 0.15,
        Subjectivity: 0.725,
        idx: 1061,
      },
      {
        RawTweet:
          "b'\\xe2\\x9d\\xa4Help recycle empty soda bottles into face shields and become a hero!   #BillionShields #Bottles2Shields\\xe2\\x80\\xa6 https:\/\/t.co\/GB4N7EUVyT'",
        Month: "May",
        "Dimension 1": -4.0392513,
        "Dimension 2": 15.744672,
        Sentiment: -0.125,
        Subjectivity: 0.5,
        idx: 1062,
      },
      {
        RawTweet:
          "['OK, tomorrow is the 15th of March. #DonaldTrump, #BorisJohnson &amp; #ScottMorrison should look over their shoulders. Their response to #CoronaOutbreak has been less than pathetic #CoronaApocalypse #auspol https:\/\/t.co\/zgBm3pFIdr', 'OK, tomorrow is the 15th of March. #DonaldTrump, #BorisJohnson &amp; #ScottMorrison should look over their shoulders. Their response to #CoronaOutbreak has been less than pathetic #CoronaApocalypse #auspol https:\/\/t.co\/zgBm3pFIdr']",
        Month: "March",
        "Dimension 1": 17.97512,
        "Dimension 2": -39.660526,
        Sentiment: -0.222222222,
        Subjectivity: 0.522222222,
        idx: 1063,
      },
      {
        RawTweet:
          "b'Who has cut or dyed their own hair during quarantine. #covid19 MIDLIFE MUTINY | More about Colette (Part 1)\\xe2\\x80\\xa6 https:\/\/t.co\/Flzv9OMs1h'",
        Month: "April",
        "Dimension 1": 16.485388,
        "Dimension 2": 4.0142794,
        Sentiment: 0.55,
        Subjectivity: 0.75,
        idx: 1064,
      },
      {
        RawTweet:
          "Testing Update: \r\n\r\nWe\u2019ve been working incredibly hard and around the clock to develop high capacity testing for #COVID19 at the Broad Institute in Boston. \r\n\r\nAnticipate 1000 test\/d and up if needed. \r\n\r\nNot live yet but will be shortly!\r\n\r\nhttps:\/\/t.co\/1Na24c0T8G",
        Month: "March",
        "Dimension 1": 1.3640996,
        "Dimension 2": 25.243277,
        Sentiment: -0.027469697,
        Subjectivity: 0.438833333,
        idx: 1065,
      },
      {
        RawTweet:
          "['@GovRonDeSantis Travel checkpoints are not enough! \u201cAsking\u201d someone to self quarantine isn\u2019t enough and it is not working. Cherry picking areas and reading them from high-risk to low risk is absolutely one of the most irresponsible things I\u2019ve ever heard of. #coronavirus']",
        Month: "March",
        "Dimension 1": -28.073969,
        "Dimension 2": -15.3056755,
        Sentiment: 0.14,
        Subjectivity: 0.54,
        idx: 1066,
      },
      {
        RawTweet:
          "['Merkel Says Two-Thirds of Germans Could Become Infected #bbb20 #bbb2020 #coronavirus https:\/\/t.co\/KBJ0KPwWXs https:\/\/t.co\/9ziDqHlvgB', 'Merkel Says Two-Thirds of Germans Could Become Infected #bbb20 #bbb2020 #coronavirus https:\/\/t.co\/KBJ0KPwWXs https:\/\/t.co\/9ziDqHlvgB']",
        Month: "March",
        "Dimension 1": -24.662682,
        "Dimension 2": 30.032892,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1067,
      },
      {
        RawTweet:
          "b'Tbh I wouldn\\xe2\\x80\\x99t be hurt if that asteroid hit us... and show us the true meaning of Pain (Naruto reference) #COVID19 #endoftheworld'",
        Month: "March",
        "Dimension 1": -0.47276044,
        "Dimension 2": -15.9975605,
        Sentiment: 0.35,
        Subjectivity: 0.65,
        idx: 1068,
      },
      {
        RawTweet:
          "b'In this \\xe2\\x81\\xa6@NBCNews\\xe2\\x81\\xa9 piece, I am quoted about the return of professional #soccer in Germany amidst #COVID19  https:\/\/t.co\/7i2GuWbz8V'",
        Month: "May",
        "Dimension 1": 27.867434,
        "Dimension 2": 13.451651,
        Sentiment: 0.1,
        Subjectivity: 0.1,
        idx: 1069,
      },
      {
        RawTweet:
          "b'#HongKong and #Singapore airports will lift their bans on transit passengers from the start of June as part of the\\xe2\\x80\\xa6 https:\/\/t.co\/EU11HXGkfs'",
        Month: "May",
        "Dimension 1": -32.878407,
        "Dimension 2": 3.6685538,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1070,
      },
      {
        RawTweet:
          "b'Remember \\xe2\\x80\\x94 your best protection from #COVID19 remains to: stay home as much as possible, wash your hands, and pract\\xe2\\x80\\xa6 https:\/\/t.co\/g2yJ6iy7iF'",
        Month: "April",
        "Dimension 1": 27.091686,
        "Dimension 2": -32.593937,
        Sentiment: 0.5,
        Subjectivity: 0.65,
        idx: 1071,
      },
      {
        RawTweet:
          'b"It\'s amazing how relevant this article from 2009 is right now. Great read from @NewYorker! \\n\\n#COVID19 #Marketing\\xe2\\x80\\xa6 https:\/\/t.co\/O3vSA7FmdS"',
        Month: "April",
        "Dimension 1": 41.75138,
        "Dimension 2": -6.10111,
        Sentiment: 0.571428571,
        Subjectivity: 0.771428571,
        idx: 1072,
      },
      {
        RawTweet:
          "b'RT @farisgezahegn: @DrSenait @DrTsion Got nothing but love \\xe2\\x9d\\xa4\\xef\\xb8\\x8f- @DrTsion  sending you vibration that lift your spirit up - protection - ligh\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 21.07079,
        "Dimension 2": -27.211018,
        Sentiment: 0.5,
        Subjectivity: 0.6,
        idx: 1073,
      },
      {
        RawTweet:
          "b'@kiana_aran @LaurenYoung Yes, when I get to it. At the moment it is a little bit busy. Sorry.'",
        Month: "March",
        "Dimension 1": 2.5585139,
        "Dimension 2": -31.843575,
        Sentiment: -0.195833333,
        Subjectivity: 0.6,
        idx: 1074,
      },
      {
        RawTweet:
          "['Will pay #rent for poor: #Kejriwal urges #landlords to not pressurise #tenants to vacate homes.\\n\\nLive updates on #coronavirus here - https:\/\/t.co\/u8WHmvrXaI https:\/\/t.co\/JVZCwQQnsr', 'Will pay #rent for poor: #Kejriwal urges #landlords to not pressurise #tenants to vacate homes.\\n\\nLive updates on #coronavirus here - https:\/\/t.co\/u8WHmvrXaI https:\/\/t.co\/JVZCwQQnsr']",
        Month: "March",
        "Dimension 1": -36.518074,
        "Dimension 2": -8.874021,
        Sentiment: -0.4,
        Subjectivity: 0.6,
        idx: 1075,
      },
      {
        RawTweet:
          "b'RT @NewsHour: COVID-19 is forcing all of us to live in new ways.\\n\\nBut it is also exposing long-standing rifts in American society.\\n\\n@IAmAmn\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -18.595648,
        "Dimension 2": -6.436152,
        Sentiment: 0.090909091,
        Subjectivity: 0.318181818,
        idx: 1076,
      },
      {
        RawTweet:
          "7\/n Simple measures still matter. Hand washing, avoiding crowded indoor spaces, cleaning surfaces, keeping people more apart where appropriate. Businesses and individuals are responding with prudent and measured action, and need to step up these efforts.",
        Month: "March",
        "Dimension 1": 16.522732,
        "Dimension 2": -35.413265,
        Sentiment: 0.275,
        Subjectivity: 0.364285714,
        idx: 1077,
      },
      {
        RawTweet:
          "['The #IndianAirForce leads from the front as ever, @IAF_MCC will be dispatching a #C17 Globemaster today to #Iran for evacuating Indians stranded in the country, which is torn apart by rampant spread of #COVID19\\n\\nC17 was also used for rescuing Indians from #China\\n\\n#CoronaVirus https:\/\/t.co\/hhEApTM6uT']",
        Month: "March",
        "Dimension 1": -25.152798,
        "Dimension 2": 9.652692,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1078,
      },
      {
        RawTweet:
          "['Hi @EUHomeAffairs @Place_Beauvau @BMI_Bund @foreignoffice @Justitiedep @ministerieJenV thousands of refugees are at risk of #COVID19 on Greek islands due to crowded unsanitary conditions. Will you act now to #LeaveNoOneBehind and save lives? \ud83d\udc49 https:\/\/t.co\/zTQ1WFcdog', 'Hi @EUHomeAffairs @Place_Beauvau @BMI_Bund @foreignoffice @Justitiedep @ministerieJenV thousands of refugees are at risk of #COVID19 on Greek islands due to crowded unsanitary conditions. Will you act now to #LeaveNoOneBehind and save lives? \ud83d\udc49 https:\/\/t.co\/zTQ1WFcdog']",
        Month: "March",
        "Dimension 1": -15.972455,
        "Dimension 2": -3.6675222,
        Sentiment: -0.0625,
        Subjectivity: 0.1875,
        idx: 1079,
      },
      {
        RawTweet:
          "I think the understanding of transmission is evolving and it is important to come to a more conclusive conclusion on the possibility of asymptomatic as presymptomatic  spread in order to better target interventions \r\nhttps:\/\/t.co\/NG6GKs1h3H",
        Month: "March",
        "Dimension 1": 12.534697,
        "Dimension 2": -19.833782,
        Sentiment: 0.466666667,
        Subjectivity: 0.666666667,
        idx: 1080,
      },
      {
        RawTweet:
          "What's better than bomb data emailed (at 5:30 pm) by team members fully graphed in beautiful color schemes and clear labeling??? \r\n\r\nI'll wait...",
        Month: "April",
        "Dimension 1": 4.958426,
        "Dimension 2": 30.750484,
        Sentiment: 0.483333333,
        Subjectivity: 0.627777778,
        idx: 1081,
      },
      {
        RawTweet:
          "[\"Today's Game to Keep You Sane: \\n\\nValfaris. \\nThe most #HeavyMetal platformer you will ever play. Every weapon is loaded with brutality, every monster a gorefest graduate. It's tough... but damn it's rewarding.  @ValfarisGame\\n\\n#coronavirus #gamersunite #gaming https:\/\/t.co\/71TxHhSnXA\"]",
        Month: "March",
        "Dimension 1": 15.533632,
        "Dimension 2": -5.6547766,
        Sentiment: 0.052777778,
        Subjectivity: 0.683333333,
        idx: 1082,
      },
      {
        RawTweet:
          "In those same tents, I saw too much pain, loneliness, and death. People dying alone. I never thought I'd have to see or experience that ever again. I never wanted to. Once was painful enough.\r\n\r\nWe have no other option now.\r\n\r\nOur ICUs are filling fast.\r\n\r\nOur ERs are ICUs.",
        Month: "April",
        "Dimension 1": -30.909945,
        "Dimension 2": -13.566087,
        Sentiment: -0.039583333,
        Subjectivity: 0.45,
        idx: 1083,
      },
      {
        RawTweet:
          "Please sign this @Change petition showing your solidarity for standing up with @DrTedros &amp; @WHO as he brings everyone together to fight the #covid19 pandemic! https:\/\/t.co\/kJYYZjPbO9",
        Month: "April",
        "Dimension 1": 32.94441,
        "Dimension 2": 5.1127853,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1084,
      },
      {
        RawTweet:
          "@kjkwinger6 As evidence increases on how high the false negative rate of testing is (for some valid reasons), I incline more toward universal precautions rather than rely on screening. Not futile, but not as reassuring as people assume.",
        Month: "April",
        "Dimension 1": -14.234457,
        "Dimension 2": -30.874973,
        Sentiment: -0.008,
        Subjectivity: 0.408,
        idx: 1085,
      },
      {
        RawTweet:
          "['Both conferences in MAY! have been cancelled that I was going to attend. While I understand the precautions... still a bit premature imho. Just let me nerd out on water resource engineering! #coronapocalypse #coronavirus #QuarantineAndChill']",
        Month: "March",
        "Dimension 1": -33.89121,
        "Dimension 2": 2.0220942,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1086,
      },
      {
        RawTweet:
          "['In the last few days, a lot has happened in terms of how people, countries and more are handling the #coronavirus. Between some countries going on lock-down to flights being canceled, we understand that this can be a frustrating but also a scary time for many.', 'In the last few days, a lot has happened in terms of how people, countries and more are handling the #coronavirus. Between some countries going on lock-down to flights being canceled, we understand that this can be a frustrating but also a scary time for many.']",
        Month: "March",
        "Dimension 1": -23.913227,
        "Dimension 2": -12.762114,
        Sentiment: -0.016666667,
        Subjectivity: 0.511111111,
        idx: 1087,
      },
      {
        RawTweet:
          "I loved this article! And, I\u2019m still mentioning rappers... oh and God! \r\n\r\n\u201cBelieve in GOD like the sun in the sky. SCIENCE can tell us how, but it can\u2019t tell us WHY.\u201d x @JColeNC \r\n\ud83d\ude4f\ud83c\udfff\ud83d\udc99\ud83e\udda0\ud83d\udc9a\ud83d\udcab\ud83d\udc9b https:\/\/t.co\/PX4ybT8ZZH",
        Month: "May",
        "Dimension 1": 33.870564,
        "Dimension 2": -28.550411,
        Sentiment: 1.0,
        Subjectivity: 0.8,
        idx: 1088,
      },
      {
        RawTweet:
          "['High-Powered Committee, headed by Delhi #HighCourt judge directs authorities to take steps like releasing inmates on emergency parole for reducing over-crowding in jails to prevent spread of #COVID19']",
        Month: "March",
        "Dimension 1": -7.62825,
        "Dimension 2": -18.277735,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1089,
      },
      {
        RawTweet:
          "@laxswamy Thank you Lakshman for amplifying this message. The statistics in Boston, like many cities around the country, are truly alarming. \r\n\r\nLucky to have folks like you caring for our communities on the frontlines and able to take a step back to see the broader equity crisis at hand.",
        Month: "April",
        "Dimension 1": 21.876537,
        "Dimension 2": -21.910141,
        Sentiment: 0.246666667,
        Subjectivity: 0.511666667,
        idx: 1090,
      },
      {
        RawTweet:
          "b'Peppermint Hand Sanitizer \\nIngredients: 91% Alcohol, Aloe Vera Gel,  Peppermint Oil\\nhttps:\/\/t.co\/sSDHrG1Zsr\\xe2\\x80\\xa6 https:\/\/t.co\/xAgqvi0bZt'",
        Month: "April",
        "Dimension 1": 10.940386,
        "Dimension 2": 3.00076,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1091,
      },
      {
        RawTweet:
          "[\"Fact check: White House &amp; #trump falsely claims the #coronavirus has been 'contained' in the US\\n\\n#COVID19\\n\\nhttps:\/\/t.co\/KksuaYOYEN\"]",
        Month: "March",
        "Dimension 1": -15.191078,
        "Dimension 2": 2.7028434,
        Sentiment: -0.2,
        Subjectivity: 0.3,
        idx: 1092,
      },
      {
        RawTweet:
          "b'RT @DrTedros: Thank you, Prime Minister @AbiyAhmedAli, for your leadership and transparency, and for advising everyone to rely on trusted p\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 42.346092,
        "Dimension 2": -14.36216,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1093,
      },
      {
        RawTweet:
          "b'If anyone in #nyc #Brooklyn #StatenIsland #queens needs masks( surgical masks) for free I have some DM me\\n#3M\\xe2\\x80\\xa6 https:\/\/t.co\/LAXxU3xoJf'",
        Month: "April",
        "Dimension 1": 16.10772,
        "Dimension 2": -3.225842,
        Sentiment: 0.4,
        Subjectivity: 0.8,
        idx: 1094,
      },
      {
        RawTweet:
          "b'Economically.I think this pandemic will increase economic inequality because of this monetary policies deployed by\\xe2\\x80\\xa6 https:\/\/t.co\/KQ67rawda6'",
        Month: "April",
        "Dimension 1": 16.207521,
        "Dimension 2": 23.887585,
        Sentiment: 0.2,
        Subjectivity: 0.2,
        idx: 1095,
      },
      {
        RawTweet:
          'b"Let\'s see if we can get through Monday without anyone saying anything stupid...\\n\\nKevin Maguire: Hold My Beer\\n\\n#coronavirus"',
        Month: "March",
        "Dimension 1": -9.6806965,
        "Dimension 2": 23.327362,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1096,
      },
      {
        RawTweet:
          "If the latter, then this was a huge gamble with people's lives as we are seeing with rising deaths. Plus we don't yet know about how long immunity lasts, long-term health problems, who exactly is vulnerable &amp; have no antiviral treatment.",
        Month: "April",
        "Dimension 1": -29.296797,
        "Dimension 2": -14.384776,
        Sentiment: -0.0375,
        Subjectivity: 0.45,
        idx: 1097,
      },
      {
        RawTweet:
          "The virtual #WHA73 has opened. My huge thanks to\r\n\ud83c\udde8\ud83c\uddedPresident @s_sommaruga\r\n\ud83c\uddff\ud83c\udde6President @CyrilRamaphosa\r\n\ud83c\udde8\ud83c\uddf3President Xi\r\n\ud83c\uddeb\ud83c\uddf7President @EmmanuelMacron\r\n\ud83c\uddf0\ud83c\uddf7President @moonriver365\r\n\ud83c\udde9\ud83c\uddeaChancellor Merkel\r\n\ud83c\udde7\ud83c\udde7PM @miaamormottley\r\n\ud83c\uddfa\ud83c\uddf3SG @antonioguterres \r\nfor supporting @WHO at this critical time. https:\/\/t.co\/3yzQK7iOtz",
        Month: "May",
        "Dimension 1": 39.13753,
        "Dimension 2": -6.9583845,
        Sentiment: 0.2125,
        Subjectivity: 0.5375,
        idx: 1098,
      },
      {
        RawTweet:
          "NYU\/Bellevue Emergency Medicine class of 2015 social distancing reunion. All of us fighting COVID all over the country and non-New Yorkers checking on the New Yorkers!  Feels like the Sandy Storm except the storm is\u2026 https:\/\/t.co\/aivrzCKt99",
        Month: "April",
        "Dimension 1": -26.26962,
        "Dimension 2": 9.7388115,
        Sentiment: 0.101893939,
        Subjectivity: 0.260606061,
        idx: 1099,
      },
      {
        RawTweet:
          "Someone please ask what the plan is to ensure UK exits lockdown in a better position than going in? Concrete deadlines &amp; measurable objectives?",
        Month: "March",
        "Dimension 1": -5.56761,
        "Dimension 2": -27.964245,
        Sentiment: 0.325,
        Subjectivity: 0.4,
        idx: 1100,
      },
      {
        RawTweet:
          "b'I pray El-Rufai gets better, he is one of the few people I hope to become president in 2023 #coronavirus'",
        Month: "March",
        "Dimension 1": 6.3658953,
        "Dimension 2": 2.2532089,
        Sentiment: 0.15,
        Subjectivity: 0.3,
        idx: 1101,
      },
      {
        RawTweet:
          "b'RT @mlipsitch: Prepare Now for Long War Against Covid-19. With Richard Danzig.  We propose scale up of serology, war-level production of me\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 10.758636,
        "Dimension 2": -1.283536,
        Sentiment: -0.05,
        Subjectivity: 0.4,
        idx: 1102,
      },
      {
        RawTweet:
          "b'RT @Cleavon_MD: I shared a day in my life as a NYC Emergency Room Doc on the frontlines of the coronavirus pandemic w\/ @jkdamours from @AJE\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 7.6610265,
        "Dimension 2": 19.504187,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1103,
      },
      {
        RawTweet:
          "['Third #COVID19 case of Indian Army reported from Srinagar where a Territorial Army Subedar has tested positive. The Subedar had returned from leave recently and undergone tests few days ago. His colleagues have been isolated as per procedures: Army Sources (ANI) https:\/\/t.co\/p15B2uNcWy']",
        Month: "March",
        "Dimension 1": -0.8158198,
        "Dimension 2": 19.649078,
        Sentiment: 0.006818182,
        Subjectivity: 0.223863636,
        idx: 1104,
      },
      {
        RawTweet:
          "@KODIACK7 Oh I'm def goofy looking. No lies there. lol. I haven't ever had a white partner, btw. (though not opposed) My exes are either black or Iranian. I don't discriminate. Let me know if you got a friend who likes goofy-looking women.",
        Month: "April",
        "Dimension 1": -2.4318166,
        "Dimension 2": -42.787846,
        Sentiment: 0.283333333,
        Subjectivity: 0.533333333,
        idx: 1105,
      },
      {
        RawTweet:
          "b'RT @DrSenait: World Health Organization Director General @DrTedros appeals for unity over the #COVID19 Pandemic @WHO'",
        Month: "April",
        "Dimension 1": 21.415045,
        "Dimension 2": 1.9492189,
        Sentiment: 0.05,
        Subjectivity: 0.5,
        idx: 1106,
      },
      {
        RawTweet:
          '["XpertHR editor\'s choice: Our weekly round-up of highlights from our award-winning site, featuring latest content on #coronavirus, gender pay gap reporting and workforce planning. https:\/\/t.co\/GZPesOLnyS https:\/\/t.co\/dUKb1wAYqP"]',
        Month: "March",
        "Dimension 1": 11.356178,
        "Dimension 2": 33.533386,
        Sentiment: 0.5,
        Subjectivity: 0.9,
        idx: 1107,
      },
      {
        RawTweet:
          "b'\\xe2\\x80\\x9cHave things changed? Yes. Will some things be different forever? Probably,\\xe2\\x80\\x9d says Meggie Williams, founder and CEO.\\xe2\\x80\\xa6 https:\/\/t.co\/cQiHYuAcq6'",
        Month: "May",
        "Dimension 1": 12.350045,
        "Dimension 2": -15.335129,
        Sentiment: 0.0,
        Subjectivity: 0.6,
        idx: 1108,
      },
      {
        RawTweet:
          "I nominate\r\n@FerozFerozuddin\r\n@DrHalaZayed1\r\n@saeednamaki\r\n@DrSaadJaber\r\n@Drbaselalsabah\r\n@zfrmrza\r\n@tfrabiah\r\n@AbikarDr \r\n@drharshvardhan\r\n@ameenex\r\n@dhbhanu \r\nto take the #SafeHands challenge, share their videos &amp; call on at least another 3 people to join us! Together, against #COVID19!",
        Month: "March",
        "Dimension 1": 10.23846,
        "Dimension 2": 10.45535,
        Sentiment: -0.46875,
        Subjectivity: 0.4,
        idx: 1109,
      },
      {
        RawTweet:
          "['COVID-19 (Coronavirus) My heart and prayers go out to those who have been affected by this event.  Please read an important announcement regarding our temporary cancellation and refund policy to help the community. \ud83d\udc49https:\/\/t.co\/WIsS6VhzuK\\n\\n #simplychefrenee #coronavirus https:\/\/t.co\/UdL9F2VVIn']",
        Month: "March",
        "Dimension 1": -0.5408723,
        "Dimension 2": -2.870864,
        Sentiment: 0.4,
        Subjectivity: 1.0,
        idx: 1110,
      },
      {
        RawTweet:
          "b'RT @GCAGATGCAATG: The Microbiology Society \\xe2\\x81\\xa6@MicrobioSoc\\xe2\\x81\\xa9 is one of the most relevant societies in the world for an informed opinion of #co\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 46.046814,
        "Dimension 2": -17.925356,
        Sentiment: 0.45,
        Subjectivity: 0.7,
        idx: 1111,
      },
      {
        RawTweet:
          "In this \u2066@KorinMiller\u2069 \u2066@YahooNews\u2069 piece, I am quoted about a study that shows a lot of droplet generation and aerosols during speech and how I think this type of transmission is not likely a big proportion of #COVID transmission events  https:\/\/t.co\/PxhSHgInAA",
        Month: "May",
        "Dimension 1": -2.0354776,
        "Dimension 2": -32.551098,
        Sentiment: 0.0,
        Subjectivity: 0.55,
        idx: 1112,
      },
      {
        RawTweet:
          "b'RT @shanpalus: I went on What Next TBD to talk to @lizzieohreally about getting an antibody test, which urgent care centers across America\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 18.54659,
        "Dimension 2": 8.192743,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1113,
      },
      {
        RawTweet:
          "@aerosol_reserch There seems to be ongoing controversy about the role of aerosol transmission in #SARSCoV2 as @WHO denies it is an important transmission route.  But for HCWs who are intubating patients, it appears to be much more important.",
        Month: "March",
        "Dimension 1": -19.759861,
        "Dimension 2": -21.753738,
        Sentiment: 0.433333333,
        Subjectivity: 0.833333333,
        idx: 1114,
      },
      {
        RawTweet:
          "b'@LiangRhea \\xf0\\x9f\\x92\\xafI get notifications of global trends, not just local\/US, and boy some of them are wild\\xf0\\x9f\\x98\\xb3'",
        Month: "April",
        "Dimension 1": 9.274888,
        "Dimension 2": -14.945265,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1115,
      },
      {
        RawTweet:
          "The #COVID19 pandemic is threatening food and nutrition security for millions of people globally.\r\nI was honoured to address @g20org Agriculture Ministers today, as we have a shared responsibility to ensure this health crisis does not also become a food crisis.",
        Month: "April",
        "Dimension 1": 1.0147675,
        "Dimension 2": 10.994478,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1116,
      },
      {
        RawTweet:
          "b'RT @PhillySurgeon: Italy reaches grim coronavirus milestone as 100th doctor dies of the disease\\xc2\\xa0 | Daily Mail Online https:\/\/t.co\/wun8utbkD5'",
        Month: "April",
        "Dimension 1": -31.228008,
        "Dimension 2": 18.22444,
        Sentiment: -0.5,
        Subjectivity: 0.5,
        idx: 1117,
      },
      {
        RawTweet:
          "@Laurie_Garrett @maddow My MD colleagues speculate the association b\/w #hypertension &amp; #COVID19 may be a proxy for #ACE inhibitor use which may upregulate the ACE2 receptor that #SARSCoV2 uses to enter lung cells.  Patients using ACE inhibitors should consult their PCP to see if switching is warranted.",
        Month: "March",
        "Dimension 1": 22.068357,
        "Dimension 2": 4.9852796,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1118,
      },
      {
        RawTweet:
          "b'RT @jm_corba: \"In July and August we should be coming back to some element of our normal lives,\" says @ScottGottliebMD on the #COVID19 time\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 0.3426835,
        "Dimension 2": 47.952473,
        Sentiment: 0.075,
        Subjectivity: 0.325,
        idx: 1119,
      },
      {
        RawTweet:
          "Adding this to list of potential secondary health impacts of COVID19 pandemic...&amp; fewer clinic visits, fewer biopsies, fuller hospitals w less ability to admit patients w other illnesses. \r\n\r\nWest Africa saw resurgence of vaccine preventable diseases after Ebola epidemic as well. https:\/\/t.co\/yHs0akDbN9",
        Month: "April",
        "Dimension 1": -16.715284,
        "Dimension 2": -18.85712,
        Sentiment: -0.147916667,
        Subjectivity: 0.435416667,
        idx: 1120,
      },
      {
        RawTweet:
          "b'I agree w @DiseaseEcology that Voluntary centralized isolation or quarantine may be valuable, especially in densely populated areas.'",
        Month: "April",
        "Dimension 1": 17.370691,
        "Dimension 2": -22.193855,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 1121,
      },
      {
        RawTweet:
          "Prepare Now for Long War Against Covid-19. With Richard Danzig.  We propose scale up of serology, war-level production of medical countermeasures, national effort on education, preparing for safe democratic November elections, infrastructure strengthening https:\/\/t.co\/vzVZrreu5C",
        Month: "March",
        "Dimension 1": 10.806714,
        "Dimension 2": -1.2328312,
        Sentiment: 0.15,
        Subjectivity: 0.3,
        idx: 1122,
      },
      {
        RawTweet:
          "b'The banks are rallying together during this crisis to provide relief to #smallbusiness in Australia. Read more via\\xe2\\x80\\xa6 https:\/\/t.co\/5Z3gLv8H53'",
        Month: "April",
        "Dimension 1": 16.711554,
        "Dimension 2": 19.797083,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1123,
      },
      {
        RawTweet:
          "b'RT @richardhorton1: A grim conclusion from Neil Ferguson and colleagues: \\xe2\\x80\\x9cAlthough China has succeeded in containing the disease spread for\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -16.246317,
        "Dimension 2": 10.887773,
        Sentiment: -1.0,
        Subjectivity: 1.0,
        idx: 1124,
      },
      {
        RawTweet:
          "['\"#coronavirus pandemic has hit Europe at a time when record numbers of people are living without a home. There are an estimated 700,000 people on the streets or in shelters on any given night in the EU and the UK, up 70% from a decade ago\" https:\/\/t.co\/XmYRu34RzN #HomelessCovid19']",
        Month: "March",
        "Dimension 1": -20.188599,
        "Dimension 2": 39.49803,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1125,
      },
      {
        RawTweet:
          "b'In the coming months, @FP2020Global will be sharing experiences of country partners and the lessons they are learni\\xe2\\x80\\xa6 https:\/\/t.co\/5bve0lGnIN'",
        Month: "April",
        "Dimension 1": 31.33989,
        "Dimension 2": 15.82977,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1126,
      },
      {
        RawTweet:
          "@G_House__MD This was also discussed during this webinar actually. There is an urgent need for governments to improve risk communication. impo there is a fine line between not creating panic and telling what we do not know.",
        Month: "April",
        "Dimension 1": 20.86724,
        "Dimension 2": -11.565606,
        Sentiment: 0.208333333,
        Subjectivity: 0.3,
        idx: 1127,
      },
      {
        RawTweet:
          'b"RT @erkdeni: @BioRender\'s #realtime tracker reports status of various #COVID19 #vaccines &amp; #therapeutics and their progress through #clinic\\xe2\\x80\\xa6"',
        Month: "May",
        "Dimension 1": 23.849386,
        "Dimension 2": 6.753537,
        Sentiment: 0.0,
        Subjectivity: 0.5,
        idx: 1128,
      },
      {
        RawTweet:
          "b'@SUSiEF48 Tell your grandma she has CELLS and they are old and tired so she needs to stay isolated more than most! \\xf0\\x9f\\x98\\x85'",
        Month: "April",
        "Dimension 1": -33.988758,
        "Dimension 2": -7.9226313,
        Sentiment: 0.20625,
        Subjectivity: 0.475,
        idx: 1129,
      },
      {
        RawTweet:
          "b'@hwbulls I look forward to your clean living room during your WIP tomorrow.'",
        Month: "March",
        "Dimension 1": 44.548504,
        "Dimension 2": -22.228367,
        Sentiment: 0.366666667,
        Subjectivity: 0.7,
        idx: 1130,
      },
      {
        RawTweet:
          "['\u2018We Have Lost It All\u2019: The Shock Felt by Millions of Unemployed Americans \\n#USA #Trump #COVID19 \\nOne day there was a job. The next day it was gone. https:\/\/t.co\/4FZ5YQopHE', '\u2018We Have Lost It All\u2019: The Shock Felt by Millions of Unemployed Americans \\n#USA #Trump #COVID19 \\nOne day there was a job. The next day it was gone. https:\/\/t.co\/4FZ5YQopHE']",
        Month: "March",
        "Dimension 1": -38.509686,
        "Dimension 2": 9.104758,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1131,
      },
      {
        RawTweet:
          'b"@actuarygambler Maybe but I don\'t want them to read (or buy) a whole book just to get a concept. This is definitely\\xe2\\x80\\xa6 https:\/\/t.co\/3wKgS3Hwbv"',
        Month: "May",
        "Dimension 1": -30.611967,
        "Dimension 2": -20.936666,
        Sentiment: 0.2,
        Subjectivity: 0.4,
        idx: 1132,
      },
      {
        RawTweet:
          'b"How is furlough pay calculated if you have been on maternity leave in the last year? If you\'ve been on sick leave,\\xe2\\x80\\xa6 https:\/\/t.co\/w1gC9WBbGM"',
        Month: "April",
        "Dimension 1": -1.0894343,
        "Dimension 2": 41.36676,
        Sentiment: -0.357142857,
        Subjectivity: 0.461904762,
        idx: 1133,
      },
      {
        RawTweet:
          "b'RT @kandelnirmal: @JenniferNuzzo Indeed, you hit the bull\\xe2\\x80\\x99s eye. It is not only linked; they are interdependent too. A simple rule of econo\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 9.464421,
        "Dimension 2": -14.943335,
        Sentiment: 0.0,
        Subjectivity: 0.678571429,
        idx: 1134,
      },
      {
        RawTweet:
          '"You can make assumptions about the correct ingredients and their quantity. But those are assumptions \u2014 not absolute facts..if you make too many assumptions..you might very well end up w\/ something entirely different than what you were meant to be making" https:\/\/t.co\/vfRLLzJgnN',
        Month: "April",
        "Dimension 1": -14.471319,
        "Dimension 2": -28.951616,
        Sentiment: 0.15,
        Subjectivity: 0.575,
        idx: 1135,
      },
      {
        RawTweet:
          "b'Oh my god can @bbclaurak or any journalists ask @DominicRaab any new questions? It\\xe2\\x80\\x99s like a small child,being told\\xe2\\x80\\xa6 https:\/\/t.co\/MOJTzUiUMA'",
        Month: "April",
        "Dimension 1": 13.635033,
        "Dimension 2": 0.083242916,
        Sentiment: -0.056818182,
        Subjectivity: 0.427272727,
        idx: 1136,
      },
      {
        RawTweet:
          "We currently have 20,000 confirmed infected and 280 deaths in NYC. What do people think, how many infections do we really have? Testing is currently pretty restricted (although we test a lot).",
        Month: "March",
        "Dimension 1": -20.350729,
        "Dimension 2": 38.342983,
        Sentiment: 0.27,
        Subjectivity: 0.62,
        idx: 1137,
      },
      {
        RawTweet:
          "3\/ SF: also mild up. 434 cases, 37 new (graph). 7 deaths, up 1. Contrast w\/ NY still stunning: NYC: 47,440 cases (up 4301 overnt); 1139 deaths, up 43 (A bit flatter than yest; a little hope in the sadness). SoCal little worse than North, tho still better off than NY, NJ &amp; others https:\/\/t.co\/TksPqflVww",
        Month: "April",
        "Dimension 1": -21.455448,
        "Dimension 2": 19.892242,
        Sentiment: 0.099242424,
        Subjectivity: 0.579220779,
        idx: 1138,
      },
      {
        RawTweet:
          "b'54 new #COVID19 cases in Punjab, total rises to 1,877; active cases 1,678'",
        Month: "May",
        "Dimension 1": -4.1039824,
        "Dimension 2": 45.410305,
        Sentiment: 0.001010101,
        Subjectivity: 0.601515152,
        idx: 1139,
      },
      {
        RawTweet:
          "b'#Booklovers discover new books to read while staying at home! Bookmark our site and stop by daily to see our latest\\xe2\\x80\\xa6 https:\/\/t.co\/bsPdNpkNTL'",
        Month: "April",
        "Dimension 1": 28.56284,
        "Dimension 2": 18.314054,
        Sentiment: 0.085227273,
        Subjectivity: 0.227272727,
        idx: 1140,
      },
      {
        RawTweet:
          "['There\u2019s going to be so many babies being born in December! We can just go ahead and call them #CoronaBabies trademarked by yours truly\ud83d\ude02 y\u2019all better strap up and be safe out here!! #COVID19', 'There\u2019s going to be so many babies being born in December! We can just go ahead and call them #CoronaBabies trademarked by yours truly\ud83d\ude02 y\u2019all better strap up and be safe out here!! #COVID19', 'There\u2019s going to be so many babies being born in December! We can just go ahead and call them #CoronaBabies trademarked by yours truly\ud83d\ude02 y\u2019all better strap up and be safe out here!! #COVID19']",
        Month: "March",
        "Dimension 1": 18.401522,
        "Dimension 2": 35.704357,
        Sentiment: 0.635416667,
        Subjectivity: 0.5,
        idx: 1141,
      },
      {
        RawTweet:
          "b'RT @threader_app: @kelbystrike Hey, thanks for sharing this thread from @VirusesImmunity. Read the whole version here: https:\/\/t.co\/sJCb7ii\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 30.933096,
        "Dimension 2": 2.5047967,
        Sentiment: 0.2,
        Subjectivity: 0.3,
        idx: 1142,
      },
      {
        RawTweet:
          "b'TECH FOR AMERICA. @CodingDojoDotCo mobilized their alumni network to help #SmallBusinesses rebuild in the wake of\\xe2\\x80\\xa6 https:\/\/t.co\/aSqu3sFdpT'",
        Month: "April",
        "Dimension 1": 30.560448,
        "Dimension 2": 14.110918,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1143,
      },
      {
        RawTweet:
          "['Literally cannot wait for this pandemic to dissapear so Netflix can release the documentary about the disease but it stictly focuses on Americas obsession with Toilet Paper during the outbreak.\\n\"COVID19: No Time to 2-Ply\"\\n#coronavirus #COVID19 #Netflix #QuarantineLife']",
        Month: "March",
        "Dimension 1": -23.95539,
        "Dimension 2": 2.5249643,
        Sentiment: -0.016666667,
        Subjectivity: 0.0,
        idx: 1144,
      },
      {
        RawTweet:
          "It's not the end of the world, not the zombie apocalypse, we\u2019re not all going to die. But missteps could put us all at greater risk https:\/\/t.co\/cJc2JbS1se",
        Month: "March",
        "Dimension 1": -13.245002,
        "Dimension 2": -37.045345,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1145,
      },
      {
        RawTweet:
          "['Something free to do if the pandemic keeps you at home. https:\/\/t.co\/XXfC5u5EoN\\n#PandemicPreparedness #Coronavid19 #coronavirus  #coronavirusaustralia #COVID19Aus #COVID\u30fc19 #stuckathome #selfisolating #SelfQuarantine    #housebound #indoors #Schoolsout #OnlineCourses #free']",
        Month: "March",
        "Dimension 1": 12.909188,
        "Dimension 2": -5.285344,
        Sentiment: 0.4,
        Subjectivity: 0.8,
        idx: 1146,
      },
      {
        RawTweet:
          "Oh shit. Finally a study is out rigorously quantifying #SARSCoV2 #COVID19 #coronavirus in stool. Bad news...there's infectious virus in there. So fecal transmission is possible, but is it happening in the real world?\r\nhttps:\/\/t.co\/zrusEjktxB",
        Month: "May",
        "Dimension 1": -1.671221,
        "Dimension 2": 2.9388864,
        Sentiment: -0.14,
        Subjectivity: 0.753333333,
        idx: 1147,
      },
      {
        RawTweet:
          "I am struck that #Trump continues to push #Hydroxychloroquine as treatment or prophylaxis for #COVID19 despite the lack of evidence &amp; pushback from the MDs in his #Coronavirus #TaskForce. \r\n\r\nHas any #journalist checked to see if he would personally benefit from its sales?",
        Month: "April",
        "Dimension 1": -27.127703,
        "Dimension 2": -5.323376,
        Sentiment: 0.0,
        Subjectivity: 0.3,
        idx: 1148,
      },
      {
        RawTweet:
          "Let me add one more thing: a quote by Tony Fauci.\r\n\r\nWe don't make the timeline.\r\n\r\nThe virus makes the timeline.\r\n\r\nWe should do all the things outlined above now.\r\n\r\nBut, its the facts on the ground that will dictate when we can lift restrictions, and where.",
        Month: "March",
        "Dimension 1": -5.336808,
        "Dimension 2": -18.110502,
        Sentiment: 0.25,
        Subjectivity: 0.3,
        idx: 1149,
      },
      {
        RawTweet:
          "#COVID19 threatens us all, but it does not threaten us all equally. At every turn, social conditions have shaped who is most at risk of this pandemic. Wrote about this with @DrRollston in @HMSPrimaryCare Blog: https:\/\/t.co\/vj4l58kjwz @BUSPH @BUexperts",
        Month: "May",
        "Dimension 1": 3.1955676,
        "Dimension 2": -18.041985,
        Sentiment: 0.177777778,
        Subjectivity: 0.272222222,
        idx: 1150,
      },
      {
        RawTweet:
          "'Nonsensical' - top epidemiologist slams Trump's call to consider injecting disinfectants into Covid-19 patients   \r\n\r\n(I didn\u2019t realize the recording of me would be used and spliced back together, but it is amusing. Our president is such an idiot)\r\n\r\nhttps:\/\/t.co\/3suChihmRP",
        Month: "April",
        "Dimension 1": -23.030708,
        "Dimension 2": -2.6948903,
        Sentiment: 0.06,
        Subjectivity: 0.56,
        idx: 1151,
      },
      {
        RawTweet:
          "['@SenSchumer \\n@SpeakerPelosi \\n\\nPlease make sure that Corp Bail Out $\u2019s DO NOT go towards stock but backs, Executive Pay Increases, Executive Bonuses, etc. this money, our money, needs to help keep business alive during this downturn and get people working again.\\n\\n#Coronavirus']",
        Month: "March",
        "Dimension 1": -6.838245,
        "Dimension 2": -11.861565,
        Sentiment: 0.3,
        Subjectivity: 0.644444444,
        idx: 1152,
      },
      {
        RawTweet:
          "['Coronavirus: [Saturday evening; March 7, 2020]\\n106,191 Infected\\n3,600 Deaths = 3.4% of those infected.\\n60,190 Recovered\\n\\n63,790 Cases closed. 100%\\nRecovered 94%\\nDeaths 6% of closed cases.\\n\\nhttps:\/\/t.co\/HQwsH3s8Q6\\n\\n#Coronavirus #china #outbreak #Covid19 https:\/\/t.co\/PTkUhztkiI']",
        Month: "March",
        "Dimension 1": -14.637722,
        "Dimension 2": 36.492207,
        Sentiment: -0.316666667,
        Subjectivity: 0.4,
        idx: 1153,
      },
      {
        RawTweet:
          '[\'Trump contradicts  dire mortality risks of #CoronaVirus by #WorldHealthOrganization: "Well, I think the 3.4% is really a false number," Trump said. "Now, this is just my hunch but based on a lot of conversation with a lot of people." \\n-The voices in Trump\\\'s head\', \'Trump contradicts  dire mortality risks of #CoronaVirus by #WorldHealthOrganization: "Well, I think the 3.4% is really a false number," Trump said. "Now, this is just my hunch but based on a lot of conversation with a lot of people." \\n-The voices in Trump\\\'s head\']',
        Month: "March",
        "Dimension 1": -26.486492,
        "Dimension 2": -12.804837,
        Sentiment: -0.4,
        Subjectivity: 0.6,
        idx: 1154,
      },
      {
        RawTweet:
          "['Help me share it, petition for mexican government to cancel @vivelatino  and massive events in Mexico #covid19 https:\/\/t.co\/tl15aFUcPq\\n@natszendro  @ruleiro @Reactor105 @sopitas @EMPosts @HelenBranswell @Monitoreo103']",
        Month: "March",
        "Dimension 1": -48.346523,
        "Dimension 2": 1.1369861,
        Sentiment: 0.0,
        Subjectivity: 0.5,
        idx: 1155,
      },
      {
        RawTweet:
          '["Quick notice if local,  Any elderly people who may not be able to get out and about for basic necessities , just get in touch I will do my best to help out , looks like I\'m going to have a lot of time on my hands , so I will do what I can , \\n\\n#COVID19 #coronavirus #retweet #help"]',
        Month: "March",
        "Dimension 1": 26.80654,
        "Dimension 2": -18.905674,
        Sentiment: 0.366666667,
        Subjectivity: 0.31,
        idx: 1156,
      },
      {
        RawTweet:
          'b"The pandemic is putting America\'s civil rights legacy at risk https:\/\/t.co\/drirkDSY2j #covid19"',
        Month: "May",
        "Dimension 1": -10.040062,
        "Dimension 2": -10.786236,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1157,
      },
      {
        RawTweet:
          "b'It is critical for all of us to monitor our mental &amp; emotional well-being all all times, even in the midst of a glo\\xe2\\x80\\xa6 https:\/\/t.co\/EUhEDXxvKs'",
        Month: "May",
        "Dimension 1": 34.340137,
        "Dimension 2": -14.0643215,
        Sentiment: -0.033333333,
        Subjectivity: 0.55,
        idx: 1158,
      },
      {
        RawTweet:
          "b'RT @jialynnyang: My favorite piece of writing to read every Memorial Day to reflect on what this holiday is about: historian David Blight\\xe2\\x80\\x99s\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 47.6406,
        "Dimension 2": -1.9912078,
        Sentiment: 0.5,
        Subjectivity: 1.0,
        idx: 1159,
      },
      {
        RawTweet:
          "b'22\/ \\xe2\\x80\\xa6at least in closed spaces, as SF has done (Fig). Question of outside masks @WSJ https:\/\/t.co\/TT9Hl6J2lp With ~\\xe2\\x80\\xa6 https:\/\/t.co\/VZNgQV1vIr'",
        Month: "May",
        "Dimension 1": -10.568148,
        "Dimension 2": -22.21795,
        Sentiment: -0.133333333,
        Subjectivity: 0.183333333,
        idx: 1160,
      },
      {
        RawTweet:
          "b'In a few minutes, we will open a candid conversation on what #Covid19 means for menstrual health and hygiene. Perio\\xe2\\x80\\xa6 https:\/\/t.co\/64VziW1orx'",
        Month: "May",
        "Dimension 1": 26.549368,
        "Dimension 2": 20.590908,
        Sentiment: 0.133333333,
        Subjectivity: 0.466666667,
        idx: 1161,
      },
      {
        RawTweet:
          "Due to these limitations in testing, there is a priority on hospitalized patients, healthcare\/ essential workers, and those in long term care facilities. \r\n\r\nThe best place to look for testing sites is your local or state health department website.\r\n\r\nOr here: https:\/\/t.co\/3xyPRT4pMT",
        Month: "May",
        "Dimension 1": 27.969172,
        "Dimension 2": -6.1049924,
        Sentiment: 0.165,
        Subjectivity: 0.275,
        idx: 1162,
      },
      {
        RawTweet:
          "['When you\u2019re in the #gym + someone steals your equipment right in front of your face ..... \ud83d\ude0f..... liberties taken on all fronts .... #Covid19 #homegym #toddlerlife  #2020 #homefitnessclub https:\/\/t.co\/2US9bpRVvg']",
        Month: "March",
        "Dimension 1": -25.164637,
        "Dimension 2": -5.826479,
        Sentiment: 0.285714286,
        Subjectivity: 0.535714286,
        idx: 1163,
      },
      {
        RawTweet:
          "b'New data showing young people without underlying health issues can become seriously ill upon contracting #COVID19'",
        Month: "March",
        "Dimension 1": -5.599245,
        "Dimension 2": -22.434223,
        Sentiment: -0.087878788,
        Subjectivity: 0.618181818,
        idx: 1164,
      },
      {
        RawTweet:
          "b'RT @zeynep: They found six new cases in Wuhan so they\\xe2\\x80\\x99re planning to test eleven million people over the next ten days. Neither number is a\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": -11.314266,
        "Dimension 2": 43.96322,
        Sentiment: 0.045454545,
        Subjectivity: 0.151515152,
        idx: 1165,
      },
      {
        RawTweet:
          "b'Decision on SC school schedule extension expected in next 10 days - https:\/\/t.co\/Jye9H8oDtb #sc #southcarolina #schools #coronavirus'",
        Month: "April",
        "Dimension 1": 0.48050326,
        "Dimension 2": 45.720787,
        Sentiment: -0.05,
        Subjectivity: 0.2,
        idx: 1166,
      },
      {
        RawTweet:
          "b'Are you up to date on the latest developments about #COVID19? Head to the COVID-19 #HiddenHeroes Resource Hub for u\\xe2\\x80\\xa6 https:\/\/t.co\/3zHRZndDOy'",
        Month: "May",
        "Dimension 1": 16.510828,
        "Dimension 2": -14.61517,
        Sentiment: 0.5,
        Subjectivity: 0.9,
        idx: 1167,
      },
      {
        RawTweet:
          "['Post Edited: Coronavirus: India Tells Fb, TikTok, Twitter, Different Social \\n#coronavirus #curb #Facebook #firms\\nhttps:\/\/t.co\/r41nFzSGPN']",
        Month: "March",
        "Dimension 1": 6.643605,
        "Dimension 2": 9.980428,
        Sentiment: 0.016666667,
        Subjectivity: 0.333333333,
        idx: 1168,
      },
      {
        RawTweet:
          "Easing restrictions without an adequate healthcare and public health infrastructure in place, including widely available diagnostic testing will come with a steep price both in terms of morbidity and mortality. This is not a game of lives vs livelihoods.",
        Month: "May",
        "Dimension 1": -20.353731,
        "Dimension 2": -24.066338,
        Sentiment: 0.233333333,
        Subjectivity: 0.3,
        idx: 1169,
      },
      {
        RawTweet:
          "b'RT @jflier: The campaign against Tony Fauci is anti-intellectual, anti-science, and anti-human values. All good people must rise to defend\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -15.182763,
        "Dimension 2": -8.029599,
        Sentiment: 0.7,
        Subjectivity: 0.6,
        idx: 1170,
      },
      {
        RawTweet:
          "While it'll take time to have a safe and effective vaccine available in quantities sufficient to inoculate entire populations sometime hopefully in 2021; the challenge of rapidly scaling manufacturing is an urgent focus that governments can directly impact https:\/\/t.co\/okLMiV3OkU",
        Month: "April",
        "Dimension 1": 1.1525357,
        "Dimension 2": -20.522854,
        Sentiment: 0.32,
        Subjectivity: 0.545,
        idx: 1171,
      },
      {
        RawTweet:
          "New study in Nature puts overall symptomatic case fatality rate of #COVID19 in Wuhan at 1.4% (0.9\u20132.1%); lower than prior estimates of City's experience. Uses model of transmission dynamics. Also finds symptomatic infection rises steadily as age increases. https:\/\/t.co\/P06iLwTkbk https:\/\/t.co\/6FaB247ADq",
        Month: "March",
        "Dimension 1": -20.592813,
        "Dimension 2": 20.597656,
        Sentiment: 0.075757576,
        Subjectivity: 0.238636364,
        idx: 1172,
      },
      {
        RawTweet:
          '["#covid19 We are seeing this play out in real time but apparently a game out since the 1950\'s clearly demonstrates that humans are hard-wired to #hoard.\\n\\nJay Forrester, a professor at Massachusetts Institute of Technology, invented\u2026https:\/\/t.co\/8Fi124x3Aq https:\/\/t.co\/4BK1IyI65Z"]',
        Month: "March",
        "Dimension 1": 12.935109,
        "Dimension 2": -2.766289,
        Sentiment: -0.033333333,
        Subjectivity: 0.361111111,
        idx: 1173,
      },
      {
        RawTweet:
          "FDA and HHS leaders could consider convening industry in urgent public-private task forces to accelerate development of diagnostics and now therapeutics. But in the meantime, it\u2019s very encouraging to see companies taking up this urgency and forging their own industry partnership. https:\/\/t.co\/hEvHaLtdxd",
        Month: "March",
        "Dimension 1": 25.236311,
        "Dimension 2": -10.34456,
        Sentiment: 0.4,
        Subjectivity: 0.65,
        idx: 1174,
      },
      {
        RawTweet:
          "b'\\xf0\\x9f\\x96\\x8b Support Kara Stallings by signing \\xe2\\x80\\x9cSupport the USPS!\\xe2\\x80\\x9d and I\\xe2\\x80\\x99ll deliver a copy to your officials too:\\xe2\\x80\\xa6 https:\/\/t.co\/hwXv4VRzQF'",
        Month: "April",
        "Dimension 1": 17.1061,
        "Dimension 2": -1.1147941,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1175,
      },
      {
        RawTweet:
          '"We know from past epidemics of multiple types of viruses that school closure works. We know that it interrupts adult transmission even if the kids are not vectors."\r\nhttps:\/\/t.co\/uQJIxjlrxm',
        Month: "March",
        "Dimension 1": -3.491129,
        "Dimension 2": -22.907166,
        Sentiment: -0.05,
        Subjectivity: 0.183333333,
        idx: 1176,
      },
      {
        RawTweet:
          "b'RT @SteflonMD: New bill would forgive medical school debt for COVID-19 health workers - This should be a no brainer. \\xe2\\x81\\xa6@Cleavon_MD\\xe2\\x81\\xa9 \\xe2\\x81\\xa6@NYEmer\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 20.693808,
        "Dimension 2": 3.4304178,
        Sentiment: 0.068181818,
        Subjectivity: 0.227272727,
        idx: 1177,
      },
      {
        RawTweet:
          "[\"We care deeply about our employees\/clients\/communities and we're taking the #coronavirus seriously. We're focused on ensuring our people and clients are supported and taking appropriate steps and monitoring the impact on the communities we serve. https:\/\/t.co\/tCyjm98IkN\"]",
        Month: "March",
        "Dimension 1": 32.910164,
        "Dimension 2": -17.442099,
        Sentiment: 0.055555556,
        Subjectivity: 0.522222222,
        idx: 1178,
      },
      {
        RawTweet:
          "b'Antony Dowell, our Campaigns and Partnerships Officer, has written a blog on supporting young people\\xe2\\x80\\x99s mental healt\\xe2\\x80\\xa6 https:\/\/t.co\/Ih6l56hVYk'",
        Month: "April",
        "Dimension 1": 32.344494,
        "Dimension 2": 14.378289,
        Sentiment: 0.083333333,
        Subjectivity: 0.283333333,
        idx: 1179,
      },
      {
        RawTweet:
          "When you hear advice to 'social distance' for #COVID19 it can be frustrating to not know exactly what that means, or what do when you must leave the house. @ResolveTSL provides some simple, detailed, practical tips. https:\/\/t.co\/pwDqHFEwq8 https:\/\/t.co\/JfEVhPKvWm",
        Month: "April",
        "Dimension 1": -0.31136134,
        "Dimension 2": -35.12437,
        Sentiment: 0.056666667,
        Subjectivity: 0.464761905,
        idx: 1180,
      },
      {
        RawTweet:
          '#COVID19 outbreak is getting out of control in #Tanzania\r\n\r\nWe continue to have an *exponential* growth of cases .. Today overtaking all countries in EA, with 480 total confirmed cases\r\n\r\nMany reports of deaths in the community from "difficulty breathing" .. only 16 *official* deaths https:\/\/t.co\/eylWrLuZES',
        Month: "April",
        "Dimension 1": -24.948145,
        "Dimension 2": 35.112267,
        Sentiment: 0.225,
        Subjectivity: 0.8125,
        idx: 1181,
      },
      {
        RawTweet:
          "['In the midst of great pandemic #Covid19 we request @CMOGuj @pradipsinhguj @imbhupendrasinh to consider a small request of promoting students of all universities across the state for this semester. #MassPromotion\\n@GTUoffice @gujuni1949 @gujedudept  @abpasmitatv @tv9gujarati']",
        Month: "March",
        "Dimension 1": 28.460865,
        "Dimension 2": 24.044106,
        Sentiment: 0.275,
        Subjectivity: 0.575,
        idx: 1182,
      },
      {
        RawTweet:
          "b'RT @carrie_byington: Every week, I send a #COVID\\xe3\\x83\\xbc19 update to the @UofCalifornia Board of Regents and Chancellors. These updates are now on\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 3.591514,
        "Dimension 2": 41.007927,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1183,
      },
      {
        RawTweet:
          "14) Now, what does this all mean? A) With this assay we can figure out who was infected and who wasn't. That means we can determine the true infection rate and infection fatality rate. B) We can use the assay to screen for people who seroconverted and are now immune.....",
        Month: "March",
        "Dimension 1": -1.9488305,
        "Dimension 2": 1.2727414,
        Sentiment: 0.01875,
        Subjectivity: 0.66875,
        idx: 1184,
      },
      {
        RawTweet:
          "Get your questions ready for me at 3pm EDT. I'm on with @FiercePharma discussing coronavirus vaccine development.\r\n\r\nRegister here::: https:\/\/t.co\/dTQ9ne9CUZ\r\n\r\nI just put on edge control &amp; a little gloss for the moment. Its best I can do with my MUA out of commission. lol",
        Month: "March",
        "Dimension 1": 5.838761,
        "Dimension 2": 14.496676,
        Sentiment: 0.453125,
        Subjectivity: 0.5,
        idx: 1185,
      },
      {
        RawTweet:
          "#SARSCoV2 #Coronavirus #pandemic Interrupting Routine Childhood #Immunizations, U.N. Agencies Warn, Urge Continuance Of #Vaccinations.  #COVID19 https:\/\/t.co\/ETvMTj9nPZ",
        Month: "April",
        "Dimension 1": -3.7042952,
        "Dimension 2": 4.553357,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1186,
      },
      {
        RawTweet:
          "b'CMU halts all international travel until further notice for students, faculty, staff https:\/\/t.co\/44lHdITHsG'",
        Month: "March",
        "Dimension 1": -36.945496,
        "Dimension 2": 0.1341689,
        Sentiment: 0.0,
        Subjectivity: 0.25,
        idx: 1187,
      },
      {
        RawTweet:
          "b'The creativity and imagination with which children from our projects are spreading awareness in the times of\\xe2\\x80\\xa6 https:\/\/t.co\/ZbJSTbZBJR'",
        Month: "May",
        "Dimension 1": 45.5719,
        "Dimension 2": -6.3222065,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1188,
      },
      {
        RawTweet:
          "8\u20e3 All countries should train #healthworkers for infection prevention &amp; control &amp; clinical management specifically for #COVID19 \r\n\r\nHealth authorities around the world have scaled up training of healthcare staff in how to treat patients, supported by @pahowho, @WHOEMRO @WHOAFRO.",
        Month: "March",
        "Dimension 1": 25.429562,
        "Dimension 2": -8.259768,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1189,
      },
      {
        RawTweet:
          "I am thrilled to introduce our recent @AnnualReviews in Chinese! A brilliant graduate student @ZeyuCHEN19 (@EJohnWherry lab) translated synopsis of our review. (Thanks @tianyangmao for connecting us)\r\n\r\n\u4e3a\u4ec0\u4e48\u6d41\u611f\u548c\u65b0\u51a0\u90fd\u662f\u51ac\u5b63\u7206\u53d1\uff1f\r\n\u5b63\u8282\u56e0\u7d20\u5f71\u54cd\u4f20\u64ad\u9014\u5f84\r\n\r\nhttps:\/\/t.co\/X2L19fnUZU https:\/\/t.co\/LchZVfMuIk",
        Month: "April",
        "Dimension 1": 41.91745,
        "Dimension 2": -9.725011,
        Sentiment: 0.34,
        Subjectivity: 0.43,
        idx: 1190,
      },
      {
        RawTweet:
          "['We stand by Italy during these trying times. Share your Support for our Italian friends, They are our colleagues, friends and family. Cari amici, siamo con voi. #COVID19 #WeStandWithItaly']",
        Month: "March",
        "Dimension 1": 43.06605,
        "Dimension 2": -28.194803,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1191,
      },
      {
        RawTweet:
          "['Market mayhem continues; #Sensex falls over 3,800 points\\nhttps:\/\/t.co\/SjcOipDM87\\n#stockmarketcrash #coronavirus', 'Market mayhem continues; #Sensex falls over 3,800 points\\nhttps:\/\/t.co\/SjcOipDM87\\n#stockmarketcrash #coronavirus']",
        Month: "March",
        "Dimension 1": -18.71423,
        "Dimension 2": 44.814342,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1192,
      },
      {
        RawTweet:
          "Very glad to share this news: today, the 1st @UN solidarity flight departs Addis Ababa, \ud83c\uddea\ud83c\uddf9 carrying vital #COVID19 medical supplies to all African nations.\r\nThe Solidarity Flight is part of a larger effort to ship lifesaving medical supplies to 95 countries https:\/\/t.co\/IRPiOP4fg6 https:\/\/t.co\/1hTD1XBOjh",
        Month: "April",
        "Dimension 1": 27.92069,
        "Dimension 2": 29.379194,
        Sentiment: 0.125,
        Subjectivity: 0.316666667,
        idx: 1193,
      },
      {
        RawTweet:
          "['It warms my heart to see that so many research labs have been proactive by temporarily shutting down in the face of #COVID19. Thank you! #wevegotthis #flatteningthecurve']",
        Month: "March",
        "Dimension 1": 21.75309,
        "Dimension 2": -23.078758,
        Sentiment: 0.152777778,
        Subjectivity: 0.394444444,
        idx: 1194,
      },
      {
        RawTweet:
          "@cestlavieinus Respiratory virus have books of ways to evade immune response. They often mask their surface residues with glycans or use \u201cbreathing\u201d to sway away antibodies. 4 Coronaviruses circulate endemically sooooo it\u2019s clear they never induced long term immunity.",
        Month: "April",
        "Dimension 1": -40.438194,
        "Dimension 2": -16.819511,
        Sentiment: 0.025,
        Subjectivity: 0.391666667,
        idx: 1195,
      },
      {
        RawTweet:
          "['The Organization of Iranian American Communities @OrgIAC ,held a conference on #HumanRights in #Iran in the US Senate to mark the Iranian New Year (Nowruz). The conference focused heavily on the #coronavirus &amp; the regime\u2019s inability to solve the crisis.\\nhttps:\/\/t.co\/0c7isjjpB9']",
        Month: "March",
        "Dimension 1": -25.10072,
        "Dimension 2": 8.778006,
        Sentiment: -0.021212121,
        Subjectivity: 0.318181818,
        idx: 1196,
      },
      {
        RawTweet:
          "['The Jupiter Hotel in #PDX is offering 81 rooms in one of its buildings to house homeless people who need to socially distance themselves from others in the shelter due to illness. #koin6news #coronavirus #Oregon #COVID19 #COVID2019 #COVID #virus #outbreak #pandemic #PNW #Portland https:\/\/t.co\/BATL4a3pAr']",
        Month: "March",
        "Dimension 1": -29.053745,
        "Dimension 2": 22.524744,
        Sentiment: -0.045833333,
        Subjectivity: 0.220833333,
        idx: 1197,
      },
      {
        RawTweet:
          "\u201cA cruise line medical officer said Saturday that the man who died brought the virus with him when he boarded the Grand Princess\u201d\u2014 this means, as many of us have been saying, that community spread is likely wide in the US and will only get more prevalent  https:\/\/t.co\/yZfW1Pism9",
        Month: "March",
        "Dimension 1": -26.6521,
        "Dimension 2": 12.585556,
        Sentiment: 0.2,
        Subjectivity: 0.628571429,
        idx: 1198,
      },
      {
        RawTweet:
          "b'RT @john_quattrochi: Thread below is a research agenda for those looking to provide practical guidance to populations struggling with Covid'",
        Month: "May",
        "Dimension 1": 20.413206,
        "Dimension 2": -9.641183,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1199,
      },
      {
        RawTweet:
          "b'RT @meganranney: Lest we forget: PPE shortages are still a very, very real thing across the country, with very, very real consequences.'",
        Month: "April",
        "Dimension 1": -6.5300555,
        "Dimension 2": -9.548879,
        Sentiment: 0.26,
        Subjectivity: 0.39,
        idx: 1200,
      },
      {
        RawTweet:
          "3 questions about shielding:\r\n1. Is it effective? Experience in Sweden &amp; UK shows it's not- look at care homes.\r\n2. Is it acceptable? What healthy &gt;70s think about this &amp; being restricted.\r\n3. Is it ethical? Not sure hiding away elderly\/vulnerable &amp; letting healthy circulate is.",
        Month: "May",
        "Dimension 1": -11.358871,
        "Dimension 2": -31.815447,
        Sentiment: 0.31,
        Subjectivity: 0.657777778,
        idx: 1201,
      },
      {
        RawTweet:
          "For more on the global challenge of firearms, register for today\u2019s 3:00 pm online seminar, \u201cGuns: A Global Epidemic.\u201d https:\/\/t.co\/b0Q3VEPfrO @GunPolicyOrg @SGVProject @GWpublichealth @TheLancet @GoldringNatalie @ahyder1",
        Month: "May",
        "Dimension 1": 3.5775046,
        "Dimension 2": 25.525717,
        Sentiment: 0.166666667,
        Subjectivity: 0.166666667,
        idx: 1202,
      },
      {
        RawTweet:
          "The 3-D Commission combines the insights of social determinants and data to inform decisions that affect the health of populations. Thoughts on how we plan mobilize data on health determinants to inform public health policy. https:\/\/t.co\/2NKOpOeNSA @BUSPH @BUexperts @UN",
        Month: "March",
        "Dimension 1": 26.55656,
        "Dimension 2": -6.0262604,
        Sentiment: 0.016666667,
        Subjectivity: 0.066666667,
        idx: 1203,
      },
      {
        RawTweet:
          "This is now possible with the recent expansion of diagnostic capabilities to state and local public health labs. This effort is underway but it should be expedited. 4\/",
        Month: "March",
        "Dimension 1": 25.670874,
        "Dimension 2": -11.142461,
        Sentiment: 0.0,
        Subjectivity: 0.329166667,
        idx: 1204,
      },
      {
        RawTweet:
          "['Not saying you are late to the party #WHO (absolutely, we are!) but glad you have decided to announce to the rest of the world that #COVID19 is now a #pandemic !!! Ouch. The virus has found a foothold on every continent except for Antarctica. https:\/\/t.co\/r44CX42aFf']",
        Month: "March",
        "Dimension 1": -1.1417396,
        "Dimension 2": 13.747569,
        Sentiment: 0.308854167,
        Subjectivity: 0.833333333,
        idx: 1205,
      },
      {
        RawTweet:
          "['Facebook Makes Its Community Help Feature Available for Covid-19 Efforts: https:\/\/t.co\/PYuhM3w9gC #facebook #coronavirus #covid19 https:\/\/t.co\/r2xgmRsfx1']",
        Month: "March",
        "Dimension 1": 11.477871,
        "Dimension 2": 12.18814,
        Sentiment: 0.4,
        Subjectivity: 0.4,
        idx: 1206,
      },
      {
        RawTweet:
          "b'RT @AEI: \\xe2\\x80\\x9cThe goal is to outline a plan that will allow a gradual return to a more normal way of life without increasing the risk\\xe2\\x80\\x9d\\n@washing\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 21.578384,
        "Dimension 2": -33.068157,
        Sentiment: 0.325,
        Subjectivity: 0.575,
        idx: 1207,
      },
      {
        RawTweet:
          "b'RT @mlipsitch: Incredibly kind of Karestan to say. Passing the admiration on to others we work with @michaelmina_lab @Caroline_OF_B @yhgrad\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 38.837708,
        "Dimension 2": -12.023232,
        Sentiment: 0.6,
        Subjectivity: 0.9,
        idx: 1208,
      },
      {
        RawTweet:
          '"But even if the incidence was \u2b07\ufe0f, the number of Blacks who got influenza in 1918 overwhelmed the health care institutions that were available to them. So black hospitals were overwhelmed. The black community, for the most part, was left on its own.\u201d \/77\r\nhttps:\/\/t.co\/18nXDlgKCE',
        Month: "April",
        "Dimension 1": -25.76019,
        "Dimension 2": 34.071262,
        Sentiment: 0.194444444,
        Subjectivity: 0.461111111,
        idx: 1209,
      },
      {
        RawTweet:
          "In this piece I am quoted about the US decision to defund the WHO which I think is unwise in the midst of a pandemic (despite the WHO's shortcomings with respect to China) and will heighten the impact of the pandemic https:\/\/t.co\/8u7WpEBDbu",
        Month: "April",
        "Dimension 1": -17.17372,
        "Dimension 2": 7.700396,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1210,
      },
      {
        RawTweet:
          "I can always count on Dr. @alexandraphelan to clearly summarize the issues at hand with regard to international public health law and policy. Great thread on whether President Trump can unilaterally terminate our membership in the @WHO. https:\/\/t.co\/LgdQMVHiYa",
        Month: "May",
        "Dimension 1": 4.6577287,
        "Dimension 2": 1.6977869,
        Sentiment: 0.08,
        Subjectivity: 0.38,
        idx: 1211,
      },
      {
        RawTweet:
          "b'\"Coronavirus: President Trump says US will buy $3 billion worth of food from farmers\" #Coronavirus https:\/\/t.co\/zIPJ5Wim2O'",
        Month: "May",
        "Dimension 1": -5.9207935,
        "Dimension 2": 30.471533,
        Sentiment: 0.3,
        Subjectivity: 0.1,
        idx: 1212,
      },
      {
        RawTweet:
          "b'RT @KenRoth: More disastrous Chinese censorship: this virologist, Shi Zhengli, finished sequencing the genes for the new coronavirus on Jan\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -21.850975,
        "Dimension 2": 8.627,
        Sentiment: -0.015909091,
        Subjectivity: 0.438636364,
        idx: 1213,
      },
      {
        RawTweet:
          '["The world seems a scary place at the moment with this #Covid19 but then it\'s all better when a picture of @AlexaBliss_WWE pops up on your feed \ud83d\udc4d\ud83d\ude0a", "The world seems a scary place at the moment with this #Covid19 but then it\'s all better when a picture of @AlexaBliss_WWE pops up on your feed \ud83d\udc4d\ud83d\ude0a"]',
        Month: "March",
        "Dimension 1": -27.629936,
        "Dimension 2": -28.322302,
        Sentiment: 0.0,
        Subjectivity: 0.75,
        idx: 1214,
      },
      {
        RawTweet:
          "b'The #CoronaVirus Epicenter Is Past Peak; It\\xe2\\x80\\x99s Time to End the Shutdowns https:\/\/t.co\/3wcoKvlrpc'",
        Month: "May",
        "Dimension 1": -6.5637784,
        "Dimension 2": 26.16152,
        Sentiment: -0.25,
        Subjectivity: 0.25,
        idx: 1215,
      },
      {
        RawTweet:
          "b'RT @ddiamond: This is remarkable: NYU\\xe2\\x80\\x99s medical school is allowing students to graduate *now*, three months early, to become interns and jo\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 5.0543795,
        "Dimension 2": 47.20674,
        Sentiment: 0.283333333,
        Subjectivity: 0.35,
        idx: 1216,
      },
      {
        RawTweet:
          "b'The #Maharashtra IAS Officers Wives Association has donated Rs 1.75 lakh to the CM Relief Fund to fight the\\xe2\\x80\\xa6 https:\/\/t.co\/vtv0aTAEmR'",
        Month: "April",
        "Dimension 1": -1.9558034,
        "Dimension 2": 35.11848,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1217,
      },
      {
        RawTweet:
          "b'The mighty @HughAcheson sent me this audio postcard from the front lines of feeding first responders - When Feeding\\xe2\\x80\\xa6 https:\/\/t.co\/NjQaX9SRbD'",
        Month: "April",
        "Dimension 1": 30.903479,
        "Dimension 2": 7.69691,
        Sentiment: 0.325,
        Subjectivity: 0.616666667,
        idx: 1218,
      },
      {
        RawTweet:
          "The tweet retweeted above was almost a week ago now. \r\n\r\nTesting deficiencies suggest its likely that, then, we were &gt;4 million infections. Now even more. \r\n\r\nThe unknowns in the #COVID19 testing data make this a very difficult thing to model. \r\n\r\nNew Ab tests are key.",
        Month: "April",
        "Dimension 1": -16.910185,
        "Dimension 2": 26.113422,
        Sentiment: -0.002272727,
        Subjectivity: 0.675757576,
        idx: 1219,
      },
      {
        RawTweet:
          "9) So we had the following sera from controls (not exposed to COVID19) and from COVID19 patients.The controls are from different age groups. Also, we had serum from a person with a confirmed NL63 infection. NL63 is a human CoV that causes common cold and uses the same receptor... https:\/\/t.co\/Rb3tpftSPt",
        Month: "March",
        "Dimension 1": -3.3135946,
        "Dimension 2": 1.7472142,
        Sentiment: -0.071428571,
        Subjectivity: 0.489285714,
        idx: 1220,
      },
      {
        RawTweet:
          "['Dutch researchers claim to have found an antibody against #COVID\u30fc19 #coronavirus  It still has to be tested on humans. https:\/\/t.co\/ioUz15rafI']",
        Month: "March",
        "Dimension 1": 1.7163721,
        "Dimension 2": 2.9349878,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1221,
      },
      {
        RawTweet:
          '["Our new procedures include sanitizing after each client. One set of clients at a time. We\'re also working virtually using Zoom, website and phones. We can deliver documents for final signing. #workingvirtually, #coronavirus, #zoom, #socialdistancing https:\/\/t.co\/oq4qvQbvWS"]',
        Month: "March",
        "Dimension 1": 37.963463,
        "Dimension 2": 7.154679,
        Sentiment: 0.068181818,
        Subjectivity: 0.727272727,
        idx: 1222,
      },
      {
        RawTweet:
          "I need an email reader. Someone to just provide a summary to reply all threads. Like bro, what is my team\u2019s action item at the end of this back and forth???",
        Month: "April",
        "Dimension 1": 38.91871,
        "Dimension 2": 8.366509,
        Sentiment: 0.05,
        Subjectivity: 0.05,
        idx: 1223,
      },
      {
        RawTweet:
          "b'Given what we know now, what does the future hold for #dementia #research, #care and policy after #covid19? Join us\\xe2\\x80\\xa6 https:\/\/t.co\/gYZd7gGs9F'",
        Month: "May",
        "Dimension 1": 24.118673,
        "Dimension 2": -4.387625,
        Sentiment: 0.0,
        Subjectivity: 0.125,
        idx: 1224,
      },
      {
        RawTweet:
          "b'RT @AndyBiotech: \\xf0\\x9f\\x95\\xafRIP Dr. Marcello Natali \\xf0\\x9f\\x99\\x8f\\n\\nItalian doc who warned about lack of PPE for medical workers, died from #COVID19 after working\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -36.142204,
        "Dimension 2": 14.14319,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1225,
      },
      {
        RawTweet:
          "My message on @GMB- we have had 8 weeks to learn &amp; we are wasting time to act.\r\n\r\n1. Testing &amp; breaking chains of transmission\r\n2. Social distancing to buy time for NHS to build capacity\r\n3.Protect health staff through testing &amp; appropriate PPE (personal protective equipment)..",
        Month: "March",
        "Dimension 1": -20.85286,
        "Dimension 2": 27.267673,
        Sentiment: 0.177777778,
        Subjectivity: 0.288888889,
        idx: 1226,
      },
      {
        RawTweet:
          'b"Hey ladies! All those bras you\'re no longer wearing? Cut off the straps and - BAM! - use them as face mask ties. So\\xe2\\x80\\xa6 https:\/\/t.co\/Iv6ErdfiK5"',
        Month: "April",
        "Dimension 1": 16.017078,
        "Dimension 2": 4.2455053,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1227,
      },
      {
        RawTweet:
          "b'Staff at Advocate South Suburban ER -The VJAndrew Boys Water Polo Team and Gattos Resturant in Tinley Park is provi\\xe2\\x80\\xa6 https:\/\/t.co\/TK2BuTa2gz'",
        Month: "April",
        "Dimension 1": 29.056591,
        "Dimension 2": 8.452949,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1228,
      },
      {
        RawTweet:
          "b'#TASLTechDay\\nTATA Advanced Systems Limited-Cyber Security Practice successfully organized its first quarter\\xe2\\x80\\x99s Tech\\xe2\\x80\\xa6 https:\/\/t.co\/xGTUBG7YVG'",
        Month: "April",
        "Dimension 1": 43.766933,
        "Dimension 2": 8.924521,
        Sentiment: 0.466666667,
        Subjectivity: 0.627777778,
        idx: 1229,
      },
      {
        RawTweet:
          "b'RT @WHO: #AskWHO on mental health during #COVID19. Ask your questions to our expert Aiysha Malik. https:\/\/t.co\/7iUsK6sSE1'",
        Month: "March",
        "Dimension 1": 19.910034,
        "Dimension 2": 10.266796,
        Sentiment: -0.1,
        Subjectivity: 0.2,
        idx: 1230,
      },
      {
        RawTweet:
          '["just got a push notification that a middle schooler at a school next to my kids\' tested positive for #COVID19 \\n\\nmy most interacted with tweet this year is about my local grocers being out of sanitizer but not soap\\n\\nwe should be taking this much more seriously than we are"]',
        Month: "March",
        "Dimension 1": -11.876782,
        "Dimension 2": 21.794867,
        Sentiment: 0.127705628,
        Subjectivity: 0.316017316,
        idx: 1231,
      },
      {
        RawTweet:
          "But I've never seen so much sense of purpose. So much honor to do this job.\r\n\r\nI think of this when I finally get home. Clothes in a bag. Hot shower. Look in the mirror. Indentations of the goggles still deep on my face. Bllisters on the bridge of my nose.\r\n\r\nHow long will we hold?",
        Month: "April",
        "Dimension 1": 4.0523114,
        "Dimension 2": -15.106396,
        Sentiment: 0.1,
        Subjectivity: 0.508333333,
        idx: 1232,
      },
      {
        RawTweet:
          "['The #coronavirus has sparked a race among investors to gain an edge by finding #externaldata sources that can be used to measure just how bad the #economic pain in #China is \u2014 and when the recovery is beginning. https:\/\/t.co\/7FRJPXh8jc']",
        Month: "March",
        "Dimension 1": -16.341488,
        "Dimension 2": 7.014029,
        Sentiment: -0.25,
        Subjectivity: 0.433333333,
        idx: 1233,
      },
      {
        RawTweet:
          "b'RT @EricTopol: What will go down as the biggest breakdown in the US response to #COVID19 is the lack of test kits. South Korea and the US h\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -30.723515,
        "Dimension 2": -16.54135,
        Sentiment: -0.155555556,
        Subjectivity: 0.288888889,
        idx: 1234,
      },
      {
        RawTweet:
          "b'To help U.S. #smallbusinesses weather the #COVID19 crisis, the govt is working to get SBA loans into the hands of s\\xe2\\x80\\xa6 https:\/\/t.co\/vUrt4NNk5a'",
        Month: "April",
        "Dimension 1": 16.977753,
        "Dimension 2": 19.419231,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1235,
      },
      {
        RawTweet:
          "@RMendozaMD @sohailqm @Sara_Jiang @euthman @LABCORP #COVID19 #capchat Testing performed at CDC\/state laboratories is not being charged a fee. The reagent costs are however of course not particularly expensive. so the real question is whether patients are going to get hit with $1000's bills just for coming in. We do not want 2\/n",
        Month: "March",
        "Dimension 1": -16.610512,
        "Dimension 2": -36.882885,
        Sentiment: 0.225,
        Subjectivity: 0.5,
        idx: 1236,
      },
      {
        RawTweet:
          "@nomorecakepls @_b_meyer Depends on the \u201ccold\u201d virus. Depends on how long ago. Depends on the person. Everything depends on more research around these theories, in general.",
        Month: "April",
        "Dimension 1": -13.868773,
        "Dimension 2": -24.698353,
        Sentiment: -0.025,
        Subjectivity: 0.6,
        idx: 1237,
      },
      {
        RawTweet:
          'b"RT @ScottGottliebMD: THREAD: We\'re not out of the woods in U.S. on #covid. While there are signs of slowing in some areas, and nationally w\\xe2\\x80\\xa6"',
        Month: "April",
        "Dimension 1": -22.579659,
        "Dimension 2": -29.28476,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1238,
      },
      {
        RawTweet:
          "Different times call for different measures &amp; the leading tactic now is #flatteningthecurve. But it is not a strategy. \r\n@ResolveTSL developed a concept for the stages of response needed as countries progress through #COVID19 curve. New OpEd for @CNN Read: https:\/\/t.co\/pmOD3sZQbZ https:\/\/t.co\/7BF006Wwtf",
        Month: "March",
        "Dimension 1": -12.2213335,
        "Dimension 2": -23.713217,
        Sentiment: 0.059090909,
        Subjectivity: 0.488636364,
        idx: 1239,
      },
      {
        RawTweet:
          "Contact tracing is an important service to scale up so we can reopen sooner &amp; more safely. @CDCgov posted excellent guidance for establishing contact tracing teams. Contact tracing is a specialized service to support patients &amp; those they may have exposed. https:\/\/t.co\/KavkXihzQl",
        Month: "April",
        "Dimension 1": 27.117365,
        "Dimension 2": -11.312179,
        Sentiment: 0.6,
        Subjectivity: 0.75,
        idx: 1240,
      },
      {
        RawTweet:
          "['\"When we have new viruses that we don\u2019t have medications to treat, and we don\u2019t have a built-in immune system to protect against infections or a resistance to these types of infections...\" #HighRiskCovid19 #Imuran #Crohns #IBD #COVID19 #Coronavirus #WHO  https:\/\/t.co\/SbBldOfsdG']",
        Month: "March",
        "Dimension 1": -36.368855,
        "Dimension 2": -15.021711,
        Sentiment: 0.136363636,
        Subjectivity: 0.454545455,
        idx: 1241,
      },
      {
        RawTweet:
          "b'RT @FaceTheNation: .@ScottGottliebMD on the ousting of @BARDA\\'s Rick Bright, a vaccine expert for the administration: \"I was sorry to see h\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -22.264812,
        "Dimension 2": 0.9677333,
        Sentiment: 0.1,
        Subjectivity: 0.9,
        idx: 1242,
      },
      {
        RawTweet:
          "['I think smart people feel the need to predict things that they have no control over so they can look like they took control.  What a waste of smarts. #covid19']",
        Month: "March",
        "Dimension 1": -13.578032,
        "Dimension 2": -30.302227,
        Sentiment: 0.007142857,
        Subjectivity: 0.321428571,
        idx: 1243,
      },
      {
        RawTweet:
          "['How does #coronavirus bind to our #cells? Here are some insights on the #protein mechanism that is involved, based on recent #research! More in this thread \ud83d\udc47\ud83c\udffd#COVID19 #SciComm', 'How does #coronavirus bind to our #cells? Here are some insights on the #protein mechanism that is involved, based on recent #research! More in this thread \ud83d\udc47\ud83c\udffd#COVID19 #SciComm']",
        Month: "March",
        "Dimension 1": 23.135296,
        "Dimension 2": 0.33553737,
        Sentiment: 0.25,
        Subjectivity: 0.375,
        idx: 1244,
      },
      {
        RawTweet:
          "Serology (testing for antibodies people produce after being exposed to #COVID19) tells you where you\u2019ve been. It doesn\u2019t tell you where you\u2019re going. In other words, it reveals where infection has spread. But doesn\u2019t diagnose active infection or tell you where it\u2019s spreading. 3\/n",
        Month: "April",
        "Dimension 1": -17.304823,
        "Dimension 2": -25.132502,
        Sentiment: -0.129166667,
        Subjectivity: 0.4875,
        idx: 1245,
      },
      {
        RawTweet:
          "@MackayIM @trvrb @phylogenypluckr my feeling is contamination is far too likely an explanation to go forward with the announcement. I do believe the test was positive. But was it a more recent virus from a nearby well - that\u2019s my concern.",
        Month: "May",
        "Dimension 1": -14.883424,
        "Dimension 2": -24.091288,
        Sentiment: 0.165454545,
        Subjectivity: 0.659090909,
        idx: 1246,
      },
      {
        RawTweet:
          "since Nature Methods is a journal focused on the 'methods' aspect of papers\r\nwe could have a journal called Nature Discussion where people just write random speculative thoughts about science",
        Month: "May",
        "Dimension 1": -34.33798,
        "Dimension 2": -23.443346,
        Sentiment: -0.5,
        Subjectivity: 0.5,
        idx: 1247,
      },
      {
        RawTweet:
          "b'Lessons learned by people in #recovery from #addiction are now, in the face of #COVID19, relevant to everyone\\xe2\\x80\\xa6 https:\/\/t.co\/fwgIgdfmd2'",
        Month: "April",
        "Dimension 1": 34.445194,
        "Dimension 2": -14.34216,
        Sentiment: 0.4,
        Subjectivity: 0.9,
        idx: 1248,
      },
      {
        RawTweet:
          "['\"It may seem counterintuitive\\xa0to discuss church history in a pandemic; we live in an era of hazmat suits, microbiology, hand sanitizer. While our approach to disease differs there is wisdom in the posture of past faith communities.\"\\n#coronavirus #pastors \\nhttps:\/\/t.co\/QKBIAnUS6w']",
        Month: "March",
        "Dimension 1": -0.879542,
        "Dimension 2": -1.4540086,
        Sentiment: -0.056818182,
        Subjectivity: 0.375,
        idx: 1249,
      },
      {
        RawTweet:
          "['Another very welcomed letter to contract for services AEB providers in London from @JulesPipe confirming supporting the provider base during #Covid19 &amp; following @cabinetofficeuk official procurement advice  #London #GLA #PayOnProfile @AELPUK - just waiting for @ESFAgov  now..... https:\/\/t.co\/84Pt6Eeh5W', 'Another very welcomed letter to contract for services AEB providers in London from @JulesPipe confirming supporting the provider base during #Covid19 &amp; following @cabinetofficeuk official procurement advice  #London #GLA #PayOnProfile @AELPUK - just waiting for @ESFAgov  now..... https:\/\/t.co\/84Pt6Eeh5W']",
        Month: "March",
        "Dimension 1": 34.60772,
        "Dimension 2": -5.5716305,
        Sentiment: -0.0875,
        Subjectivity: 0.4125,
        idx: 1250,
      },
      {
        RawTweet:
          "b'RT @DrEricLevi: 1391 kids tested. 12% positive for #COVID19. Average age 6.7. 48.5% had no fever. 15% no symptoms.\\n\\nKids can be carriers of\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 3.4604497,
        "Dimension 2": 22.450281,
        Sentiment: 0.038636364,
        Subjectivity: 0.472727273,
        idx: 1251,
      },
      {
        RawTweet:
          "@LangloisLab Sorry :( Yes, I think it is more the problem of sticking to the protocol. Trizol:Chloroform works certainly great as well. And I guess if kits run out, that is the next step. Might actually not be a bad idea but would need to be validated.",
        Month: "March",
        "Dimension 1": -7.088855,
        "Dimension 2": -30.425358,
        Sentiment: 0.066666667,
        Subjectivity: 0.652777778,
        idx: 1252,
      },
      {
        RawTweet:
          "b'RT @HomertonCollege: Homerton Fellow and Director of @THIS_Institute Professor @MaryDixonWoods explores the role of research is supporting\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 22.98245,
        "Dimension 2": -5.3887234,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1253,
      },
      {
        RawTweet:
          '@JInterlandi @DrDavidKatz The "herd immunity for young plus shield the elderly" approach is naive because 1) most of the population is not elderly, and even with lower death\/ICU rates in younger people, in the aggregate there would be a lot of terrible consequences even if we could shield the elderly',
        Month: "March",
        "Dimension 1": -21.940582,
        "Dimension 2": -15.784477,
        Sentiment: -0.14,
        Subjectivity: 0.58,
        idx: 1254,
      },
      {
        RawTweet:
          "['On Monday, March 16, WPS will join surrounding districts in closing its facilities one week in advance of the regularly scheduled Spring Break. This decision will help slow the spread of the coronavirus #COVID19\\n\\nMore info &gt; https:\/\/t.co\/TtGM6BFObn']",
        Month: "March",
        "Dimension 1": -10.746966,
        "Dimension 2": 27.701332,
        Sentiment: -0.15,
        Subjectivity: 0.238461538,
        idx: 1255,
      },
      {
        RawTweet:
          "b'@madonna_MONROE Gurl, idk how you live with a health care worker. I would be at a hotel cause my anxiety!!!'",
        Month: "April",
        "Dimension 1": 10.032313,
        "Dimension 2": 22.194908,
        Sentiment: 0.266335227,
        Subjectivity: 0.5,
        idx: 1256,
      },
      {
        RawTweet:
          'b"People who criticize what (some) Chinese people eat have never seen the menu at Applebee\'s.  #coronavirus #COVID19"',
        Month: "March",
        "Dimension 1": -39.950172,
        "Dimension 2": -13.5294485,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1257,
      },
      {
        RawTweet:
          "['Ashraf Zadshir, #Iranian expert on infective viruses: \\nHIV or #coronavirus, deadly disease is controllable only with Gov participation. My clinic is crowdy but vast solution is to distant from others. Priority is, take all necessary measures but just see how the regime reacts! https:\/\/t.co\/9bTuNr0Aiy']",
        Month: "March",
        "Dimension 1": -3.851247,
        "Dimension 2": -10.717644,
        Sentiment: -0.06,
        Subjectivity: 0.75,
        idx: 1258,
      },
      {
        RawTweet:
          "b'RT @BNODesk: Philippines President Duterte puts Metro Manila on lockdown due to coronavirus; travel in and out of the capital will be prohi\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -27.526493,
        "Dimension 2": 0.56427324,
        Sentiment: -0.125,
        Subjectivity: 0.375,
        idx: 1259,
      },
      {
        RawTweet:
          "b'22-MAR-2020 :: COVID-19 and a Rolling Sudden Stop #COVID19 https:\/\/t.co\/ylKXRpYeg4 \\n\\xe2\\x9e\\xa1\\xef\\xb8\\x8fThe price of crude oil is per\\xe2\\x80\\xa6 https:\/\/t.co\/IBOoRYxzPQ'",
        Month: "April",
        "Dimension 1": -17.139263,
        "Dimension 2": 15.432619,
        Sentiment: -0.35,
        Subjectivity: 0.75,
        idx: 1260,
      },
      {
        RawTweet:
          "b'South Korean firm starts production of #COVID19 Rapid Antibody Testing kits in India. https:\/\/t.co\/akBZFF2DeL'",
        Month: "April",
        "Dimension 1": 3.8090146,
        "Dimension 2": 17.14119,
        Sentiment: -0.2,
        Subjectivity: 0.4,
        idx: 1261,
      },
      {
        RawTweet:
          "Warm &amp; humidified indoor environment is key to boost our immune defense against respiratory viruses. Wearing a mask or covering your nose with scarf can also help maintain moisture and warmth in your nose. For more, read \ud83d\udc47\ud83c\udffd\r\n\r\n(end)\r\n\r\nhttps:\/\/t.co\/Hbtr8l6Y0Q",
        Month: "April",
        "Dimension 1": 18.701094,
        "Dimension 2": -22.12215,
        Sentiment: 0.366666667,
        Subjectivity: 0.7,
        idx: 1262,
      },
      {
        RawTweet:
          "b'RT @francaronchese: My second retweet in 24h from @VirusesImmunity. Do we actually know that #Covid19 induces protective immunity? Not yet.\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 3.2121518,
        "Dimension 2": 4.00848,
        Sentiment: 0.0,
        Subjectivity: 0.05,
        idx: 1263,
      },
      {
        RawTweet:
          'Inspiring story from Anna, a 90-year-old Long Island resident in NYC: "If I did, you can do it.\u201d\r\nLet her story act as a reminder that we can and will beat #COVID19 together!\r\nhttps:\/\/t.co\/ueD5oQz7Rq',
        Month: "April",
        "Dimension 1": 34.81649,
        "Dimension 2": 13.061773,
        Sentiment: 0.21875,
        Subjectivity: 0.7,
        idx: 1264,
      },
      {
        RawTweet:
          "I was honoured to speak about #COVID19 with Their Majesties King Philippe and Queen Mathilde of #Belgium. I shared with them the latest updates on measures being taken worldwide to stop the #coronavirus, vaccine R&amp;D, plus mental health considerations &amp; WHO's work in this field.",
        Month: "April",
        "Dimension 1": 30.290653,
        "Dimension 2": -18.90138,
        Sentiment: 0.2,
        Subjectivity: 0.55,
        idx: 1265,
      },
      {
        RawTweet:
          "I call on all countries to continue taking steps that have proven to be effective in limiting the number of #COVID19 cases, slowing spread, and saving lives as a result https:\/\/t.co\/aNBlvlIRxH\r\n#coronavirus",
        Month: "March",
        "Dimension 1": 28.394947,
        "Dimension 2": -19.297363,
        Sentiment: 0.6,
        Subjectivity: 0.8,
        idx: 1266,
      },
      {
        RawTweet:
          "b'#Karnataka Governor #VajubhaiVala donated 30 per cent of his salary to the PM Cares Fund, set up to fight\\xe2\\x80\\xa6 https:\/\/t.co\/RdCn2yfJ4B'",
        Month: "April",
        "Dimension 1": -2.3030956,
        "Dimension 2": 35.23547,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1267,
      },
      {
        RawTweet:
          "['@AlaskaAir\\n Will not give me a future credit voucher for my upcoming March 11 flight into Seattle. Death toll in Washington from #COVID19 is up to 10. Businesses are asking employees to work from home. Schools are closing. Yet Alaska wants me to fly into that or forfeit my cost.', '@AlaskaAir\\n Will not give me a future credit voucher for my upcoming March 11 flight into Seattle. Death toll in Washington from #COVID19 is up to 10. Businesses are asking employees to work from home. Schools are closing. Yet Alaska wants me to fly into that or forfeit my cost.', '@AlaskaAir\\n Will not give me a future credit voucher for my upcoming March 11 flight into Seattle. Death toll in Washington from #COVID19 is up to 10. Businesses are asking employees to work from home. Schools are closing. Yet Alaska wants me to fly into that or forfeit my cost.']",
        Month: "March",
        "Dimension 1": -39.92194,
        "Dimension 2": -0.5192678,
        Sentiment: 0.333333333,
        Subjectivity: 0.375,
        idx: 1268,
      },
      {
        RawTweet:
          "My op ed tonight in @washingtonpost on need for coordinated mitigation efforts to slow #COVID19 and direct financial support for those affected by these measures - and why geographic quarantines are a bad idea for America, writing with colleague @cmyeaton https:\/\/t.co\/9aomL4p7B2",
        Month: "March",
        "Dimension 1": -10.676421,
        "Dimension 2": -12.737736,
        Sentiment: -0.225,
        Subjectivity: 0.366666667,
        idx: 1269,
      },
      {
        RawTweet:
          '"I, Mayor Ron Nirenberg, declare that ingress into and travel through the City of San Antonio from Lackland by those persons that have been quarantined in the facility is not permitted" -- declaration of his own irrationality https:\/\/t.co\/5x7OBmxzPr',
        Month: "March",
        "Dimension 1": -36.771873,
        "Dimension 2": -4.5931735,
        Sentiment: 0.6,
        Subjectivity: 1.0,
        idx: 1270,
      },
      {
        RawTweet:
          "@vbahety I am not sure. I am actually curious what will happen. They officially had 80k infections, likely more. But the vast majority of their population is still susceptible. So there is a big risk it comes back at some point.",
        Month: "March",
        "Dimension 1": -22.911726,
        "Dimension 2": 33.40175,
        Sentiment: 0.021428571,
        Subjectivity: 0.641269841,
        idx: 1271,
      },
      {
        RawTweet:
          "@oeli16 @LiGrundl @c_drosten Yes the tests are being developed and some in use. \r\n\r\nMany are not particularly good. Others though are very specific and can be optimized to be really very specific and sensitive. They will be increasingly utilized in coming weeks.",
        Month: "April",
        "Dimension 1": -16.528551,
        "Dimension 2": 23.473917,
        Sentiment: 0.058333333,
        Subjectivity: 0.4375,
        idx: 1272,
      },
      {
        RawTweet:
          "b'The people that are protesting the #COVID19 restrictions, dont have the awareness to know they are fighting on the\\xe2\\x80\\xa6 https:\/\/t.co\/LGduNasq2S'",
        Month: "May",
        "Dimension 1": -22.719248,
        "Dimension 2": -9.97015,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1273,
      },
      {
        RawTweet:
          "b'\"#Tehran Is Contaminated With the #coronavirus \"\\nWhile authorities try to portray that they succeeded to contain th\\xe2\\x80\\xa6 https:\/\/t.co\/VaAh1hf4b9'",
        Month: "May",
        "Dimension 1": -14.937324,
        "Dimension 2": 2.756776,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1274,
      },
      {
        RawTweet:
          "['We stand by Italy during these trying times. Share your Support for our Italian friends, They are our colleagues, friends and family. Cari amici, siamo con voi. #COVID19 #WeStandWithItaly']",
        Month: "March",
        "Dimension 1": 43.06605,
        "Dimension 2": -28.194803,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1275,
      },
      {
        RawTweet:
          "b'It will take all of us to defeat the #covid19 pandemic. Let\\xe2\\x80\\x99s stand as one and urge world leaders to join a global\\xe2\\x80\\xa6 https:\/\/t.co\/F8k3BUA9K2'",
        Month: "April",
        "Dimension 1": -7.2752643,
        "Dimension 2": -14.530834,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1276,
      },
      {
        RawTweet:
          "b'Bookmark this! A list of FREE #COVID19 Health IT products and services that are being offered during the pandemic:\\xe2\\x80\\xa6 https:\/\/t.co\/h0G23LtQP2'",
        Month: "April",
        "Dimension 1": 39.253902,
        "Dimension 2": 0.9756186,
        Sentiment: 0.4,
        Subjectivity: 0.8,
        idx: 1277,
      },
      {
        RawTweet:
          "b'@trishgreenhalgh Not a peer reviewed paper about effectiveness, but a resource on the general process.\\n\\nhttps:\/\/t.co\/CuE1YrpqcC'",
        Month: "May",
        "Dimension 1": -33.564156,
        "Dimension 2": -21.116043,
        Sentiment: 0.05,
        Subjectivity: 0.5,
        idx: 1278,
      },
      {
        RawTweet:
          "@taylorxtaylor2 Why don\u2019t you just find access to all my old tweets then? There ain\u2019t nothing to hide. I was talking to my friends as I do. Contact them or anyone for that matter.",
        Month: "April",
        "Dimension 1": 39.142406,
        "Dimension 2": 7.6874213,
        Sentiment: 0.1,
        Subjectivity: 0.2,
        idx: 1279,
      },
      {
        RawTweet:
          "b'RT @dssiraj: @lia_tadesse Thank you @lia_tadesse for this update. The mandatory 14 day quarantine for all arrivals seems to be working!! 4\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 44.088028,
        "Dimension 2": -2.7113733,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1280,
      },
      {
        RawTweet:
          "b'RT @PubHealthPost: Databyte: Opioid Ups + Downs. For the first time since 1999, the national drug overdose death rate declined in 2018, an\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -21.478535,
        "Dimension 2": 36.200554,
        Sentiment: 0.25,
        Subjectivity: 0.333333333,
        idx: 1281,
      },
      {
        RawTweet:
          "b'Switzerland\\xe2\\x80\\x99s government outlined a plan to pull out of the country\\xe2\\x80\\x99s #coronavirus shutdown in three phases, joinin\\xe2\\x80\\xa6 https:\/\/t.co\/lxmaNtTSbo'",
        Month: "April",
        "Dimension 1": -25.223478,
        "Dimension 2": 5.721716,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1282,
      },
      {
        RawTweet:
          "But there's no functioning healthcare with hospitals overwhelmed, no return to work with people terrified of a virus raging uncontrolled. There are two ways to end this. Let a vast swath of people catch covid which is unthinkable, or break the epidemic. We must choose the latter",
        Month: "March",
        "Dimension 1": -29.907017,
        "Dimension 2": -13.723749,
        Sentiment: -0.016666667,
        Subjectivity: 0.6,
        idx: 1283,
      },
      {
        RawTweet:
          '["it\'s official: Dortmund v Schalke Ruhr valley derby to be played in empty stadium says city of Dortmund. #coronavirus #Bundesliga #BVB #BVBS04"]',
        Month: "March",
        "Dimension 1": -42.596527,
        "Dimension 2": 1.7409488,
        Sentiment: -0.1,
        Subjectivity: 0.5,
        idx: 1284,
      },
      {
        RawTweet:
          "['Empty stadiums today Because Coronavirus out of control \\nCricket Fan today watching match on home\\n#AUSvNZ \\n#coronavirus https:\/\/t.co\/ns01vynjGH']",
        Month: "March",
        "Dimension 1": -42.19899,
        "Dimension 2": 0.28380808,
        Sentiment: -0.1,
        Subjectivity: 0.5,
        idx: 1285,
      },
      {
        RawTweet:
          "b'\\xf0\\x9f\\x94\\xbaAlert\\xf0\\x9f\\x94\\xbb\\nPM @narendramodi to hold a video conference with #chiefminister\/Administrators of all States and Union Terr\\xe2\\x80\\xa6 https:\/\/t.co\/b9OUybH52V'",
        Month: "April",
        "Dimension 1": 15.865483,
        "Dimension 2": 0.68843544,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1286,
      },
      {
        RawTweet:
          "b'Make sure you test positive for faith.\\n\\nKeep distance from doubt, and isolate from fear.\\n\\nTrust God through it all\\xe2\\x80\\xa6 https:\/\/t.co\/xrXA4IAdn7'",
        Month: "May",
        "Dimension 1": 32.798134,
        "Dimension 2": -31.053041,
        Sentiment: 0.363636364,
        Subjectivity: 0.717171717,
        idx: 1287,
      },
      {
        RawTweet:
          "b'#Coronavirus: We have arrested over 400 vehicles for violating Lockdown Order in the state \\xe2\\x80\\x93 Governor Sanwo-Olu\\xe2\\x80\\xa6 https:\/\/t.co\/rNjEqNE0My'",
        Month: "April",
        "Dimension 1": -33.3106,
        "Dimension 2": 25.150917,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1288,
      },
      {
        RawTweet:
          "b'RT @ashishkjha: The President today decided to continue federal advisory for social distancing through the end of April\\n\\nHe made the right\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 5.1411314,
        "Dimension 2": 38.95195,
        Sentiment: 0.033333333,
        Subjectivity: 0.066666667,
        idx: 1289,
      },
      {
        RawTweet:
          "b'The amount of people wearing masks isn\\xe2\\x80\\x99t the weird part anymore. It\\xe2\\x80\\x99s the fact they don\\xe2\\x80\\x99t even cover their nose. Wh\\xe2\\x80\\xa6 https:\/\/t.co\/Qj2OW5IPrc'",
        Month: "May",
        "Dimension 1": -28.705471,
        "Dimension 2": -24.365288,
        Sentiment: -0.5,
        Subjectivity: 1.0,
        idx: 1290,
      },
      {
        RawTweet:
          "b'Working from home is a solution for Small Businesses amid COVID-19 Social Distancing.  Read more:\\xe2\\x80\\xa6 https:\/\/t.co\/6ckCco9Ht0'",
        Month: "April",
        "Dimension 1": 33.801857,
        "Dimension 2": 16.158102,
        Sentiment: -0.108333333,
        Subjectivity: 0.233333333,
        idx: 1291,
      },
      {
        RawTweet:
          '["#BREAKING: The #NRL 2020 season has been suspended indefinitely due to the worsening #COVID19 outbreak, Chairman Peter V\'landys announced. https:\/\/t.co\/4bg87B1opM"]',
        Month: "March",
        "Dimension 1": -35.407417,
        "Dimension 2": 3.1195626,
        Sentiment: -0.125,
        Subjectivity: 0.375,
        idx: 1292,
      },
      {
        RawTweet:
          "['#COVID19 #Italy #Coviditalia\\nThe situation in Italy (March 12), English version : https:\/\/t.co\/Yr0vkw7Sde', '#COVID19 #Italy #Coviditalia\\nThe situation in Italy (March 12), English version : https:\/\/t.co\/Yr0vkw7Sde']",
        Month: "March",
        "Dimension 1": 10.7372675,
        "Dimension 2": 18.42316,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1293,
      },
      {
        RawTweet:
          '["With all these schools having to shut for #COVID19, @coursera, @BrandeisGPS and the like are looking better and better.\\n\\nPersonally, I\'m going through a @BerkleeOnline guitar \ud83c\udfb8 course."]',
        Month: "March",
        "Dimension 1": -12.152565,
        "Dimension 2": 6.6904664,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1294,
      },
      {
        RawTweet:
          "\ud83c\udde8\ud83c\uddf3, where 80% of the #COVID19 cases have occurred, has slowed the spread through actions that are universally applicable:\r\n-identify people who are sick, bring them to care\r\n-follow up on contacts\r\n-prepare \ud83c\udfe5 &amp; clinics for a surge in patients\r\n-train #healthworkers",
        Month: "March",
        "Dimension 1": -21.344133,
        "Dimension 2": 27.683596,
        Sentiment: -0.357142857,
        Subjectivity: 0.428571429,
        idx: 1295,
      },
      {
        RawTweet:
          "More on COVID Serology from @marionkoopmans and large group of collaborators  SARS-CoV-2 specific antibody responses in COVID-19 patients https:\/\/t.co\/04F6tyzrhK",
        Month: "March",
        "Dimension 1": 25.140566,
        "Dimension 2": 5.530663,
        Sentiment: 0.238095238,
        Subjectivity: 0.351190476,
        idx: 1296,
      },
      {
        RawTweet:
          'd) Great quotes:\r\nClinic leader: "Somehow, some swabs have appeared!" Command Ctr leader (looking at NY vs SF #s): "If we\'re accused of overreacting in a few wks, we\'ll call that a success."\r\n\r\nRemember, @youtube video https:\/\/t.co\/EyCppS4Kzi is v. informative. Worth your time (4\/4)',
        Month: "March",
        "Dimension 1": 28.541754,
        "Dimension 2": -1.5176492,
        Sentiment: 0.35,
        Subjectivity: 0.2375,
        idx: 1297,
      },
      {
        RawTweet:
          "b'#covid19 Did you know that everyday in the world 150,000 people die every single day from something!  But New Birth\\xe2\\x80\\xa6 https:\/\/t.co\/w3Bnng9q6B'",
        Month: "May",
        "Dimension 1": -18.337662,
        "Dimension 2": 39.588474,
        Sentiment: -0.050974026,
        Subjectivity: 0.422943723,
        idx: 1298,
      },
      {
        RawTweet:
          "Join me at 8PM ET tonight for a live @munkdebate Q&amp;A, where we'll discuss #covid19 and the post-pandemic world. \r\nTune in on Facebook: https:\/\/t.co\/6MYgYDvkHZ\r\n\r\nOr on the Munk Debates website: https:\/\/t.co\/uzlJlGoaUL",
        Month: "May",
        "Dimension 1": 9.651692,
        "Dimension 2": 40.25736,
        Sentiment: 0.136363636,
        Subjectivity: 0.5,
        idx: 1299,
      },
      {
        RawTweet:
          'Trying to keep up with science. Today, report on 10K HCW in US infected from @CDCgov @CDCMMWR - hard to comprehend; Iceland in @NEJM: "unless we test &amp; isolate, track contacts, &amp; quarantine, we are likely to fail in our efforts to contain the virus" RIGHT! https:\/\/t.co\/uUXqVI5AQS',
        Month: "April",
        "Dimension 1": -15.234729,
        "Dimension 2": 26.379333,
        Sentiment: -0.108630952,
        Subjectivity: 0.594345238,
        idx: 1300,
      },
      {
        RawTweet:
          "The  differences between these mice is thier genetics. These are all young animals (equal 20-30s human). About 20% of these mice got sick and died.  Many other gets really sick. No matter your age, you are rolling the dice with your life with a #SARS2 infection.   #StayHome",
        Month: "April",
        "Dimension 1": -26.134577,
        "Dimension 2": 25.854929,
        Sentiment: -0.13622449,
        Subjectivity: 0.477040816,
        idx: 1301,
      },
      {
        RawTweet:
          "b'RT @SquawkCNBC: Our toolbox is going to be a lot better, but the fall worries me a lot, says @ScottGottliebMD on #COVID19 https:\/\/t.co\/sVBB\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": -12.466342,
        "Dimension 2": 4.2609353,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1302,
      },
      {
        RawTweet:
          "b'Dr. Shebani Dalai, Director of Metabolic Psychiatry at @StanfordMed writes about how #metabolism, #immunity, &amp;\\xe2\\x80\\xa6 https:\/\/t.co\/iebjPF6GVM'",
        Month: "May",
        "Dimension 1": 20.394327,
        "Dimension 2": 8.662892,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1303,
      },
      {
        RawTweet:
          "b'\\xe2\\x80\\xa2Boomers (B) talk mad shit to Millennials (M)\\n\\n\\xe2\\x80\\xa2There\\xe2\\x80\\x99s a deadly virus w\/ a higher fatality rate amongst the B\\xe2\\x80\\x99s\\n\\n\\xe2\\x80\\xa2\\xe2\\x80\\xa6 https:\/\/t.co\/4tcKbIf4b8'",
        Month: "March",
        "Dimension 1": -16.161884,
        "Dimension 2": -5.4151874,
        Sentiment: -0.19375,
        Subjectivity: 0.675,
        idx: 1304,
      },
      {
        RawTweet:
          "I see a lot of tweets about % ILI visits. @reichlab and I have been working on an analysis that I think is a little more reliable. Cld still be sensitive to care seeking behavior, but I think less so. https:\/\/t.co\/YBDZv8xjUY",
        Month: "March",
        "Dimension 1": -3.6551955,
        "Dimension 2": -31.49579,
        Sentiment: 0.061458333,
        Subjectivity: 0.491666667,
        idx: 1305,
      },
      {
        RawTweet:
          "['#Jharkhand govt launches a #MobileApp PRAGYAAM to issue e-passes to everyone associated with delivery of essential services during the national #lockdown to combat #COVID19. https:\/\/t.co\/ZuX3y4IKz9']",
        Month: "March",
        "Dimension 1": 37.342052,
        "Dimension 2": 7.509581,
        Sentiment: 0.0,
        Subjectivity: 0.3,
        idx: 1306,
      },
      {
        RawTweet:
          "\u201cOut of Spain\u2019s 40,000 confirmed coronavirus cases, 5,400 \u2014 nearly 14 percent \u2014 are medical professionals, the health ministry said on Tuesday. No other country has reported health care staff accounting for a double-digit percentage of total infections.\u201d https:\/\/t.co\/xgYOhr7BtF",
        Month: "March",
        "Dimension 1": -16.463612,
        "Dimension 2": 37.435177,
        Sentiment: 0.1125,
        Subjectivity: 0.505,
        idx: 1307,
      },
      {
        RawTweet:
          "b\"'Let's see your work' | #Putin visits #Covid19 patients in Moscow wearing hazmat suit &amp; respirator. \\nRussians its y\\xe2\\x80\\xa6 https:\/\/t.co\/5wbe0aWs1c\"",
        Month: "March",
        "Dimension 1": -9.719577,
        "Dimension 2": 9.573338,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1308,
      },
      {
        RawTweet:
          "#Ethiopia, please find reliable info from the official pages of \r\n@FMoHealth @EPHIEthiopia  @lia_tadesse for updates on #COVID19 in \ud83c\uddea\ud83c\uddf9. They will update as often as possible but let\u2019s avoid the spread of #Infodemic &amp; #pandemic.  @addisstandard @addis_fortune @ebczena @ethiotelecom",
        Month: "March",
        "Dimension 1": 17.79712,
        "Dimension 2": -8.347436,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 1309,
      },
      {
        RawTweet:
          "b\"RT @FaceTheNation: ICYMI: @ScottGottliebMD told @facethenation there's no antiviral drug in trial that's proven effective in preventing the\\xe2\\x80\\xa6\"",
        Month: "March",
        "Dimension 1": -33.31551,
        "Dimension 2": -18.605047,
        Sentiment: 0.6,
        Subjectivity: 0.8,
        idx: 1310,
      },
      {
        RawTweet:
          "b'.@WRPSToday says that crime has gone down during the #COVID19 pandemic. But. there are certain kinds of crime and d\\xe2\\x80\\xa6 https:\/\/t.co\/rd3tPXb9nk'",
        Month: "April",
        "Dimension 1": -13.138795,
        "Dimension 2": -0.78277665,
        Sentiment: 0.029365079,
        Subjectivity: 0.43015873,
        idx: 1311,
      },
      {
        RawTweet:
          "14\/ I know people are going to say \r\n\r\n\u201c@WHO is trying to make China look good bc of global politics\u201d etc. \r\n\r\nBut put all that aside for a second &amp; imagine if this all were true. \r\n\r\nIf this is what it is going to take to stop #COVID19.\r\n\r\nThis level of response.\r\n\r\nWe are so far behind.",
        Month: "March",
        "Dimension 1": -16.674232,
        "Dimension 2": 8.776608,
        Sentiment: 0.125,
        Subjectivity: 0.491666667,
        idx: 1312,
      },
      {
        RawTweet:
          "b'RT @NateSilver538: The thing is, testing\/tracing is *so* much better than the alternatives (either keeping the entire economy shut down for\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -16.345259,
        "Dimension 2": -31.368908,
        Sentiment: 0.114814815,
        Subjectivity: 0.471296296,
        idx: 1313,
      },
      {
        RawTweet:
          "b'RT @WHO: We can still beat #COVID19 with a comprehensive approach: test, trace, treat, isolate.\\nIn this video, @mvankerkhove talks about nu\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 33.314743,
        "Dimension 2": -10.941936,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1314,
      },
      {
        RawTweet:
          "b'Armed for battle at the grocery store thanks to my sister &amp; her sewing skills. #TheNewNormal #COVID19 https:\/\/t.co\/LKTLYRjYKB'",
        Month: "April",
        "Dimension 1": 33.71917,
        "Dimension 2": 18.087332,
        Sentiment: 0.2,
        Subjectivity: 0.2,
        idx: 1315,
      },
      {
        RawTweet:
          "b'RT @SaludAmerica: Our leader Dr. Amelie Ramirez of @UTHealthSA united nearly 300 researchers, scientists, leaders, and advocates for the \"A\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 1.2009869,
        "Dimension 2": 35.752625,
        Sentiment: 0.1,
        Subjectivity: 0.4,
        idx: 1316,
      },
      {
        RawTweet:
          "@DijkstraHylke As I've said previously the only long-term strategy is rapid diagnostic, vaccine or antiviral. And we will have one of those- it's just a matter of time. We are buying time until we have a solution.",
        Month: "March",
        "Dimension 1": 1.4038016,
        "Dimension 2": -20.915318,
        Sentiment: -0.083333333,
        Subjectivity: 0.583333333,
        idx: 1317,
      },
      {
        RawTweet:
          "b'#COVID19: #AirForce #officer, 50 Kano-bound buses arrested, #Corpse seized for violating #curfew in #Ondo https:\/\/t.co\/xCZGpo4JVn'",
        Month: "April",
        "Dimension 1": -33.40188,
        "Dimension 2": 24.461676,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1318,
      },
      {
        RawTweet:
          "A look into our future in US if we don't act now #COVID19\r\n\r\n\"It's not happening fast enough... We should've been preparing mitigation strategies even while we were in the containment phase.\"\r\n\r\n-Kim Hyeonggab, President of S. Korea Public Health Association\r\n\r\nhttps:\/\/t.co\/WzUBKTbMCg",
        Month: "March",
        "Dimension 1": -7.637808,
        "Dimension 2": -24.636868,
        Sentiment: 0.05,
        Subjectivity: 0.322916667,
        idx: 1319,
      },
      {
        RawTweet:
          "b'RT @DenisonLab: Pre-pub of compelling data for a orally bioavailable anti-CoV drug potently active against SARS-CoV, MERS-CoV, and SARS-CoV\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 21.908346,
        "Dimension 2": -2.9283295,
        Sentiment: 0.083333333,
        Subjectivity: 0.6,
        idx: 1320,
      },
      {
        RawTweet:
          "2\/ Stable @ucsf; 15 cases (down 1), 8 vented (up 1). Today we disbanded Covid command center, whose leaders comported themselves w\/ skill, grace &amp; heart.\r\n\r\nSF also remains on plateau, averaging ~40 new cases\/day. Hospitalizations 80, down from peak of 94. 32 deaths, up 1. https:\/\/t.co\/Tjmw6DJb9f",
        Month: "May",
        "Dimension 1": -17.684958,
        "Dimension 2": 38.671688,
        Sentiment: -0.068686869,
        Subjectivity: 0.283080808,
        idx: 1321,
      },
      {
        RawTweet:
          'b"RT @CMichaelGibson: Rio\'s Christ the Redeemer statue lit up as a doctor, in tribute to healthcare workers fighting #coronavirus https:\/\/t.c\\xe2\\x80\\xa6"',
        Month: "April",
        "Dimension 1": 24.649324,
        "Dimension 2": 12.985424,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1322,
      },
      {
        RawTweet:
          "b'RT @DiametT: \\xe2\\x80\\xbc\\xef\\xb8\\x8fGreat to announce that we collaborate in the CovidOMICS @IISPereVirgili @hjoan23 project whose objective is to find prognost\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 22.993366,
        "Dimension 2": -5.636792,
        Sentiment: 0.0,
        Subjectivity: 0.1,
        idx: 1323,
      },
      {
        RawTweet:
          "['\ud83d\udce2 CORONAVIRUS NEWS\\n\\nAs we battle against #COVID19 - up to date information can be found on the https:\/\/t.co\/54WFNv6A91 website, including Financial Help, Childcare, Benefits plus many more! \\n#BeSafe #StayHealthy #TakeCare \u26aa\u26ab\ud83d\udd34\\n\\nFor local updates please follow @COVIDLiverpool https:\/\/t.co\/ItMlCpOOTu']",
        Month: "March",
        "Dimension 1": 4.204125,
        "Dimension 2": 8.602058,
        Sentiment: 0.28125,
        Subjectivity: 0.25,
        idx: 1324,
      },
      {
        RawTweet:
          "['Getting ready for self-sufficiency - just need half a tonne of soil, fertiliser, a few hundred seeds, a book on how to grow stuff and I\u2019ll be there. #COVID19  #StayAtHomeAndStaySafe https:\/\/t.co\/bya2wFmfWc']",
        Month: "March",
        "Dimension 1": 1.5438347,
        "Dimension 2": 13.826422,
        Sentiment: -0.055555556,
        Subjectivity: 0.255555556,
        idx: 1325,
      },
      {
        RawTweet:
          "b'RT @richardhorton1: What troubles me about the UK govt\\xe2\\x80\\x99s response to COVID-19 is its strategic objective. The goal seems to have been herd\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 11.444647,
        "Dimension 2": -14.473768,
        Sentiment: 0.0,
        Subjectivity: 0.1,
        idx: 1326,
      },
      {
        RawTweet:
          "b'RT @CNN: This Detroit bus driver made a video asking people to take the coronavirus pandemic seriously. He was upset that a woman had taken\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -21.101286,
        "Dimension 2": 2.907088,
        Sentiment: -0.333333333,
        Subjectivity: 0.666666667,
        idx: 1327,
      },
      {
        RawTweet:
          "['#Virologist answering listener questions about #COVID2019. For those who are interested about #COVID19. #StayHome #SocialDistanacing #CoronaLockdown #CoronavirusOubreak #Covid19usa #virology #virus #information #QuestionsCoronavirus  https:\/\/t.co\/MYV5sNBSp9', '#Virologist answering listener questions about #COVID2019. For those who are interested about #COVID19. #StayHome #SocialDistanacing #CoronaLockdown #CoronavirusOubreak #Covid19usa #virology #virus #information #QuestionsCoronavirus  https:\/\/t.co\/MYV5sNBSp9']",
        Month: "March",
        "Dimension 1": 1.0137984,
        "Dimension 2": 4.5657835,
        Sentiment: 0.25,
        Subjectivity: 0.5,
        idx: 1328,
      },
      {
        RawTweet:
          "Trying to communicate clearly what we know about preparing &amp; responding to outbreaks. My articles:\r\nBritain's gamble (Observer)\r\nKey steps of response &amp; future scenarios (Guardian)\r\nWhy testing essential (FP)\r\nProtect health workers (Salon)\r\nCovid in developing countries (Wash Post) https:\/\/t.co\/pg0tyyqAyf",
        Month: "April",
        "Dimension 1": 21.85167,
        "Dimension 2": -8.333212,
        Sentiment: 0.025,
        Subjectivity: 0.452083333,
        idx: 1329,
      },
      {
        RawTweet:
          "b\"RT @EMSwami: Not wearing a mask isn't about being brave.\\n\\nIt's about being pompous, arrogant + self-absorbed. It's anti-science\\n\\nThe mask i\\xe2\\x80\\xa6\"",
        Month: "April",
        "Dimension 1": -30.35102,
        "Dimension 2": -19.56262,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1330,
      },
      {
        RawTweet:
          "['#KnowYourRights. Because #COVID19 has been labeled a #pandemic, employers (and employees!) need to be aware of specific rules that are now applicable under the #AmericansWithDisabilitiesAct. Learn more at https:\/\/t.co\/Ex68CwGBGI. #BlindNewWorld https:\/\/t.co\/qLlMWKiSj1']",
        Month: "March",
        "Dimension 1": 4.9808803,
        "Dimension 2": -11.782516,
        Sentiment: 0.25,
        Subjectivity: 0.291666667,
        idx: 1331,
      },
      {
        RawTweet:
          "This thread is making the rounds but well worth your time. \r\n\r\nAbout what is happening in parts of Italy. And if we don't get serious about prevention and preparation, we will see it here. \r\n\r\nIt's upsetting. And important. https:\/\/t.co\/6rQSL9bxiR",
        Month: "March",
        "Dimension 1": 12.794685,
        "Dimension 2": -39.643574,
        Sentiment: 0.122222222,
        Subjectivity: 0.588888889,
        idx: 1332,
      },
      {
        RawTweet:
          "b'Help slow the spread of #COVID19 and identify at risk cases sooner by self-reporting your symptoms daily, even if y\\xe2\\x80\\xa6 https:\/\/t.co\/ui7TSl0ELD'",
        Month: "April",
        "Dimension 1": 7.439198,
        "Dimension 2": -26.88894,
        Sentiment: -0.15,
        Subjectivity: 0.2,
        idx: 1333,
      },
      {
        RawTweet:
          "[\"Working from home with your kids can bring new challenges: We've got some tips from our Sibers on how they're surviving! \ud83d\ude05 \\n\\n\ud83d\udcaaCreate a schedule for their homework \ud83d\udcdd\ud83d\udcd4\\n\\nThis tip was brought to you by Lucy, our finance guru &amp; mother of two.\u270c\ufe0f\\n\\n#Covid19 #RemoteWork #HomeOffice https:\/\/t.co\/xg7ytaSsjV\"]",
        Month: "March",
        "Dimension 1": 33.14278,
        "Dimension 2": 17.13769,
        Sentiment: 0.170454545,
        Subjectivity: 0.454545455,
        idx: 1334,
      },
      {
        RawTweet:
          "b'RT @SaadOmer3: Korean study on SARS-CoV-2 transmission in fitness &amp; dance classes at 12 sports facilities.\\n\\nInfection in high intensity fit\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 4.550745,
        "Dimension 2": 17.121372,
        Sentiment: 0.16,
        Subjectivity: 0.54,
        idx: 1335,
      },
      {
        RawTweet:
          "This is the first time #PublicHealth labs have used the EUA process. The excellent  @HealthNYGov and @nycHealthy labs have paved the way. Thanks also to the @US_FDA for the expedited pathway. #APHL https:\/\/t.co\/a9gdk8N2Xf",
        Month: "March",
        "Dimension 1": 42.34387,
        "Dimension 2": -2.9729764,
        Sentiment: 0.483333333,
        Subjectivity: 0.511111111,
        idx: 1336,
      },
      {
        RawTweet:
          "['Feds Investigate Senators For Insider Trading Ahead Of Coronavirus-Caused Stock Market Crash $ICE #coronavirus #COVID2019 https:\/\/t.co\/k4o3UvGGpR']",
        Month: "March",
        "Dimension 1": -20.714882,
        "Dimension 2": 11.767827,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1337,
      },
      {
        RawTweet:
          "b'@morrish_scott No- I think deaths &amp; hospital admissions are a better way of comparing countries rather than just number of cases.'",
        Month: "March",
        "Dimension 1": -14.906982,
        "Dimension 2": -18.785944,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1338,
      },
      {
        RawTweet:
          "b'BREAKING: Accusing eyes turn on #China as #America plunges into #pandemic hell week: \\n\\nhttps:\/\/t.co\/FxxFRyfwsH\\xe2\\x80\\xa6 https:\/\/t.co\/NCIxoMn8kv'",
        Month: "April",
        "Dimension 1": -20.289734,
        "Dimension 2": 8.707658,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1339,
      },
      {
        RawTweet:
          "['A roundup of healthcare conferences that have been canceled, rescheduled or turned virtual due to #COVID19 https:\/\/t.co\/gXGNcCB1NO', 'A roundup of healthcare conferences that have been canceled, rescheduled or turned virtual due to #COVID19 https:\/\/t.co\/gXGNcCB1NO']",
        Month: "March",
        "Dimension 1": -34.50168,
        "Dimension 2": -2.5341094,
        Sentiment: -0.125,
        Subjectivity: 0.375,
        idx: 1340,
      },
      {
        RawTweet:
          "[\"Yes. Without doubt, #COVID19 is a deadly #pandemic for sure. \\nWe have been receiving more and more updates about it's harmful impact on mankind. \\nBut let us take a moment to pause here. \\nLet's take a look at the\u2026 https:\/\/t.co\/u9Z9O2TW1R\", \"Yes. Without doubt, #COVID19 is a deadly #pandemic for sure. \\nWe have been receiving more and more updates about it's harmful impact on mankind. \\nBut let us take a moment to pause here. \\nLet's take a look at the\u2026 https:\/\/t.co\/u9Z9O2TW1R\"]",
        Month: "March",
        "Dimension 1": -12.710981,
        "Dimension 2": -6.6036067,
        Sentiment: 0.325,
        Subjectivity: 0.572222222,
        idx: 1341,
      },
      {
        RawTweet:
          '["Get the latest news &amp; updates of #COVID19\'s affect on the #wineindustry with this rolling blog.\\n\\nWe\u2019ll be updating this blog regularly with important news and stories.   \\nhttps:\/\/t.co\/qyAkzZ2VBL\\n\\n#winenews #wine https:\/\/t.co\/g4bVC1p6pr"]',
        Month: "March",
        "Dimension 1": 23.214512,
        "Dimension 2": 20.547688,
        Sentiment: 0.3,
        Subjectivity: 0.658974359,
        idx: 1342,
      },
      {
        RawTweet:
          "b'Am I missing something? Thought 14 days steady decline meant the numbers all need to be lower than previous day for\\xe2\\x80\\xa6 https:\/\/t.co\/VSiSnoQXgK'",
        Month: "April",
        "Dimension 1": -40.473713,
        "Dimension 2": 11.596948,
        Sentiment: -0.066666667,
        Subjectivity: 0.238888889,
        idx: 1343,
      },
      {
        RawTweet:
          "Overclaimed science makes bad policy. Based on preprint of Pan et al., prominent public health exoerts called recently for mandatory, outside-the-home quarantine of individuals exposed to COVID-19, separating families involuntarily to stem the epidemic https:\/\/t.co\/PxvMjlRxl8.",
        Month: "April",
        "Dimension 1": -24.817715,
        "Dimension 2": 1.5465006,
        Sentiment: -0.05,
        Subjectivity: 0.495833333,
        idx: 1344,
      },
      {
        RawTweet:
          "@MaverickNY Thank you @MaverickNY for writing about our technologies coming out of the lab (and @daphnezohar for the introduction) ! We very much hope to advance these technologies to help treat cancer patients. @ericsongg",
        Month: "March",
        "Dimension 1": 23.851475,
        "Dimension 2": 2.826285,
        Sentiment: 0.26,
        Subjectivity: 0.26,
        idx: 1345,
      },
      {
        RawTweet:
          "b'Los Angeles County to send mail-in ballots to all voters https:\/\/t.co\/dao1oSCbfO #politics #elections #election2020 #community #Covid19'",
        Month: "May",
        "Dimension 1": 14.266197,
        "Dimension 2": 40.145733,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1346,
      },
      {
        RawTweet:
          "b'@akatradewind How do these people envision that things will play out as lockdowns are lifted without a proactive control strategy in place?'",
        Month: "May",
        "Dimension 1": -6.682093,
        "Dimension 2": -26.326225,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1347,
      },
      {
        RawTweet:
          "b'\\xe2\\x80\\x98Woke\\xe2\\x80\\x99 leftie told to quit over Cook jibe https:\/\/t.co\/NYsSE2qrc3\\nLiberal frontbencher @TimSmithMP earlier brought\\xe2\\x80\\xa6 https:\/\/t.co\/iNsxdXsQNi'",
        Month: "April",
        "Dimension 1": -31.578852,
        "Dimension 2": -3.709262,
        Sentiment: 0.0,
        Subjectivity: 0.5,
        idx: 1348,
      },
      {
        RawTweet:
          "b'RT @ScottGottliebMD: New: Our latest paper on principles and resources for states on implementing a safe, phased re-opening after epidemic\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 25.795694,
        "Dimension 2": -2.3570387,
        Sentiment: 0.378787879,
        Subjectivity: 0.618181818,
        idx: 1349,
      },
      {
        RawTweet:
          "['Prez Msg: Why Are The Political Candidates Encouraging Political Rallies? Look at the Age Of Sanders who with has multiple risk factors for the #CoronaOutbreak. Besides Sanders we have Trump &amp; Biden who are both over 70 yrs old  which is a vulnerable age group. #comics #comicbook', 'Prez Msg: Why Are The Political Candidates Encouraging Political Rallies? Look at the Age Of Sanders who with has multiple risk factors for the #CoronaOutbreak. Besides Sanders we have Trump &amp; Biden who are both over 70 yrs old  which is a vulnerable age group. #comics #comicbook']",
        Month: "March",
        "Dimension 1": -5.764189,
        "Dimension 2": 8.888928,
        Sentiment: -0.08,
        Subjectivity: 0.18,
        idx: 1350,
      },
      {
        RawTweet:
          '["\\u2066@realDonaldTrump\\u2069 What it\'s like for health care workers on the front lines of the #coronavirus #pandemic - CNN #trump #USA  https:\/\/t.co\/epJBlBF0G4", "\\u2066@realDonaldTrump\\u2069 What it\'s like for health care workers on the front lines of the #coronavirus #pandemic - CNN #trump #USA  https:\/\/t.co\/epJBlBF0G4"]',
        Month: "March",
        "Dimension 1": -2.0142362,
        "Dimension 2": 7.8540783,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1351,
      },
      {
        RawTweet:
          "b'Interesting paper \\xe2\\x80\\x94 persistent inflammation-immunosuppression and catabolism syndrome (PICS) https:\/\/t.co\/G91A00rqBP'",
        Month: "May",
        "Dimension 1": 20.069046,
        "Dimension 2": -3.6444488,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1352,
      },
      {
        RawTweet:
          '["People should not panic. \\nWash your hands frequently, avoid crowded places, don\'t touch your face often, keep distance from people who have fever &amp; cold and use handkerchief while sneezing or coughing.\\n#coronavirus #CoronavirusOutbreak #coronavirusinindia"]',
        Month: "March",
        "Dimension 1": -10.795319,
        "Dimension 2": -39.29294,
        Sentiment: -0.25,
        Subjectivity: 0.65,
        idx: 1353,
      },
      {
        RawTweet:
          "Breaking News: \u201cMore than anything this pandemic has fully, finally torn back the curtain on the idea that so many of the folks in charge know what they\u2019re doing.\u201d Barack Obama criticized U.S. leaders\u2019 coronavirus response in a virtual commencement speech. https:\/\/t.co\/pLQ4pJeR4A",
        Month: "May",
        "Dimension 1": -21.763262,
        "Dimension 2": -0.9154428,
        Sentiment: 0.25,
        Subjectivity: 0.5,
        idx: 1354,
      },
      {
        RawTweet:
          "['#coronavirus #DisneyWorld #DisneylandParis #Disneyland as we start a new week full of uncertainty let\\'s try to stay positive, let\\'s look to later in the year when we can \"get back to normal\" and start enjoying life to the full again... https:\/\/t.co\/c8FqxpJNqE']",
        Month: "March",
        "Dimension 1": -9.786532,
        "Dimension 2": 19.867458,
        Sentiment: 0.214204545,
        Subjectivity: 0.41875,
        idx: 1355,
      },
      {
        RawTweet:
          "Short Thread: \r\n\r\nVA study on Hydroxychloroquine for COVID19 getting a lot of attention.\r\n\r\nPresident Trump has been touting HCQ as a possible miracle drug.\r\n\r\nStudy from the VA finds HIGHER mortality for those on HCQ.  \r\n\r\nSo should this study put HCQ for COVID19 to rest?\r\n\r\nNo....\r\n\r\n1\/3",
        Month: "April",
        "Dimension 1": -15.83071,
        "Dimension 2": 14.25067,
        Sentiment: 0.083333333,
        Subjectivity: 0.6,
        idx: 1356,
      },
      {
        RawTweet:
          "['This was an excellent webinar with really helpful information ion #COVID19. I know as #nurses we are all doing our best to absorb as many updates as possible in between patient care so for those of you busy at the bedside- here are the highlights: https:\/\/t.co\/toIDQbD2vW']",
        Month: "March",
        "Dimension 1": 46.07166,
        "Dimension 2": -14.500541,
        Sentiment: 0.466666667,
        Subjectivity: 0.55,
        idx: 1357,
      },
      {
        RawTweet:
          "b'RT @WHO: \"In the eye of a storm like #COVID19, scientific and public health tools are essential, but so are humility and kindness. \\n\\nWith s\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 20.975513,
        "Dimension 2": -19.10418,
        Sentiment: 0.0,
        Subjectivity: 0.183333333,
        idx: 1358,
      },
      {
        RawTweet:
          "b'RT @BNODesk: Italy has reported the lowest number of daily deaths in more than 2 weeks: 525 new deaths were reported over the past 24 hours\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -18.61157,
        "Dimension 2": 41.31404,
        Sentiment: 0.096590909,
        Subjectivity: 0.301136364,
        idx: 1359,
      },
      {
        RawTweet:
          "['We need music like this to keep our spitits up during these trying times.    #MichaelJackson #coronavirus #StayAtHomeAndStaySafe https:\/\/t.co\/cJ2fQdWp0L']",
        Month: "March",
        "Dimension 1": 6.447605,
        "Dimension 2": -3.7903094,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1360,
      },
      {
        RawTweet:
          "['This one they are banning all forms of social gathering, can they ban Ago Iwoye people from doing burial ceremony every weekend. My people fit die if them nor do party. \\n@ooutableshaker @OOUconnect\\n\\n#COVID19\\n#StayHome', 'This one they are banning all forms of social gathering, can they ban Ago Iwoye people from doing burial ceremony every weekend. My people fit die if them nor do party. \\n@ooutableshaker @OOUconnect\\n\\n#COVID19\\n#StayHome']",
        Month: "March",
        "Dimension 1": -39.1944,
        "Dimension 2": 0.19726506,
        Sentiment: 0.216666667,
        Subjectivity: 0.233333333,
        idx: 1361,
      },
      {
        RawTweet:
          "b'RT @_cfcd: cDC1 are required for the efficacy of anti-PD1 mediated anti-tumor immunity. Beautiful preprint in @biorxiv_immuno  by @VirusesI\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 20.956703,
        "Dimension 2": -3.2105129,
        Sentiment: 0.85,
        Subjectivity: 1.0,
        idx: 1362,
      },
      {
        RawTweet:
          "b'RT @cmyeaton: PREDICT has achieved useful  things, but identifying and stopping pandemics is not among them. Important to distinguish basic\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -13.195017,
        "Dimension 2": -34.591198,
        Sentiment: 0.35,
        Subjectivity: 0.5,
        idx: 1363,
      },
      {
        RawTweet:
          "b'RT @AbiyAhmedAli: I visited the #COVID19 treatment center recently setup within Millenium Hall by our very able &amp; capable medical professio\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 24.941645,
        "Dimension 2": 10.3886385,
        Sentiment: 0.15,
        Subjectivity: 0.3125,
        idx: 1364,
      },
      {
        RawTweet:
          "b'To support our clients in this fast-changing environment we have prepared an overview of recent changes in legislat\\xe2\\x80\\xa6 https:\/\/t.co\/gMqnRr837Q'",
        Month: "April",
        "Dimension 1": 17.589403,
        "Dimension 2": -14.687785,
        Sentiment: 0.0,
        Subjectivity: 0.25,
        idx: 1365,
      },
      {
        RawTweet:
          'b"RT @Harri8t: Unfiltered, in-depth interviews delving into key #COVID19 news. Looking forward our kick-off \'Healthy Returns: The Path forwar\\xe2\\x80\\xa6"',
        Month: "April",
        "Dimension 1": 27.458332,
        "Dimension 2": 0.3560764,
        Sentiment: 0.25,
        Subjectivity: 0.75,
        idx: 1366,
      },
      {
        RawTweet:
          "b'Stay tuned to what is good in this world. During challenging times, we can get overly focused on what is not right,\\xe2\\x80\\xa6 https:\/\/t.co\/RXWwda1UfE'",
        Month: "May",
        "Dimension 1": 16.938555,
        "Dimension 2": -29.100739,
        Sentiment: 0.6,
        Subjectivity: 0.8,
        idx: 1367,
      },
      {
        RawTweet:
          'Over the past weeks, daily threads from @Bob_Wachter have become "must read tweets"\r\n\r\nThis is no different\r\n\r\nSF has missed the worst of this wave of COVID19 thanks largely to great leadership of @LondonBreed\r\n\r\nBob has had @UCSFHospitals ready. A relief to see them get through it https:\/\/t.co\/S8yMj0HJCf',
        Month: "April",
        "Dimension 1": 11.222922,
        "Dimension 2": 31.238222,
        Sentiment: -0.007142857,
        Subjectivity: 0.471428571,
        idx: 1368,
      },
      {
        RawTweet:
          "['#Covid19 statistics as of now [9.30am Tues, March 24]. Six confirmed cases in #Bermuda, and over 387,000 confirmed cases worldwide. Stats from Bermuda Govt &amp; Johns Hopkins | https:\/\/t.co\/wZXP2tTpsM https:\/\/t.co\/EC4Q6w9D3L']",
        Month: "March",
        "Dimension 1": -7.0452027,
        "Dimension 2": 44.68028,
        Sentiment: 0.4,
        Subjectivity: 1.0,
        idx: 1369,
      },
      {
        RawTweet:
          "b'RT @DrCharlieWeller: Shared my thoughts with @WiredUK on the progress and challenges we face in getting a safe and effective #COVID19 vacci\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 23.516584,
        "Dimension 2": -6.5838757,
        Sentiment: 0.55,
        Subjectivity: 0.65,
        idx: 1370,
      },
      {
        RawTweet:
          "5\/ Though little question that early stay-at-home was crucial (Fig L), there must be some wild cards &amp;\/or luck. For example, TX was late, yet has also dodged bullet (R), w\/ case rates that look more like CA than NY, NJ, MI, or Louisiana. This thing is complicated &amp; multifactorial https:\/\/t.co\/xeHrSnYtaF",
        Month: "April",
        "Dimension 1": -11.938788,
        "Dimension 2": -27.221912,
        Sentiment: -0.041071429,
        Subjectivity: 0.614285714,
        idx: 1371,
      },
      {
        RawTweet:
          "b'RT @ScottGottliebMD: Mitigation steps are critical to keep the healthcare system from becoming overwhelmed by a surge in cases. We must slo\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 9.837633,
        "Dimension 2": -18.687616,
        Sentiment: 0.225,
        Subjectivity: 0.825,
        idx: 1372,
      },
      {
        RawTweet:
          "b'#Coronavirus Quarantine #NewOrleans : trombone neighbors play on their porches while social distancing https:\/\/t.co\/dSkDT1RZ27'",
        Month: "April",
        "Dimension 1": 21.19417,
        "Dimension 2": 28.254145,
        Sentiment: 0.033333333,
        Subjectivity: 0.066666667,
        idx: 1373,
      },
      {
        RawTweet:
          "If anybody can share small quantities of HKU1, OC43, 229E and\/or NL63 recombinant spike\/HE with us this week (50ug) please DM me or shoot me an email!\r\nTHANKS!",
        Month: "April",
        "Dimension 1": 9.190019,
        "Dimension 2": 33.14318,
        Sentiment: -0.03125,
        Subjectivity: 0.3,
        idx: 1374,
      },
      {
        RawTweet:
          "b'Anytime Trump tells a reporter they\\xe2\\x80\\x99re \\xe2\\x80\\x9cfake news\\xe2\\x80\\x9d i wish they\\xe2\\x80\\x99d reply back and let him know \\xe2\\x80\\x9cwith all due respect\\xe2\\x80\\xa6 https:\/\/t.co\/qUpuruYRqY'",
        Month: "April",
        "Dimension 1": 17.950382,
        "Dimension 2": -1.7591302,
        Sentiment: -0.0625,
        Subjectivity: 0.1875,
        idx: 1375,
      },
      {
        RawTweet:
          "b'In order to close such #coronavirus producing hotspots a strict action imposing strong trade tariffs on China shoul\\xe2\\x80\\xa6 https:\/\/t.co\/UtU2Z4Nw01'",
        Month: "April",
        "Dimension 1": -19.692759,
        "Dimension 2": 8.201384,
        Sentiment: 0.177777778,
        Subjectivity: 0.444444444,
        idx: 1376,
      },
      {
        RawTweet:
          "['I think someone got fed up of home schooling.. #Quarantine #Covid_19 #lockdown #coronavirus https:\/\/t.co\/UqaGtR9AJK']",
        Month: "March",
        "Dimension 1": -27.81149,
        "Dimension 2": -6.7239213,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1377,
      },
      {
        RawTweet:
          "b'\"Trump is the worst political leader I have experienced in all of my professional life,\" @JeffDSachs tells\\xe2\\x80\\xa6 https:\/\/t.co\/dgb0MEi5xr'",
        Month: "April",
        "Dimension 1": -23.622662,
        "Dimension 2": -7.7329254,
        Sentiment: -0.025,
        Subjectivity: 0.525,
        idx: 1378,
      },
      {
        RawTweet:
          'Let\'s dispel the notion that "novel coronavirus is just like the flu".  Sharing this striking comparison of #Flu, #COVID19, #SARS and #MERS made by @BioRender. \r\n\r\n#COVID19 is 30x more deadly and almost 2x more contagious than the flu. We have no existing immunity to COVID19. https:\/\/t.co\/fdJgsSFMnB',
        Month: "March",
        "Dimension 1": -17.224724,
        "Dimension 2": -0.82783026,
        Sentiment: 0.325,
        Subjectivity: 0.6,
        idx: 1379,
      },
      {
        RawTweet:
          "['Don\\'t think what\\'s going on outside.\\n\\nThink what\\'s coming inside \"Stay safe at home\"\\n\\n#Corona #CoronaVirus #COVID #COVID19 #StayAtHome #CoronaMedicine #Covid19India #IndiaFightsCorona #StayHome #SelfQuarantined #SocialDistancing https:\/\/t.co\/VWhju7DZ5V', 'Don\\'t think what\\'s going on outside.\\n\\nThink what\\'s coming inside \"Stay safe at home\"\\n\\n#Corona #CoronaVirus #COVID #COVID19 #StayAtHome #CoronaMedicine #Covid19India #IndiaFightsCorona #StayHome #SelfQuarantined #SocialDistancing https:\/\/t.co\/VWhju7DZ5V']",
        Month: "March",
        "Dimension 1": 9.927202,
        "Dimension 2": -5.9290853,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1380,
      },
      {
        RawTweet:
          "b'RT @WHO: When there are ONE OR MORE #COVID19 cases, to stop transmission &amp; prevent spread:\\n\\xf0\\x9f\\x94\\xacTest suspect cases per WHO case definition, con\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -9.06355,
        "Dimension 2": -21.083773,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1381,
      },
      {
        RawTweet:
          "b'\\xe2\\x80\\x9cThis particular antibody is maybe something that can be used as vaccine later but for now it is not a vaccine but\\xe2\\x80\\xa6 https:\/\/t.co\/WXOOuZv41s'",
        Month: "May",
        "Dimension 1": -16.02884,
        "Dimension 2": -25.051939,
        Sentiment: 0.083333333,
        Subjectivity: 0.166666667,
        idx: 1382,
      },
      {
        RawTweet:
          "b'RT @ForeignPolicy: \"While a herd immunity strategy is a seemingly attractive and easy path, it is little more than a Darwinian roll of the\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": -12.404272,
        "Dimension 2": -34.24365,
        Sentiment: 0.386458333,
        Subjectivity: 0.708333333,
        idx: 1383,
      },
      {
        RawTweet:
          "b'RT @ReaganGomez: Thank you for all of your kind words\\xf0\\x9f\\x92\\x9c. My husband made it home. That man yesterday did not. So many of us do not. It\\xe2\\x80\\x99s exh\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 23.392834,
        "Dimension 2": -28.575834,
        Sentiment: 0.55,
        Subjectivity: 0.7,
        idx: 1384,
      },
      {
        RawTweet:
          "Congrats to @PSetel and the #DataforHealth team at @VitalStrat on today's launch of a new #COVID19 technical package with @WHO and partners. Using existing CRVS systems, we can get a clearer picture of the true disease burden. https:\/\/t.co\/FU0KLwkM8j #WorldHealthData https:\/\/t.co\/eTzr2eZG4q",
        Month: "May",
        "Dimension 1": 26.207418,
        "Dimension 2": -1.8700523,
        Sentiment: 0.162121212,
        Subjectivity: 0.401515152,
        idx: 1385,
      },
      {
        RawTweet:
          'b"Europe\'s banks brace for bad debt build up from coronavirus crisis $DB #coronavirus #COVID2019 https:\/\/t.co\/B01V9XMwcZ"',
        Month: "April",
        "Dimension 1": -20.952389,
        "Dimension 2": 13.129468,
        Sentiment: -0.7,
        Subjectivity: 0.666666667,
        idx: 1386,
      },
      {
        RawTweet:
          "\u201cThe Russians\u2019 tactics have a canny circularity..They push out a false message, which the Chinese and Iranians pick up and promote, and then Russian actors will repost the Chinese or Iranian versions of the message to make it seem like new information\u201d https:\/\/t.co\/EoKjKik7rF",
        Month: "March",
        "Dimension 1": -18.408337,
        "Dimension 2": 6.738859,
        Sentiment: -0.052727273,
        Subjectivity: 0.210909091,
        idx: 1387,
      },
      {
        RawTweet:
          "b'#Covid19 contention between the US and China gives fresh new start for the #EU  relations with the rest of the Asia\\xe2\\x80\\xa6 https:\/\/t.co\/azIUSOrzg0'",
        Month: "May",
        "Dimension 1": -14.330976,
        "Dimension 2": 10.023539,
        Sentiment: 0.218181818,
        Subjectivity: 0.477272727,
        idx: 1388,
      },
      {
        RawTweet:
          "b'RT @bnwomeh: folks Dr Brandt is receiving a deafening \"standing ovation\" that has frozen my zoom feed, LOL\\n\\nwe love you @drmlb \\xf0\\x9f\\x92\\x8c\\xf0\\x9f\\x92\\x8c\\xf0\\x9f\\x92\\x8c\\xf0\\x9f\\x92\\x8c'",
        Month: "May",
        "Dimension 1": 20.545795,
        "Dimension 2": -25.505306,
        Sentiment: 0.5,
        Subjectivity: 0.6,
        idx: 1389,
      },
      {
        RawTweet:
          "b'Trump administration ended pandemic early-warning program to detect coronaviruses https:\/\/t.co\/KIgpqzsJjD #covid19 #coronavirus'",
        Month: "April",
        "Dimension 1": -30.69757,
        "Dimension 2": 1.3719916,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1390,
      },
      {
        RawTweet:
          "['White House Easter Egg Roll Canceled \u2018Out Of An Abundance Of Caution\u2019 Mary Margaret Olohan on March 16, 2020 The White House Easter Egg Roll has been canceled due to the #coronavirus pandemic. The Office of the First Lady https:\/\/t.co\/yuTFswLe6e #eastereggroll #thewhitehouse https:\/\/t.co\/tXqKEQanuO', 'White House Easter Egg Roll Canceled \u2018Out Of An Abundance Of Caution\u2019 Mary Margaret Olohan on March 16, 2020 The White House Easter Egg Roll has been canceled due to the #coronavirus pandemic. The Office of the First Lady https:\/\/t.co\/yuTFswLe6e #eastereggroll #thewhitehouse https:\/\/t.co\/tXqKEQanuO']",
        Month: "March",
        "Dimension 1": -32.496708,
        "Dimension 2": 5.743869,
        Sentiment: 0.03125,
        Subjectivity: 0.177083333,
        idx: 1391,
      },
      {
        RawTweet:
          "b'RT @ViralRNA: My blood has frozen in my veins. The air has been punched out of my lungs. \\n\\nItalian Army transports ~60 bodies from overwhel\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -37.14612,
        "Dimension 2": 19.93073,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1392,
      },
      {
        RawTweet:
          '["As the #coronavirus outbreak keeps us at home, here are a few titles you should add to your reading list, recommended by America\'s mayors.\\nhttps:\/\/t.co\/8lBTNnSmK2"]',
        Month: "March",
        "Dimension 1": 12.124629,
        "Dimension 2": -4.8192453,
        Sentiment: -0.2,
        Subjectivity: 0.1,
        idx: 1393,
      },
      {
        RawTweet:
          '["#BREAKING Canadian Olympic officials urge postponement of the #TokyoOlympics, saying that in view of the #coronavirus pandemic they won\'t send a team in the summer of 2020\\n\\n#Tokyo2020 https:\/\/t.co\/yTH93U4UpC"]',
        Month: "March",
        "Dimension 1": -38.77844,
        "Dimension 2": -0.68598235,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1394,
      },
      {
        RawTweet:
          "b'RT @drkomanduri: Given the generally warm response to this #VirtualHappyHour idea I\\xe2\\x80\\x99m having a cocktail at exactly 8 PM ET. Please RT this,\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 20.747244,
        "Dimension 2": 33.634377,
        Sentiment: 0.425,
        Subjectivity: 0.425,
        idx: 1395,
      },
      {
        RawTweet:
          "I thank my sister Henrietta, @unicefchief, for joining the #COVID19 Solidarity Response Fund. @UNICEF has extensive experience both in fundraising and implementing programmes, and this new partnership will help us work together, even more closely, to save lives.",
        Month: "April",
        "Dimension 1": 35.679977,
        "Dimension 2": -17.535172,
        Sentiment: 0.212121212,
        Subjectivity: 0.429292929,
        idx: 1396,
      },
      {
        RawTweet:
          '["#Coronavirus\\nIf it can be seen as an indicator of how far things can go, the Faroe Islands, with a population of 49.000 people have 47 confirmed cases. That\'s close to 1000 cases per million  and it started there less than two weeks ago. \\nFollow the recommendations. Stay home.", "#Coronavirus\\nIf it can be seen as an indicator of how far things can go, the Faroe Islands, with a population of 49.000 people have 47 confirmed cases. That\'s close to 1000 cases per million  and it started there less than two weeks ago. \\nFollow the recommendations. Stay home.", "#Coronavirus\\nIf it can be seen as an indicator of how far things can go, the Faroe Islands, with a population of 49.000 people have 47 confirmed cases. That\'s close to 1000 cases per million  and it started there less than two weeks ago. \\nFollow the recommendations. Stay home."]',
        Month: "March",
        "Dimension 1": -15.412825,
        "Dimension 2": 38.010345,
        Sentiment: 0.111111111,
        Subjectivity: 0.688888889,
        idx: 1397,
      },
      {
        RawTweet:
          'b"This week\'s focus for Well-Being during\\xc2\\xa0#COVID19\\xc2\\xa0is Physical Well-Being. From sleep, to hydration, nutrition, and p\\xe2\\x80\\xa6 https:\/\/t.co\/6nTfka8cxJ"',
        Month: "May",
        "Dimension 1": 26.475645,
        "Dimension 2": 20.947178,
        Sentiment: 0.0,
        Subjectivity: 0.142857143,
        idx: 1398,
      },
      {
        RawTweet:
          "Alternatively, if you had underlying health issues AND #COVID19 and subsequently died...the virus undoubtedly played a role in the overwhelming majority of those deaths.\r\n\r\nThe sad reality is our #COVID19 death toll may actually be an UNDERCOUNT - not an overcount at all!",
        Month: "May",
        "Dimension 1": -19.300356,
        "Dimension 2": -14.084787,
        Sentiment: 0.0,
        Subjectivity: 0.5375,
        idx: 1399,
      },
      {
        RawTweet:
          "b'#COVID19 testing and treatment @CountyOfLA residents regardless of immigration status. \\nhttps:\/\/t.co\/kKgK8EzxgM https:\/\/t.co\/dn8tGsLX7n'",
        Month: "April",
        "Dimension 1": 17.300623,
        "Dimension 2": -0.658434,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1400,
      },
      {
        RawTweet:
          "One of the most valuable resources since early Jan has been being plugged into international network of health security colleagues who are advising governments &amp; linking up to share knowledge on common challenges, possible strategies &amp; new data. Collaboration is essential now.",
        Month: "April",
        "Dimension 1": 29.012985,
        "Dimension 2": -10.917311,
        Sentiment: 0.062337662,
        Subjectivity: 0.436363636,
        idx: 1401,
      },
      {
        RawTweet:
          'b"RT @dbastardo27: I\'m in total dismay by the amount of people I still read\/see on social media talking about traveling plans in the upcoming\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": -24.153465,
        "Dimension 2": -18.065407,
        Sentiment: 0.016666667,
        Subjectivity: 0.408333333,
        idx: 1402,
      },
      {
        RawTweet:
          "b'RT @BNODesk: BREAKING: Spain reports 609 new cases of coronavirus and 58 new deaths, raising total to 5,841 cases and 191 dead https:\/\/t.co\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -13.761755,
        "Dimension 2": 38.2694,
        Sentiment: 0.018181818,
        Subjectivity: 0.514772727,
        idx: 1403,
      },
      {
        RawTweet:
          "b'Looks like #coronavirus and #COVID2019 become a trending.If i need to go somewhere else,i have to wear mask .I hope you guys fine.'",
        Month: "March",
        "Dimension 1": 5.425913,
        "Dimension 2": -2.7473197,
        Sentiment: 0.416666667,
        Subjectivity: 0.5,
        idx: 1404,
      },
      {
        RawTweet:
          'A high fraction (27%) were severe, but the definition of severe was "clinical symptoms of pneumonia." Goes to show how context is so important to understanding epidemiology. https:\/\/t.co\/BMXSGjBwpG',
        Month: "March",
        "Dimension 1": -7.7694273,
        "Dimension 2": -1.8590192,
        Sentiment: 0.28,
        Subjectivity: 0.77,
        idx: 1405,
      },
      {
        RawTweet:
          "['I just cried a little watching Teen Beach \ud83c\udfd6 Movie 2 ! Wtf ! I\u2019m almost 34 years old ! I think being quarantined is starting to get to me \ud83d\ude2d#QuaratineLife #COVID19 https:\/\/t.co\/YdHFdxEaOi']",
        Month: "March",
        "Dimension 1": -25.75746,
        "Dimension 2": 20.628155,
        Sentiment: -0.1375,
        Subjectivity: 0.36,
        idx: 1406,
      },
      {
        RawTweet:
          "['#SupremeCourt to Conduct Hearings Through Videoconferencing\\n\\nThe #SupremeCourtofIndia has decided to conduct virtual court hearings through videoconferencing to avoid human interface in the courts amid #coronavirus outbreak in the nation. https:\/\/t.co\/PNozHQKEEf']",
        Month: "March",
        "Dimension 1": -26.3227,
        "Dimension 2": 0.5236863,
        Sentiment: 0.0,
        Subjectivity: 0.1,
        idx: 1407,
      },
      {
        RawTweet:
          "['\u201cAt this pivotal moment in history, scientists are working around the clock in the fight against #COVID19, &amp; in many cases they are doing so while isolated at home.\u201d #LifebitCloudOS is now free to these #researchers! Read more \ud83d\udc49 https:\/\/t.co\/3UR5NbefRK\\n\\n#bioinformatics #genomics https:\/\/t.co\/cGGgFLCPn3', '\u201cAt this pivotal moment in history, scientists are working around the clock in the fight against #COVID19, &amp; in many cases they are doing so while isolated at home.\u201d #LifebitCloudOS is now free to these #researchers! Read more \ud83d\udc49 https:\/\/t.co\/3UR5NbefRK\\n\\n#bioinformatics #genomics https:\/\/t.co\/cGGgFLCPn3']",
        Month: "March",
        "Dimension 1": 12.393038,
        "Dimension 2": -3.4952786,
        Sentiment: 0.5,
        Subjectivity: 0.65,
        idx: 1408,
      },
      {
        RawTweet:
          "b'RT @megtirrell: Cepheid says it\\xe2\\x80\\x99s received FDA\\xe2\\x80\\x99s emergency use authorization for rapid point-of-care #COVID19 test with detection time of 4\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 17.758593,
        "Dimension 2": 6.516588,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1409,
      },
      {
        RawTweet:
          'b\'RT @EricTopol: "The @CDCgov was once the world\\xe2\\x80\\x99s greatest public health agency." (True)\\n "the CDC has been inexplicably absent, and America\\xe2\\x80\\xa6\'',
        Month: "April",
        "Dimension 1": -20.04315,
        "Dimension 2": 4.542097,
        Sentiment: 0.133333333,
        Subjectivity: 0.655555556,
        idx: 1410,
      },
      {
        RawTweet:
          "@binge_tweeter Let the record state, I don\u2019t want *any* pieces. But, I\u2019m already in @nytimes and was the first week before even animal results. The pieces who want me want me regardless of the bar you set of going to market (which is not a success bar for vaccines for several reasons)",
        Month: "April",
        "Dimension 1": -41.01796,
        "Dimension 2": -6.955167,
        Sentiment: 0.033333333,
        Subjectivity: 0.111111111,
        idx: 1411,
      },
      {
        RawTweet:
          "b'We worked hard w\/ our friends in Congress @SenBooker @LindseyGrahamSC &amp; more than 60 lawmakers who just sent a lett\\xe2\\x80\\xa6 https:\/\/t.co\/z2AMHeoiCA'",
        Month: "April",
        "Dimension 1": 3.5197473,
        "Dimension 2": 36.812126,
        Sentiment: 0.104166667,
        Subjectivity: 0.520833333,
        idx: 1412,
      },
      {
        RawTweet:
          "b'RT @sciencecohen: Models are models, as the old caveat goes. But governments increasingly rely on them to guide their pandemic responses. @\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 3.9419072,
        "Dimension 2": -8.750348,
        Sentiment: 0.1,
        Subjectivity: 0.2,
        idx: 1413,
      },
      {
        RawTweet:
          "b'This virus is strangely decimating the population and all we can do in response to it is social distance? #Coronavirus #shameOnScience'",
        Month: "March",
        "Dimension 1": -22.24573,
        "Dimension 2": -8.627633,
        Sentiment: -0.008333333,
        Subjectivity: 0.108333333,
        idx: 1414,
      },
      {
        RawTweet:
          "['It\u2019s no \u201cHappy Holidays,\u201d but Trump wanting to pack churches on Easter Sunday during a pandemic does seem like quite the attack against Christians.\\n#coronavirus', 'It\u2019s no \u201cHappy Holidays,\u201d but Trump wanting to pack churches on Easter Sunday during a pandemic does seem like quite the attack against Christians.\\n#coronavirus']",
        Month: "March",
        "Dimension 1": -32.37138,
        "Dimension 2": 5.6742644,
        Sentiment: -0.4,
        Subjectivity: 1.0,
        idx: 1415,
      },
      {
        RawTweet:
          "b'RT @sciencecohen: This is a most provocative experiment by Sinovac, which already has started human trials--and has a licensed Ebola vaccin\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -7.029709,
        "Dimension 2": -4.524487,
        Sentiment: 0.25,
        Subjectivity: 0.3,
        idx: 1416,
      },
      {
        RawTweet:
          "['@TransLinkSEQ Hey team, am on NGR train looking at the various messages on the electronic screens. May I suggest an adding a slide\/graphic reminding all of the #COVID19 prevention tips (handy for upcoming flu season too). Can @qldhealthnews provide content?']",
        Month: "March",
        "Dimension 1": 19.074175,
        "Dimension 2": 13.030075,
        Sentiment: 0.3,
        Subjectivity: 0.7,
        idx: 1417,
      },
      {
        RawTweet:
          "['Am i imagining about whats happening in the world today. Things that we often watched in a super hero movie..\\nWell, yes it is. So, lets join hands and work together.\\n\\n#StayHomeStaySafe \\n\\n#COVID19']",
        Month: "March",
        "Dimension 1": 13.209638,
        "Dimension 2": 1.2030984,
        Sentiment: 0.333333333,
        Subjectivity: 0.666666667,
        idx: 1418,
      },
      {
        RawTweet:
          "b'You know, if the Coronavirus used a private server to do emails, the GOP would have found a way to stop it!  #coronavirus'",
        Month: "April",
        "Dimension 1": -19.890963,
        "Dimension 2": -10.700785,
        Sentiment: 0.0,
        Subjectivity: 0.375,
        idx: 1419,
      },
      {
        RawTweet:
          "If someone had told me 1 mo ago that most of the world would be locked down due to a #pandemic, the US &amp; UK would have the worst global response &amp; Tony Fauci would be a hero w\/ his face on a donut, I would have told them they were nuts. #COVID19 #SARSCoV2\r\n\r\nhttps:\/\/t.co\/fiizw8UhaZ",
        Month: "March",
        "Dimension 1": -23.251652,
        "Dimension 2": -2.1495676,
        Sentiment: -0.156111111,
        Subjectivity: 0.432777778,
        idx: 1420,
      },
      {
        RawTweet:
          'b"Union leaders have attacked the Prime Minister\'s speech about easing the lockdown, accusing him of sending mixed me\\xe2\\x80\\xa6 https:\/\/t.co\/qG4BYnszkH"',
        Month: "May",
        "Dimension 1": -19.774704,
        "Dimension 2": -3.8818192,
        Sentiment: 0.0,
        Subjectivity: 0.25,
        idx: 1421,
      },
      {
        RawTweet:
          'b"RT @CarlosdelRio7: Protecting Health Care Workers during the COVID-19 Coronavirus Outbreak \\xe2\\x80\\x93Lessons from Taiwan\'s SARS response | Clinical\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": -2.109928,
        "Dimension 2": 8.156953,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1422,
      },
      {
        RawTweet:
          "5 stages of #COVID19 grief. We\u2019re at various stages of denial, anger, bargaining and depression. The sooner we accept that we\u2019re going into a new normal, the sooner and safer we can reopen. https:\/\/t.co\/KwCId6Dydx",
        Month: "May",
        "Dimension 1": 0.7683344,
        "Dimension 2": -29.607178,
        Sentiment: -0.242727273,
        Subjectivity: 0.400909091,
        idx: 1423,
      },
      {
        RawTweet:
          'In this new piece, I present "Antidote to toxic principal investigators".  We must protect our next generation scientists from the principal investigators who abuse their powers and mistreat their trainees. (This piece focuses on graduate students) \r\n\r\nhttps:\/\/t.co\/6IMilcfCwN',
        Month: "April",
        "Dimension 1": 2.1313622,
        "Dimension 2": -9.063559,
        Sentiment: 0.045454545,
        Subjectivity: 0.151515152,
        idx: 1424,
      },
      {
        RawTweet:
          "['Check out my Gig on #Fiverr: promote you on my #twitch #stream with #social #media #platform https:\/\/t.co\/BalP98YMNh #coronavirus #streamer #twitchstreamer']",
        Month: "March",
        "Dimension 1": 11.0093,
        "Dimension 2": 11.436016,
        Sentiment: 0.033333333,
        Subjectivity: 0.066666667,
        idx: 1425,
      },
      {
        RawTweet:
          "b'RT @kit_delgadoMD: Public health canary in the coal mine: track ER visits in real time. (Surveillance of ER docs twitter feeds would have w\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 18.782845,
        "Dimension 2": 13.371747,
        Sentiment: 0.1,
        Subjectivity: 0.183333333,
        idx: 1426,
      },
      {
        RawTweet:
          "b'To control the risk of infection when travelling:\\n\\n\\xf0\\x9f\\x9a\\xb6 \\xf0\\x9f\\x9a\\xb4 Walk or cycle if you can, or use your car\\n\\xe2\\xac\\x85\\xef\\xb8\\x8f\\xe2\\x9e\\xa1Keep a safe dis\\xe2\\x80\\xa6 https:\/\/t.co\/wMyJDJERgt'",
        Month: "May",
        "Dimension 1": 12.6495,
        "Dimension 2": 7.723321,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1427,
      },
      {
        RawTweet:
          "In this television interview, I discuss the fact that as we end social distancing mandates it is inevitable that cases and deaths due to #COVID19 will accrue and that\u2019s the horrible choice we have, but it is the reality of the situation https:\/\/t.co\/Rkumi3q6Du",
        Month: "May",
        "Dimension 1": -9.816933,
        "Dimension 2": -14.164319,
        Sentiment: -0.272916667,
        Subjectivity: 0.610416667,
        idx: 1428,
      },
      {
        RawTweet:
          "b'\\xe2\\x80\\x9cI Don\\'t Want You in My ICU ... Stay Home!\" -Nurse counter-protesting the far-right \"liberate\" insanity.\\nThey can\\'t\\xe2\\x80\\xa6 https:\/\/t.co\/Nh4jIxYEJX'",
        Month: "April",
        "Dimension 1": -34.641426,
        "Dimension 2": -9.815449,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1429,
      },
      {
        RawTweet:
          "b'I found out that my grandfather passed away last night after being COVID+ for weeks and suffering from kidney failu\\xe2\\x80\\xa6 https:\/\/t.co\/UmaW1ruv0f'",
        Month: "May",
        "Dimension 1": -38.01322,
        "Dimension 2": 14.8280525,
        Sentiment: 0.0,
        Subjectivity: 0.066666667,
        idx: 1430,
      },
      {
        RawTweet:
          "Energized by the rollout of our new 3-D Commission on social determinants of health, data, and decision-making funded by @RockefellerFdn. It is a privilege, in the role of Commission Chair, to work with colleagues like @SalmaMHAbdalla on this. https:\/\/t.co\/wwbjuvr2NP",
        Month: "March",
        "Dimension 1": 27.22323,
        "Dimension 2": -4.297284,
        Sentiment: 0.084848485,
        Subjectivity: 0.260606061,
        idx: 1431,
      },
      {
        RawTweet:
          'b"@Craig_A_Spencer Attkisson is terrible. She\'s antivaccine so no surprise she helps spread a narrative of doubt about coronavirus as well."',
        Month: "May",
        "Dimension 1": -16.237677,
        "Dimension 2": -1.659736,
        Sentiment: -1.0,
        Subjectivity: 1.0,
        idx: 1432,
      },
      {
        RawTweet:
          "b'Find yourself doing more virtual patient education for #cancer treatment because of #COVID19? Check out the new pat\\xe2\\x80\\xa6 https:\/\/t.co\/pnLcaZ7gw4'",
        Month: "April",
        "Dimension 1": 23.413868,
        "Dimension 2": 3.849514,
        Sentiment: 0.318181818,
        Subjectivity: 0.477272727,
        idx: 1433,
      },
      {
        RawTweet:
          "['\ud83c\udfe1 Stay home &amp; Keep safe.\\nRead and learn @English at home. Study now at the time of #coronavirus, benefit in the future. \\nYou need just your @smartphone\ud83d\udcf1\\nhttps:\/\/t.co\/ZvlBs5CWsE https:\/\/t.co\/dlgdEl33ux', '\ud83c\udfe1 Stay home &amp; Keep safe.\\nRead and learn @English at home. Study now at the time of #coronavirus, benefit in the future. \\nYou need just your @smartphone\ud83d\udcf1\\nhttps:\/\/t.co\/ZvlBs5CWsE https:\/\/t.co\/dlgdEl33ux']",
        Month: "March",
        "Dimension 1": 26.403715,
        "Dimension 2": -32.49136,
        Sentiment: 0.0,
        Subjectivity: 0.0625,
        idx: 1434,
      },
      {
        RawTweet:
          "b'RT @WSJ: From @WSJopinion: Death rates spiked in Italy and China when health-care systems became exhausted. Here\\xe2\\x80\\x99s how American hospitals c\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -29.005003,
        "Dimension 2": 18.273853,
        Sentiment: -0.2,
        Subjectivity: 0.35,
        idx: 1435,
      },
      {
        RawTweet:
          "b'RT @skaushik2025: As with hand-washing, timing matters with sanitizers. After squirting a dollop onto your palm, rub it all over your hands\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 3.0458438,
        "Dimension 2": -14.59344,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1436,
      },
      {
        RawTweet:
          "S. Korea has done 190,000 tests. 51 million people live there. U.S. has done 4,500 tests. 327 million people live there.\r\n\r\nIf you want to tackle &amp; quickly contain an outbreak, crucial to know how big it is. \r\n\r\nhttps:\/\/t.co\/6yl7IMU1m1",
        Month: "March",
        "Dimension 1": -14.1680155,
        "Dimension 2": 40.490105,
        Sentiment: 0.121212121,
        Subjectivity: 0.52,
        idx: 1437,
      },
      {
        RawTweet:
          "@iu22ie33 It is likely that a SARS-CoV positive person would cross-react. But there are only 7200 of them worldwide. \r\n\r\nThanks for translating! Yeah, I am sick of people blaming people. We need to work together to fight this!",
        Month: "March",
        "Dimension 1": -27.925169,
        "Dimension 2": -10.532483,
        Sentiment: -0.083116883,
        Subjectivity: 0.720519481,
        idx: 1438,
      },
      {
        RawTweet:
          "To all my Habesha folks in VA, please vote and submit your absentee ballot!\r\nIf you are looking for your nominee and live in the fifth district of the VA, please vote for @DrCameronWebb husband of another beautiful Doctor and a former colleague @Leighwebb_MD. Best of luck. https:\/\/t.co\/o3BMIPxxHG",
        Month: "May",
        "Dimension 1": 3.1183069,
        "Dimension 2": 28.815714,
        Sentiment: 0.496590909,
        Subjectivity: 0.45,
        idx: 1439,
      },
      {
        RawTweet:
          "['SXSW 2020 Cancellation Leads to Major Layoffs https:\/\/t.co\/ushuQE1i2m via @pitchfork #SXSW #coronavirus #cancelled #insurance', 'SXSW 2020 Cancellation Leads to Major Layoffs https:\/\/t.co\/ushuQE1i2m via @pitchfork #SXSW #coronavirus #cancelled #insurance']",
        Month: "March",
        "Dimension 1": -34.228752,
        "Dimension 2": 0.7077534,
        Sentiment: 0.0625,
        Subjectivity: 0.5,
        idx: 1440,
      },
      {
        RawTweet:
          "b'This photo was taken today, in #Aden #Yemen at a grave yard where 11 people were buried due to #Coronavirus. Please\\xe2\\x80\\xa6 https:\/\/t.co\/4PCWGkMitU'",
        Month: "May",
        "Dimension 1": -15.873578,
        "Dimension 2": 18.908144,
        Sentiment: -0.125,
        Subjectivity: 0.375,
        idx: 1441,
      },
      {
        RawTweet:
          "b'From doctors, nurses, truck drivers, retail workers and our Police partners at the @TorontoPolice @HamiltonPolice\\xe2\\x80\\xa6 https:\/\/t.co\/iW3pLJj0IN'",
        Month: "April",
        "Dimension 1": 39.71366,
        "Dimension 2": 19.372765,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1442,
      },
      {
        RawTweet:
          "b'After 46 long days, I suspect my wife\\xe2\\x80\\x99s looking forward to Easter Sunday even more than me. \\n#Coronavirus #Covid19\\nhttps:\/\/t.co\/q7fpeQeXgN'",
        Month: "April",
        "Dimension 1": 6.183709,
        "Dimension 2": 34.756886,
        Sentiment: 0.225,
        Subjectivity: 0.45,
        idx: 1443,
      },
      {
        RawTweet:
          "b'13\/ Steady decrease in both flu-like and COVID-like illness. Encouraging. https:\/\/t.co\/i8fyuvHn7g'",
        Month: "May",
        "Dimension 1": -3.6348467,
        "Dimension 2": -13.120131,
        Sentiment: 0.166666667,
        Subjectivity: 0.5,
        idx: 1444,
      },
      {
        RawTweet:
          "b'RT @SquawkCNBC: \"What you want to be doing is widespread screening in the community even among people who may not have any symptoms,\" says\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 31.522764,
        "Dimension 2": -5.174103,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1445,
      },
      {
        RawTweet:
          "@Hajdukm Very little. If there was that level of cross protection SARS-CoV-2 would not exist as every adult has been exposed to at least one other coronavirus by chance. SARS1 survivors aren\u2019t even immune to SARS2.",
        Month: "April",
        "Dimension 1": -37.5038,
        "Dimension 2": -16.251,
        Sentiment: -0.11375,
        Subjectivity: 0.345,
        idx: 1446,
      },
      {
        RawTweet:
          "b\"'Widespread testing is regarded by many experts as a precondition for lifting the UK lockdown' https:\/\/t.co\/2FWdNZ6dkK\"",
        Month: "April",
        "Dimension 1": -17.792397,
        "Dimension 2": -3.1589012,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1447,
      },
      {
        RawTweet:
          "@VirologyToday Exactly, this is one of the main counter arguments, it may even increase the spread. We need to find out \u2018when\u2019 wearing a mask would be most effective. But most importantly there are already strong measures; like hand washing, physical distancing and staying home if unwell...",
        Month: "April",
        "Dimension 1": 3.2923532,
        "Dimension 2": -21.04554,
        Sentiment: 0.35625,
        Subjectivity: 0.532440476,
        idx: 1448,
      },
      {
        RawTweet:
          "['In addition to its military war, the US and its Arab puppets used biological weapons on #Yemen for 5 years, #Coronavirus could be another biological weapon used against #China but went out of control. #5YearsOfWarOnYemen https:\/\/t.co\/TMIVO05fxo']",
        Month: "March",
        "Dimension 1": -25.249443,
        "Dimension 2": 17.47324,
        Sentiment: -0.1,
        Subjectivity: 0.1,
        idx: 1449,
      },
      {
        RawTweet:
          "b'RT @CT_Bergstrom: Infectious disease epidemiologists find ourselves in the odd position of criticizing as irresponsible claims that we desp\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -14.106384,
        "Dimension 2": -5.542272,
        Sentiment: -0.166666667,
        Subjectivity: 0.25,
        idx: 1450,
      },
      {
        RawTweet:
          "6\/ And, since Covid pts can go sour fast, I\u2019m guessing my colleagues in NY &amp; other hard-hit cities felt like \u2013 if somebody\u2019s sick enough to be in hospital, they could crash quickly. To have them in Javits, w\/ no real ICU, doesn\u2019t sound great. Ergo, mostly empty. Lesson learned.",
        Month: "April",
        "Dimension 1": -21.169367,
        "Dimension 2": -15.013723,
        Sentiment: 0.054404762,
        Subjectivity: 0.488214286,
        idx: 1451,
      },
      {
        RawTweet:
          'b"Jeremy Corbyn\'s Brother Piers Claims Bill Gates and George Soros Are Behind #Coronavirus as a population cull ...al\\xe2\\x80\\xa6 https:\/\/t.co\/MsCItmW76a"',
        Month: "May",
        "Dimension 1": -21.146105,
        "Dimension 2": 1.0115663,
        Sentiment: -0.4,
        Subjectivity: 0.7,
        idx: 1452,
      },
      {
        RawTweet:
          "b'Do I get CVS ExtraBucks with my ExtraCare reward card by getting tested in their parking lot?\\n\\n#coronavirus #COVID19'",
        Month: "March",
        "Dimension 1": 11.932715,
        "Dimension 2": 8.30909,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1453,
      },
      {
        RawTweet:
          'b"I was a fan of #drphill for a long time after being on @FoxNews I\'m no longer going to watching him.. just saying\\xe2\\x80\\xa6 https:\/\/t.co\/x8ma16sIQb"',
        Month: "April",
        "Dimension 1": 3.6426365,
        "Dimension 2": -25.178799,
        Sentiment: -0.05,
        Subjectivity: 0.4,
        idx: 1454,
      },
      {
        RawTweet:
          "['Kerala steps up screening of passengers as COVID-19 spreads to more countries\\n\\n#DelhiBurns #CoronavirusReachesDelhi #CoronaAlert #coronavirus', 'Kerala steps up screening of passengers as COVID-19 spreads to more countries\\n\\n#DelhiBurns #CoronavirusReachesDelhi #CoronaAlert #coronavirus']",
        Month: "March",
        "Dimension 1": -6.285881,
        "Dimension 2": 5.1945653,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1455,
      },
      {
        RawTweet:
          "#COVID19 has meant public health students have had to step into local, national, and global leadership roles sooner than they perhaps expected. Thank you to our students at @BUSPH for rising to this challenge. https:\/\/t.co\/rZ2nH4pBps",
        Month: "April",
        "Dimension 1": 27.666883,
        "Dimension 2": -11.037435,
        Sentiment: -0.025,
        Subjectivity: 0.116666667,
        idx: 1456,
      },
      {
        RawTweet:
          '["Some positive news 4 #StockMarket\\n\\n#Chinese Ambassador says more than 90% of employees of state enterprises &amp; more than 97% of emp\'s of big companies returned to work.\\nNot just that, test of vaccine for #coronavirus is in the final stage &amp; by end of April, Vaccine would be found", "Some positive news 4 #StockMarket\\n\\n#Chinese Ambassador says more than 90% of employees of state enterprises &amp; more than 97% of emp\'s of big companies returned to work.\\nNot just that, test of vaccine for #coronavirus is in the final stage &amp; by end of April, Vaccine would be found"]',
        Month: "March",
        "Dimension 1": -9.245202,
        "Dimension 2": 38.736855,
        Sentiment: 0.245454545,
        Subjectivity: 0.529090909,
        idx: 1457,
      },
      {
        RawTweet:
          "Every one of us will be impacted. Maybe you read about \u2018social distancing\u2019 and don\u2019t totally understand\/agree why it applies to you. You may think it\u2019s fine to go to bars\/restaurants, cause you\u2019re young and healthy. You hear it\u2019s \u2018just the flu\u2019. 3\/",
        Month: "March",
        "Dimension 1": 3.5010712,
        "Dimension 2": -39.32896,
        Sentiment: 0.21,
        Subjectivity: 0.443333333,
        idx: 1458,
      },
      {
        RawTweet:
          'You know life is weird when you spend your days alternating between urgent conference calls and editing google docs with names like "Liferaft" and "Frankenstein."',
        Month: "March",
        "Dimension 1": -11.348155,
        "Dimension 2": -8.844808,
        Sentiment: -0.5,
        Subjectivity: 1.0,
        idx: 1459,
      },
      {
        RawTweet:
          "#COVID19 #SciComm This project was conceived &amp; implemented by #ViralLeeLab. @ViralCarmichael initiated the idea &amp; everyone joined in. My only role was to insist that STRINGENT fact-check be in place. Now https:\/\/t.co\/6mU9HQNdTZ COVID19 blog has 150 nations checking in. #ProudPI https:\/\/t.co\/sXb8qJv6Df https:\/\/t.co\/JVRFB9oq0U",
        Month: "March",
        "Dimension 1": 30.08899,
        "Dimension 2": 5.14649,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 1460,
      },
      {
        RawTweet:
          '["Sensitive and well-informed by @lib_thinks of @thetimes on the plight of ships\' crews during #COVID19 (h\/t @hratsea) https:\/\/t.co\/igFG9cR6bZ", "Sensitive and well-informed by @lib_thinks of @thetimes on the plight of ships\' crews during #COVID19 (h\/t @hratsea) https:\/\/t.co\/igFG9cR6bZ"]',
        Month: "March",
        "Dimension 1": 5.4132404,
        "Dimension 2": -19.023586,
        Sentiment: 0.1,
        Subjectivity: 0.9,
        idx: 1461,
      },
      {
        RawTweet:
          "Speechless every time someone says that this was totally unexpected &amp; nobody saw this coming. See chapter 3: 'Preparing for the Worst: A Rapidly Spreading, Lethal Respiratory Pathogen' published by the @WHO Sept 2019. \r\n\r\nhttps:\/\/t.co\/23qTrz7dN9",
        Month: "March",
        "Dimension 1": -32.237373,
        "Dimension 2": -9.495476,
        Sentiment: -0.45,
        Subjectivity: 1.0,
        idx: 1462,
      },
      {
        RawTweet:
          "b'\\xf0\\x9f\\xa6\\xbaVarious new measures are being introduced in ports to protect the health &amp; safety of dockers during the #COVID19 p\\xe2\\x80\\xa6 https:\/\/t.co\/GnNwylgviH'",
        Month: "April",
        "Dimension 1": 20.863161,
        "Dimension 2": -16.514874,
        Sentiment: 0.136363636,
        Subjectivity: 0.454545455,
        idx: 1463,
      },
      {
        RawTweet:
          "b'Are Golf Courses Essential During The #CoronaVirus Crisis? It Depends Where You Live. (Forbes) #COVID\\xe3\\x83\\xbc19 #COVID19\\xe2\\x80\\xa6 https:\/\/t.co\/bxfArZudEY'",
        Month: "April",
        "Dimension 1": 2.2140503,
        "Dimension 2": 7.964066,
        Sentiment: 0.068181818,
        Subjectivity: 0.4,
        idx: 1464,
      },
      {
        RawTweet:
          "[\"I just donated to the #COVID19Fund to support @WHO's response efforts to the global #COVID19 pandemic. Join me to help combat this growing global threat to people's health and well-being: https:\/\/t.co\/YrqE7XTeG7\", \"I just donated to the #COVID19Fund to support @WHO's response efforts to the global #COVID19 pandemic. Join me to help combat this growing global threat to people's health and well-being: https:\/\/t.co\/YrqE7XTeG7\"]",
        Month: "March",
        "Dimension 1": -0.851906,
        "Dimension 2": -5.039475,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1465,
      },
      {
        RawTweet:
          "b'RT @DrTedros: At @WHO, we are an open book. Technical experts from around the \\xf0\\x9f\\x8c\\x8d are always embedded in our operations, working hand-in-hand\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 43.482437,
        "Dimension 2": -11.597977,
        Sentiment: 0.0,
        Subjectivity: 0.3,
        idx: 1466,
      },
      {
        RawTweet:
          "b'A very nice act of solidarity by parliamentarians to keep #Bhutan and its people safe from #COVID19. Bravo!\\n\\nhttps:\/\/t.co\/BkR3oPUUUb'",
        Month: "March",
        "Dimension 1": 33.659405,
        "Dimension 2": -24.616138,
        Sentiment: 0.64,
        Subjectivity: 0.75,
        idx: 1467,
      },
      {
        RawTweet:
          "More and more conferences are going to, by chance, have infected individuals attend and exposures will occur. Until we move fully to mitigation, contact tracing at such events will overwhelm public health professionals https:\/\/t.co\/Y4oobU9R6t",
        Month: "March",
        "Dimension 1": -7.8331685,
        "Dimension 2": 3.6886013,
        Sentiment: 0.25,
        Subjectivity: 0.391666667,
        idx: 1468,
      },
      {
        RawTweet:
          "\u201cI am speaking out because to combat this deadly virus, science -- not politics or cronyism -- has to lead the way.\u201d\u2014 \u2066@RickABright\u2069\r\nhttps:\/\/t.co\/ZtcGgUeFFD",
        Month: "April",
        "Dimension 1": 0.6354944,
        "Dimension 2": -10.279726,
        Sentiment: -0.2,
        Subjectivity: 0.4,
        idx: 1469,
      },
      {
        RawTweet:
          "b'RT @cmyeaton: We need a clearer understanding of where people are getting infected and how that has changed over time. What fraction of new\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 16.642933,
        "Dimension 2": -12.3590355,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1470,
      },
      {
        RawTweet:
          'b"@JeffYax18 I\'m trying to make the point obvious. The existing condition may put them at higher risk for developing\\xe2\\x80\\xa6 https:\/\/t.co\/AnEUkmudHD"',
        Month: "May",
        "Dimension 1": 12.265447,
        "Dimension 2": -19.925522,
        Sentiment: 0.125,
        Subjectivity: 0.5,
        idx: 1471,
      },
      {
        RawTweet:
          "b'AT LAST\\n\\nThx @TimHarford and Prof Sheila Bird @CSciPol for finally giving context to #Coronavirus stats - so many i\\xe2\\x80\\xa6 https:\/\/t.co\/ok7TWyhh2t'",
        Month: "April",
        "Dimension 1": 8.103949,
        "Dimension 2": 2.500654,
        Sentiment: 0.25,
        Subjectivity: 0.75,
        idx: 1472,
      },
      {
        RawTweet:
          "b'Important to keep close watch on how this graph evolves over coming days. States that have not yet had same impacts\\xe2\\x80\\xa6 https:\/\/t.co\/jPA2yMogUv'",
        Month: "April",
        "Dimension 1": 24.71718,
        "Dimension 2": 22.558594,
        Sentiment: 0.2,
        Subjectivity: 0.5625,
        idx: 1473,
      },
      {
        RawTweet:
          "['I, along with more than half of the majority of the US can\u2019t get tested for #COVID19 but #HarveyWeinstein can \ud83d\ude21\ud83d\ude21 \\n\\nSCREAMING LIKE A KID AND STOMPING MY FEET!']",
        Month: "March",
        "Dimension 1": -44.631462,
        "Dimension 2": -4.1584744,
        Sentiment: 0.145833333,
        Subjectivity: 0.333333333,
        idx: 1474,
      },
      {
        RawTweet:
          "['Something I heard today which caused my eyebrows to raise\\n\\n\u2018We\u2019ll have to tighten our belt as I suspect we won\u2019t be getting rent from our other properties\u2019\\n\\nCapitalism at work...\\n\\n#COVID19']",
        Month: "March",
        "Dimension 1": -22.811312,
        "Dimension 2": -24.940603,
        Sentiment: -0.125,
        Subjectivity: 0.375,
        idx: 1475,
      },
      {
        RawTweet:
          "b'RT @yesthatkarim: @PaulBieniasz @xeni Why is the growth of cases in Hong Kong so flat? \\xe2\\x80\\x9csomething something RAPID SCHOOL CLOSURES\\xe2\\x80\\x9d https:\/\/\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -19.027025,
        "Dimension 2": 20.651026,
        Sentiment: -0.025,
        Subjectivity: 0.125,
        idx: 1476,
      },
      {
        RawTweet:
          "7\/ Re: items seem key to SF's lighter hit: 1st US outbreak in Seattle, cruise ship in SF, &amp; early action by big tech. Then bold steps by elected leaders. Crucial part: people of SF followed the guidance. And, as I said yesterday, some of it was a dearth of bad breaks, just lucky",
        Month: "April",
        "Dimension 1": 13.811487,
        "Dimension 2": 17.740046,
        Sentiment: 0.020833333,
        Subjectivity: 0.583333333,
        idx: 1477,
      },
      {
        RawTweet:
          "b'Happy #MayDay2020 to all those working to keep our services going &amp; to keep us safe in the midst of the\\xe2\\x80\\xa6 https:\/\/t.co\/70prPTTItR'",
        Month: "May",
        "Dimension 1": 40.260963,
        "Dimension 2": -19.412474,
        Sentiment: 0.65,
        Subjectivity: 0.75,
        idx: 1478,
      },
      {
        RawTweet:
          "b'Movies For Everyone : Bad Boys for Life (Watch Online Free )\\nhttps:\/\/t.co\/gykqkcCPzK\\n\\n#COVID\\xe3\\x83\\xbc19 #coronavirus\\xe2\\x80\\xa6 https:\/\/t.co\/huPq0b9Gd1'",
        Month: "April",
        "Dimension 1": 14.836184,
        "Dimension 2": -5.3239226,
        Sentiment: -0.15,
        Subjectivity: 0.733333333,
        idx: 1479,
      },
      {
        RawTweet:
          "b'@gruebelschnictr \\xf0\\x9f\\x98\\x8dwhy do pet photos make everything just so much better? https:\/\/t.co\/yK0vCZl0Qu'",
        Month: "March",
        "Dimension 1": 20.63329,
        "Dimension 2": -29.613678,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1480,
      },
      {
        RawTweet:
          "b'Australia &amp; New Zealand listened you their scientists and acted promptly. \\xe2\\x81\\xa6@POTUS\\xe2\\x81\\xa9 did the opposite. The infection\\xe2\\x80\\xa6 https:\/\/t.co\/plUH7NIzTy'",
        Month: "April",
        "Dimension 1": 7.075997,
        "Dimension 2": -11.772464,
        Sentiment: 0.068181818,
        Subjectivity: 0.227272727,
        idx: 1481,
      },
      {
        RawTweet:
          "I stressed to @ASEAN +3 leaders that the world needs their support &amp; cooperation to:\r\n-share innovation in public health measures &amp; technologies \r\n-increase the production &amp; equitable distribution of public health commodities \r\n-share evidence, research &amp; experience with #COVID19.",
        Month: "April",
        "Dimension 1": 29.887499,
        "Dimension 2": -13.071804,
        Sentiment: 0.0,
        Subjectivity: 0.066666667,
        idx: 1482,
      },
      {
        RawTweet:
          'b"RT @PubHealthPost: Profile: @mdsteinmd + @sandrogalea discuss PAINED: Uncomfortable Conversations about the Public\'s Health. Reflections on\\xe2\\x80\\xa6"',
        Month: "April",
        "Dimension 1": -10.485181,
        "Dimension 2": -3.3619246,
        Sentiment: -0.25,
        Subjectivity: 0.533333333,
        idx: 1483,
      },
      {
        RawTweet:
          "Luckily we are finding some hopefully reliable Suppliers. \r\n\r\nChinese manufacturers are stepping up to produce and get them out to nations as fast as possible. \r\n\r\nBut USA is not necessarily first in line - plus Chinese ports are backed up bc limited trade\/transport.",
        Month: "March",
        "Dimension 1": -15.158786,
        "Dimension 2": 8.820704,
        Sentiment: 0.048129252,
        Subjectivity: 0.415646259,
        idx: 1484,
      },
      {
        RawTweet:
          "['Coronavirus Update \\nCountry_Region: Nigeria\\nConfirmed: 1\\nDeaths: 0\\nRecovered: 0\\nThe data comes from: https:\/\/t.co\/qubceqxAE9\\n#Coronavirus #COVID19 #bot', 'Coronavirus Update \\nCountry_Region: Nigeria\\nConfirmed: 1\\nDeaths: 0\\nRecovered: 0\\nThe data comes from: https:\/\/t.co\/qubceqxAE9\\n#Coronavirus #COVID19 #bot']",
        Month: "March",
        "Dimension 1": 6.9132767,
        "Dimension 2": -1.4335263,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1485,
      },
      {
        RawTweet:
          "@G_House__MD That could still be the case, btw especially if used incorrectly it could be a source of infection. but we do not have enough evidence. impo we may have failed to relay the message that science is not black &amp; white, we need to find the best approach considering all arguments",
        Month: "April",
        "Dimension 1": -14.080142,
        "Dimension 2": -29.351524,
        Sentiment: 0.097222222,
        Subjectivity: 0.422222222,
        idx: 1486,
      },
      {
        RawTweet:
          "Another #covid19 outbreak in South Korea- this one at an e-commerce warehouse.\r\n\r\nThey believe the index case was linked back to the nightclub outbreak.\r\n\r\n36 cases so far.\r\n\r\n3,600+ workers being tested. \r\n\r\nhttps:\/\/t.co\/nTAWdyHDBp https:\/\/t.co\/h7ayi5h66r",
        Month: "May",
        "Dimension 1": -14.799382,
        "Dimension 2": 42.199707,
        Sentiment: 0.05,
        Subjectivity: 0.5,
        idx: 1487,
      },
      {
        RawTweet:
          "I outline some of the regulatory and policy steps needed to achieve this surveillance framework in a paper published tonight along with Mark McClellan and Lauren Silvis: https:\/\/t.co\/XnVAf2wmrK",
        Month: "March",
        "Dimension 1": 19.663126,
        "Dimension 2": 16.482586,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1488,
      },
      {
        RawTweet:
          "@Modeydm @OfficialKDwow I just know the ones we have in our hospital. And, ah yes, two of my former students were quarantined. Is that enough?",
        Month: "March",
        "Dimension 1": 24.601643,
        "Dimension 2": 10.619964,
        Sentiment: 0.0,
        Subjectivity: 0.25,
        idx: 1489,
      },
      {
        RawTweet:
          "b'RT @atulbutte: Really seeing the importance of the data we collect in our #EHR systems this week. And glad to see growing interest in our @\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 43.112667,
        "Dimension 2": -8.402604,
        Sentiment: 0.35,
        Subjectivity: 0.6,
        idx: 1490,
      },
      {
        RawTweet:
          "Ethiopia: #Help translate \u2b07\ufe0f\u2b07\ufe0f\u2b07\ufe0f to our local languages in addition to Amharic. @BlenaSahilu do your magic. @Senaitbitew @GetachewSS @meazaG_ @FMoHealth @Marthinolly @AssefaSamrawit https:\/\/t.co\/zoaPwaw9xM",
        Month: "March",
        "Dimension 1": 17.70728,
        "Dimension 2": -8.231367,
        Sentiment: 0.25,
        Subjectivity: 0.5,
        idx: 1491,
      },
      {
        RawTweet:
          "Happening now: Join our weekly Community Conversation, to discuss the @BUSPH community\u2019s ongoing response to #COVID19. https:\/\/t.co\/ZRMQkyj6V7 @ActivistLabSPH @BU_tweets @PubHealthPost @PopHealthEx @bualumni",
        Month: "March",
        "Dimension 1": 10.634736,
        "Dimension 2": 36.296566,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1492,
      },
      {
        RawTweet:
          "['Following our last update on Friday, we have now added a list of local COVID-19 Mutual Aid groups that have been set up on Facebook (scroll down)\\n\\nhttps:\/\/t.co\/e3d21QCbyJ\\n\\n#covid\u30fc19uk #coronavirus #MutualAid']",
        Month: "March",
        "Dimension 1": 10.121357,
        "Dimension 2": 37.172874,
        Sentiment: 0.0,
        Subjectivity: 0.055555556,
        idx: 1493,
      },
      {
        RawTweet:
          '@NoahHaber thanks Noah.  It is just true full stop in infectious disease outbreaks. Acting now (which is inevitable) in doesnt preclude gathering more evidence: "At the same time, we must continue to improve our understanding while we act and change our actions as our knowledge changes."',
        Month: "May",
        "Dimension 1": 28.21769,
        "Dimension 2": -20.017754,
        Sentiment: 0.2,
        Subjectivity: 0.432142857,
        idx: 1494,
      },
      {
        RawTweet:
          "An accompanying #ElectronMicroscopy analysis by Yuki Yasumoto &amp; Tamas Horvath shows beautiful images of the #SARSCoV2 in the syncytiotrophoblasts. (2\/n) https:\/\/t.co\/f0gMKj6iV8",
        Month: "May",
        "Dimension 1": 36.65089,
        "Dimension 2": -6.435067,
        Sentiment: 0.85,
        Subjectivity: 1.0,
        idx: 1495,
      },
      {
        RawTweet:
          '["Correct me if I\'m wrong\\nBut anyone can go into a shop or supermarket .touch anything with thier infected paws ,cough all over the place and you , the next customer can walk in without the ENTIRE SUPERMARKET being disinfected first ?\\n#Covid_19SA #covid19 #CoronavirusPandemic"]',
        Month: "March",
        "Dimension 1": -28.871706,
        "Dimension 2": 10.744921,
        Sentiment: 0.083333333,
        Subjectivity: 0.319444444,
        idx: 1496,
      },
      {
        RawTweet:
          '@Robotbeat Meaning these components have to come together to make one particle, and delivered that by mRNA is something that needs to be figured out. It\'s not a "self-assembling nanoparticle" like I published with influenza. This is designer, the @CHANEL of nanoparticles haha.',
        Month: "March",
        "Dimension 1": -16.882093,
        "Dimension 2": -28.458405,
        Sentiment: 0.2,
        Subjectivity: 0.3,
        idx: 1497,
      },
      {
        RawTweet:
          "b'RT @rkwadhera: *Preliminary* #COVID19 study in @JAMA_current \\n- 5 critically ill pts. on mechanical ventilation\\n- All treated w\/ convalesce\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -10.655769,
        "Dimension 2": 0.49338675,
        Sentiment: -0.5,
        Subjectivity: 1.0,
        idx: 1498,
      },
      {
        RawTweet:
          "b'@WheatleyAtotheK Nice. I found a source in California. Still far away but closer. Thanks for offering!!!'",
        Month: "April",
        "Dimension 1": 25.691105,
        "Dimension 2": -37.739315,
        Sentiment: 0.363541667,
        Subjectivity: 0.733333333,
        idx: 1499,
      },
      {
        RawTweet:
          "b'#Corona cases have been increasing. If you are showing any signs of #coronavirus, get a free online consultation th\\xe2\\x80\\xa6 https:\/\/t.co\/0uxInU0h5C'",
        Month: "April",
        "Dimension 1": 9.136376,
        "Dimension 2": 5.6659474,
        Sentiment: 0.4,
        Subjectivity: 0.8,
        idx: 1500,
      },
      {
        RawTweet:
          "['Flusense is \u201can #AI that listens for coughing and sneezing sounds to estimate what percentage of people in a public space have a respiratory illness #COVID19outbreak #coronavirus @sallyeaves @TamaraMcCleary @pascal_bornet @mvollmer1 @DrJDrooghaag @leimer\\n\\nhttps:\/\/t.co\/mFh7VAJLp7']",
        Month: "March",
        "Dimension 1": -1.555451,
        "Dimension 2": 5.2363734,
        Sentiment: 0.0,
        Subjectivity: 0.066666667,
        idx: 1501,
      },
      {
        RawTweet:
          'b"RT @SquawkCNBC: COMING UP: A big show today featuring Ken Langone, @elerianm, @ScottGottliebMD and @mcuban. You can\'t afford to miss hearin\\xe2\\x80\\xa6"',
        Month: "April",
        "Dimension 1": 9.270594,
        "Dimension 2": 27.31813,
        Sentiment: 0.0,
        Subjectivity: 0.1,
        idx: 1502,
      },
      {
        RawTweet:
          "@csgarrix Great questions, @csgarrix! We were working on understanding these issues before COVID19 hit. We would love to resume this line of investigation once research on non-COVID subjects are allowed again in the future.",
        Month: "April",
        "Dimension 1": 19.399914,
        "Dimension 2": -12.276238,
        Sentiment: 0.5,
        Subjectivity: 0.491666667,
        idx: 1503,
      },
      {
        RawTweet:
          "['#TrumpWorld Day 1217\\nThe new #RobberBaron US hedge fund scoops $2.6bn betting #coronavirus crashes global market https:\/\/t.co\/X94Rq3SmWL via @MailOnline']",
        Month: "March",
        "Dimension 1": -20.658337,
        "Dimension 2": 11.841818,
        Sentiment: 0.068181818,
        Subjectivity: 0.227272727,
        idx: 1504,
      },
      {
        RawTweet:
          'b"#coronavirus: Please remember that our #parks are open for your daily walk, run or bike ride - but they\'re not open\\xe2\\x80\\xa6 https:\/\/t.co\/I7da0ivC6t"',
        Month: "April",
        "Dimension 1": -40.27616,
        "Dimension 2": -6.0676484,
        Sentiment: 0.0,
        Subjectivity: 0.25,
        idx: 1505,
      },
      {
        RawTweet:
          "Speak with infectious disease epidemiologist and one of TIME magazine's 50 Most Influential People in Health Care @chngin_the_wrld about #COVID19 at https:\/\/t.co\/tQCTS2FrJe. https:\/\/t.co\/3oSTRDzYat",
        Month: "May",
        "Dimension 1": -0.7185068,
        "Dimension 2": 31.43557,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1506,
      },
      {
        RawTweet:
          "b'#LockDownDay37: The decision we make everyday has an effect on the curve of #COVID19 in our society. To flatten the\\xe2\\x80\\xa6 https:\/\/t.co\/b3M6BdEKg3'",
        Month: "May",
        "Dimension 1": 13.826569,
        "Dimension 2": -16.731695,
        Sentiment: -0.2,
        Subjectivity: 0.6,
        idx: 1507,
      },
      {
        RawTweet:
          "b'Latest on #COVID19 support actions. Gaydon just started 3D printing #NHS approved reusable face visors for frontlin\\xe2\\x80\\xa6 https:\/\/t.co\/zRlGnXCv6R'",
        Month: "April",
        "Dimension 1": 18.842112,
        "Dimension 2": 3.558196,
        Sentiment: 0.5,
        Subjectivity: 0.9,
        idx: 1508,
      },
      {
        RawTweet:
          "\u201cpreparing to buy a motel in the Seattle area where people who were infected with coronavirus could stay to remain isolated\u201d https:\/\/t.co\/mcb5sLe16h",
        Month: "March",
        "Dimension 1": -29.601099,
        "Dimension 2": 22.144876,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1509,
      },
      {
        RawTweet:
          "I wrote a piece on #COVID2019 that I published on @medium. It details what I personally think are the right actions to take, how to face this pandemic, how to weigh the benefits and risks of shutdowns, and ensure hospitals are adequately prepared for surge https:\/\/t.co\/gMSV90wemt",
        Month: "March",
        "Dimension 1": 21.812279,
        "Dimension 2": -7.9532332,
        Sentiment: 0.206349206,
        Subjectivity: 0.38968254,
        idx: 1510,
      },
      {
        RawTweet:
          "We need to be #HealthyAtHome not just for our physical wellbeing but also our #mentalhealth. Thank you @UnitedGMH for your collaboration and support to people to beat #COVID19. https:\/\/t.co\/OoBZ8P44L8",
        Month: "April",
        "Dimension 1": 34.37687,
        "Dimension 2": -16.97866,
        Sentiment: 0.0,
        Subjectivity: 0.142857143,
        idx: 1511,
      },
      {
        RawTweet:
          'b"PATH\'s @DigitalSQR initiative is hosting a webinar tomorrow at 6:00am PT on how private sector #tech is being used\\xe2\\x80\\xa6 https:\/\/t.co\/YD5zFoWCKq"',
        Month: "April",
        "Dimension 1": 8.906581,
        "Dimension 2": 42.3874,
        Sentiment: 0.0,
        Subjectivity: 0.375,
        idx: 1512,
      },
      {
        RawTweet:
          "b'RT @HealthyBrown: Incoming dean @ashishkjha says there is no better time to learn public health. Come join us.'",
        Month: "May",
        "Dimension 1": 26.927328,
        "Dimension 2": -2.8194056,
        Sentiment: -0.125,
        Subjectivity: 0.283333333,
        idx: 1513,
      },
      {
        RawTweet:
          "b'RT @BBCSangita: When we\\xe2\\x80\\x99re scared the instinct is to hunker down, fend for ourselves. In terms of international public health we MUST do th\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -9.138547,
        "Dimension 2": -15.17981,
        Sentiment: -0.051851852,
        Subjectivity: 0.118518519,
        idx: 1514,
      },
      {
        RawTweet:
          "b'RT @FaceTheNation: SUNDAY: We get the latest on potential treatment for #COVID19 as much of the country looks to reopening post-#coronaviru\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 6.5557275,
        "Dimension 2": 34.899025,
        Sentiment: 0.233333333,
        Subjectivity: 0.7,
        idx: 1515,
      },
      {
        RawTweet:
          "b'Living in the US right now feels like being stuck in that mindblowing chapter of a novel about a totalitarian regim\\xe2\\x80\\xa6 https:\/\/t.co\/sHkXFXaeQH'",
        Month: "April",
        "Dimension 1": -30.485023,
        "Dimension 2": -31.650843,
        Sentiment: 0.285714286,
        Subjectivity: 0.535714286,
        idx: 1516,
      },
      {
        RawTweet:
          "b'RT @PaulBieniasz: Scientists In New York Urge Closure Of Schools To Slow Spread Of Coronavirus via @theodora_nyc @forbes https:\/\/t.co\/VHeL2\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -28.695057,
        "Dimension 2": 6.6013145,
        Sentiment: -0.081818182,
        Subjectivity: 0.427272727,
        idx: 1517,
      },
      {
        RawTweet:
          "['Post Edited: European markets plunge as coronavirus spreads additional and \\n#coronavirus #European #markets #oil\\nhttps:\/\/t.co\/IN0LpedvsU']",
        Month: "March",
        "Dimension 1": -22.537247,
        "Dimension 2": 13.236115,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1518,
      },
      {
        RawTweet:
          "['Way too little too late. RT @jeffschweers: Today @GovRonDeSantis suspended all vacation rentals for two weeks, said he\u2019s going to set up checkpoints for folks coming from New Orleans other parts of Louisiana. Increase SNAP benefits, extend deadlines for taxes due. #coronavirus', 'Way too little too late. RT @jeffschweers: Today @GovRonDeSantis suspended all vacation rentals for two weeks, said he\u2019s going to set up checkpoints for folks coming from New Orleans other parts of Louisiana. Increase SNAP benefits, extend deadlines for taxes due. #coronavirus']",
        Month: "March",
        "Dimension 1": -11.042982,
        "Dimension 2": 28.483665,
        Sentiment: -0.120227273,
        Subjectivity: 0.460909091,
        idx: 1519,
      },
      {
        RawTweet:
          "b'B.C. #COVID19 update as per Dr. Henry (Thurs, April 23):\\n- 29 new cases \\n- 1,824 total cases in B.C.\\n- 2 new cases\\xe2\\x80\\xa6 https:\/\/t.co\/bOaexdHfvN'",
        Month: "April",
        "Dimension 1": -0.9277502,
        "Dimension 2": 44.473274,
        Sentiment: 0.090909091,
        Subjectivity: 0.553030303,
        idx: 1520,
      },
      {
        RawTweet:
          "Spoke today with \u2066@ljmullinsworld\u2069 \u2066@WBUR\u2069 for \u2066@npratc\u2069 on fiasco federal response, how we still cant test folks who need it, &amp; how we prevent hospital overload\r\n\r\nWe can still avoid the fate of Italy. But dont expect the feds to be useful https:\/\/t.co\/5gwV8TSid6",
        Month: "March",
        "Dimension 1": -37.578827,
        "Dimension 2": -7.883096,
        Sentiment: 0.3,
        Subjectivity: 0.0,
        idx: 1521,
      },
      {
        RawTweet:
          "Finally, some good news.\r\n\r\nAll the evidence suggests that Dogs cannot get COVID19\r\n\r\n(ok so there isn't much evidence but whatever).\r\n\r\nSo I'm promoting social distancing. Don't hug your friends.\r\n\r\nBut please hug your little pup.\r\n\r\nHere's ours. Cody. https:\/\/t.co\/jAp5zRMJHr",
        Month: "March",
        "Dimension 1": -5.197179,
        "Dimension 2": -40.657,
        Sentiment: 0.207638889,
        Subjectivity: 0.477777778,
        idx: 1522,
      },
      {
        RawTweet:
          "b'So \\xe2\\x81\\xa6@TwitterDE\\xe2\\x81\\xa9 in a time when we try to stand together as one, you spam me with Amok advertising?! Is that what yo\\xe2\\x80\\xa6 https:\/\/t.co\/FUwUX91JHL'",
        Month: "April",
        "Dimension 1": 6.483441,
        "Dimension 2": -14.397337,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1523,
      },
      {
        RawTweet:
          "b'RT @davidrliu: In addition, the authors observed interesting cross-reactivity of antibodies against SARS-CoV &amp; MERS-CoV trimeric spike prot\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 21.00507,
        "Dimension 2": -2.005901,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1524,
      },
      {
        RawTweet:
          "About to go on @CNN with @JohnKingCNN to talk COVID19. \r\n\r\nHow prepared are we? \r\n\r\nShort answer: Somewhat -- but we have a lot more to do to get ready",
        Month: "March",
        "Dimension 1": 2.1399534,
        "Dimension 2": -23.375399,
        Sentiment: 0.233333333,
        Subjectivity: 0.433333333,
        idx: 1525,
      },
      {
        RawTweet:
          "b'RT @EpiEllie: After a month of doing #COVID19 media interviews, here are some random things I\\xe2\\x80\\x99ve learned about talking to the press as a sc\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 7.8234577,
        "Dimension 2": 32.929287,
        Sentiment: -0.5,
        Subjectivity: 0.5,
        idx: 1526,
      },
      {
        RawTweet:
          "['Billy Joel Condensed Concert!\\nName all seven @billyjoel hits or better yet: record yourself singing along! #CoronaLockdown #COVID19 #billyjoel @TheGarden https:\/\/t.co\/RQdEDsw2ff']",
        Month: "March",
        "Dimension 1": 22.794155,
        "Dimension 2": 29.289635,
        Sentiment: 0.625,
        Subjectivity: 0.5,
        idx: 1527,
      },
      {
        RawTweet:
          "Welcome to my #SciOut home office! A global pandemic can't stop @BioBus scientists from teaching science. We are here to support and listen to our community. Stay tuned - we will be sharing online content shortly! #BioBase #scicomm #scienceoutreach @nycsrmc https:\/\/t.co\/DNtAOBHfd2",
        Month: "March",
        "Dimension 1": 16.426823,
        "Dimension 2": 14.216668,
        Sentiment: 0.333333333,
        Subjectivity: 0.4,
        idx: 1528,
      },
      {
        RawTweet:
          "b'RT @VirusWhisperer: #COVID19 2\/n: If no significant \\xe2\\xac\\x86\\xef\\xb8\\x8f cases continue, esp. if Wuhan begins to re-open, #serology studies are critical. You\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 10.085853,
        "Dimension 2": -11.488591,
        Sentiment: -0.09375,
        Subjectivity: 0.8375,
        idx: 1529,
      },
      {
        RawTweet:
          "b'@AZDHS is continuing the #COVID19 testing blitz the next two weekends (May 23rd and May 30th.) Find a location near\\xe2\\x80\\xa6 https:\/\/t.co\/FSny2UKRAd'",
        Month: "May",
        "Dimension 1": 2.2698383,
        "Dimension 2": 40.93819,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1530,
      },
      {
        RawTweet:
          "b'RT @VirusWhisperer: Nice to see most New Yorkers complying with Executive Order to wear masks. And our Bldg\\xe2\\x80\\x99s \\xe2\\x81\\xa6@Related_Group\\xe2\\x81\\xa9 public servi\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 16.978966,
        "Dimension 2": -2.980715,
        Sentiment: 0.309090909,
        Subjectivity: 0.50530303,
        idx: 1531,
      },
      {
        RawTweet:
          '["How do you explain #COVID19 to a #DownSyndrome person whose life is defined by predictability &amp; routine? Here is a poignant recount of Damini\'s day in a #lockdownindia world. Damini works at #MittiCafe #IQVIA #Bengaluru &amp; is a great source of joy for us. https:\/\/t.co\/ZcHdGX687o"]',
        Month: "March",
        "Dimension 1": 38.458004,
        "Dimension 2": -12.68853,
        Sentiment: 0.533333333,
        Subjectivity: 0.483333333,
        idx: 1532,
      },
      {
        RawTweet:
          'b"#COVID19 disruptions pose a threat to #clinicaltrial continuity. Our work and purpose, alongside @npv_vc\'s portfoli\\xe2\\x80\\xa6 https:\/\/t.co\/8byJyFqbwU"',
        Month: "April",
        "Dimension 1": 9.408507,
        "Dimension 2": -17.869915,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1533,
      },
      {
        RawTweet:
          "['We stand by Italy during these trying times. Share your Support for our Italian friends, They are our colleagues, friends and family. Cari amici, siamo con voi. #COVID19 #WeStandWithItaly', 'We stand by Italy during these trying times. Share your Support for our Italian friends, They are our colleagues, friends and family. Cari amici, siamo con voi. #COVID19 #WeStandWithItaly']",
        Month: "March",
        "Dimension 1": 42.778584,
        "Dimension 2": -28.701662,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1534,
      },
      {
        RawTweet:
          "['1 new death in Berkshire, England, United Kingdom. This is the first death in the United Kingdom. The patient, described only as elderly, had underlying health issues\\n#coronavirus #COVID2019']",
        Month: "March",
        "Dimension 1": -17.11421,
        "Dimension 2": 31.853098,
        Sentiment: 0.128787879,
        Subjectivity: 0.595959596,
        idx: 1535,
      },
      {
        RawTweet:
          "South Korea is showing #COVID19 can be beat with smart, aggressive public health. Their daily new cases declined again to 76. They\u2019ve tested 268,000 people for virus since their epidemic began and implemented aggressive containment and mitigation, closing schools, venues quickly.",
        Month: "March",
        "Dimension 1": -14.636221,
        "Dimension 2": 30.46519,
        Sentiment: 0.136796537,
        Subjectivity: 0.332813853,
        idx: 1536,
      },
      {
        RawTweet:
          "b'RT @jameshay218: Total isolation isn\\xe2\\x80\\x99t the only way to reduce #coronavirus spread. Reducing unnecessary contacts (only invite the best peop\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -1.4346652,
        "Dimension 2": -14.751686,
        Sentiment: 0.12,
        Subjectivity: 0.79,
        idx: 1537,
      },
      {
        RawTweet:
          "['Wait o.I thought one mumu in the seat of power once said we\u2019re ready for #COVID19 in https:\/\/t.co\/CvvTROqeUT this the definition of being ready??#COVID19NIGERIA', 'Wait o.I thought one mumu in the seat of power once said we\u2019re ready for #COVID19 in https:\/\/t.co\/CvvTROqeUT this the definition of being ready??#COVID19NIGERIA']",
        Month: "March",
        "Dimension 1": 15.909253,
        "Dimension 2": -14.899101,
        Sentiment: 0.2,
        Subjectivity: 0.5,
        idx: 1538,
      },
      {
        RawTweet:
          "['Lagos State Nigeria Beefs Up Safety Amid Coronavirus Outbreak - Disinfects bus stops and motor parks (Watch)\\n\\nRecent update reveals the West African country has recorded closes to 50 cases.\\n\\n#Coronavirus #COVID19\u2026 https:\/\/t.co\/ti6O5kIun4', 'Lagos State Nigeria Beefs Up Safety Amid Coronavirus Outbreak - Disinfects bus stops and motor parks (Watch)\\n\\nRecent update reveals the West African country has recorded closes to 50 cases.\\n\\n#Coronavirus #COVID19\u2026 https:\/\/t.co\/ti6O5kIun4']",
        Month: "March",
        "Dimension 1": -31.804167,
        "Dimension 2": 23.942814,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1539,
      },
      {
        RawTweet:
          "['The latest Solidarity First News-Paper Edition! https:\/\/t.co\/AWUXGIbgQu Thanks to @JeffHannMADA #anarchism #coronavirus']",
        Month: "March",
        "Dimension 1": 8.936958,
        "Dimension 2": 3.1853836,
        Sentiment: 0.3375,
        Subjectivity: 0.477777778,
        idx: 1540,
      },
      {
        RawTweet:
          "b'RT @apoorva_nyc: I just received excellent advice from an epidemiologist to tag #epitwitter in this tweet. DOH. \\n\\nEpidemiologists, more sug\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 28.540419,
        "Dimension 2": -0.95268035,
        Sentiment: 0.75,
        Subjectivity: 0.75,
        idx: 1541,
      },
      {
        RawTweet:
          '"just one undiagnosed case can wreak havoc on a hospital and spread anxiety across a region" -- this why healthcare worker quarantines for exposures and guidance on airborne precautions should be changed https:\/\/t.co\/Wm738yS51N',
        Month: "March",
        "Dimension 1": -13.789675,
        "Dimension 2": -9.09139,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1542,
      },
      {
        RawTweet:
          "2).....However, they are efficient to stop spread to a certain extend. We currently don't have enough, therefore the message was, we should limit them to healthcare workers. However, they can be used strategically. People who interact  a lot with other people....",
        Month: "March",
        "Dimension 1": -7.5608277,
        "Dimension 2": -28.853659,
        Sentiment: 0.022321429,
        Subjectivity: 0.461607143,
        idx: 1543,
      },
      {
        RawTweet:
          "b\"The British Safety Council @BritSafe has slammed the Prime Minister #BorisJohnson 's 'reckless' message over worker\\xe2\\x80\\xa6 https:\/\/t.co\/FpsxGxUQhL\"",
        Month: "May",
        "Dimension 1": -19.524912,
        "Dimension 2": -4.0272746,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1544,
      },
      {
        RawTweet:
          "But here's why it is a best-case, likely unattainable scenario. 1) We have not proven that US-style social distancing can produce R_effective&lt;1 (declining case numbers). On this I'm hopeful, but it's a hope not a fact.",
        Month: "March",
        "Dimension 1": -13.928721,
        "Dimension 2": -33.59916,
        Sentiment: 0.016666667,
        Subjectivity: 0.533333333,
        idx: 1545,
      },
      {
        RawTweet:
          "b'Brit  [nypost] Nobel Prize winner:  #Coronavirus lockdowns cost lives instead of saving them https:\/\/t.co\/qnhTEkKfwt'",
        Month: "May",
        "Dimension 1": -18.302898,
        "Dimension 2": -0.33519304,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1546,
      },
      {
        RawTweet:
          "Today my research lab has shut down. My personnel have all volunteered to work in our @UZH_Virology diagnostics unit to help with the increased testing required to fight #COVID19 in #Zurich &amp; #Switzerland. Very proud of their team spirit to help our colleagues! We\u2019ll be back!",
        Month: "March",
        "Dimension 1": -11.38766,
        "Dimension 2": 16.823444,
        Sentiment: 0.281481481,
        Subjectivity: 0.42962963,
        idx: 1547,
      },
      {
        RawTweet:
          "@ErinSandersNP I agree to some degree. But are these productive infections that lead to viral spread? My impression was that people who lose their sense of smell are mild cases?",
        Month: "April",
        "Dimension 1": -9.56316,
        "Dimension 2": -29.518925,
        Sentiment: 0.333333333,
        Subjectivity: 0.5,
        idx: 1548,
      },
      {
        RawTweet:
          "Right call @MicrobioSoc. The world is looking for #leadership. #CROI2020 just arranged virtual conf at last minute. See @memerman \ud83d\udc4d\ud83d\ude00. Time to start thinking about a future with endemic #COVID19. There is a future. A bright one! #VaccinesWork #OneWorld https:\/\/t.co\/5aVOvRwBDN https:\/\/t.co\/qJkorvWOff",
        Month: "March",
        "Dimension 1": 25.332157,
        "Dimension 2": -1.7053814,
        Sentiment: 0.232142857,
        Subjectivity: 0.33047619,
        idx: 1549,
      },
      {
        RawTweet:
          "b'\\xe2\\x80\\x9cThere is a huge opportunity for AI to fill the data gap we have about the virus.\\xe2\\x80\\x9d - Check out how AI is finding dr\\xe2\\x80\\xa6 https:\/\/t.co\/lZidDyKbzo'",
        Month: "April",
        "Dimension 1": 9.549084,
        "Dimension 2": -11.827458,
        Sentiment: 0.4,
        Subjectivity: 0.9,
        idx: 1550,
      },
      {
        RawTweet:
          "['Update #CoronaVirus #SriLanka\u2757\\n\ud83d\ude3782 infected + (with Chinese female)\\n\ud83d\ude372 critical at ICU\\n\ud83d\ude37222 under observation\\n\ud83d\ude373000 at Quarantine Centers\\n\ud83d\ude3711,842 in Self quarantine \\n\ud83d\ude37790 arrested over curfew violations \\n#LKA #COVID19 \\n#StayAtHome  #staysafe \\n@SriLankaTweet']",
        Month: "March",
        "Dimension 1": -22.76752,
        "Dimension 2": 8.615467,
        Sentiment: 0.0,
        Subjectivity: 0.4,
        idx: 1551,
      },
      {
        RawTweet:
          "b'The latest The Elections Directory News! https:\/\/t.co\/LWCqp3VKvC Thanks to @Timetotalk25 @VictorPeng8 @Kimberly__SRB #covid19 #walkaway'",
        Month: "April",
        "Dimension 1": 22.014658,
        "Dimension 2": 15.310517,
        Sentiment: 0.4125,
        Subjectivity: 0.55,
        idx: 1552,
      },
      {
        RawTweet:
          "b'RT @Prof_Lowe: So much to unpack in this #COVID_19 article. Loosing 124 healthcare workers is significant.  https:\/\/t.co\/FQ1DDPt3LH'",
        Month: "March",
        "Dimension 1": -9.411586,
        "Dimension 2": -0.6888961,
        Sentiment: 0.2875,
        Subjectivity: 0.5375,
        idx: 1553,
      },
      {
        RawTweet:
          "['\u201cAs of Monday afternoon, total testing in entire US was estimated to be under 5,000\u201d for pop of 327 million; #ON tested 1\/2 as many people for pop of 14 million people; South Korea, pop 51 million \u201cis testing 10,000 a day\u201d\ud83d\ude33\ud83e\udd10 #COVID19 #coronavirus https:\/\/t.co\/xfcGVLlkh3']",
        Month: "March",
        "Dimension 1": -16.28127,
        "Dimension 2": 37.621685,
        Sentiment: 0.166666667,
        Subjectivity: 0.625,
        idx: 1554,
      },
      {
        RawTweet:
          "We updated our numbers on total #coronavirus testing capacity in U.S. We believe by the end of week capacity will reach or exceed the ability to test 20,000 patients a day. While capacity isn\u2019t evenly distributed around nation, LabCorp and Quest provide important swing capacity. https:\/\/t.co\/HHAnKUII6s",
        Month: "March",
        "Dimension 1": -5.2146163,
        "Dimension 2": 37.790016,
        Sentiment: 0.2,
        Subjectivity: 0.875,
        idx: 1555,
      },
      {
        RawTweet:
          "b'Sobering moment - U.S. Surpasses China to Become Country With Most Coronavirus Cases https:\/\/t.co\/WahMXh4KwQ'",
        Month: "March",
        "Dimension 1": -13.449335,
        "Dimension 2": 34.82191,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1556,
      },
      {
        RawTweet:
          "['If FIRs can he booked by @JmuKmrPolice against the violators during #lockdown why no action has been initiated against an #IPS officer who forcefully shifted 9 students,quarantined at Samba, to a nearby five star hotel. Is this how we ll win war against #Covid19 @kansalrohit69']",
        Month: "March",
        "Dimension 1": -27.703768,
        "Dimension 2": 7.7622867,
        Sentiment: 0.375,
        Subjectivity: 0.25,
        idx: 1557,
      },
      {
        RawTweet:
          "['NEW: @HouseDemocrats just introduced our third #FamiliesFirst proposal\u2014the Take Responsibility for Workers and Families Act. The bill provides more than $2.5 trillion to boldly address the impacts of the #coronavirus on families, businesses, &amp; communities. https:\/\/t.co\/Gl3u4I7o4q', 'NEW: @HouseDemocrats just introduced our third #FamiliesFirst proposal\u2014the Take Responsibility for Workers and Families Act. The bill provides more than $2.5 trillion to boldly address the impacts of the #coronavirus on families, businesses, &amp; communities. https:\/\/t.co\/Gl3u4I7o4q']",
        Month: "March",
        "Dimension 1": -2.7359207,
        "Dimension 2": 28.886522,
        Sentiment: 0.242424242,
        Subjectivity: 0.40530303,
        idx: 1558,
      },
      {
        RawTweet:
          "With #COVID19, infectious disease is in the spotlight. Now is an important time to fund programs in the US and abroad to address this pandemic and reduce risk of the next. I shared my thoughts in @TheHill #coronavirus https:\/\/t.co\/dFGAlnukNo",
        Month: "March",
        "Dimension 1": 0.25072342,
        "Dimension 2": -5.6587305,
        Sentiment: 0.2,
        Subjectivity: 0.5,
        idx: 1559,
      },
      {
        RawTweet:
          "Another thing I will be looking for this week are scientific reports from affected countries outside of China. It will be important to understand to what degree the clinical and epidemiological observations in China are generalizable to other countries. 1\/",
        Month: "March",
        "Dimension 1": -13.140725,
        "Dimension 2": -25.711514,
        Sentiment: 0.091666667,
        Subjectivity: 0.475,
        idx: 1560,
      },
      {
        RawTweet:
          "b'@DrJarlov Interesting. The New York results are provided by sub-regions. Might present those as separate data points.'",
        Month: "April",
        "Dimension 1": 3.6603782,
        "Dimension 2": -33.29569,
        Sentiment: 0.212121212,
        Subjectivity: 0.318181818,
        idx: 1561,
      },
      {
        RawTweet:
          "b'RT @drsanjaygupta: Had a really remarkable conversation with @KizzyPhD, who is spearheading the vaccine trial at @NIH. (1\/2) https:\/\/t.co\/w\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 25.772655,
        "Dimension 2": 0.98872185,
        Sentiment: 0.75,
        Subjectivity: 0.75,
        idx: 1562,
      },
      {
        RawTweet:
          "Very, very sad to hear about Netsanet\u2019s demise. She was one of a kind. My condolences to her family and friends. RIP. https:\/\/t.co\/SBPqA6QvAr",
        Month: "March",
        "Dimension 1": -38.003178,
        "Dimension 2": -29.282516,
        Sentiment: -0.025,
        Subjectivity: 0.95,
        idx: 1563,
      },
      {
        RawTweet:
          "b'RT @Thomasctsai: Important for people to understand #SocialDistancing is to buy time, not meant to last forever. Will need to be nimble to\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 1.2594714,
        "Dimension 2": -34.5832,
        Sentiment: 0.2,
        Subjectivity: 0.533333333,
        idx: 1564,
      },
      {
        RawTweet:
          "Testing: Who's Getting It?\r\n\r\n\ud83d\udd39Almost invariably, the only people getting tested are the patients getting hospitalized.\r\n\r\n\ud83d\udd39Why does that matter? Because hospitals are sending home probable cases every day without any confirmatory testing. We just don't have the capacity.",
        Month: "April",
        "Dimension 1": -33.014874,
        "Dimension 2": -13.988379,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 1565,
      },
      {
        RawTweet:
          "Great article on what we need to do to get people to actually wear masks (a recent poll cited here says 1 in 3 Americans report \u201cnever\u201d wearing a mask when they go out)\r\n\r\nMake masking\r\n\r\n\u2022easy to do\r\n\r\n\u2022obvious why\r\n\r\n\u2022socially accepted\/expected https:\/\/t.co\/qz6ctpcVKM",
        Month: "May",
        "Dimension 1": 5.253092,
        "Dimension 2": -37.706223,
        Sentiment: 0.266666667,
        Subjectivity: 0.366666667,
        idx: 1566,
      },
      {
        RawTweet:
          "b'RT @ConnieSchultz: Like so many other Kent State students, knowing I was attending a campus (in the late \\xe2\\x80\\x9870s) where the government had mur\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 28.354923,
        "Dimension 2": 24.215384,
        Sentiment: 0.025,
        Subjectivity: 0.491666667,
        idx: 1567,
      },
      {
        RawTweet:
          "@maggiemfox I didn't think it would stop the virus when we did it at the end of January. Many countries implemented travel restrictions at the same time but have since experienced local transmission. Why more now when virus is already documented in more than 100 countries.",
        Month: "March",
        "Dimension 1": -14.033295,
        "Dimension 2": 28.543581,
        Sentiment: 0.383333333,
        Subjectivity: 0.420833333,
        idx: 1568,
      },
      {
        RawTweet:
          "['@gradecricketer brilliance today re #coronavirus from @nicklarko ... \\n\\nItalian Government: No fans allowed in any stadiums for a month across Italy. \\n\\nLarko: Sheffield Shield are SO far ahead of the curve on that. \ud83e\udd23']",
        Month: "March",
        "Dimension 1": -41.47066,
        "Dimension 2": 2.9700983,
        Sentiment: 0.1,
        Subjectivity: 1.0,
        idx: 1569,
      },
      {
        RawTweet:
          "b'The recently passed CARES Act provides taxpayers an opportunity for accelerated qualified improvement property depr\\xe2\\x80\\xa6 https:\/\/t.co\/chIfiyfpGz'",
        Month: "April",
        "Dimension 1": 18.580944,
        "Dimension 2": -14.873113,
        Sentiment: 0.0,
        Subjectivity: 0.25,
        idx: 1570,
      },
      {
        RawTweet:
          "b'Canada Chief Public Health Officer Dr. Theresa Tam has updated the number of #COVID19 cases in Canada.\\n\\nCases: 19,7\\xe2\\x80\\xa6 https:\/\/t.co\/mga6Irjy6o'",
        Month: "April",
        "Dimension 1": 39.960503,
        "Dimension 2": 19.578243,
        Sentiment: 0.0,
        Subjectivity: 0.066666667,
        idx: 1571,
      },
      {
        RawTweet:
          "In today's media briefing on #COVID19 I stressed that we are continuing to recommend that all countries make containment their highest priority: to find, test, isolate and care for every case and to trace every contact. #coronavirus \r\n\r\nhttps:\/\/t.co\/rv0ypY0Ia5",
        Month: "March",
        "Dimension 1": -2.9676645,
        "Dimension 2": -8.529064,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1572,
      },
      {
        RawTweet:
          "Atul focuses on relatively low risk to HCWs, noting zero HCW infections after major exposures @ucdavis https:\/\/t.co\/S3lTqRX2e5 &amp; Singapore https:\/\/t.co\/PyYmSrg1RU Yet cont concerns, esp in ED docs &amp; in surgical\/anesthesia colleagues who do much of their work near mouth\/nose (3\/6)",
        Month: "March",
        "Dimension 1": -16.12588,
        "Dimension 2": -39.09506,
        Sentiment: 0.090625,
        Subjectivity: 0.35,
        idx: 1573,
      },
      {
        RawTweet:
          "b'RT @BrigitteMarieD: Comparison of the #flu, COVID-19, #SARS, and #MERS.\\n\\nThe team @BioRender is creating FREE educational resources like th\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 39.090126,
        "Dimension 2": 0.7017688,
        Sentiment: 0.325,
        Subjectivity: 0.525,
        idx: 1574,
      },
      {
        RawTweet:
          "It just means changes in when people decide to visit the doctor. Often for good reason (concern about covid) but it can be hard on the health system, which is why we ask people to not visit the ER if they are doing ok. https:\/\/t.co\/X90BedEiMg",
        Month: "March",
        "Dimension 1": -19.858513,
        "Dimension 2": -21.36107,
        Sentiment: 0.302777778,
        Subjectivity: 0.547222222,
        idx: 1575,
      },
      {
        RawTweet:
          "b'Also grappling with how governments deal with Italian findings that show 50% of coronavirus carriers are asymptomatic.'",
        Month: "March",
        "Dimension 1": -18.637205,
        "Dimension 2": 36.919937,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1576,
      },
      {
        RawTweet:
          "\u201cWe identified an association between lower household income and adverse outcomes in a large cohort of individuals with AF. Our findings support consideration of income in the evaluation of cardiovascular risk in individuals with AF.\u201d https:\/\/t.co\/vwzBF4fLNX",
        Month: "March",
        "Dimension 1": -13.598339,
        "Dimension 2": -18.927546,
        Sentiment: 0.214285714,
        Subjectivity: 0.428571429,
        idx: 1577,
      },
      {
        RawTweet:
          "b'Check out this amazing video by some of Latin America\\xe2\\x80\\x99s hottest artists. Every view helps raise \\xf0\\x9f\\x92\\xb0money\\xf0\\x9f\\x92\\xb0 for the Pan\\xe2\\x80\\xa6 https:\/\/t.co\/wTh05Z9eGZ'",
        Month: "May",
        "Dimension 1": 33.129875,
        "Dimension 2": -12.1349125,
        Sentiment: 0.6,
        Subjectivity: 0.9,
        idx: 1578,
      },
      {
        RawTweet:
          "b'To ensure donations are distributed in a safe manner, government has prescribed that such efforts be coordinated by\\xe2\\x80\\xa6 https:\/\/t.co\/dMzpORoby5'",
        Month: "April",
        "Dimension 1": 23.83868,
        "Dimension 2": -17.385014,
        Sentiment: 0.25,
        Subjectivity: 0.5,
        idx: 1579,
      },
      {
        RawTweet:
          "['Wondering how you can help stop the spread of #COVID19 and directly support response efforts? Donate here to help the @WHO @DrTedros fight this pandemic: https:\/\/t.co\/FW6GrOsSgD']",
        Month: "March",
        "Dimension 1": -1.6616141,
        "Dimension 2": -4.4145203,
        Sentiment: 0.1,
        Subjectivity: 0.4,
        idx: 1580,
      },
      {
        RawTweet:
          "b'@realkatiejow @AOC You are aware of the fact that there are several 30somethings in the ICU in Italy fighting for their life? Just saying.'",
        Month: "March",
        "Dimension 1": -32.255047,
        "Dimension 2": 18.969482,
        Sentiment: 0.125,
        Subjectivity: 0.125,
        idx: 1581,
      },
      {
        RawTweet:
          '["It\'s a scary place right now, but we can get through by caring,  for everyone and everything.share the love, not the fear #COVID19 https:\/\/t.co\/KYNGllb4nU"]',
        Month: "March",
        "Dimension 1": 17.382069,
        "Dimension 2": -29.887966,
        Sentiment: 0.095238095,
        Subjectivity: 0.711904762,
        idx: 1582,
      },
      {
        RawTweet:
          "b'RT @sermoraes: The statue of Christ the Redeemer is lit up in the colors of the countries that are affected by the coronavirus disease (COV\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -2.5178595,
        "Dimension 2": 6.9067583,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1583,
      },
      {
        RawTweet:
          "We need to offset hardship that mitigation tactics, including closing schools, has on lower income and working class Americans. This is a huge burden on families. We need to offer direct cash assistance and services to families. My op ed on this issue: https:\/\/t.co\/pY2HvL0oW3",
        Month: "March",
        "Dimension 1": -11.256845,
        "Dimension 2": -12.458521,
        Sentiment: 0.25,
        Subjectivity: 0.65,
        idx: 1584,
      },
      {
        RawTweet:
          "b'\\xe2\\x80\\x9cWe have a lot of people in the White House and we had one person [test positive for #coronavirus],\"\\xe2\\x80\\xa6 https:\/\/t.co\/o0cHf23dfx'",
        Month: "May",
        "Dimension 1": -0.22648276,
        "Dimension 2": 18.542498,
        Sentiment: 0.113636364,
        Subjectivity: 0.272727273,
        idx: 1585,
      },
      {
        RawTweet:
          "b'RT @SecAzar: Here are some simple steps that every American and community can take to help decrease the spread of the #coronavirus at work,\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 28.339012,
        "Dimension 2": -18.945583,
        Sentiment: 0.0,
        Subjectivity: 0.178571429,
        idx: 1586,
      },
      {
        RawTweet:
          "b'every night at 7 pm, everyone cheers for essential workers. Thank you\\xf0\\x9f\\xa4\\x8d \\n\\xe6\\xaf\\x8e\\xe6\\x99\\xa97\\xe6\\x99\\x82\\xe3\\x81\\xab\\xe3\\x80\\x81\\xe3\\x81\\xbf\\xe3\\x82\\x93\\xe3\\x81\\xaa\\xe3\\x81\\xa7\\xe6\\x84\\x9f\\xe8\\xac\\x9d\\xe3\\x81\\x97\\xe3\\x81\\xa6\\xe3\\x81\\xbe\\xe3\\x81\\x99\\xe3\\x80\\x82\\n#\\xe3\\x82\\xb3\\xe3\\x83\\xad\\xe3\\x83\\x8a\\xe3\\x82\\xa6\\xe3\\x82\\xa3\\xe3\\x83\\xab\\xe3\\x82\\xb9 \\n#QuarantineLife\\xe2\\x80\\xa6 https:\/\/t.co\/ubBgzAfw4c'",
        Month: "April",
        "Dimension 1": 21.260384,
        "Dimension 2": 32.577522,
        Sentiment: 0.0,
        Subjectivity: 0.3,
        idx: 1587,
      },
      {
        RawTweet:
          "Looking forward to joining you, @priyankachopra, along with Dr @mvankerkhove today! Thank you for spreading the word on how to stay safe from the #coronavirus! #COVID19\r\nhttps:\/\/t.co\/Nu8IMC63us",
        Month: "March",
        "Dimension 1": 32.07208,
        "Dimension 2": -21.053894,
        Sentiment: 0.625,
        Subjectivity: 0.5,
        idx: 1588,
      },
      {
        RawTweet:
          'b"Employees need #leadership to support them through challenging times brought on by #covid19. Here\'s how top digital\\xe2\\x80\\xa6 https:\/\/t.co\/pf6l4unAcp"',
        Month: "April",
        "Dimension 1": 15.783765,
        "Dimension 2": -18.115286,
        Sentiment: 0.5,
        Subjectivity: 0.75,
        idx: 1589,
      },
      {
        RawTweet:
          "['Anyone else notice that the government and media seem to glance over the amazing SURVIVAL rate of people diagnosed with #coronavirus? Almost like they\u2019re cherry picking information to scare us into giving up our liberty.']",
        Month: "March",
        "Dimension 1": -19.90047,
        "Dimension 2": 2.3005776,
        Sentiment: 0.6,
        Subjectivity: 0.9,
        idx: 1590,
      },
      {
        RawTweet:
          "In this \u2066\u2066@JDSteenhuysen\u2069 @Reuters piece I am quoted about the positive phase 1 results of Moderna\u2019s #covid19 vaccine \u2069  https:\/\/t.co\/RCKT6pviYj",
        Month: "May",
        "Dimension 1": 41.717712,
        "Dimension 2": -3.9598088,
        Sentiment: 0.227272727,
        Subjectivity: 0.545454545,
        idx: 1591,
      },
      {
        RawTweet:
          "['REMINDER: Tomorrow is \"April Fool\\'s Day\", but never prank anyone that you\\'re #COVID19 positive. It will never be a good joke! https:\/\/t.co\/xTErjTCK23']",
        Month: "March",
        "Dimension 1": -39.97583,
        "Dimension 2": -7.932666,
        Sentiment: 0.551136364,
        Subjectivity: 0.572727273,
        idx: 1592,
      },
      {
        RawTweet:
          "b'#China tightens #Russian border checks, approves experimental #coronavirus vaccine trials https:\/\/t.co\/8bZr86Etwj'",
        Month: "April",
        "Dimension 1": -8.476626,
        "Dimension 2": 8.204495,
        Sentiment: 0.05,
        Subjectivity: 0.2,
        idx: 1593,
      },
      {
        RawTweet:
          'b"Need to get started with #EmailMarketing in a hurry? \\n\\nWe\'ve gathered a #COVID19 Resource hub to help! Plus, get 50\\xe2\\x80\\xa6 https:\/\/t.co\/06Iq4r61s9"',
        Month: "April",
        "Dimension 1": 36.727184,
        "Dimension 2": 5.89762,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1594,
      },
      {
        RawTweet:
          'b"RT @FaceTheNation: ICYMI: \\xe2\\x80\\x9cWe\'re going to find that a very small percentage of this population \\xe2\\x80\\x94 certainly in the single digits \\xe2\\x80\\x94 have actu\\xe2\\x80\\xa6"',
        Month: "April",
        "Dimension 1": -20.50889,
        "Dimension 2": 18.107904,
        Sentiment: -0.060714286,
        Subjectivity: 0.435238095,
        idx: 1595,
      },
      {
        RawTweet:
          "VERY IMPORTANT\r\n\r\nI recognize that this may sound confusing compared to the above...\r\n\r\nThe benefit of social distancing will only start to be felt in a few weeks. We have a rough path between now and then. The infections that have already occurred will continue to present for weeks",
        Month: "March",
        "Dimension 1": -16.757835,
        "Dimension 2": 24.907085,
        Sentiment: 0.039259259,
        Subjectivity: 0.385185185,
        idx: 1596,
      },
      {
        RawTweet:
          "['You mean to tell me everything else gets to be canceled but my bills during this #lockdown? #CoronavirusPandemic #coronavirus #CoronavirusOutbreak #COVID19 #covid2019 https:\/\/t.co\/1sEZJOozlb']",
        Month: "March",
        "Dimension 1": -32.97585,
        "Dimension 2": 1.3794441,
        Sentiment: -0.3125,
        Subjectivity: 0.6875,
        idx: 1597,
      },
      {
        RawTweet:
          "Social distancing, hand hygiene, isolation when sick are the tools that we have and the tools that we must use. Do not wait for things to get bad in your community. The actions we take now directly impact our future. https:\/\/t.co\/kKtgOyufR7",
        Month: "March",
        "Dimension 1": 26.310507,
        "Dimension 2": -16.873915,
        Sentiment: -0.256190476,
        Subjectivity: 0.423095238,
        idx: 1598,
      },
      {
        RawTweet:
          'b"@Dr_N8_PhD lol, well as a science writer, I\'m here to say AP style is not on trend."',
        Month: "April",
        "Dimension 1": -34.28289,
        "Dimension 2": -22.193789,
        Sentiment: 0.8,
        Subjectivity: 0.7,
        idx: 1599,
      },
      {
        RawTweet:
          "b'The National Health Commission said on Thursday that it received reports of three new confirmed #COVID19 cases on t\\xe2\\x80\\xa6 https:\/\/t.co\/sDAqEsZAsx'",
        Month: "May",
        "Dimension 1": 3.0598588,
        "Dimension 2": 43.924107,
        Sentiment: 0.268181818,
        Subjectivity: 0.727272727,
        idx: 1600,
      },
      {
        RawTweet:
          "b\"RT @NYGovCuomo: The best way to thank our doctors and healthcare professionals is to listen to them.\\n\\nHere's one doctor's message from the\\xe2\\x80\\xa6\"",
        Month: "March",
        "Dimension 1": 46.762493,
        "Dimension 2": -12.496551,
        Sentiment: 1.0,
        Subjectivity: 0.3,
        idx: 1601,
      },
      {
        RawTweet:
          "I want to see a study first. Because fever also negatively impacts on male fertility and so does stress, and being sick in general. This sounds a little bit weird to me, especially since there is almost no viremia. https:\/\/t.co\/0JL3emSJgy",
        Month: "March",
        "Dimension 1": -22.568056,
        "Dimension 2": -15.088411,
        Sentiment: -0.175223214,
        Subjectivity: 0.586309524,
        idx: 1602,
      },
      {
        RawTweet:
          "b'Moneywise has come up with some easy and simple steps to keep your energy bills down if you are working from home.\\xe2\\x80\\xa6 https:\/\/t.co\/s9yHt0WMlN'",
        Month: "April",
        "Dimension 1": 23.838383,
        "Dimension 2": -34.102882,
        Sentiment: 0.092592593,
        Subjectivity: 0.493121693,
        idx: 1603,
      },
      {
        RawTweet:
          "['@ChildCareAware #childcare facilities need to remain open during the #COVID #pandemic so that families are not forced to rely on grandparents for childcare, which would place more elderly at risk of exposure to #coronavirus.']",
        Month: "March",
        "Dimension 1": -2.3131638,
        "Dimension 2": -20.048016,
        Sentiment: 0.216666667,
        Subjectivity: 0.4,
        idx: 1604,
      },
      {
        RawTweet:
          "b'RT @CT_Bergstrom: With guidance from this newly released CDC document, federal agencies are modeling the COVID pandemic using implausibly l\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 7.4538727,
        "Dimension 2": 4.118101,
        Sentiment: 0.136363636,
        Subjectivity: 0.454545455,
        idx: 1605,
      },
      {
        RawTweet:
          "b'This uncertainty might be causing alot of anxiety, stress, fear, etc in your life right now but you have to wake up\\xe2\\x80\\xa6 https:\/\/t.co\/6DSPcYLVPL'",
        Month: "May",
        "Dimension 1": 11.377425,
        "Dimension 2": -20.662153,
        Sentiment: 0.285714286,
        Subjectivity: 0.535714286,
        idx: 1606,
      },
      {
        RawTweet:
          "5\/ I don\u2019t write this to scare anyone, but we must play this smart. \r\n\r\nI think crowdsourcing possible setups that might be missed or left unanticipated will be important to anticipate together before they happen.\r\n\r\nFeel free to add to the brief list I shared. \r\n\r\n#covid19",
        Month: "May",
        "Dimension 1": -7.771135,
        "Dimension 2": -34.040066,
        Sentiment: 0.169047619,
        Subjectivity: 0.629365079,
        idx: 1607,
      },
      {
        RawTweet:
          "b'Rita Reynolds, a 99-year-old grandmother of four, has become the oldest person to recover from #coronavirus in the\\xe2\\x80\\xa6 https:\/\/t.co\/D4ibzDPUAT'",
        Month: "April",
        "Dimension 1": -17.40412,
        "Dimension 2": 32.358276,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1608,
      },
      {
        RawTweet:
          "['Dear,\\n         Friends out there Home and around the world \ud83c\udf0d \ud83c\udf0e becareful and Stay Safe Especially those in The US And Europe Don\u2019t forget to Pray Daily to God in this Hard times it\u2019s Only God \ud83d\ude4f\\n#COVID19 #StayAtHomeAndStaySafe #Quarantine #FightCOVID19', 'Dear,\\n         Friends out there Home and around the world \ud83c\udf0d \ud83c\udf0e becareful and Stay Safe Especially those in The US And Europe Don\u2019t forget to Pray Daily to God in this Hard times it\u2019s Only God \ud83d\ude4f\\n#COVID19 #StayAtHomeAndStaySafe #Quarantine #FightCOVID19']",
        Month: "March",
        "Dimension 1": 31.752815,
        "Dimension 2": -30.54389,
        Sentiment: 0.041666667,
        Subjectivity: 0.608333333,
        idx: 1609,
      },
      {
        RawTweet:
          "For reasons as varied as fear and fatigue, human error is VERY real in disease outbreaks, especially amongst healthcare workers. \r\n\r\nBut we should be very careful blaming 'human error' for a flagrant lack of preparedness in the #COVID\u30fc19 response.\r\n\r\nhttps:\/\/t.co\/gJwG2ak0ER",
        Month: "March",
        "Dimension 1": -13.311039,
        "Dimension 2": -8.328425,
        Sentiment: 0.026,
        Subjectivity: 0.518,
        idx: 1610,
      },
      {
        RawTweet:
          "b'LOL Deluxe Present Surprise Exclusive Big Sister Doll &amp; Pet Fizzy In Hand #LOLDeluxepresentsurprise #LOLDolls\\n#Ebay\\xe2\\x80\\xa6 https:\/\/t.co\/FzcsbHAPTI'",
        Month: "May",
        "Dimension 1": 13.637035,
        "Dimension 2": 10.658186,
        Sentiment: 0.35,
        Subjectivity: 0.425,
        idx: 1611,
      },
      {
        RawTweet:
          "b'For all our vulnerable people and older people #Covid19 in all our communities who are Cocooning. Please share. https:\/\/t.co\/ox7WtYTzf1'",
        Month: "April",
        "Dimension 1": 33.833614,
        "Dimension 2": 8.301337,
        Sentiment: -0.166666667,
        Subjectivity: 0.416666667,
        idx: 1612,
      },
      {
        RawTweet:
          "\u201cAfter we conquer Covid-19, we shouldn\u2019t just move on and forget the level of biotech industry hustle that got us there\u201d https:\/\/t.co\/EGB8dGQnE9",
        Month: "March",
        "Dimension 1": 3.4072652,
        "Dimension 2": -10.133465,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1613,
      },
      {
        RawTweet:
          "[\"Join 'Continuing Collaboration: Partnering through the crisis', our first webinar in the series on how organisations can work productively through the pandemic:\\n\\n1:30 AEDT, Friday 27 March\\n\\nhttps:\/\/t.co\/4jJsLiaAxI\\n\\n#collaboration #innovation #coronavirus #business #industry\"]",
        Month: "March",
        "Dimension 1": 11.734411,
        "Dimension 2": 34.48508,
        Sentiment: 0.25,
        Subjectivity: 0.333333333,
        idx: 1614,
      },
      {
        RawTweet:
          "b'RT @amymaxmen: How did #Taiwan contain #COVID19? They proactively tested &amp; isolated. Travelers from countries w\/outbreaks were quarantined\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -1.6236472,
        "Dimension 2": 10.279768,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1615,
      },
      {
        RawTweet:
          "b\"@PickersgillM @BiomedSelfSoc At least they didn't call me a bloke (I've lost count of how many times that has happened)\"",
        Month: "April",
        "Dimension 1": -36.774574,
        "Dimension 2": -19.211,
        Sentiment: 0.1,
        Subjectivity: 0.45,
        idx: 1616,
      },
      {
        RawTweet:
          "b'#Portugal  #coronavirus last 30 days Timeline for #historical data of #COVID19 cases, recoveries &amp; deaths for each\\xe2\\x80\\xa6 https:\/\/t.co\/G0mfTlbD2K'",
        Month: "April",
        "Dimension 1": -4.2983656,
        "Dimension 2": 35.155052,
        Sentiment: 0.0,
        Subjectivity: 0.033333333,
        idx: 1617,
      },
      {
        RawTweet:
          "b\"@matthewbrownell I don't think so but haven't seen the data. Flu season was nearing its end when COVID-19 ramped up.\"",
        Month: "May",
        "Dimension 1": -41.890015,
        "Dimension 2": 12.6120615,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1618,
      },
      {
        RawTweet:
          "b'RT @elizabhinton: The curfew just went into effect in Minneapolis. Historically the enforcement of curfews enable police to occupy entire n\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": -29.49196,
        "Dimension 2": 31.32498,
        Sentiment: 0.0,
        Subjectivity: 0.3125,
        idx: 1619,
      },
      {
        RawTweet:
          "Buy cleaning products, ibuprofen, and acetaminophen. Make sure you have enough prescription medications, dry\/frozen\/canned food, paper towels, and toilet paper to last you a month.\r\n#SARSCoV2 #COVID19 #coronavirus",
        Month: "March",
        "Dimension 1": -12.042691,
        "Dimension 2": 23.77147,
        Sentiment: 0.116666667,
        Subjectivity: 0.363888889,
        idx: 1620,
      },
      {
        RawTweet:
          "['The local charities have set up five donation hubs where people can donate urgently-required items during the #coronavirus crisis.\\n\\n@bdca247\\n@magpieprojectuk\\n@RProgramme\\n@wsfroyaldocks\\n@alternativesTEL\\n\\nhttps:\/\/t.co\/JeiLoWQuAc\\n\\nTo donate - https:\/\/t.co\/8gNmDHMTxK\\n\\n#ThereWithYou']",
        Month: "March",
        "Dimension 1": 1.8539866,
        "Dimension 2": 30.406023,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1621,
      },
      {
        RawTweet:
          "['An investigation by @CDPHE revealed the woman came into contact with at least 18 people while in Aspen, though five are not symptomatic and haven\u2019t been tested, according to @pitkincounty health officials https:\/\/t.co\/KEB82BhCG0 @GlenwoodPI via @TheAspenTimes #COVID19 https:\/\/t.co\/Qixs4bh8gi']",
        Month: "March",
        "Dimension 1": -45.93882,
        "Dimension 2": 8.001804,
        Sentiment: -0.3,
        Subjectivity: 0.4,
        idx: 1622,
      },
      {
        RawTweet:
          "b'#We, the Whole SPARSH team continuously helps the world\\xf0\\x9f\\x8c\\x8e in battling #COVID19.  #Thermal Body Temperature Monitorin\\xe2\\x80\\xa6 https:\/\/t.co\/bFROtznEXM'",
        Month: "April",
        "Dimension 1": 34.2052,
        "Dimension 2": 4.4944572,
        Sentiment: 0.2,
        Subjectivity: 0.4,
        idx: 1623,
      },
      {
        RawTweet:
          "b'RT @WHO: #AskWHO on mental health during #COVID19. Ask your questions to our expert Aiysha Malik. https:\/\/t.co\/7iUsK6sSE1'",
        Month: "March",
        "Dimension 1": 19.910034,
        "Dimension 2": 10.266796,
        Sentiment: -0.1,
        Subjectivity: 0.2,
        idx: 1624,
      },
      {
        RawTweet:
          "b'RT @Nhepatic: @DrSidMukherjee This study in @TheLancetInfDis described a trend in which patients with severe COVID-19 tend to have a high v\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -11.814873,
        "Dimension 2": -2.695306,
        Sentiment: 0.16,
        Subjectivity: 0.54,
        idx: 1625,
      },
      {
        RawTweet:
          "#COVID19 deaths in NYC &lt;300 for past 2 days for 1st time in wks; ambulance sirens becoming rare; after no traffic for weeks, traffic jam on Brooklyn Bridge; construction sounds resume; beautiful spring day. NYC and the world will build back as soon, smart, and safely as possible.",
        Month: "April",
        "Dimension 1": -7.5177927,
        "Dimension 2": 40.19339,
        Sentiment: 0.223469388,
        Subjectivity: 0.663265306,
        idx: 1626,
      },
      {
        RawTweet:
          "b'RT @ASlavitt: In my 53 years of seeing dumb things, defunding the WHO in the middle of a global pandemic is the winner.'",
        Month: "April",
        "Dimension 1": -19.216282,
        "Dimension 2": -0.2132315,
        Sentiment: -0.125,
        Subjectivity: 0.166666667,
        idx: 1627,
      },
      {
        RawTweet:
          "Daily life is not (usually) a lab test with #COVID19 particles sprayed directly at your face from 6inches away. While most masks aren\u2019t perfect, if everyone wears some sort of covering to reduce spraying droplets, we are all safer. Because science. https:\/\/t.co\/7ckldQUg7A",
        Month: "April",
        "Dimension 1": -15.526346,
        "Dimension 2": -35.62455,
        Sentiment: 0.345,
        Subjectivity: 0.43,
        idx: 1628,
      },
      {
        RawTweet:
          "['Nova Scotia company steps up processing in light of COVID-19\u2026 https:\/\/t.co\/HQYq8oT9wV For more CPG | Retail News, visit: https:\/\/t.co\/hE4zdESG7K #COVID19 #OutcastFoods #CPG #ConsumerGoods #FMCG #FastMovingConsumerGoods #Retail #News #CPGConnectNews', 'Nova Scotia company steps up processing in light of COVID-19\u2026 https:\/\/t.co\/HQYq8oT9wV For more CPG | Retail News, visit: https:\/\/t.co\/hE4zdESG7K #COVID19 #OutcastFoods #CPG #ConsumerGoods #FMCG #FastMovingConsumerGoods #Retail #News #CPGConnectNews']",
        Month: "March",
        "Dimension 1": 17.162693,
        "Dimension 2": 22.601557,
        Sentiment: 0.45,
        Subjectivity: 0.6,
        idx: 1629,
      },
      {
        RawTweet:
          "['#Selfcare tip: have #compassion for yourself if you are experiencing increased #anxiety and #stress during #COVID19. If you need support, #therapy is still available via #telehealth even during #ShelterInPlaceCA. CSAM is offering #telehealth to pts in CA. https:\/\/t.co\/VknoNGWl8P']",
        Month: "March",
        "Dimension 1": 22.67786,
        "Dimension 2": -12.596031,
        Sentiment: 0.4,
        Subjectivity: 0.4,
        idx: 1630,
      },
      {
        RawTweet:
          "b'RT @BeutelsPhilippe: The generation interval (time between infection events in an infector-infectee pair) is important. This paper estimate\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 14.781791,
        "Dimension 2": -13.034401,
        Sentiment: 0.4,
        Subjectivity: 1.0,
        idx: 1631,
      },
      {
        RawTweet:
          "['What about the number of people that have been cured of the virus why not add that in instead of just the death toll! When you turn on the news the first thing you hear is the new cases and death toll and oh by the way this many have been cured! Give some hope!  #Coronavirus']",
        Month: "March",
        "Dimension 1": 0.72919995,
        "Dimension 2": 21.20826,
        Sentiment: 0.389204545,
        Subjectivity: 0.429292929,
        idx: 1632,
      },
      {
        RawTweet:
          "What a smart way to showcase the importance of using the proper #handwashing technique. #SafeHands are crucial in fighting the #coronavirus. Thank you for sharing this informative video @SinghLion. #COVID19 https:\/\/t.co\/wKf2BJYxsY",
        Month: "March",
        "Dimension 1": 30.819172,
        "Dimension 2": -20.571543,
        Sentiment: 0.071428571,
        Subjectivity: 0.580952381,
        idx: 1633,
      },
      {
        RawTweet:
          "b'RT @DrMattMcCarthy: New: @US_FDA announces @Battelle has received full emergency authorization to sterilize N95 masks so that they can be r\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 17.427273,
        "Dimension 2": 6.53794,
        Sentiment: 0.243181818,
        Subjectivity: 0.502272727,
        idx: 1634,
      },
      {
        RawTweet:
          "['A fiasco in the making? As the coronavirus pandemic takes hold, we are making decisions without... https:\/\/t.co\/WbEfU3Tgho via @statnews\\n#coronavirus \\n#SocialDistance \\n#GodBlessAmerica']",
        Month: "March",
        "Dimension 1": -31.282887,
        "Dimension 2": 0.8396727,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1635,
      },
      {
        RawTweet:
          "b'RT @JeremyKonyndyk: This is completely wrong. A multi-state free-for-all purchasing spree on PPE is going to hurt everyone. \\n\\nNeed the feds\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -22.594515,
        "Dimension 2": -7.3984885,
        Sentiment: -0.5,
        Subjectivity: 0.9,
        idx: 1636,
      },
      {
        RawTweet:
          "b'RT @dbroockman: I\\'ve been surprised no one has mentioned a \"stepped wedge\" design for coronavirus vaccine trials, but glad to hear @ScottGo\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -39.133766,
        "Dimension 2": -19.836224,
        Sentiment: 0.3,
        Subjectivity: 0.95,
        idx: 1637,
      },
      {
        RawTweet:
          "b'RT @UCSFHospitals: PLEASE SHARE: Help front-line UCSF providers caring for all who need it during the #covid19 pandemic by donating critica\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 32.956406,
        "Dimension 2": 5.221102,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1638,
      },
      {
        RawTweet:
          "['In the wake of the pressure put on the american #healthcare system by #COVID19, @US_FDA is taking decisive action. https:\/\/t.co\/KFwgAQuMXx', 'In the wake of the pressure put on the american #healthcare system by #COVID19, @US_FDA is taking decisive action. https:\/\/t.co\/KFwgAQuMXx']",
        Month: "March",
        "Dimension 1": -0.048892666,
        "Dimension 2": -8.181486,
        Sentiment: 0.05,
        Subjectivity: 0.05,
        idx: 1639,
      },
      {
        RawTweet:
          "@emadness666 Im not an expert on the extent to which #vapes destroy cilia.  Some are harsher than others. Let\u2019s ask the #harmreduction community to weigh in.",
        Month: "March",
        "Dimension 1": -27.752993,
        "Dimension 2": -19.523119,
        Sentiment: -0.2,
        Subjectivity: 0.0,
        idx: 1640,
      },
      {
        RawTweet:
          "b'Having discussions about #COVID19 with your children can be tricky. With their best interest in mind, it is importa\\xe2\\x80\\xa6 https:\/\/t.co\/ET1O1EMuOh'",
        Month: "May",
        "Dimension 1": 11.552852,
        "Dimension 2": -21.646137,
        Sentiment: 1.0,
        Subjectivity: 0.3,
        idx: 1641,
      },
      {
        RawTweet:
          "b'Sickle cell disease is the fastest growing and one of the most common, genetic disorders in England. Sickle cell di\\xe2\\x80\\xa6 https:\/\/t.co\/c9PwvmWuCC'",
        Month: "May",
        "Dimension 1": 12.526587,
        "Dimension 2": 25.797148,
        Sentiment: 0.1,
        Subjectivity: 0.5,
        idx: 1642,
      },
      {
        RawTweet:
          "['Duterte lauds efforts of efforts of private sector in coronavirus fight \\nhttps:\/\/t.co\/Q3DKvOyvVZ\\n#PolitikoNews \\n#Coronavirus \\n#nCoV19 \\n#coronaviruspandemic\\n#COVID19 \\n@RRD_Davao\\n@pr1ncegolez https:\/\/t.co\/U1EbWOszNE']",
        Month: "March",
        "Dimension 1": -4.6164455,
        "Dimension 2": 7.2898216,
        Sentiment: 0.0,
        Subjectivity: 0.375,
        idx: 1643,
      },
      {
        RawTweet:
          "5\/x Also not surprisingly, @MLipsitch &amp; @StephenKissler found that what happens after you relax social distancing measures depends on the degree &amp; duration of reduced transmission during social distancing.",
        Month: "March",
        "Dimension 1": -0.5522914,
        "Dimension 2": -28.629112,
        Sentiment: -0.094444444,
        Subjectivity: 0.211111111,
        idx: 1644,
      },
      {
        RawTweet:
          "b'Sad thing is Bori Johnson shows he\\xe2\\x80\\x99s not the person in time of crisis to lead #coronavirus'",
        Month: "March",
        "Dimension 1": -31.314224,
        "Dimension 2": -16.930317,
        Sentiment: -0.5,
        Subjectivity: 1.0,
        idx: 1645,
      },
      {
        RawTweet:
          'b"#Coronavirus &amp; ppl don\'t care. They still want to open up &amp; get more ppl killed. Ridiculous!"',
        Month: "April",
        "Dimension 1": -23.289343,
        "Dimension 2": -4.2800536,
        Sentiment: -0.029166667,
        Subjectivity: 0.5,
        idx: 1646,
      },
      {
        RawTweet:
          "6\/ \u2026But NOT tough call to realize that opening Florida beaches today, as they have decided to do in Duval County (Jacksonville), is wildly irresponsible. Data from fab @ucsf-built #dataviz site https:\/\/t.co\/KN0k53ASVo That\u2019s not a curve that says its time to go back to the beach https:\/\/t.co\/WZBebXi2rs",
        Month: "April",
        "Dimension 1": -40.915524,
        "Dimension 2": -9.934527,
        Sentiment: 0.098148148,
        Subjectivity: 0.411111111,
        idx: 1647,
      },
      {
        RawTweet:
          "b'Capgemini strengthens its commitment and responsibility towards communities in India to fight COVID19\\n\\nRead more -\\xe2\\x80\\xa6 https:\/\/t.co\/6GQ4fBta7z'",
        Month: "April",
        "Dimension 1": 14.791577,
        "Dimension 2": -10.776787,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1648,
      },
      {
        RawTweet:
          "b'RT @EPIDEMICpodcast: Racism is a pre-existing condition.\\n\\nBefore #COVID there was a 30-yr life expectancy difference btwn downtown Chicago\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -28.244606,
        "Dimension 2": 32.140972,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1649,
      },
      {
        RawTweet:
          "b'RT @amjoyshow: .@ashishkjha: We need to understand that if you want to be business friendly, we have to be health friendly first... If you\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 20.395576,
        "Dimension 2": -17.499039,
        Sentiment: 0.333333333,
        Subjectivity: 0.444444444,
        idx: 1650,
      },
      {
        RawTweet:
          "b'RT @AminaJMohammed: A world free of #COVID19 requires a massive collective effort and today leaders came together to accelerate the search\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 37.905594,
        "Dimension 2": -14.717035,
        Sentiment: 0.2,
        Subjectivity: 0.9,
        idx: 1651,
      },
      {
        RawTweet:
          "Most of your local clinical lab professionals can implement a reliable ELISA test that we have been distributing across the nation. Make the effort, implement it instead buying questionable test kits! https:\/\/t.co\/vvrHR9oW9r",
        Month: "April",
        "Dimension 1": 27.314287,
        "Dimension 2": 3.1070094,
        Sentiment: -0.041666667,
        Subjectivity: 0.5,
        idx: 1652,
      },
      {
        RawTweet:
          "4 yrs ago today, this photo was taken. My hubby Tom woke from a deep #coma after 4 mo of being in #ICU on a #ventilator &amp; nearly dying from a deadly #superbug infection.  \r\n\r\nNever give up hope.  We can get thru #COVID19.  \r\n\r\nOur story: #ThePerfectPredator https:\/\/t.co\/J9voqqsxDZ https:\/\/t.co\/ANC4plPSuO",
        Month: "March",
        "Dimension 1": -36.82432,
        "Dimension 2": 14.719717,
        Sentiment: -0.05,
        Subjectivity: 0.3,
        idx: 1653,
      },
      {
        RawTweet:
          "b'Germany reports 176 new cases and 7 new deaths bringing total confirmed cases there to 158,389 and 6,050 total deat\\xe2\\x80\\xa6 https:\/\/t.co\/0zKAgruZ3t'",
        Month: "April",
        "Dimension 1": -12.281062,
        "Dimension 2": 41.357265,
        Sentiment: 0.134545455,
        Subjectivity: 0.681818182,
        idx: 1654,
      },
      {
        RawTweet:
          "b'@carlzimmer @NYGovCuomo Lots of essential workers. Many reports already of bus drivers and grocery workers becoming\\xe2\\x80\\xa6 https:\/\/t.co\/d1gNHATxCB'",
        Month: "April",
        "Dimension 1": 16.613455,
        "Dimension 2": 33.09118,
        Sentiment: 0.25,
        Subjectivity: 0.4,
        idx: 1655,
      },
      {
        RawTweet:
          "b'#COVID19: #AirForce #officer, 50 Kano-bound buses arrested, #Corpse seized for violating #curfew in #Ondo https:\/\/t.co\/xCZGpo4JVn'",
        Month: "April",
        "Dimension 1": -33.40199,
        "Dimension 2": 24.461637,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1656,
      },
      {
        RawTweet:
          "@WeMustLiveFree Factual= feels suffocating, but isn't. N95 feels REALLY suffocating, but we put up with it. If presenting problem is asthma or COPD that may be different, however my tweet clearly referred to those using minor discomfort as an excuse to avoid doing the right thing.",
        Month: "May",
        "Dimension 1": -10.610852,
        "Dimension 2": -30.873667,
        Sentiment: -0.102040816,
        Subjectivity: 0.395578231,
        idx: 1657,
      },
      {
        RawTweet:
          "b'.@MattOMalley talks about response to #COVID19 with efforts to help local restaurants and provide safe access to vo\\xe2\\x80\\xa6 https:\/\/t.co\/m5OUsSrdKh'",
        Month: "May",
        "Dimension 1": 27.175133,
        "Dimension 2": -36.019176,
        Sentiment: 0.25,
        Subjectivity: 0.25,
        idx: 1658,
      },
      {
        RawTweet:
          "['10 cases of #coronavirus in Andaman &amp; Nicobar, all attended #TablighiJamaat event in Delhi\\n\\nBut thats not the news\\nReal news is that Andaman &amp; Nicobar houses the only Tri-service theatre command of Indian Armed Forces.\\nAnd this IsI\u00e5m\u00eest group is active on such a strategic island.']",
        Month: "March",
        "Dimension 1": -11.774029,
        "Dimension 2": 36.245358,
        Sentiment: -0.044444444,
        Subjectivity: 0.7,
        idx: 1659,
      },
      {
        RawTweet:
          "['Since we started in 2015, @FiftyYears mission has been to use the structures of capitalism to help tech founders solve the most pressing problems in the world. These are not the times to celebrate [1\/2] #COVID19']",
        Month: "March",
        "Dimension 1": 12.518473,
        "Dimension 2": 34.77017,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1660,
      },
      {
        RawTweet:
          "b'Today, we report 106 new cases of #COVID19, bringing #Houston total to 7,116.  There are no new deaths to report.\\xe2\\x80\\xa6 https:\/\/t.co\/W8sCMuvDfk'",
        Month: "May",
        "Dimension 1": -11.544607,
        "Dimension 2": 44.37287,
        Sentiment: 0.022727273,
        Subjectivity: 0.553030303,
        idx: 1661,
      },
      {
        RawTweet:
          "['COVID-ALERT: Tiffany Haddish On \u2018Self Made,\u2019 \u2018Girls Trip 2\u2019 And Loving The Quarantine - Global Pandemic News | #Coronavirus #COVID2019 - https:\/\/t.co\/Y4XZCfMggA https:\/\/t.co\/MB6Hriet8x']",
        Month: "March",
        "Dimension 1": 14.733698,
        "Dimension 2": 10.890124,
        Sentiment: 0.3,
        Subjectivity: 0.475,
        idx: 1662,
      },
      {
        RawTweet:
          "b'ARUP Laboratories has begun #coronavirus antibody testing in Utah. If a person tests positive for the antibody, tha\\xe2\\x80\\xa6 https:\/\/t.co\/gRdUjrSACW'",
        Month: "April",
        "Dimension 1": -0.9769833,
        "Dimension 2": 16.44397,
        Sentiment: 0.227272727,
        Subjectivity: 0.545454545,
        idx: 1663,
      },
      {
        RawTweet:
          "b'RT @megtirrell: LabCorp says starting tomorrow, it will be able to perform more than 20,000 #COVID19 tests per day https:\/\/t.co\/PBf065tUrW'",
        Month: "March",
        "Dimension 1": -4.703315,
        "Dimension 2": 38.065784,
        Sentiment: 0.333333333,
        Subjectivity: 0.408333333,
        idx: 1664,
      },
      {
        RawTweet:
          "['Psalm91~if u say The Lord is my refuge,n u make z Most High ur dwelling,no harm will overtake u,no disaster will come near u.For he will command his angels to guard u.U wont fear z plague(#COVID19)1000 may fall @ ur side,10000@ ur right hand,but it won\u2019t come near u #coronavirus https:\/\/t.co\/a7Tudn5Pvo']",
        Month: "March",
        "Dimension 1": -13.975732,
        "Dimension 2": -39.114136,
        Sentiment: 0.229142857,
        Subjectivity: 0.475142857,
        idx: 1665,
      },
      {
        RawTweet:
          "b'Some wild animals and birds are changing their behaviour in response to altered human activity during the Covid-19\\xe2\\x80\\xa6 https:\/\/t.co\/vr3Xi6tRw4'",
        Month: "April",
        "Dimension 1": 13.583853,
        "Dimension 2": -22.372345,
        Sentiment: 0.05,
        Subjectivity: 0.25,
        idx: 1666,
      },
      {
        RawTweet:
          "b'RT @ScottGottliebMD: The news today that Merck is getting into the #covid19 vaccine hunt, adopting the same VSV platform used in their succ\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 25.723024,
        "Dimension 2": 0.8896476,
        Sentiment: 0.0,
        Subjectivity: 0.125,
        idx: 1667,
      },
      {
        RawTweet:
          "Much of the early US public-health response to #COVID19 was derailed by the need to deal with infections on cruise ships &amp; repatriate travelers. Read thoughts on how to answer these questions here: https:\/\/t.co\/yzjsKXD6S0 @ProSyn",
        Month: "March",
        "Dimension 1": -29.029371,
        "Dimension 2": -1.013888,
        Sentiment: 0.15,
        Subjectivity: 0.25,
        idx: 1668,
      },
      {
        RawTweet:
          "b'Watching the #urgentquestion on care homes. Seems an outcome of #covid19 is Government ministers re-writing history\\xe2\\x80\\xa6 https:\/\/t.co\/W7kLalA4zF'",
        Month: "May",
        "Dimension 1": 18.81494,
        "Dimension 2": 1.6546748,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1669,
      },
      {
        RawTweet:
          "b'RT @cmyeaton: Like the US, England incorporates more syndromic data into their sitreps. Case counts and % of tests positive declining. 686\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": -19.778582,
        "Dimension 2": 20.644464,
        Sentiment: 0.363636364,
        Subjectivity: 0.522727273,
        idx: 1670,
      },
      {
        RawTweet:
          "[\"Imagine being trapped in a crowded airport right now. As Russia, Kazakhstan, and others have shut down their borders due to #COVID19, that's what's happened to thousands of migrant workers. Many have been living in Russian airports for a week or more.\\n\\nhttps:\/\/t.co\/8nVYGIVglt\"]",
        Month: "March",
        "Dimension 1": -37.086586,
        "Dimension 2": 18.365213,
        Sentiment: 0.050859788,
        Subjectivity: 0.283267196,
        idx: 1671,
      },
      {
        RawTweet:
          "b'AS A US ARMY VET &amp; A LIFE MEMBER OF THE DISABLED AMERICAN VETERANS, I\\xe2\\x80\\x98M THROUGHLY DISGUSTED WITH #SecDef @EsperDoD\\xe2\\x80\\x99\\xe2\\x80\\xa6 https:\/\/t.co\/4OuLeJiuoG'",
        Month: "April",
        "Dimension 1": -35.551105,
        "Dimension 2": 13.363907,
        Sentiment: -0.4,
        Subjectivity: 0.433333333,
        idx: 1672,
      },
      {
        RawTweet:
          "@Ben_Reinhardt @rbhar90 @medrxivpreprint @kedzierskalab @Olli_Vapalahti @hepojoki @VivianaSimonLab @IcahnMountSinai mh, validation for clinical labs, protein production capacity and positive controls. we are distributing this widely, including expression plasmids and protocols.",
        Month: "March",
        "Dimension 1": 27.102716,
        "Dimension 2": 4.5465684,
        Sentiment: 0.063636364,
        Subjectivity: 0.472727273,
        idx: 1673,
      },
      {
        RawTweet:
          "b'North Carolina reports 287 new cases bringing total confirmed cases there to 21,618 and 745 total deaths, with 398\\xe2\\x80\\xa6 https:\/\/t.co\/mo9Zk0OwWB'",
        Month: "May",
        "Dimension 1": -12.796351,
        "Dimension 2": 40.919563,
        Sentiment: 0.134090909,
        Subjectivity: 0.738636364,
        idx: 1674,
      },
      {
        RawTweet:
          "#Trump on #ventilators:  \"We've ordered a lot, we have quite a few...hopefully we won't need that many but we will have them when we need them.\"  \r\n\r\nDr. Debbie Birx's face says it all.  The country is woefully unprepared and Trump is in total denial.  #SARSCOV2 #COVID19 https:\/\/t.co\/UpsGllEgMI",
        Month: "March",
        "Dimension 1": -28.324207,
        "Dimension 2": -10.556785,
        Sentiment: 0.25,
        Subjectivity: 0.625,
        idx: 1675,
      },
      {
        RawTweet:
          "['Next Monday: join @MariaNoelSJ and @TECollab for an online panel discussion about how #COVID19 has impacted working people, what resources are available, and how we can support our neighbors while sheltering in place: https:\/\/t.co\/xx2FAz3FJY', 'Next Monday: join @MariaNoelSJ and @TECollab for an online panel discussion about how #COVID19 has impacted working people, what resources are available, and how we can support our neighbors while sheltering in place: https:\/\/t.co\/xx2FAz3FJY']",
        Month: "March",
        "Dimension 1": 31.010546,
        "Dimension 2": 20.05159,
        Sentiment: 0.2,
        Subjectivity: 0.2,
        idx: 1676,
      },
      {
        RawTweet:
          "['Part of the problem in Wuhan that started this is the 5G and lack of Sun light. Part of the solution is to limit 5G exposure and get some natural Sun light throughout the day\\n#coronavirus']",
        Month: "March",
        "Dimension 1": -23.33457,
        "Dimension 2": -15.615897,
        Sentiment: 0.3,
        Subjectivity: 0.6,
        idx: 1677,
      },
      {
        RawTweet:
          "b'We want to join @USArmy in thanking the incredibly brave healthcare workers that are leading the fight against\\xe2\\x80\\xa6 https:\/\/t.co\/6AjRLuBc05'",
        Month: "April",
        "Dimension 1": 34.94729,
        "Dimension 2": -18.689346,
        Sentiment: 0.8,
        Subjectivity: 1.0,
        idx: 1678,
      },
      {
        RawTweet:
          "#ProudPI during #Covid_19 in #NYC.  \u2066\u2066@KristopherAzarm\u2069 in #ViralLeeLab defending his thesis on henipaviruses, another bat zoonotic virus! 1:00 PM Fri, Apr 24, 2020. Join us [virtually] for his public defense https:\/\/t.co\/RVHMTSP4bQ | We\u2019re there for you, Kris! https:\/\/t.co\/9Qo0BCXsCq",
        Month: "April",
        "Dimension 1": 20.433279,
        "Dimension 2": 28.012333,
        Sentiment: 0.0,
        Subjectivity: 0.066666667,
        idx: 1679,
      },
      {
        RawTweet:
          "The rapid \u2b06\ufe0f in confirmed cases is no surprise for anyone working in ERs the past few weeks. \r\n\r\nThis @nycHealthy graph shows what we've been witnessing firsthand. If even a fraction of this increase is #COVID19, our true case count is many times \u2b06\ufe0f\u2b06\ufe0f\u2b06\ufe0f.\r\n\r\nhttps:\/\/t.co\/UIg9iIHtJU https:\/\/t.co\/wkaHBDI6RY https:\/\/t.co\/mvmRNmVlnn",
        Month: "March",
        "Dimension 1": 11.041206,
        "Dimension 2": 31.321901,
        Sentiment: 0.16,
        Subjectivity: 0.5,
        idx: 1680,
      },
      {
        RawTweet:
          "People of America...Important News: All my restaurants in DC area are closed until further notice. Here at @ThinkFoodGroup safety of employees &amp; guests is too priority. Some restaurants will transform into Community Kitchens to offer to-go lunches for those who need a meal. (1\/4) https:\/\/t.co\/3HTyT607ZI",
        Month: "March",
        "Dimension 1": -33.791138,
        "Dimension 2": -5.083752,
        Sentiment: -0.05,
        Subjectivity: 0.3,
        idx: 1681,
      },
      {
        RawTweet:
          "['We target 2 million people to be reached in the shortest time possible with preventive massages on #coronavirus. 1,400 volunteers will be involved to engage  with their communities in our 17 branches and units across #SouthSudan. #COVID19 https:\/\/t.co\/KmhwPFjtFh']",
        Month: "March",
        "Dimension 1": -3.976895,
        "Dimension 2": 32.996655,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 1682,
      },
      {
        RawTweet:
          "['Throwin\u2019 it back to Sunday when our house had to church-it-in.. \u201cEndurance is the ability to not-stop-short.\u201d 3\/22\/20 #portcitychurch #tbt #coronavirus @ Wilmington, North Carolina https:\/\/t.co\/UPgmjBMkYW']",
        Month: "March",
        "Dimension 1": 5.6886854,
        "Dimension 2": 34.09885,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1683,
      },
      {
        RawTweet:
          "b'RT @ddiamond: This is remarkable: NYU\\xe2\\x80\\x99s medical school is allowing students to graduate *now*, three months early, to become interns and jo\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 5.054335,
        "Dimension 2": 47.206604,
        Sentiment: 0.283333333,
        Subjectivity: 0.35,
        idx: 1684,
      },
      {
        RawTweet:
          "b'$SEGN Success Entertainment Group International Joins Fight against the COVID-19 Pandemic https:\/\/t.co\/elpgMziUf3\\xe2\\x80\\xa6 https:\/\/t.co\/n5XtVAybI5'",
        Month: "April",
        "Dimension 1": 3.1584039,
        "Dimension 2": 6.8219066,
        Sentiment: 0.15,
        Subjectivity: 0.0,
        idx: 1685,
      },
      {
        RawTweet:
          "b'RT @Thomasctsai: For those students who are now sitting at home, might be a good time to check out this @edXOnline course \"Lessons from Ebo\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 12.911994,
        "Dimension 2": -8.744832,
        Sentiment: 0.7,
        Subjectivity: 0.6,
        idx: 1686,
      },
      {
        RawTweet:
          "I'll be on @GMB tomorrow morning talking about my latest article on testing &amp; what some key goals of the shutdown should be:\r\n1. Mass testing &amp; contact tracing\r\n2. Structuring decentralized response\r\n3. Building up NHS capacity\r\n4. Rapid research. \r\n\r\nhttps:\/\/t.co\/54Ejz0TQaW",
        Month: "March",
        "Dimension 1": 24.03294,
        "Dimension 2": 17.909012,
        Sentiment: 0.25,
        Subjectivity: 0.95,
        idx: 1687,
      },
      {
        RawTweet:
          "@smkeats We usually work on flu, different arenaviruses and hantaviruses and sometimes flavis. But it was very predictable that this one was going to be an issue, so we jumped on it (although we are not a CoV lab, many CoV labs out there are much more competent in this).",
        Month: "March",
        "Dimension 1": -2.3044448,
        "Dimension 2": -10.819222,
        Sentiment: 0.165,
        Subjectivity: 0.527777778,
        idx: 1688,
      },
      {
        RawTweet:
          "['The @AustinPublicLib is closed starting today, according to the city. Here is an updating list of some Central #Texas public spaces that will also be closed due to #coronavirus concerns. \u2b07 https:\/\/t.co\/B4YVM0z5mj']",
        Month: "March",
        "Dimension 1": -36.15242,
        "Dimension 2": 1.7894549,
        Sentiment: -0.054166667,
        Subjectivity: 0.165277778,
        idx: 1689,
      },
      {
        RawTweet:
          "b'RT @HironoriFunabi1: @nataliexdean Here is a long thread I wrote in March to explain the strategy by Japan. The role of Cluster Response Te\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 7.860871,
        "Dimension 2": 36.428814,
        Sentiment: -0.05,
        Subjectivity: 0.4,
        idx: 1690,
      },
      {
        RawTweet:
          "b'RT @GHS: \\xe2\\x80\\x9cEach &amp; every individual matters. How every person is affected by our actions has to be considered. \\n\\nAnd it\\xe2\\x80\\x99s about every country\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 14.977843,
        "Dimension 2": -16.483967,
        Sentiment: 0.0,
        Subjectivity: 0.4,
        idx: 1691,
      },
      {
        RawTweet:
          "The @WHO has released a new update to its #COVID19 dashboard. Thanks to tech groups and countries for sharing data that helps us collectively hone an effective global response. Together! https:\/\/t.co\/n3FTf4gO5f\r\n\r\nhttps:\/\/t.co\/0oxbBoOIsd",
        Month: "April",
        "Dimension 1": 40.050217,
        "Dimension 2": -8.88034,
        Sentiment: 0.234090909,
        Subjectivity: 0.363636364,
        idx: 1692,
      },
      {
        RawTweet:
          "b'RT @NYCMayor: NYC is the epicenter of this crisis. No place is hurting more. No place needs help more urgently. The direct aid to localitie\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 7.1417623,
        "Dimension 2": -21.542242,
        Sentiment: 0.366666667,
        Subjectivity: 0.466666667,
        idx: 1693,
      },
      {
        RawTweet:
          "THIS is exactly why we need public health professionals - NOT politicians - talking to the public about #COVID19. \r\n\r\nThe last thing we need is @mikepompeo unnecessarily stoking xenophobia &amp; blaming China for the US' stunning lack of preparedness.\r\n\r\nhttps:\/\/t.co\/G4KSrr8LRs",
        Month: "March",
        "Dimension 1": -39.058994,
        "Dimension 2": -11.977675,
        Sentiment: 0.058333333,
        Subjectivity: 0.391666667,
        idx: 1694,
      },
      {
        RawTweet:
          "b'About 100 million people are being pushed into extreme poverty because they can\\xe2\\x80\\x99t afford healthcare. \\n\\n#COVID19 vs.\\xe2\\x80\\xa6 https:\/\/t.co\/7aByMIiLuo'",
        Month: "May",
        "Dimension 1": -9.762902,
        "Dimension 2": 32.875427,
        Sentiment: -0.125,
        Subjectivity: 1.0,
        idx: 1695,
      },
      {
        RawTweet:
          '"In Wuhan, in the early stages, testing was quite restricted to people with severe illness. That was one of the early limitations or missteps in the response was to focus on severe cases, not recognizing that there were a lot of other mild cases as well.\u201d  https:\/\/t.co\/fg5qJhAMoL',
        Month: "April",
        "Dimension 1": -17.861181,
        "Dimension 2": -20.316858,
        Sentiment: 0.102083333,
        Subjectivity: 0.36875,
        idx: 1696,
      },
      {
        RawTweet:
          "b'RT @florian_krammer: 50% of all SARS-CoV-2 reagents currently available at BEI Resources are from my lab. Thanks to my staff for doing that!'",
        Month: "March",
        "Dimension 1": -0.9267068,
        "Dimension 2": 32.96347,
        Sentiment: 0.325,
        Subjectivity: 0.3,
        idx: 1697,
      },
      {
        RawTweet:
          "b'I have major art block due to quarantine but I found an amazing artist named @yoginnnnnn their art is so cute I cou\\xe2\\x80\\xa6 https:\/\/t.co\/UP9uzOmuCT'",
        Month: "April",
        "Dimension 1": 23.858385,
        "Dimension 2": -25.912086,
        Sentiment: 0.259375,
        Subjectivity: 0.69375,
        idx: 1698,
      },
      {
        RawTweet:
          "b'Drug makers ground sales teams as coronavirus impact spreads https:\/\/t.co\/hsCUgfH9R8'",
        Month: "March",
        "Dimension 1": -4.5556965,
        "Dimension 2": 6.012058,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1699,
      },
      {
        RawTweet:
          '["It\'s the Heartbeat of America.. the Empire State Building (@EmpireStateBldg) pays tribute to medical workers and first responders fighting #COVID19 https:\/\/t.co\/09pvlHGh9W"]',
        Month: "March",
        "Dimension 1": 24.99334,
        "Dimension 2": 12.543689,
        Sentiment: 0.125,
        Subjectivity: 0.166666667,
        idx: 1700,
      },
      {
        RawTweet:
          "b'RT @twhitfill: .@BioRender has great templates for displaying information\/graphics on COVID-19. I really like the RT-PCR test one. New temp\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 36.568867,
        "Dimension 2": -8.925027,
        Sentiment: 0.378787879,
        Subjectivity: 0.468181818,
        idx: 1701,
      },
      {
        RawTweet:
          "b'A 61-year-old and a 40-year-old with comorbid conditions who had tested positive for #COVID19 passed away in Pune l\\xe2\\x80\\xa6 https:\/\/t.co\/GNKkxKdFi2'",
        Month: "April",
        "Dimension 1": -38.132565,
        "Dimension 2": 14.829913,
        Sentiment: 0.227272727,
        Subjectivity: 0.545454545,
        idx: 1702,
      },
      {
        RawTweet:
          "A harrowing story of anguish at Elmhurst Hospital in Queens, a ground zero of the tragedy unfolding in New York. As a medical resident I practiced medicine at Elmhurst. It's difficult to imagine the hardship on these doctors, and the pain of these patients https:\/\/t.co\/zZuI1YcQJX",
        Month: "March",
        "Dimension 1": -32.123543,
        "Dimension 2": 12.122168,
        Sentiment: -0.121212121,
        Subjectivity: 0.484848485,
        idx: 1703,
      },
      {
        RawTweet:
          "#Covid_19 2\/n:Because S\u2019pore gov\u2019t base their policies on science. One (!) case... and the entire gov\u2019t went into action. It was the very first country to ban travelers &amp; even TRANSITs from China in Jan. @SingaporeAir also proactively said it won\u2019t fly to major internat\u2019l hubs...",
        Month: "March",
        "Dimension 1": -38.810635,
        "Dimension 2": -11.30088,
        Sentiment: 0.069642857,
        Subjectivity: 0.651190476,
        idx: 1704,
      },
      {
        RawTweet:
          "It\u2019s important to keep these hospitals viable by easing restrictions on other services which are misleadingly labeled \u201celective\u201d   https:\/\/t.co\/hH6MutAoDK",
        Month: "April",
        "Dimension 1": -6.7871523,
        "Dimension 2": -29.657753,
        Sentiment: 0.1375,
        Subjectivity: 0.6875,
        idx: 1705,
      },
      {
        RawTweet:
          "I thought this table of some of the COVID-19 vaccines and therapeutics was pretty clear and helpful. It\u2019s my phone background now so sharing with you so you can nerd-out your phone background too. https:\/\/t.co\/GFw4TMTxYq",
        Month: "April",
        "Dimension 1": 32.936134,
        "Dimension 2": -8.371472,
        Sentiment: 0.175,
        Subjectivity: 0.691666667,
        idx: 1706,
      },
      {
        RawTweet:
          "Trevor Bedford offered some of the most careful analysis of this  pandemic from very beginning. His estimates on the emerging epidemic in U.S. should be taken very seriously. We have a very hard spring ahead of us in this country and must rapidly implement aggressive mitigation. https:\/\/t.co\/YaKziIua31",
        Month: "March",
        "Dimension 1": -1.5542133,
        "Dimension 2": -7.846439,
        Sentiment: -0.0425,
        Subjectivity: 0.674166667,
        idx: 1707,
      },
      {
        RawTweet:
          "b'Post #COVID19 #FirstTimeInside \\n\\nAim to bring on board a full team of appropriately experienced pre-prison mentors\\xe2\\x80\\xa6 https:\/\/t.co\/9NsoQiQCBA'",
        Month: "April",
        "Dimension 1": 43.60851,
        "Dimension 2": 8.831132,
        Sentiment: 0.575,
        Subjectivity: 0.725,
        idx: 1708,
      },
      {
        RawTweet:
          "['One silver lining to the #coronavirus scare is that fact that it drives home the point about cleanliness, hygiene and sanitisation. \\n\\nEsp to kids!\\n\\nIt\u2019s such a fight to get them to not touch random surfaces and to wash their hands after play.']",
        Month: "March",
        "Dimension 1": 1.7960885,
        "Dimension 2": -13.216933,
        Sentiment: -0.25,
        Subjectivity: 0.5,
        idx: 1709,
      },
      {
        RawTweet:
          "b'RT @drjkeithwright: @matthewjdowd Texas has not had tests. Also has high rates of poverty and uninsured, which will likely increase all-cau\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -45.044537,
        "Dimension 2": -7.498627,
        Sentiment: 0.08,
        Subjectivity: 0.77,
        idx: 1710,
      },
      {
        RawTweet:
          "@mookjuice I'm not the only one who deems them necessary. Racist violence against Black people is an epidemic and demands urgent action. These protests would be unnecessary if racists stopped murdering Black people.",
        Month: "May",
        "Dimension 1": -17.00455,
        "Dimension 2": -14.194007,
        Sentiment: -0.105555556,
        Subjectivity: 0.644444444,
        idx: 1711,
      },
      {
        RawTweet:
          "@Crslan2 Microneedles are a delivery mechanism. And, a revolutionary smart one at that. Though not our strategy for COVID-19, we have research published towards that end yearsssss ago... https:\/\/t.co\/zVMZOGkCC0",
        Month: "April",
        "Dimension 1": 18.488207,
        "Dimension 2": -11.890848,
        Sentiment: 0.214285714,
        Subjectivity: 0.642857143,
        idx: 1712,
      },
      {
        RawTweet:
          "b'RT @TomBollyky: Many of the states reopening or where stay at home orders are set to expire on April 30 have populations that are especiall\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 4.728015,
        "Dimension 2": 41.936726,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1713,
      },
      {
        RawTweet:
          "Data on positivity rates, reproduction number, and density of new cases in states that are starting to relax covid19 restrictions. Many states are at lower risk based on these metrics, while others (Minnesota, South Dakota, Alabama, Mississippi) would appear to be at higher risk. https:\/\/t.co\/BtzRYhxAls",
        Month: "May",
        "Dimension 1": -13.803181,
        "Dimension 2": -21.40784,
        Sentiment: 0.221590909,
        Subjectivity: 0.388636364,
        idx: 1714,
      },
      {
        RawTweet:
          "\u201cThe secret about achieving your dreams is to realize what matters to you as much when you were a child as when you are soaring among the clouds and when you just begin to fall.\u201d https:\/\/t.co\/8Q8Jku7gRG",
        Month: "March",
        "Dimension 1": 11.7539,
        "Dimension 2": -27.386372,
        Sentiment: -0.1,
        Subjectivity: 0.45,
        idx: 1715,
      },
      {
        RawTweet:
          "['RT CDCgov: Together we can help stop the spread of coronavirus. Learn ways to protect yourself and others at https:\/\/t.co\/Mo72bfeQws. #COVID19 https:\/\/t.co\/LJLpMJQ8Ak', 'RT CDCgov: Together we can help stop the spread of coronavirus. Learn ways to protect yourself and others at https:\/\/t.co\/Mo72bfeQws. #COVID19 https:\/\/t.co\/LJLpMJQ8Ak']",
        Month: "March",
        "Dimension 1": 0.9532654,
        "Dimension 2": -0.9494327,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1716,
      },
      {
        RawTweet:
          'b"RT @joshmich: Pretty good run down of the capacities that need to be in place to safely transition out of our social distancing phase. It\'s\\xe2\\x80\\xa6"',
        Month: "April",
        "Dimension 1": 0.8445419,
        "Dimension 2": -30.060541,
        Sentiment: 0.265555556,
        Subjectivity: 0.491111111,
        idx: 1717,
      },
      {
        RawTweet:
          "b'RT @MalcolmChishol1: Great to see comments of @devisridhar,Professor of Global Public Health at Edinburgh University,taking over pages 6 an\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 29.185709,
        "Dimension 2": -0.022934545,
        Sentiment: 0.266666667,
        Subjectivity: 0.272222222,
        idx: 1718,
      },
      {
        RawTweet:
          "[\"There's still 4 days to bid on a signed #SHARKNADO2 #TheSecondOne #POSTER! This is the #ComicCon Exclusive poster from 2014. It's pretty &amp; even more fun than #Coronavirus! \\n\\nhttps:\/\/t.co\/Si4G3dtT1K\\n\\n#Syfy #Sharknado #Jaws #Shark #Sharkweek #SharkTank #BMovies #Tornado #Cheezy https:\/\/t.co\/xwR05Hp40U\"]",
        Month: "March",
        "Dimension 1": 18.303978,
        "Dimension 2": 28.980526,
        Sentiment: 0.375,
        Subjectivity: 0.566666667,
        idx: 1719,
      },
      {
        RawTweet:
          "b'Linda Coronavirus Cases, Total Covid 19 Linda Count Live, Patients &amp; Death List, Lockdown News &amp; Updates\\xe2\\x80\\xa6 https:\/\/t.co\/doyPlPt2zT'",
        Month: "April",
        "Dimension 1": -15.14201,
        "Dimension 2": 19.125599,
        Sentiment: 0.068181818,
        Subjectivity: 0.625,
        idx: 1720,
      },
      {
        RawTweet:
          "b'RT @AcademicSurgery: I really want to talk to the two people who never skipped a meal.'",
        Month: "May",
        "Dimension 1": 36.574116,
        "Dimension 2": -1.1688858,
        Sentiment: 0.2,
        Subjectivity: 0.2,
        idx: 1721,
      },
      {
        RawTweet:
          "\u201cThey are going to war with each other, eating each other\u2019s young in some populations and battling each other for the food they can find\u201d https:\/\/t.co\/xNeOac3jRK",
        Month: "May",
        "Dimension 1": -24.434853,
        "Dimension 2": -5.4230084,
        Sentiment: -0.06875,
        Subjectivity: 0.38125,
        idx: 1722,
      },
      {
        RawTweet:
          "For the past 100 days, our unwavering commitment has been to serve all people of the world with equity, objectivity and neutrality. That will continue to be our sole focus in the days, weeks and months ahead. #COVID19",
        Month: "April",
        "Dimension 1": 40.77769,
        "Dimension 2": -20.623648,
        Sentiment: -0.125,
        Subjectivity: 0.25,
        idx: 1723,
      },
      {
        RawTweet:
          "['#Connecticut confirms #COVID\u30fc19 case as another person in #NewHaven is told to \u2018self quarantine\u2019 https:\/\/t.co\/vohJGySMjE via @ycnewsnetwork\\n\\n#CoronaVirusChallenge #COVID19 #COVID #Coronavirus']",
        Month: "March",
        "Dimension 1": 5.4306235,
        "Dimension 2": -0.01133129,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1724,
      },
      {
        RawTweet:
          "b'RT @EJohnWherry: Very important study pointing out that we really need to understand the immunology of this disease ASAP.'",
        Month: "March",
        "Dimension 1": 21.817797,
        "Dimension 2": -9.459425,
        Sentiment: 0.36,
        Subjectivity: 0.6,
        idx: 1725,
      },
      {
        RawTweet:
          'b"RT @UCSFHospitals: Given #COVID19\'s death rate, reaching herd immunity through infections could kill ~2M Americans, UCSF\\xe2\\x80\\x99s @Bob_Wachter tol\\xe2\\x80\\xa6"',
        Month: "April",
        "Dimension 1": -23.706657,
        "Dimension 2": 0.6651133,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1726,
      },
      {
        RawTweet:
          "b'Dating a guy that smoke is actually serious\\nBaba go high forget say he dey in any relationship\\n\\n@Mula_35god\\xe2\\x80\\xa6 https:\/\/t.co\/XKHnjFIxCg'",
        Month: "April",
        "Dimension 1": -25.62503,
        "Dimension 2": -9.819056,
        Sentiment: 0.08,
        Subjectivity: 0.32,
        idx: 1727,
      },
      {
        RawTweet:
          "b'LIVE: Justice Administration holds press briefing on COVID-19 response - April 1, 2020. For more information about\\xe2\\x80\\xa6 https:\/\/t.co\/e73vXXeDJw'",
        Month: "April",
        "Dimension 1": 6.454127,
        "Dimension 2": 39.380157,
        Sentiment: 0.318181818,
        Subjectivity: 0.5,
        idx: 1728,
      },
      {
        RawTweet:
          "['Going in to week two of school and work from home. Last week was alright. This week may be more challenging.  Think everyone has a little bit of cabin fever.  #japanlife #COVID19', 'Going in to week two of school and work from home. Last week was alright. This week may be more challenging.  Think everyone has a little bit of cabin fever.  #japanlife #COVID19']",
        Month: "March",
        "Dimension 1": -8.857342,
        "Dimension 2": 21.750095,
        Sentiment: 0.203125,
        Subjectivity: 0.516666667,
        idx: 1729,
      },
      {
        RawTweet:
          "b'RT @layallivs: I looked into some of the theories behind the lack of severe #covid19 cases and deaths in children, and what this might mean\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -6.229575,
        "Dimension 2": -23.195675,
        Sentiment: -0.4,
        Subjectivity: 0.7,
        idx: 1730,
      },
      {
        RawTweet:
          "@LindyLawyer These are tricky qns.  I would ensure that your son that works washes his hands when he returns home, does his own laundry and keeps 6 ft apart from the rest of you, esp if you or your husband are &gt;60 and\/or have underlying health conditions.  Also use clorox wipes on surfaces.",
        Month: "March",
        "Dimension 1": 3.2827754,
        "Dimension 2": -13.444779,
        Sentiment: 0.6,
        Subjectivity: 1.0,
        idx: 1731,
      },
      {
        RawTweet:
          'b"RT @BUSPH: SPH\'s @noiseandthecity weighs in on how the #COVID19 pandemic and physical distancing have made an impact on city soundscapes vi\\xe2\\x80\\xa6"',
        Month: "April",
        "Dimension 1": 7.6463046,
        "Dimension 2": -20.31175,
        Sentiment: 0.0,
        Subjectivity: 0.142857143,
        idx: 1732,
      },
      {
        RawTweet:
          "['Now that we have been encouraged to work from home, why cant the Government order @KenyaPower to cut down their domestic power cost to save the #Mwananchi some coins with this #COVID19 #CoronaVirusUpdates #coronaviruskenya']",
        Month: "March",
        "Dimension 1": -4.340955,
        "Dimension 2": -3.8302739,
        Sentiment: -0.077777778,
        Subjectivity: 0.194444444,
        idx: 1733,
      },
      {
        RawTweet:
          "@Mrs_Binks2U @suepeac Maybe b\/c our @POTUS has been downplaying the serious of the #COVID19 #epidemic and telling people it's ok to go to work? We need consistent messaging for #SARSCoV2, &amp; someone needs to tell #Trump to leave the advice to the REAL EXPERTS.",
        Month: "March",
        "Dimension 1": -5.973278,
        "Dimension 2": -25.496553,
        Sentiment: 0.154166667,
        Subjectivity: 0.429166667,
        idx: 1734,
      },
      {
        RawTweet:
          "b'RT @darakass: I worked in the ER last night. \\n\\nThis IS working,\\n\\nNY is stabilizing.\\n\\nWe are still seeing new infections, new hospitalizatio\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 8.889205,
        "Dimension 2": 21.525227,
        Sentiment: 0.090909091,
        Subjectivity: 0.325252525,
        idx: 1735,
      },
      {
        RawTweet:
          "In a tearful speech, Gov. @DougBurgum (R-ND) asks residents to skip the \u201cideological and political\u201d debate on face masks. https:\/\/t.co\/BkTEDWxuYg",
        Month: "May",
        "Dimension 1": -31.057898,
        "Dimension 2": -2.6111145,
        Sentiment: 0.0,
        Subjectivity: 0.1,
        idx: 1736,
      },
      {
        RawTweet:
          "b'24\/ Last, we finally gave Newman a haircut https:\/\/t.co\/krohYch9PR Good news is that hair grows back. The bad is th\\xe2\\x80\\xa6 https:\/\/t.co\/T1I9dqMnvY'",
        Month: "May",
        "Dimension 1": 16.53889,
        "Dimension 2": 3.0174627,
        Sentiment: 2.22e-17,
        Subjectivity: 0.466666667,
        idx: 1737,
      },
      {
        RawTweet:
          "b'Devastating pictures show UK coronavirus morgue with hundreds of rows for coffins #Coronavirus #Covid_19uk\\xe2\\x80\\xa6 https:\/\/t.co\/Zpb5h4pBq0'",
        Month: "April",
        "Dimension 1": -15.645151,
        "Dimension 2": 20.041794,
        Sentiment: -1.0,
        Subjectivity: 1.0,
        idx: 1738,
      },
      {
        RawTweet:
          "\u201cEven as she cared for patients symptomatic of covid-19, administrators provided her with crucial protective gear only after tests came back positive, usually several days after she first attended to the infected patients.\u201d https:\/\/t.co\/YYxlE7WwKL",
        Month: "April",
        "Dimension 1": -12.724563,
        "Dimension 2": 24.75429,
        Sentiment: 0.079545455,
        Subjectivity: 0.47979798,
        idx: 1739,
      },
      {
        RawTweet:
          "#COVID19 Respite: #ViralLeeLab @KristopherAzarm defended yesterday. Collabxs received first shipment of SARSCoV2pp. Data from \ud83c\udde6\ud83c\uddfa collabxs have greater explanatory power every day\ud83d\udc4c\ud83d\ude09. A nice home-cooked brunch, blooms in our Bldg\u2019s front yard, &gt;80% masks compliance in NYC, \ud83d\ude0c\ud83d\udc4d\u262e\ufe0f https:\/\/t.co\/im3JFuQgzP",
        Month: "April",
        "Dimension 1": 15.765028,
        "Dimension 2": 35.298645,
        Sentiment: 0.45,
        Subjectivity: 0.611111111,
        idx: 1740,
      },
      {
        RawTweet:
          "b'RT @PenguinSix: For months we sent masks to hospitals and teachers in Hong Kong and China, and over the last two weeks what goes around com\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -9.468624,
        "Dimension 2": 40.327644,
        Sentiment: 0.0,
        Subjectivity: 0.066666667,
        idx: 1741,
      },
      {
        RawTweet:
          '["How about this for an idea? @BandQ, #DIY stores, #hairdressers and any shops that have #protective clothing and don\'t need them anymore should just drop them off at any @NHS reception for staff fighting #coronavirus."]',
        Month: "March",
        "Dimension 1": -26.884731,
        "Dimension 2": 4.9176297,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1742,
      },
      {
        RawTweet:
          "\u201cAn old economics axiom claims that investments in \u2018vice\u2019 and \u2018sin\u2019 like gambling, alcohol, drugs and sex trades weather economic downturns well, because people turn to them whether they're sad or happy\u201d\r\nhttps:\/\/t.co\/yiz9U5yaNA",
        Month: "May",
        "Dimension 1": -16.274519,
        "Dimension 2": 6.1543484,
        Sentiment: 0.15,
        Subjectivity: 0.6,
        idx: 1743,
      },
      {
        RawTweet:
          "b'@FaultlessSky80 @DrSenait @nytimes @jeremyfaust Thank you. Please stay safe and take care of your family. Stay home for us!!!!'",
        Month: "March",
        "Dimension 1": 26.714935,
        "Dimension 2": -33.221237,
        Sentiment: 1.0,
        Subjectivity: 0.5,
        idx: 1744,
      },
      {
        RawTweet:
          "b'What gets me is all of these assholes who think that you actually HAVE to go inside these grocery stores to get foo\\xe2\\x80\\xa6 https:\/\/t.co\/xICgdK7Wcz'",
        Month: "May",
        "Dimension 1": -29.201433,
        "Dimension 2": 10.399224,
        Sentiment: 0.0,
        Subjectivity: 0.1,
        idx: 1745,
      },
      {
        RawTweet:
          "b'Can Calgary\\xe2\\x80\\x99s near-empty downtown office towers fill up again \\xe2\\x80\\x93 and is #technology the industry that will help us g\\xe2\\x80\\xa6 https:\/\/t.co\/9XOEy1pWrJ'",
        Month: "May",
        "Dimension 1": 19.525152,
        "Dimension 2": 24.834633,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1746,
      },
      {
        RawTweet:
          '["Here\'s @3WhiteGuysPod on the end of the world (no joke) PLUS listen to our exclusive interview with a health worker inside one of the #COVID19 clinics in #NSW \\n\\nLISTEN\/DOWNLOAD\/SUBSCRIBE: https:\/\/t.co\/nAeUNdB4rW \\n\\n#COVID19au #coronavirusau #podcast #auspol #AprilFoolsDay"]',
        Month: "March",
        "Dimension 1": 20.768192,
        "Dimension 2": 12.442758,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1747,
      },
      {
        RawTweet:
          "Inpatient Lesson of the Day 11: Daily updated and important data coming out of prior experiences with the virus. Discussed today's @JAMAInternalMed report with the team. https:\/\/t.co\/TE0WhCcBDV",
        Month: "March",
        "Dimension 1": 7.6216264,
        "Dimension 2": 31.05,
        Sentiment: 0.133333333,
        Subjectivity: 0.333333333,
        idx: 1748,
      },
      {
        RawTweet:
          "['#CoronaVirus So people are buying up hand sanitizer but NOT buying standard, cleansing hygienic SOAP. Wash your hands first and foremost! #handsanitizer #panickbuying https:\/\/t.co\/aFQpWvRoSD', '#CoronaVirus So people are buying up hand sanitizer but NOT buying standard, cleansing hygienic SOAP. Wash your hands first and foremost! #handsanitizer #panickbuying https:\/\/t.co\/aFQpWvRoSD']",
        Month: "March",
        "Dimension 1": 1.7160188,
        "Dimension 2": -14.178389,
        Sentiment: 0.15625,
        Subjectivity: 0.166666667,
        idx: 1749,
      },
      {
        RawTweet:
          "b'RT @Atayeshe: @UN Secretary-General @antonioguterres once again calls for a global #ceasefire while the world fights #COVID \\xe2\\x80\\x94 during @GlblC\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -7.50257,
        "Dimension 2": -14.731499,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1750,
      },
      {
        RawTweet:
          "@youyanggu Thanks, this is very nice. I should have clarified that the estimates are for Stockholm county, not Stockholm. Any thoughts about when we broaden the population?",
        Month: "May",
        "Dimension 1": 3.5279543,
        "Dimension 2": -40.49749,
        Sentiment: 0.49,
        Subjectivity: 0.6,
        idx: 1751,
      },
      {
        RawTweet:
          "It's harder to fight #COVID19 when transmission increases &amp;:\r\n-makes contact-tracing &amp; quarantining difficult\r\n-overwhelms the health system.\r\nIt's key for countries with weaker health systems to be aggressive to contain spread among early cases &amp; prevent community transmission.",
        Month: "March",
        "Dimension 1": -15.7517805,
        "Dimension 2": -11.818184,
        Sentiment: -0.125,
        Subjectivity: 0.575,
        idx: 1752,
      },
      {
        RawTweet:
          "b'#COVID19 Payment Protection Program: #LenderGuidelines Subject to Litigation Risks  @PierceAtwoodLLP  https:\/\/t.co\/F4lo1TAPti'",
        Month: "April",
        "Dimension 1": 9.110954,
        "Dimension 2": -17.352217,
        Sentiment: -0.166666667,
        Subjectivity: 0.333333333,
        idx: 1753,
      },
      {
        RawTweet:
          "b'Stay at home. \\n\\n #COVID19 Update:\\n Country: Bolivia\\nTotal Cases: 441\\nTotal Deaths: 29\\nTotal Recovered: 14\\nTotal Active Cases: 398'",
        Month: "April",
        "Dimension 1": 11.19058,
        "Dimension 2": -6.294409,
        Sentiment: -0.133333333,
        Subjectivity: 0.6,
        idx: 1754,
      },
      {
        RawTweet:
          "b'RT @CyrilRamaphosa: The most potent weapon against  #COVID19 and its devastating health, social &amp; economic impact is international cooperat\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -8.653887,
        "Dimension 2": -10.091651,
        Sentiment: 0.038888889,
        Subjectivity: 0.377777778,
        idx: 1755,
      },
      {
        RawTweet:
          "This unsurprising announcement just in:\r\n\r\nChina happy to start filling the gaping and growing hole in global leadership.\r\n\r\nIt's not a lot of \ud83d\udcb0, but it's certainly symbolic.\r\n\r\nThis will only give China a greater voice at the @WHO, and the United States less.\r\n\r\nhttps:\/\/t.co\/5UQr2HH69N",
        Month: "April",
        "Dimension 1": -15.836075,
        "Dimension 2": 9.060066,
        Sentiment: 0.224603175,
        Subjectivity: 0.523015873,
        idx: 1756,
      },
      {
        RawTweet:
          "If schools close now -- I don't see how they open up again before June.  Things will get worse over upcoming weeks and may be months. \r\n\r\nSchool closures right now are tough -- good for slowing down the virus, bad for kids and families. https:\/\/t.co\/FMPAxXaGf5",
        Month: "March",
        "Dimension 1": -16.88197,
        "Dimension 2": 25.08697,
        Sentiment: -0.094104308,
        Subjectivity: 0.574943311,
        idx: 1757,
      },
      {
        RawTweet:
          "Good call with Hanan Mohamed Al Kuwari, @MOPHQatar. I congratulated her for HH the Emir of \ud83c\uddf6\ud83c\udde6\u2019s leadership to contain #coronavirus &amp; efforts to implement a comprehensive approach to suppress and control #COVID19.",
        Month: "March",
        "Dimension 1": 29.909197,
        "Dimension 2": -20.463068,
        Sentiment: 0.7,
        Subjectivity: 0.6,
        idx: 1758,
      },
      {
        RawTweet:
          "#WorldImmunizationWeek is an opportunity to thank all vaccine champions: people who develop, deliver &amp; receive vaccines to protect the health of everyone, everywhere.\r\nMy special appreciation goes to vaccinators in dangerous areas, who risk their lives to save others #VaccinesWork https:\/\/t.co\/wpV6eMx9mO",
        Month: "April",
        "Dimension 1": 32.508476,
        "Dimension 2": -18.491325,
        Sentiment: -0.121428571,
        Subjectivity: 0.735714286,
        idx: 1759,
      },
      {
        RawTweet:
          "This sucks so much. I was hoping it would stay away (wishful thinking). On the positive side, many African nations have much more real-life expertise to deal with epidemics than Europe and North America. https:\/\/t.co\/IfbzzFRQV4",
        Month: "March",
        "Dimension 1": -17.22798,
        "Dimension 2": -17.720633,
        Sentiment: 0.187878788,
        Subjectivity: 0.340909091,
        idx: 1760,
      },
      {
        RawTweet:
          "['$OIL had te so called exhaustion gap....not that i believe in gap theory but just saying for those that do...dont expect it to stay below 30usd for long...buying opportunities are made down here...#WTI #opec #coronavirus #SaudiAramco https:\/\/t.co\/iGSO6VZwOi']",
        Month: "March",
        "Dimension 1": -16.925892,
        "Dimension 2": 15.178885,
        Sentiment: -0.155555556,
        Subjectivity: 0.288888889,
        idx: 1761,
      },
      {
        RawTweet:
          "b'Today! While the #COVID19 pandemic forced UCLA to cancel the in-person Bruin Day this year, staff, faculty and stud\\xe2\\x80\\xa6 https:\/\/t.co\/YLdWlmzw6F'",
        Month: "May",
        "Dimension 1": -35.93096,
        "Dimension 2": 3.3058577,
        Sentiment: -0.3,
        Subjectivity: 0.2,
        idx: 1762,
      },
      {
        RawTweet:
          "b'It seems that animals do indeed, pray. And that their prayers can be answered. #coronavirus #cleanair #thisplaceisazoo'",
        Month: "April",
        "Dimension 1": 35.88674,
        "Dimension 2": -26.332945,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1763,
      },
      {
        RawTweet:
          "@ProfLWiley @pelfreyduryea You convinced me. Using more nuanced language is right thing to do \r\n\r\nWhen no one was paying attention 2 months ago, bluntness was needed\r\n\r\nBut now, evidence-driven policies dictate restrictions that vary in place, time. \r\n\r\nThank you. I'll work on communicating that more effectively",
        Month: "April",
        "Dimension 1": -7.091767,
        "Dimension 2": -31.91403,
        Sentiment: 0.471428571,
        Subjectivity: 0.583928571,
        idx: 1764,
      },
      {
        RawTweet:
          "I encourage everyone to read these pieces together. They speak, I think, to the need for sustained, large-scale investment in the structural drivers of health.",
        Month: "April",
        "Dimension 1": 30.159348,
        "Dimension 2": -12.158596,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1765,
      },
      {
        RawTweet:
          "b'RT @LaurenRSilvis: At @TempusLabs we\\xe2\\x80\\x99re working to transform our approach to cancer care and we\\xe2\\x80\\x99re proud to partner with @AmericanCancer to\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 23.567799,
        "Dimension 2": 3.196732,
        Sentiment: 0.8,
        Subjectivity: 1.0,
        idx: 1766,
      },
      {
        RawTweet:
          "Really liked this #SafetyDance featuring health care workers, @theroots &amp; @jimmyfallon!\r\nThank you for joining the #TogetherAtHome and bringing some joy to all of us during this difficult time of #COVID19.\r\n\r\nhttps:\/\/t.co\/HsDEpz2cFc",
        Month: "April",
        "Dimension 1": 42.8694,
        "Dimension 2": -17.015125,
        Sentiment: 0.35,
        Subjectivity: 0.666666667,
        idx: 1767,
      },
      {
        RawTweet:
          'b"RT @angie_rasmussen: Presenting #hydroxychloroquine as a panacea for #COVID19 is dangerous. Here\'s a great thread on the data we have so fa\\xe2\\x80\\xa6"',
        Month: "April",
        "Dimension 1": -9.118595,
        "Dimension 2": -7.7727966,
        Sentiment: 0.1,
        Subjectivity: 0.825,
        idx: 1768,
      },
      {
        RawTweet:
          "b'RT @NPRinskeep: How can hospitals get through the next few months? @ashishkjha points to a possible \"silver lining\": The peak number of cas\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -0.6277112,
        "Dimension 2": 41.686405,
        Sentiment: -0.066666667,
        Subjectivity: 0.366666667,
        idx: 1769,
      },
      {
        RawTweet:
          '"In the US, African Americans are more likely to have fatal heart conditions than other groups. Researchers worry that this means the US could end up with noticeable disparities in who dies from the coronavirus."\r\n\r\n#COVID19 #HealthEquity\r\nhttps:\/\/t.co\/r8alMzqIj9',
        Month: "April",
        "Dimension 1": -19.459402,
        "Dimension 2": -15.08613,
        Sentiment: 0.09375,
        Subjectivity: 0.46875,
        idx: 1770,
      },
      {
        RawTweet:
          "\u201cIn SF, at least, there are important exceptions: Residents will still be permitted to travel to buy food, see a doctor, and help care for family. Visitors to the region will be permitted to go home, too. Residents can even take part in outdoor activities\u201d https:\/\/t.co\/96WAHdUfuG",
        Month: "March",
        "Dimension 1": 26.583645,
        "Dimension 2": -35.648422,
        Sentiment: 0.05,
        Subjectivity: 0.7,
        idx: 1771,
      },
      {
        RawTweet:
          "b'How Generals Fueled 1918 Flu Pandemic to Win Their World War | The American Conservative #coronavirus #pandemic  https:\/\/t.co\/NhBKW7IXNC'",
        Month: "April",
        "Dimension 1": -6.960514,
        "Dimension 2": 7.6721854,
        Sentiment: 0.4,
        Subjectivity: 0.2,
        idx: 1772,
      },
      {
        RawTweet:
          "Today's #shoutout to #womenInSTEM goes to Fatima Amanat for her incredibly timely @medrxivpreprint paper on a serological test to detect #SARSCoV2 #antibody in humans. #COVID19\r\nhttps:\/\/t.co\/q3t8ZRPfzJ",
        Month: "March",
        "Dimension 1": 16.581347,
        "Dimension 2": 9.755183,
        Sentiment: 0.9,
        Subjectivity: 0.9,
        idx: 1773,
      },
      {
        RawTweet:
          "I think the steeple analogy is interesting and does fit with what I\u2019ve seen in my own patients. Outside of inpatient psychiatry patients who contracted the virus, all my inpatients have been fairly sick (or got sick quick in terms of supplemental oxygen escalation) https:\/\/t.co\/G4uOD4C7X4",
        Month: "April",
        "Dimension 1": -24.669483,
        "Dimension 2": 26.820002,
        Sentiment: 0.057823129,
        Subjectivity: 0.594897959,
        idx: 1774,
      },
      {
        RawTweet:
          '["Correctional Service Canada says it wants the prisoners\' family and friends to avoid its institutions should they be sick and to consider other ways of communicating with loved ones, such as a video visitation or by telephone. https:\/\/t.co\/5QsNCsInFx #COVID19 #coronavirus"]',
        Month: "March",
        "Dimension 1": -11.13422,
        "Dimension 2": -15.814017,
        Sentiment: 0.012142857,
        Subjectivity: 0.526428571,
        idx: 1775,
      },
      {
        RawTweet:
          "b'And now we have no power. While social distancing. Good thing we still have gas so that means cooking by candlelight. #RoughingIt #covid19'",
        Month: "April",
        "Dimension 1": -31.649984,
        "Dimension 2": -25.572653,
        Sentiment: 0.366666667,
        Subjectivity: 0.333333333,
        idx: 1776,
      },
      {
        RawTweet:
          'b"It\'s been gloomy and pessimistic days, encountering a lot of negative thoughts getting emanated from many wise mind\\xe2\\x80\\xa6 https:\/\/t.co\/dsANjLlCBQ"',
        Month: "May",
        "Dimension 1": -24.626162,
        "Dimension 2": -10.8838625,
        Sentiment: 0.3,
        Subjectivity: 0.6,
        idx: 1777,
      },
      {
        RawTweet:
          "b'What a monster of a horn. I made a small one too in my etsy shop. This one is 9 inches or so I believe and the smal\\xe2\\x80\\xa6 https:\/\/t.co\/kpwBc6ydcE'",
        Month: "April",
        "Dimension 1": -19.06903,
        "Dimension 2": 17.519735,
        Sentiment: -0.25,
        Subjectivity: 0.4,
        idx: 1778,
      },
      {
        RawTweet:
          "b'RT @edyong209: \"Here, the curve is not flat. We are overwhelmed. There was a time for testing in New York, and we missed it. China warned I\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -16.009607,
        "Dimension 2": 9.828284,
        Sentiment: 0.074431818,
        Subjectivity: 0.289772727,
        idx: 1779,
      },
      {
        RawTweet:
          "b'Hmmmm low skilled am I?  Good enough to keep coming to work and help keep severyonensafe though? Maybe I should kee\\xe2\\x80\\xa6 https:\/\/t.co\/DJh5fyjikG'",
        Month: "May",
        "Dimension 1": -1.4354264,
        "Dimension 2": -35.43753,
        Sentiment: 0.3,
        Subjectivity: 0.475,
        idx: 1780,
      },
      {
        RawTweet:
          "['Currently, the CDC lists fever, cough and shortness of breath as the most common symptoms of COVID-19. Some medical practitioners want loss of sense of smell added https:\/\/t.co\/dLmN4545yH @GlenwoodPI #coronavirus https:\/\/t.co\/Lr18vAgG18']",
        Month: "March",
        "Dimension 1": -14.320583,
        "Dimension 2": -1.9688625,
        Sentiment: 0.05,
        Subjectivity: 0.35,
        idx: 1781,
      },
      {
        RawTweet:
          "b'.@HollBear1 introduces our 2nd mental health &amp; #coronavirus research bite.\\n\\nUnplanned endings can be hard to naviga\\xe2\\x80\\xa6 https:\/\/t.co\/DVAPHw7DBA'",
        Month: "May",
        "Dimension 1": -8.183969,
        "Dimension 2": -3.8854153,
        Sentiment: -0.130555556,
        Subjectivity: 0.247222222,
        idx: 1782,
      },
      {
        RawTweet:
          "NEW for UK GP practices and OOH centres:\r\n\r\nVIDEO CONSULTATIONS: A GUIDE FOR PRACTICE\r\nHow to get set up for doing video consultations, how to do a video consultation safely, a guide for patients, and a provisional *template* for a ? COVID video consultation\r\n\r\nhttps:\/\/t.co\/LNOJcdistK",
        Month: "March",
        "Dimension 1": 23.986265,
        "Dimension 2": 8.291112,
        Sentiment: 0.318181818,
        Subjectivity: 0.477272727,
        idx: 1783,
      },
      {
        RawTweet:
          "['I made a deep learning tool to help me avoid #coronavirus \\n\\nJust a friendly reminder #DONTtouchYOURface https:\/\/t.co\/qtT9FAMCsK']",
        Month: "March",
        "Dimension 1": 17.138634,
        "Dimension 2": -25.337418,
        Sentiment: 0.1875,
        Subjectivity: 0.45,
        idx: 1784,
      },
      {
        RawTweet:
          "The trick is to find ways to support community members without having them re-group, which defeats the purpose. Must find solutions that still limit transmission.",
        Month: "March",
        "Dimension 1": -10.253241,
        "Dimension 2": -33.12301,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1785,
      },
      {
        RawTweet:
          "It is deeply disappointing that as we &amp; partners work to save lives from the virus, we are under attack in this way as well as on social media. This has to stop. I renew my call for global solidarity in the fight against #COVID19. https:\/\/t.co\/GdPzwxQ1sV",
        Month: "April",
        "Dimension 1": -2.6869004,
        "Dimension 2": -5.7162943,
        Sentiment: -0.188888889,
        Subjectivity: 0.255555556,
        idx: 1786,
      },
      {
        RawTweet:
          "[\"'Coronavirus and children in detention' - the first in a series of CRIN articles looking at the ways that the human rights of children are affected by #COVID19 \\n\\nRead it here: https:\/\/t.co\/hQ71KSOUpI \\n\\n#ChildRights #DeprivationOfLiberty #RightToHealth #RightToLife https:\/\/t.co\/0XbOCBAmbc\"]",
        Month: "March",
        "Dimension 1": -4.1582146,
        "Dimension 2": 3.7172513,
        Sentiment: 0.125,
        Subjectivity: 0.216666667,
        idx: 1787,
      },
      {
        RawTweet:
          "@paul_m_orwin @aaronmring Based on other respiratory viruses, secretory IgA within the lumen of the respiratory tract would be expected to be quite protective.",
        Month: "April",
        "Dimension 1": 18.124256,
        "Dimension 2": -22.119118,
        Sentiment: -0.1125,
        Subjectivity: 0.3875,
        idx: 1788,
      },
      {
        RawTweet:
          "['A Victorian breast cancer screening facility has announced it will be shutting its doors due to sweeping new social distancing regulations enacted by the federal government. #Coronavirus #7NEWS https:\/\/t.co\/K0XctXOyHO']",
        Month: "March",
        "Dimension 1": -28.000181,
        "Dimension 2": 3.123778,
        Sentiment: 0.01489899,
        Subjectivity: 0.298737374,
        idx: 1789,
      },
      {
        RawTweet:
          "b\"When you don't want the doll baby's to catch the Corona \\xf0\\x9f\\x98\\x82\\nRiding to get gas with granddaughter &amp; goddaughter\\xe2\\x80\\xa6 https:\/\/t.co\/9bIRG4od3n\"",
        Month: "May",
        "Dimension 1": -11.294257,
        "Dimension 2": -19.430532,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1790,
      },
      {
        RawTweet:
          'b"Today I am seeing videos and write ups about how certain masks do not protect you from #COVID19. Let\'s just stay at home \\xf0\\x9f\\x98\\x91\\xf0\\x9f\\x98\\x91\\n#CovidNGR"',
        Month: "March",
        "Dimension 1": 9.58302,
        "Dimension 2": -6.609782,
        Sentiment: 0.214285714,
        Subjectivity: 0.571428571,
        idx: 1791,
      },
      {
        RawTweet:
          "['Put Medemer on hold for a second. This is what we should be doing. It time for \"Corona virus\" in Cardi B\\'s voice &amp; social-life mekenes is the best remedy. #Oromia #Qeerroo #Ethiopia #COVID19 https:\/\/t.co\/11TAch7hvt']",
        Month: "March",
        "Dimension 1": 3.5308447,
        "Dimension 2": -4.550537,
        Sentiment: 0.5,
        Subjectivity: 0.15,
        idx: 1792,
      },
      {
        RawTweet:
          "['Britain please listen, we need to take control. Thousands of people are going to die. Voluntary lockdown, travelling to get essential items &amp; for key workers only. The government are not acting fast enough, we must take control of this. #covid19UK #COVID19 #UKlockdown #NHSstaff']",
        Month: "March",
        "Dimension 1": -12.926815,
        "Dimension 2": -10.92696,
        Sentiment: 0.033333333,
        Subjectivity: 0.566666667,
        idx: 1793,
      },
      {
        RawTweet:
          "b'Staying safe #Trucking during the #COVID19 virus. Getting my temperature checked before I can enter dispatch to get\\xe2\\x80\\xa6 https:\/\/t.co\/LhVE6nKdF7'",
        Month: "April",
        "Dimension 1": 7.3605027,
        "Dimension 2": -6.101893,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1794,
      },
      {
        RawTweet:
          "[\"'#coronavirus and aid' @newhumanitarian:\\n#CoronaBorders impacting the livelihoods of migrants, refugees &amp; essential deliveries: https:\/\/t.co\/yntHOmxlqa\"]",
        Month: "March",
        "Dimension 1": 3.21527,
        "Dimension 2": 9.89694,
        Sentiment: 0.0,
        Subjectivity: 0.3,
        idx: 1795,
      },
      {
        RawTweet:
          "b'Temperature Checks and Desk Shields: C.D.C. Suggests Big Changes to Offices https:\/\/t.co\/LawekIWHOg'",
        Month: "May",
        "Dimension 1": 19.64739,
        "Dimension 2": 0.21716966,
        Sentiment: 0.0,
        Subjectivity: 0.1,
        idx: 1796,
      },
      {
        RawTweet:
          "@ToEllen @Jamesrgurney @PTurnbaugh @phageconsortium Indeed.  #AntibioticResistant #superbugs are the silent #pandemic few are talking about.  And #phagetherapy is a potential solution we can tee up.  Otherwise by 2050, 1 person will die every 3 seconds from superbug infections.",
        Month: "April",
        "Dimension 1": -24.493813,
        "Dimension 2": 22.87099,
        Sentiment: -0.066666667,
        Subjectivity: 0.4,
        idx: 1797,
      },
      {
        RawTweet:
          "b'@UNNamibia in conjunction with @NPC_Namibia convened a Development Partners Virtual meeting to discuss #COVID19 res\\xe2\\x80\\xa6 https:\/\/t.co\/w3XlI7o70j'",
        Month: "April",
        "Dimension 1": 31.807375,
        "Dimension 2": 10.964356,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1798,
      },
      {
        RawTweet:
          "b'RT @YaleIMed: Antibodies and immunity \\xe2\\x9d\\x93    \\n\\n@VirusesImmunity of @YaleIBIO explains to @voxdotcom  how these play a role in survival of #CO\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 20.751247,
        "Dimension 2": -2.9642189,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1799,
      },
      {
        RawTweet:
          "@AltafSaadiMD @DrZackaryBerger @DrKimSue @namd4kids @DrJenChen4kids @egaly @Arrianna_Planey @bethlinas @Sarah_Mojarad I learn so much and in this time of social distancing am selfishly craving more social connection. \r\n\r\nThat being said, I'm looking forward to my stay-at-home technology vacation for Memorial Day weekend :)",
        Month: "May",
        "Dimension 1": 31.085909,
        "Dimension 2": 17.553045,
        Sentiment: 0.127777778,
        Subjectivity: 0.472222222,
        idx: 1800,
      },
      {
        RawTweet:
          "The @BAA has announced that the 124th Boston Marathon will be held as a virtual event, following Boston Mayor Martin Walsh\u2019s cancellation of the marathon as a mass participation road running event due to the COVID-19 pandemic. https:\/\/t.co\/tlIdvsU9sq",
        Month: "May",
        "Dimension 1": -36.97025,
        "Dimension 2": 3.625847,
        Sentiment: -0.0625,
        Subjectivity: 0.2375,
        idx: 1801,
      },
      {
        RawTweet:
          "b'RT @MarkLevineNYC: Starting soon (6:00 pm): our uptown community Q &amp; A with @Craig_A_Spencer...ER doc, public health expert and Ebola survi\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 8.725002,
        "Dimension 2": 42.887283,
        Sentiment: 0.0,
        Subjectivity: 0.083333333,
        idx: 1802,
      },
      {
        RawTweet:
          "b'RT @AmeshAA: \\xe2\\x80\\x9cwould have the confidence to return to work..if they knew that a robust screening system is in place..&amp; medication can..reduc\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 26.784288,
        "Dimension 2": -11.609305,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1803,
      },
      {
        RawTweet:
          "If you have time, a reminder to watch our grand rounds on epi, clinical Dx\/Rx, science &amp; @ucsf response https:\/\/t.co\/EyCppS4Kzi Both clinical &amp; lay viewers have found it useful. \r\n\r\nMore tomorrow; I'll add some interviews w\/ my colleagues at front line. Till then, stay safe (6\/6)",
        Month: "March",
        "Dimension 1": 25.658834,
        "Dimension 2": 16.709164,
        Sentiment: 0.45,
        Subjectivity: 0.5,
        idx: 1804,
      },
      {
        RawTweet:
          "b'This like much info on COVID-19 is evolving.  https:\/\/t.co\/wTQqdphlaV has a revised view.  When facts change we sho\\xe2\\x80\\xa6 https:\/\/t.co\/zgtHO4HIBy'",
        Month: "March",
        "Dimension 1": 14.635974,
        "Dimension 2": -14.61707,
        Sentiment: 0.2,
        Subjectivity: 0.2,
        idx: 1805,
      },
      {
        RawTweet:
          "b'RT @GrantWahl: USMNT legend @landondonovan asked to interview my wife Dr. @celinegounder about the coronavirus. Great questions and answers\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 15.175288,
        "Dimension 2": 10.578734,
        Sentiment: 0.8,
        Subjectivity: 0.75,
        idx: 1806,
      },
      {
        RawTweet:
          "['We all together pray for our life our country our world for zero covid tomorrow aminn... can this tweet reach 1k retweet #PrayTogether #Hantavirus #COVID19 https:\/\/t.co\/uc3h7MTviJ']",
        Month: "March",
        "Dimension 1": 31.39749,
        "Dimension 2": -26.613876,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1807,
      },
      {
        RawTweet:
          "['We stand by Italy during these trying times. Share your Support for our Italian friends, They are our colleagues, friends and family. Cari amici, siamo con voi. #COVID19 #WeStandWithItaly']",
        Month: "March",
        "Dimension 1": 43.06605,
        "Dimension 2": -28.194803,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1808,
      },
      {
        RawTweet:
          "New paper in @ScienceMagazine finds domestic impact of China's travel ban was modest (3-5 days delay in epidemic in other provinces), but international travel restrictions significantly delayed and reduced spread of #COVID19 to other countries. https:\/\/t.co\/Iq9RKZJr73",
        Month: "March",
        "Dimension 1": -22.979399,
        "Dimension 2": 17.054117,
        Sentiment: 0.051623377,
        Subjectivity: 0.439935065,
        idx: 1809,
      },
      {
        RawTweet:
          "b'RT @drFvallania: Sex differences are always significant in the study of the immune system. Even more so for #COVID19 Thanks for doing this\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -9.122359,
        "Dimension 2": -5.609033,
        Sentiment: 0.358333333,
        Subjectivity: 0.525,
        idx: 1810,
      },
      {
        RawTweet:
          "b'The latest The Food &amp; Drink Business Daily! https:\/\/t.co\/uyQHWAtMpw Thanks to @AndreaFelsted #coronavirus #farminguk'",
        Month: "May",
        "Dimension 1": 15.625478,
        "Dimension 2": 34.905235,
        Sentiment: 0.233333333,
        Subjectivity: 0.366666667,
        idx: 1811,
      },
      {
        RawTweet:
          'b"RT @JSEllenberg: And she said the Imperial group has scaled back its death estimates; that\'s just not right. https:\/\/t.co\/x9JM7IOI94"',
        Month: "March",
        "Dimension 1": -32.741085,
        "Dimension 2": -2.181273,
        Sentiment: -0.071428571,
        Subjectivity: 0.267857143,
        idx: 1812,
      },
      {
        RawTweet:
          "@Jo_Walker_ATL @sanghyuk_shin It\u2019s more about identifying contacts linked to an existing cluster (more than a few cases, maybe who attended a party or had some other shared exposure). I am not sure how you establish an existing cluster in the first place, but maybe that part is easy?",
        Month: "May",
        "Dimension 1": 2.9742105,
        "Dimension 2": -40.22867,
        Sentiment: 0.158333333,
        Subjectivity: 0.504365079,
        idx: 1813,
      },
      {
        RawTweet:
          "As the #coronavirus outbreak evolves, we must recognize what we do and don\u2019t know, and identify what we can do in response. On March 12, @BUSPH will host a panel of experts to discuss just this. \r\n\r\nJoin the conversation \u27a1\ufe0f https:\/\/t.co\/zmqCHHjiFG \r\n\r\n@BhadeliaMD @neidl @wendymariner https:\/\/t.co\/vLbDGS1kDh",
        Month: "March",
        "Dimension 1": 5.0635986,
        "Dimension 2": 3.703355,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1814,
      },
      {
        RawTweet:
          "A group of scientists has written an open letter calling on the US government to commit to a science-based approach to #COVID19 and future #pandemics. We need #science to help guide us out of this pandemic. If you agree, please sign this letter. \r\n\r\nhttps:\/\/t.co\/EEViU8Uk4a",
        Month: "April",
        "Dimension 1": 0.74256843,
        "Dimension 2": -10.092362,
        Sentiment: 0.0,
        Subjectivity: 0.3125,
        idx: 1815,
      },
      {
        RawTweet:
          "b'Just back from delivering food parcels in #Bowes to residents who have asked for help during the #Coronavirus emerg\\xe2\\x80\\xa6 https:\/\/t.co\/vZZA2SWlFa'",
        Month: "April",
        "Dimension 1": -5.5206847,
        "Dimension 2": 11.615788,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1816,
      },
      {
        RawTweet:
          "3\/n What should we do now? Moving quickly and aggressively to mitigate spread, reduce the scope of the epidemic here, continue to ready the healthcare system, work with cities and states to develop a uniform, systematic response; provide financial assistance to help these efforts",
        Month: "March",
        "Dimension 1": 25.400112,
        "Dimension 2": -13.247056,
        Sentiment: 0.177777778,
        Subjectivity: 0.333333333,
        idx: 1817,
      },
      {
        RawTweet:
          "['Heading to NYC to scoop up my daughter from college which is being shut down until 3\/29.  Supposedly someone across the street from her building has been diagnosed with the #CoronaVirus.  Opting to not taking chances with Amtrak.']",
        Month: "March",
        "Dimension 1": -39.06197,
        "Dimension 2": 4.2524366,
        Sentiment: -0.155555556,
        Subjectivity: 0.288888889,
        idx: 1818,
      },
      {
        RawTweet:
          "b'People who are struggling with #addiction in a time of #COVID19 has increased isolation. Please join @BCCSU and all\\xe2\\x80\\xa6 https:\/\/t.co\/rJQL4T7ZjW'",
        Month: "May",
        "Dimension 1": -11.755508,
        "Dimension 2": -3.3279574,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1819,
      },
      {
        RawTweet:
          "b'Throwing money at nursing homes in #Ireland will not stop the spread of virus to vulnerable residents.!! #COVID19 #harris #ppe'",
        Month: "April",
        "Dimension 1": -2.4167757,
        "Dimension 2": -17.445381,
        Sentiment: -0.78125,
        Subjectivity: 0.5,
        idx: 1820,
      },
      {
        RawTweet:
          "b'RT @V2019N: Schools are closing in many states in #US but what about: \\n\\n-gyms\\n-dojos\\n-ice skating rinks\\n-community centers\\n-trampoline park\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -37.786404,
        "Dimension 2": 19.276657,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1821,
      },
      {
        RawTweet:
          "b'@caitlinmurr @GrantWahl We\\xe2\\x80\\x99ve known for sometime that something like this would hit.'",
        Month: "March",
        "Dimension 1": 12.249714,
        "Dimension 2": -34.676147,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1822,
      },
      {
        RawTweet:
          "b'Before the #Covid19 pandemic struck, #Cameroon maintained a good trade relationship with China. But with the closur\\xe2\\x80\\xa6 https:\/\/t.co\/S8tMjc2zyv'",
        Month: "April",
        "Dimension 1": -15.581769,
        "Dimension 2": 10.8889675,
        Sentiment: 0.7,
        Subjectivity: 0.6,
        idx: 1823,
      },
      {
        RawTweet:
          "['If a visit to UCLA is in your travel plans, take a moment to review some measures to help prevent the spread of #coronavirus. https:\/\/t.co\/icUkfsiDJ1 https:\/\/t.co\/mhPf631QxI']",
        Month: "March",
        "Dimension 1": 1.9236306,
        "Dimension 2": -0.56824225,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1824,
      },
      {
        RawTweet:
          "@uwdgh @UWMedicine @AmericanDxFM And I just joined @cnn as a Medical Analyst! Also check out my new podcast about #SARSCoV2 #COVID19 #coronavirus https:\/\/t.co\/7s5SpGD8Qy with former Ebola czar @RonaldKlain. https:\/\/t.co\/rMwgcMvcuT",
        Month: "March",
        "Dimension 1": 8.28005,
        "Dimension 2": 12.718344,
        Sentiment: 0.045454545,
        Subjectivity: 0.151515152,
        idx: 1825,
      },
      {
        RawTweet:
          "b'The $2 trillion CARES Act meant to boost the economy as the nation reels from #COVID19. Among its stipulations are\\xe2\\x80\\xa6 https:\/\/t.co\/pzKXsvKJPt'",
        Month: "April",
        "Dimension 1": 16.073261,
        "Dimension 2": 23.987228,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1826,
      },
      {
        RawTweet:
          'Regarding serology tests for #COVID19, @aphl\'s @scottjbecker: Lack of regulation of COVID19 serology tests has resulted in "crappy" tests flooding the market. "It\'s like the wild, wild West out there -- or wild East," https:\/\/t.co\/RBm7bMG17n',
        Month: "April",
        "Dimension 1": -27.797424,
        "Dimension 2": -14.997521,
        Sentiment: 0.1,
        Subjectivity: 0.4,
        idx: 1827,
      },
      {
        RawTweet:
          "Thursdays are the worst cause I\u2019m always coming off of a Wednesday full of meetings and \u201cquick\u201d thoughtful responses into a day with none but everyone expecting data &amp; 1800 emails I couldn\u2019t check from Wednesday being busy. https:\/\/t.co\/SJawjcnyJ0 https:\/\/t.co\/WPsPZTsZ0S",
        Month: "April",
        "Dimension 1": -42.21464,
        "Dimension 2": 5.028701,
        Sentiment: 0.036666667,
        Subjectivity: 0.57,
        idx: 1828,
      },
      {
        RawTweet:
          "Thank you @takeshi_kasai, @WHOWPRO Director, for walking the #SafeHands talk with me. Together, we can stop the #coronavirus from spreading and keep the world safe! #COVID19 \r\n\r\nhttps:\/\/t.co\/UZfLDXV91L",
        Month: "March",
        "Dimension 1": 31.790548,
        "Dimension 2": -21.366165,
        Sentiment: 0.625,
        Subjectivity: 0.5,
        idx: 1829,
      },
      {
        RawTweet:
          "The debates for past 8 weeks on face masks, optimizing testing &amp; tracing, hand hygiene &amp; border control are like watching a fire burning down a forest &amp; firefighters turning their backs &amp; squabbling on what to do. By the time a decision is made, the destruction is done.",
        Month: "May",
        "Dimension 1": -34.724007,
        "Dimension 2": 9.025498,
        Sentiment: -0.202777778,
        Subjectivity: 0.269444444,
        idx: 1830,
      },
      {
        RawTweet:
          "b'RT @Craig_A_Spencer: Today is global Emergency Medicine Day! This wonderful video highlights our amazing frontline colleagues all over the\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": 47.48837,
        "Dimension 2": -7.0526133,
        Sentiment: 0.533333333,
        Subjectivity: 0.633333333,
        idx: 1831,
      },
      {
        RawTweet:
          "b\"RT @RTMannJr: It's bizarre. Same thing happened to us 21 years ago. One day my wife wasn't pregnant. The next day she was. We have no idea\\xe2\\x80\\xa6\"",
        Month: "May",
        "Dimension 1": -42.35918,
        "Dimension 2": 11.356102,
        Sentiment: 0.183333333,
        Subjectivity: 0.30625,
        idx: 1832,
      },
      {
        RawTweet:
          'More reporting from Chelsea, "the epicenter of the #COVID19 crisis in Massachusetts, with rates of infection that surged last week to 3,841 per 100,000 people, around 6 times the statewide average. And officials fear the virus is still spreading." \/91\r\nhttps:\/\/t.co\/TExolrfLnw',
        Month: "April",
        "Dimension 1": -15.994334,
        "Dimension 2": 35.596523,
        Sentiment: 0.116666667,
        Subjectivity: 0.322222222,
        idx: 1833,
      },
      {
        RawTweet:
          "b'MAY 17: MoPH announces 1,642 new confirmed cases of COVID-19 and 582 recoveries . #QatarLiving #Qatar #COVID_19\\xe2\\x80\\xa6 https:\/\/t.co\/4l0p0GLjsq'",
        Month: "May",
        "Dimension 1": -2.0442069,
        "Dimension 2": 44.558163,
        Sentiment: 0.268181818,
        Subjectivity: 0.727272727,
        idx: 1834,
      },
      {
        RawTweet:
          "b'RT @paulkrugman: Watching Andy Slavitt get radicalized by reality. What I went through during the Bush years, but at warp speed'",
        Month: "May",
        "Dimension 1": -18.232841,
        "Dimension 2": -7.4190736,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1835,
      },
      {
        RawTweet:
          'b"The initiative is part of efforts to maintain food safety in #SaudiArabia\'s #Asir Province amid the #coronavirus pa\\xe2\\x80\\xa6 https:\/\/t.co\/kyC0eyfuZw"',
        Month: "April",
        "Dimension 1": 2.4664538,
        "Dimension 2": -2.3504512,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1836,
      },
      {
        RawTweet:
          "['Welp its official, #coronavirus aka #Covid_19 has reached my county with one confirmed case. Washing his hands did nothing. He was simply in contact with someone who had it that got it from travel. He is my age and recovering at home. Ugh. #getitoverwithalready', 'Welp its official, #coronavirus aka #Covid_19 has reached my county with one confirmed case. Washing his hands did nothing. He was simply in contact with someone who had it that got it from travel. He is my age and recovering at home. Ugh. #getitoverwithalready']",
        Month: "March",
        "Dimension 1": -41.69682,
        "Dimension 2": -16.856052,
        Sentiment: 0.2,
        Subjectivity: 0.678571429,
        idx: 1837,
      },
      {
        RawTweet:
          "b'RT @jeffsiegel: The coronavirus was a hoax created by #TraderJoes so the company could conduct market research on what products are worth k\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -15.474515,
        "Dimension 2": 4.7853146,
        Sentiment: 0.3,
        Subjectivity: 0.1,
        idx: 1838,
      },
      {
        RawTweet:
          '["Morning Friends! More ways to help our community are coming in, so please continue to share! **Today\'s highlight: CARITAS really really really (like) really needs no contact, infrared thermometers. If you can help, please DM me.\\n#RVATogether #COVID19 https:\/\/t.co\/WOkHHT2z7c"]',
        Month: "March",
        "Dimension 1": 34.521927,
        "Dimension 2": 0.0004672248,
        Sentiment: 0.341666667,
        Subjectivity: 0.3,
        idx: 1839,
      },
      {
        RawTweet:
          "@erinallday From #CROI2020 today: \r\n\r\nExperts said we can't point to a symptom that distinguishes #COVID19 from #Influenza. Fever, cough, fatigue and achy muscles are the common symptoms of COVID19 AND influenza. But COVid19 is more deadly. #SARSCoV2 #coronavirus",
        Month: "March",
        "Dimension 1": -32.52955,
        "Dimension 2": -10.682371,
        Sentiment: 0.0,
        Subjectivity: 0.466666667,
        idx: 1840,
      },
      {
        RawTweet:
          "b\"RT @GrantWahl: TODAY'S THE DAY: Ep1 of my new podcast has my interview with USMNT's Tyler Adams on everything surrounding the German Bundes\\xe2\\x80\\xa6\"",
        Month: "May",
        "Dimension 1": 27.470123,
        "Dimension 2": 13.287508,
        Sentiment: 0.068181818,
        Subjectivity: 0.227272727,
        idx: 1841,
      },
      {
        RawTweet:
          '["So I\'ve started a little film appreciation class to help pass the time during this plague. Check it out, play along, do whatever...\\n#movies #plague #COVID19 #whynot @Heart_Vancouver @CommercialDLive \\n\\nhttps:\/\/t.co\/B6mBzQnF7w\\n\\nhttps:\/\/t.co\/ZJ40e7XHUu https:\/\/t.co\/tvuiUR6KUX"]',
        Month: "March",
        "Dimension 1": 13.329258,
        "Dimension 2": 2.6667852,
        Sentiment: -0.1875,
        Subjectivity: 0.5,
        idx: 1842,
      },
      {
        RawTweet:
          "10\/ A little personal d\u00e9j\u00e0 vu: I came to SF in \u201883 as @ucsf intern. I cared for many AIDS pts in ICU @ SF General. All my early studies (such as https:\/\/t.co\/X1K2wuxne0) were on ICU outcomes for AIDS pts. Accurate prognostication is crucial to guide patient &amp; clinician decisions.",
        Month: "April",
        "Dimension 1": 22.3327,
        "Dimension 2": 12.624483,
        Sentiment: 0.1078125,
        Subjectivity: 0.529166667,
        idx: 1843,
      },
      {
        RawTweet:
          '@Skepticscalpel Umm..that\'s called my "healthy-weight maintainance" strategy for the last 20yrs. Thought it was an established surgical trade secret? No?\ud83d\ude33',
        Month: "May",
        "Dimension 1": -24.321815,
        "Dimension 2": 22.1748,
        Sentiment: -0.2,
        Subjectivity: 0.383333333,
        idx: 1844,
      },
      {
        RawTweet:
          "There's no easy return. We must accept a sober truth. This pathogen has altered history and changed our world. But it caught us at a time when we have the public health tools, technology, and know how to defeat it quickly and vanquish it for good. We must stay on the battlefield.",
        Month: "March",
        "Dimension 1": -4.9822273,
        "Dimension 2": -19.073301,
        Sentiment: 0.183333333,
        Subjectivity: 0.44,
        idx: 1845,
      },
      {
        RawTweet:
          "['The #IndianAirForce leads from the front as ever, @IAF_MCC will be dispatching a #C17 Globemaster today to #Iran for evacuating Indians stranded in the country, which is torn apart by rampant spread of #COVID19\\n\\nC17 was also used for rescuing Indians from #China\\n\\n#CoronaVirus https:\/\/t.co\/hhEApTM6uT']",
        Month: "March",
        "Dimension 1": -25.152983,
        "Dimension 2": 9.6527,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1846,
      },
      {
        RawTweet:
          "b'RT @dssiraj: Science speaks! Avoid one case now and potentially avoid an epidemics @lia_tadesse @DrTsion @NoahETmoh @DrKindeya https:\/\/t.co\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -17.119076,
        "Dimension 2": -23.137936,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 1847,
      },
      {
        RawTweet:
          "@CalvinMccarter Check out the first and second paper in this thread. There are direct links to the papers with much more detailed information &amp; answer to your question.",
        Month: "March",
        "Dimension 1": 38.48078,
        "Dimension 2": 9.256864,
        Sentiment: 0.25,
        Subjectivity: 0.396666667,
        idx: 1848,
      },
      {
        RawTweet:
          "b'RT @bernardchangMD: A moving first hand account of #COVID19 experience on the ground by one of my favorite clinicians and humans: Jason Hil\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 46.597954,
        "Dimension 2": -11.4765415,
        Sentiment: 0.375,
        Subjectivity: 0.666666667,
        idx: 1849,
      },
      {
        RawTweet:
          "b'RT @AbiyAhmedAli: Thank you @DrTedros for the updates on #COVID19 and the work @WHO is doing globally to mitigate the spread. Our phone con\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 40.578003,
        "Dimension 2": -10.286867,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1850,
      },
      {
        RawTweet:
          "Keeping numbers low plus more testing. I will only speak for my family, but I would feel comfortable visiting older relatives if our household self-isolated for a few days and then we all tested negative. Particularly since numbers are low in my area. https:\/\/t.co\/WBHtbWOa2G",
        Month: "May",
        "Dimension 1": -33.76061,
        "Dimension 2": -6.738222,
        Sentiment: 0.081481481,
        Subjectivity: 0.451851852,
        idx: 1851,
      },
      {
        RawTweet:
          "b'RT @BillGates: There\\xe2\\x80\\x99s been some progress on more efficient testing methods, such as the self-swab developed by the Seattle Coronavirus Ass\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 18.710323,
        "Dimension 2": -5.19961,
        Sentiment: 0.2,
        Subjectivity: 0.433333333,
        idx: 1852,
      },
      {
        RawTweet:
          "Thank you, @GovNedLamont, for declaring public health emergency in the state of Connecticut. Getting the state prepared for the upcoming pandemic is the right move. We need more testing for #COVID19! #NedLamont #coronavirusemergency https:\/\/t.co\/K2dRHOewlO",
        Month: "March",
        "Dimension 1": 4.3687124,
        "Dimension 2": -0.36921352,
        Sentiment: 0.303571429,
        Subjectivity: 0.367460317,
        idx: 1853,
      },
      {
        RawTweet:
          "b'The coronavirus fight is being led by mayors -- with support from leaders like @BarackObama, who spoke to the most\\xe2\\x80\\xa6 https:\/\/t.co\/8TCSVrmC6s'",
        Month: "April",
        "Dimension 1": 13.460021,
        "Dimension 2": 15.937623,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1854,
      },
      {
        RawTweet:
          "Our @AEI tracker on mitigation actions announced by cities, with updates from today. For more details on these actions, or the latest updates, please visit our web site that tracks state and local #COVID19 mitigation actions https:\/\/t.co\/riria57ugj https:\/\/t.co\/gs5zwRqRaN",
        Month: "March",
        "Dimension 1": 20.45797,
        "Dimension 2": 16.063297,
        Sentiment: 0.333333333,
        Subjectivity: 0.466666667,
        idx: 1855,
      },
      {
        RawTweet:
          "b'RT @KevinBardosh: ID doc, COVID-19,Seattle:\\n\\n\"We haven\\'t had time to dev illness narrative on #COVID19...didn\\xe2\\x80\\x99t expect how hard...to care f\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -33.87509,
        "Dimension 2": -15.808243,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1856,
      },
      {
        RawTweet:
          "b'@CebuPacificAir operated almost 170 #cargo flights and carried 34 tons of humanitarian #aid amounting to P1.9 milli\\xe2\\x80\\xa6 https:\/\/t.co\/dY2jscIfLr'",
        Month: "May",
        "Dimension 1": -11.472148,
        "Dimension 2": 39.620358,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1857,
      },
      {
        RawTweet:
          "A fan of #ThePerfectPredator who is a #scientist who loves to crochet is sending me this.  A podophage!  #phage phans forever! https:\/\/t.co\/RflJE2ys3g",
        Month: "April",
        "Dimension 1": 37.848946,
        "Dimension 2": -3.622444,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1858,
      },
      {
        RawTweet:
          "['2 days to register for a discussion on supporting the immune system after @ian_nutrition presents 30 minutes of evidence-based exercise immunology research. \ud83e\udd13https:\/\/t.co\/AiaQnt1GZa #coronavirus #sportsnutrition #nutrition #COVID19 #ImmuneSystem Please RT https:\/\/t.co\/tXH4dnjYqN']",
        Month: "March",
        "Dimension 1": -3.5071182,
        "Dimension 2": 34.129143,
        Sentiment: 0.25,
        Subjectivity: 0.25,
        idx: 1859,
      },
      {
        RawTweet:
          'b"There\'s NO FRIGGIN WAY an honest &amp; intelligent person, who cares about America,  could look at 10 million unemploye\\xe2\\x80\\xa6 https:\/\/t.co\/72G2YdyW3u"',
        Month: "April",
        "Dimension 1": -44.921944,
        "Dimension 2": -9.462609,
        Sentiment: 0.7,
        Subjectivity: 0.9,
        idx: 1860,
      },
      {
        RawTweet:
          'b"RT @OnPointRadio: Today: As coronavirus cases continue to spread in the U.S., we\'ll take a look at the impact the epidemic is having on the\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": -6.017416,
        "Dimension 2": 4.894658,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1861,
      },
      {
        RawTweet:
          "[\"#COVID19\\nC hrist\\nO ver \\nV iruses and \\nI nfectious\\nD iseases. \\n\\nGod is bigger than this sickness. \\nGod is bigger than our fear. \\nWe will prevail, we will overcome because He is on our side. \ud83d\ude4f\ud83c\udffb So happy there's still #TheFeast live that's accessible at home. Have a blessed Sunday https:\/\/t.co\/gZjwYgfHPr\"]",
        Month: "March",
        "Dimension 1": 32.047184,
        "Dimension 2": -28.991587,
        Sentiment: 0.262272727,
        Subjectivity: 0.575,
        idx: 1862,
      },
      {
        RawTweet:
          "['Kudos to our front-line staff at our Retail outlets in Sangrur Sales Ares who make every effort to ensure that all your fuelling needs are met in these testing time. HPCL fight against the #Coronavirus @HpclChandigarh @MahenderSYadav1 @Rg03Goel @subodhbatra10 https:\/\/t.co\/E3WndoI7xf']",
        Month: "March",
        "Dimension 1": 33.69064,
        "Dimension 2": 4.3720593,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1863,
      },
      {
        RawTweet:
          "Asked whether a nationwide return to work by Easter is achievable, @NIH Dr. Anthony Fauci clarifies, \u201cyou need to evaluate the feasibility of what you want to do.\u201d He went on to importantly confirm the need for amplified testing, isolation, contact tracing and quarantine.",
        Month: "March",
        "Dimension 1": 11.074327,
        "Dimension 2": 0.4803628,
        Sentiment: 0.4,
        Subjectivity: 1.0,
        idx: 1864,
      },
      {
        RawTweet:
          "b\"My dad send me this!! \\xf0\\x9f\\x98\\x98\\xf0\\x9f\\x98\\x98 \\nI've no idea who this gentleman is, but I'm loving this \\xf0\\x9f\\x98\\x82\\xf0\\x9f\\x98\\x82\\xf0\\x9f\\x98\\x82@christymoore45 sound familiar\\xe2\\x80\\xa6 https:\/\/t.co\/O5N7ASJgAW\"",
        Month: "April",
        "Dimension 1": 22.895933,
        "Dimension 2": -28.449987,
        Sentiment: 0.5,
        Subjectivity: 0.675,
        idx: 1865,
      },
      {
        RawTweet:
          "b'RT @IBJIYONGI: To white Americans who think this won\\xe2\\x80\\x99t affect them: first they came for the first amendment rights of Black protestors, but\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": -15.239856,
        "Dimension 2": -15.563399,
        Sentiment: 0.083333333,
        Subjectivity: 0.275,
        idx: 1866,
      },
      {
        RawTweet:
          "BLOOD CLOTS:\r\n\r\nWe are seeing that COVID patients develop blood clots. What are these clots exactly? All healthy people constantly form and dissolve tiny clots throughout the body. When clots persist and travel to various organs, these organs don't get enough blood to stay healthy.",
        Month: "May",
        "Dimension 1": -30.840097,
        "Dimension 2": 14.460465,
        Sentiment: 0.178571429,
        Subjectivity: 0.44047619,
        idx: 1867,
      },
      {
        RawTweet:
          "@somebadideas @ScottGottliebMD Two things: 1) Production of antigen (we are ramping up with generous help from other labs at Sinai - e.g. @SesmaLab) and 2) the ability to transfer it locally to clinical labs. We have now provided detailed protocols for this for download here: https:\/\/t.co\/R0AFZPNuTc",
        Month: "March",
        "Dimension 1": 26.930855,
        "Dimension 2": 4.024824,
        Sentiment: 0.091666667,
        Subjectivity: 0.375,
        idx: 1868,
      },
      {
        RawTweet:
          "b'\\xe2\\x80\\x9cPremier John Horgan says even if there is a plan to get kids back in the classroom in May, June or even September,\\xe2\\x80\\xa6 https:\/\/t.co\/xzoNX9Za6x'",
        Month: "April",
        "Dimension 1": 32.591244,
        "Dimension 2": 25.853903,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1869,
      },
      {
        RawTweet:
          "b'We should not believe in who but in formally INDIA Must Take against China Communist Policy. We need to take a stan\\xe2\\x80\\xa6 https:\/\/t.co\/AxkSaxZJWg'",
        Month: "May",
        "Dimension 1": -18.397533,
        "Dimension 2": 9.549619,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1870,
      },
      {
        RawTweet:
          'b"We\'ve put together some #FAQs to deal with the questions you maybe asking about your #car #insurance during\\xe2\\x80\\xa6 https:\/\/t.co\/Cz8Wdoc5D3"',
        Month: "May",
        "Dimension 1": 12.457222,
        "Dimension 2": 7.910219,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1871,
      },
      {
        RawTweet:
          "b'Iranian Company Develops Nanofiber #Masks\\nAn Iranian company has developed a homegrown technology to produce a spec\\xe2\\x80\\xa6 https:\/\/t.co\/av96cf4gfi'",
        Month: "April",
        "Dimension 1": 17.784618,
        "Dimension 2": 0.9354021,
        Sentiment: 0.1,
        Subjectivity: 0.3,
        idx: 1872,
      },
      {
        RawTweet:
          "['Feel very proud to be part of public health teams working across the country around the clock on the #coronavirus pandemic. We all have a part to play in trying to #FlattenTheCurve and delay the impact of cases here. Stay informed, stay up to date and #WashYourHands !']",
        Month: "March",
        "Dimension 1": 31.089502,
        "Dimension 2": -18.698458,
        Sentiment: 0.5,
        Subjectivity: 0.533333333,
        idx: 1873,
      },
      {
        RawTweet:
          "Reflecting this National Public Health Week on the many mentors I was privileged to have who helped guide my early steps through our field. Who are some of your public health mentors? @NPHW @PublicHealth #NPHW",
        Month: "April",
        "Dimension 1": 33.626648,
        "Dimension 2": -2.2542956,
        Sentiment: 0.15,
        Subjectivity: 0.233333333,
        idx: 1874,
      },
      {
        RawTweet:
          'b"RT @AnaDreadful: No, it\'s not like the flu. Listen to the experts, learn how to interpret the data and protect yourself and your loved ones\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": 16.241446,
        "Dimension 2": -27.228813,
        Sentiment: 0.7,
        Subjectivity: 0.8,
        idx: 1875,
      },
      {
        RawTweet:
          "['Had to N95 it up today because I had to admit a patient who, despite being okay for the moment, needed an inhaler. Except there\u2019s a shortage of MDIs. So they got nebulizers, despite the ED physician ordering the MDIs. \ud83e\udd26\ud83c\udffe\\u200d\u2642\ufe0f #COVID19']",
        Month: "March",
        "Dimension 1": -30.220978,
        "Dimension 2": -6.8476605,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1876,
      },
      {
        RawTweet:
          "b'@bpcronin Which is why the plans coming from public health people have allowed for reopening but with increased tes\\xe2\\x80\\xa6 https:\/\/t.co\/00Wt304tCH'",
        Month: "April",
        "Dimension 1": 26.758385,
        "Dimension 2": -10.676,
        Sentiment: 0.0,
        Subjectivity: 0.066666667,
        idx: 1877,
      },
      {
        RawTweet:
          "b'Time to get groceries for my fiance and her family who are self isolating. My polish parents say lines like these r\\xe2\\x80\\xa6 https:\/\/t.co\/QJ9NKu5qEO'",
        Month: "April",
        "Dimension 1": 20.750153,
        "Dimension 2": 38.880653,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1878,
      },
      {
        RawTweet:
          "b'Quarantine tip: change your spot on the couch every day to equalize cushion fluffiness distribution. #COVID19 #SaturdayMood #InThisTogether'",
        Month: "May",
        "Dimension 1": 16.475592,
        "Dimension 2": 36.822407,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1879,
      },
      {
        RawTweet:
          "#COVID19 Indonesia \ud83c\uddee\ud83c\udde9 is the 4th most populous country in the world with ~260 million ppl, albeit spread over many many islands (\ud83c\uddee\ud83c\udde9 has&gt; 17,000 islands but about half dozen contain &gt;80% of population). It is UNLIKELY that these are the first cases. 1\/n https:\/\/t.co\/AsVVht3HtR",
        Month: "March",
        "Dimension 1": -20.97988,
        "Dimension 2": 42.163208,
        Sentiment: 0.180555556,
        Subjectivity: 0.416666667,
        idx: 1880,
      },
      {
        RawTweet:
          "In this @msnbc television interview with @maddow, I discuss how the information gleaned from #COVID19 antibody tests -- though valuable -- are not fully ready to be operationalized to give people ironclad guidance with https:\/\/t.co\/PCGSY6jLAt",
        Month: "May",
        "Dimension 1": -17.486637,
        "Dimension 2": -25.877577,
        Sentiment: 0.2,
        Subjectivity: 0.5,
        idx: 1881,
      },
      {
        RawTweet:
          "b'MT @HHSGov: Thank you to all the doctors &amp; healthcare professionals who work night &amp; day to care for those in need,\\xe2\\x80\\xa6 https:\/\/t.co\/ZKRseVW04O'",
        Month: "April",
        "Dimension 1": 47.805553,
        "Dimension 2": -13.048761,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1882,
      },
      {
        RawTweet:
          "b'RT @AC360: \\xe2\\x80\\x9cThe virus cannot infect you if the virus never meets you,\\xe2\\x80\\x9d says the Director of Global Health in Emergency Medicine at Columbia\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": -34.71542,
        "Dimension 2": -11.269704,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1883,
      },
      {
        RawTweet:
          "@EcoSexuality @Lawrence @FlyingWithSara @TheLastWord But it is droplet-borne. Air-borne can travel further distances. Droplets in the air about 2 yards or 2 meters.",
        Month: "March",
        "Dimension 1": -1.6302445,
        "Dimension 2": -32.872154,
        Sentiment: 0.0,
        Subjectivity: 0.5,
        idx: 1884,
      },
      {
        RawTweet:
          "b'Our #highered, state, and federal leaders must provide the necessary resources to support students during this time\\xe2\\x80\\xa6 https:\/\/t.co\/YmjYjZZTNM'",
        Month: "April",
        "Dimension 1": 15.168635,
        "Dimension 2": -18.744831,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 1885,
      },
      {
        RawTweet:
          "We very much appreciate \ud83c\uddf8\ud83c\udde6's pledge of \u20ac456M+ to the #COVID19 global response, strong leadership @g20org &amp; the group\u2019s collective commitment to keeping the world safe. Thank you Health Minister, Tawfiq bin Fawzan Al-Rabiah. #UnitedAgainstCoronavirus",
        Month: "May",
        "Dimension 1": 36.872246,
        "Dimension 2": -20.122358,
        Sentiment: 0.298333333,
        Subjectivity: 0.373333333,
        idx: 1886,
      },
      {
        RawTweet:
          "b'Serious question here, if Americans get a stimulus check with Trump\\xe2\\x80\\x99s name on it, can you cross it out? He\\xe2\\x80\\x99s not si\\xe2\\x80\\xa6 https:\/\/t.co\/khKpPeS94V'",
        Month: "April",
        "Dimension 1": -5.2695556,
        "Dimension 2": -15.678303,
        Sentiment: -0.166666667,
        Subjectivity: 0.333333333,
        idx: 1887,
      },
      {
        RawTweet:
          "['Hey @nyuniversity \\nDo you support the assertion of you prof @DrMarcSiegel that #coronavirus is like the flu?\\n#coronapocalypse #FakeNews #COVID19 https:\/\/t.co\/lbRaivYYRQ', 'Hey @nyuniversity \\nDo you support the assertion of you prof @DrMarcSiegel that #coronavirus is like the flu?\\n#coronapocalypse #FakeNews #COVID19 https:\/\/t.co\/lbRaivYYRQ']",
        Month: "March",
        "Dimension 1": 0.19015945,
        "Dimension 2": 4.4726133,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1888,
      },
      {
        RawTweet:
          "I think the steeple analogy is interesting and does fit with what I\u2019ve seen in my own patients. Outside of inpatient psychiatry patients who contracted the virus, all my inpatients have been fairly sick (or got sick quick in terms of supplemental oxygen escalation) https:\/\/t.co\/G4uOD4C7X4",
        Month: "April",
        "Dimension 1": -24.669405,
        "Dimension 2": 26.82009,
        Sentiment: 0.057823129,
        Subjectivity: 0.594897959,
        idx: 1889,
      },
      {
        RawTweet:
          'b"I think the government should give us 1800 hundred instead of 1200 hundred not because that\'s how much 300 boxes of\\xe2\\x80\\xa6 https:\/\/t.co\/nRLoWdDd0P"',
        Month: "April",
        "Dimension 1": -10.992242,
        "Dimension 2": 34.069042,
        Sentiment: 0.2,
        Subjectivity: 0.2,
        idx: 1890,
      },
      {
        RawTweet:
          "['The College has received a letter of support from our Patron, HRH The Prince of Wales, expressing his sympathy during this \"unprecedented period of difficulty, disruption and intense anxiety\" #covid19 https:\/\/t.co\/DGJz0FyGBy https:\/\/t.co\/9tSSMDhKXS']",
        Month: "March",
        "Dimension 1": 23.921896,
        "Dimension 2": -24.368563,
        Sentiment: 0.4,
        Subjectivity: 0.95,
        idx: 1891,
      },
      {
        RawTweet:
          'b"RT @DavidBegnaud: BREAKING: @LouisianaGov says, by comparison, Louisiana\'s growth rate of #COVID19 cases has been faster than any state or\\xe2\\x80\\xa6"',
        Month: "March",
        "Dimension 1": 14.505783,
        "Dimension 2": 25.40331,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1892,
      },
      {
        RawTweet:
          "b'The tension is already high, now imagine being stuck with a grumpy, annoying husband\/wife with no sense of humour??\\xe2\\x80\\xa6 https:\/\/t.co\/pqTFK4mv55'",
        Month: "April",
        "Dimension 1": -25.205275,
        "Dimension 2": -10.178327,
        Sentiment: -0.32,
        Subjectivity: 0.72,
        idx: 1893,
      },
      {
        RawTweet:
          "b'RT @V2019N: Q. Looking at the big picture, where are we, and where are we headed?\\n\\nA. I think the next two weeks are going to be very diffi\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 0.37735343,
        "Dimension 2": 41.91205,
        Sentiment: 0.066666667,
        Subjectivity: 0.133333333,
        idx: 1894,
      },
      {
        RawTweet:
          "['+++#BREAKING #CRITICAL #ITALY #CORONAVIRUS+++ \\nPrisoners held in revolt in Italian prisons due to suspension of parental visits for coronavirus.\\nEvasion attempt in progress at Palermo prison\\nhttps:\/\/t.co\/E4M8N6CkfZ', '+++#BREAKING #CRITICAL #ITALY #CORONAVIRUS+++ \\nPrisoners held in revolt in Italian prisons due to suspension of parental visits for coronavirus.\\nEvasion attempt in progress at Palermo prison\\nhttps:\/\/t.co\/E4M8N6CkfZ']",
        Month: "March",
        "Dimension 1": -31.859509,
        "Dimension 2": 17.443184,
        Sentiment: -0.041666667,
        Subjectivity: 0.391666667,
        idx: 1895,
      },
      {
        RawTweet:
          "['What were the key points from our virtual summit about #innovation to fight #coronavirus ? \\u2066@JimGreenwood\\u2069 shares. #COVID19  https:\/\/t.co\/dmWznY2WSw']",
        Month: "March",
        "Dimension 1": 6.2127194,
        "Dimension 2": 7.1759763,
        Sentiment: 0.0,
        Subjectivity: 1.0,
        idx: 1896,
      },
      {
        RawTweet:
          "b'Coronavirus live updates with @CNBC : Countries start to reopen as global cases near 3 million.\\n\\n#covid\\xe2\\x80\\xa6 https:\/\/t.co\/NmuemL9ChH'",
        Month: "April",
        "Dimension 1": -4.4302583,
        "Dimension 2": 30.205057,
        Sentiment: 0.078787879,
        Subjectivity: 0.3,
        idx: 1897,
      },
      {
        RawTweet:
          "b'A pandemic made-to-measure\\n\\nForced into leisure\\nas healthy countermeasure\\ncreates time treasure.\\n\\n#haiku #poem #COVID19 #Quarantine'",
        Month: "April",
        "Dimension 1": 3.3857262,
        "Dimension 2": -28.344603,
        Sentiment: 0.5,
        Subjectivity: 0.5,
        idx: 1898,
      },
      {
        RawTweet:
          "\"When takers talk about mistakes, they're usually quick to place the blame on other people. Givers are more likely to say 'Here's the mistake I made; I learned the following from it. Here are the steps I'm taking to make sure I don't let people down in the future.'\"\u2015@AdamMGrant",
        Month: "April",
        "Dimension 1": -5.27442,
        "Dimension 2": -26.647947,
        Sentiment: 0.131597222,
        Subjectivity: 0.472222222,
        idx: 1899,
      },
      {
        RawTweet:
          "b'Using information like population size and public transit, epidemiologists are running computer simulations to pred\\xe2\\x80\\xa6 https:\/\/t.co\/0bw5dlrywd'",
        Month: "April",
        "Dimension 1": 13.044074,
        "Dimension 2": -1.9535611,
        Sentiment: 0.0,
        Subjectivity: 0.066666667,
        idx: 1900,
      },
      {
        RawTweet:
          "['If everyone helps then, we can help everyone \\nVisit https:\/\/t.co\/DK6lVy4ovm\\n#muslimfoodbank #muslim #help #covid19 #jummahmubarak #coronavirus #family #tgif #stayhome #vancouverbc #dailyhive #islam #potd #qotd #together #faithinhumanity #service #support #sadaqa #ummrah #hajj #M https:\/\/t.co\/GKy2h9Hozd', 'If everyone helps then, we can help everyone \\nVisit https:\/\/t.co\/DK6lVy4ovm\\n#muslimfoodbank #muslim #help #covid19 #jummahmubarak #coronavirus #family #tgif #stayhome #vancouverbc #dailyhive #islam #potd #qotd #together #faithinhumanity #service #support #sadaqa #ummrah #hajj #M https:\/\/t.co\/GKy2h9Hozd']",
        Month: "March",
        "Dimension 1": 32.962143,
        "Dimension 2": 6.446851,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1901,
      },
      {
        RawTweet:
          "b'RT @Sci_Squirrel: Got a desktop humidifier a month ago to help with dry skin. Delighted to find out it might also be helping me fight off v\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -12.131609,
        "Dimension 2": 22.11709,
        Sentiment: 0.316666667,
        Subjectivity: 0.65,
        idx: 1902,
      },
      {
        RawTweet:
          "I nominate\r\n@BillGates &amp; @melindagates \r\n@Madonna \r\n@Hughcevans \r\n@momgerm \r\n@TalindaB \r\n@Schwarzenegger\r\n@CTurlington\r\nto join new @WHO challenge by sharing how they are staying #HealthyAtHome! Together, against #COVID19!",
        Month: "April",
        "Dimension 1": 24.268105,
        "Dimension 2": -1.3384173,
        Sentiment: 0.213068182,
        Subjectivity: 0.454545455,
        idx: 1903,
      },
      {
        RawTweet:
          "['There are opportunities in every situation ...\\n\\nBritish Airways  demonstrate how to bolster a brand through providing flexibility and confidence in uncertain times. \\n\\n#Coronavirus #COVID19 #flexibility #confidence  #britishairways https:\/\/t.co\/Kln22dmQiD']",
        Month: "March",
        "Dimension 1": 24.497591,
        "Dimension 2": -6.347112,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1904,
      },
      {
        RawTweet:
          "['+ The World Health Organization warns people: \u201cYou are not invincible.\u201d\\n\\nBondi: Hold my beer \ud83e\udd26\ud83c\udffc\\u200d\u2642\ufe0f. \\n\\nAbsolute stupidity and total disregard for the wellbeing of all.\\n#COVID19 #Bondi https:\/\/t.co\/HTltNLLQK3']",
        Month: "March",
        "Dimension 1": -31.03338,
        "Dimension 2": -11.023504,
        Sentiment: -0.3,
        Subjectivity: 0.875,
        idx: 1905,
      },
      {
        RawTweet:
          '"The authorities seem as worried about controlling information as they are about controlling the virus" -- following the Chinese example https:\/\/t.co\/G6CEg87dSy',
        Month: "March",
        "Dimension 1": -18.140192,
        "Dimension 2": 8.607122,
        Sentiment: 0.0,
        Subjectivity: 0.05,
        idx: 1906,
      },
      {
        RawTweet:
          'b"RT @MichelleM_Mello: A problem that will be with us long after COVID-19: sexual harassment &amp; gender bias in medicine. If you\'d like to be a\\xe2\\x80\\xa6"',
        Month: "April",
        "Dimension 1": -9.521571,
        "Dimension 2": -5.041102,
        Sentiment: 0.225,
        Subjectivity: 0.616666667,
        idx: 1907,
      },
      {
        RawTweet:
          'Let\'s dispel the notion that "novel coronavirus is just like the flu".  Sharing this striking comparison of #Flu, #COVID19, #SARS and #MERS made by @BioRender. \r\n\r\n#COVID19 is 30x more deadly and almost 2x more contagious than the flu. We have no existing immunity to COVID19. https:\/\/t.co\/fdJgsSFMnB',
        Month: "March",
        "Dimension 1": -17.22472,
        "Dimension 2": -0.8275959,
        Sentiment: 0.325,
        Subjectivity: 0.6,
        idx: 1908,
      },
      {
        RawTweet:
          "b'RT @chadloder: The police are out of control. They want to punish citizens for criticizing them, for filming them, for exposing their viole\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": -22.54133,
        "Dimension 2": -9.636542,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1909,
      },
      {
        RawTweet:
          "@iamjohnnyyu @Ucsf_Biochem This is not smart. Actions must happen now. Not later once it is clear that these events need to be cancelled. At @HarvardChanSPH we are beginning to make concerted efforts to make seminars online only via zoom, etc.",
        Month: "March",
        "Dimension 1": -8.205153,
        "Dimension 2": -22.316902,
        Sentiment: -0.001785714,
        Subjectivity: 0.506547619,
        idx: 1910,
      },
      {
        RawTweet:
          "@PassionPoet Thanks. I can already tell from my email this week will be rough... so the encouragement goes a long way. https:\/\/t.co\/DuBGtb7WwJ https:\/\/t.co\/3GLWLuBFVu",
        Month: "May",
        "Dimension 1": -12.031848,
        "Dimension 2": 4.057946,
        Sentiment: 0.016666667,
        Subjectivity: 0.333333333,
        idx: 1911,
      },
      {
        RawTweet:
          "Thank you \ud83c\udde8\ud83c\udde6 Prime Minister, @JustinTrudeau for such a nice birthday message! Indeed, since its foundation, @WHO has focused on serving the world and delivering #HealthForAll. We are proud to partner with #Canada in fighting #COVID19 and creating a healthier, safer \ud83c\udf0d.",
        Month: "April",
        "Dimension 1": 41.859123,
        "Dimension 2": -18.287468,
        Sentiment: 0.516666667,
        Subjectivity: 0.833333333,
        idx: 1912,
      },
      {
        RawTweet:
          "@KrutikaKuppalli For the key lab personnel only. I understand Pubhealth messaging that wearing masks won\u2019t protect you. But might protect others FROM you if you are contagious but mildly or sub clinically symptomatic. Also, I made an interesting observation today -",
        Month: "March",
        "Dimension 1": -11.101587,
        "Dimension 2": -31.23594,
        Sentiment: 0.208333333,
        Subjectivity: 0.75,
        idx: 1913,
      },
      {
        RawTweet:
          "To those saying short-term strategies will result in 2nd peak, the goal is to buy time- for health staff to have PPE &amp; testing available, for beds &amp; equipment, for rapid diagnostic (to test given asymptomatic transmission), for vaccine (8 being pursued by CEPI) or an antiviral.",
        Month: "March",
        "Dimension 1": -10.97952,
        "Dimension 2": -25.293303,
        Sentiment: 0.2,
        Subjectivity: 0.2,
        idx: 1914,
      },
      {
        RawTweet:
          "b'Corky added by her daughter to the Coronavirus Lost Loved Ones map \"She was happiest in the kitchen and her garden.\\xe2\\x80\\xa6 https:\/\/t.co\/2F6Zsqku6V'",
        Month: "May",
        "Dimension 1": 34.37685,
        "Dimension 2": 18.588839,
        Sentiment: 0.7,
        Subjectivity: 0.8,
        idx: 1915,
      },
      {
        RawTweet:
          "b'RT @kakape: A lot of attention has been focused on studies using chloroquine and other drugs to treat #covid19 patients. But there are also\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 25.38386,
        "Dimension 2": 4.582584,
        Sentiment: -0.125,
        Subjectivity: 0.375,
        idx: 1916,
      },
      {
        RawTweet:
          "ARE THERE OTHER WAYS TO DETECT ACTIVE COVID?\r\n\r\nYup! There are molecular assays, protein tests, and point-of-care tests all under development right now. \r\n\r\nThere\u2019s even a FDA approved home test.\r\n\r\nAnd CT scans can help diagnose COVID, but it\u2019s not as sensitive or practical as others.",
        Month: "May",
        "Dimension 1": -18.549425,
        "Dimension 2": -29.122618,
        Sentiment: 0.023511905,
        Subjectivity: 0.602678571,
        idx: 1917,
      },
      {
        RawTweet:
          "b'@WHO boss is a coward taking shield of his race for his in competency &amp; he is slave of #china in action de3d intent\\xe2\\x80\\xa6 https:\/\/t.co\/5WQhM8NGSG'",
        Month: "April",
        "Dimension 1": -18.486994,
        "Dimension 2": 7.283472,
        Sentiment: 0.1,
        Subjectivity: 0.1,
        idx: 1918,
      },
      {
        RawTweet:
          "Be prepared for a long week. The Lancet has published a rebuttal to Trump\r\nh\/t @alexandraphelan https:\/\/t.co\/nDnaBTWGtQ",
        Month: "May",
        "Dimension 1": 7.1304994,
        "Dimension 2": 28.192322,
        Sentiment: -0.05,
        Subjectivity: 0.4,
        idx: 1919,
      },
      {
        RawTweet:
          "[\"Here's a fun fact out of #NewJersey The Murphy administration is NOT bidding on ventilators.  The expect #Washington to give them everything.  They're saying they need a specific type which is a lie.  Remember this fact next week when we need them.  \\n\\n#PhilMurphy #Coronavirus\"]",
        Month: "March",
        "Dimension 1": -40.57697,
        "Dimension 2": -7.153066,
        Sentiment: 0.1,
        Subjectivity: 0.108333333,
        idx: 1920,
      },
      {
        RawTweet:
          "THREAD: Our path to safety rests on massive support for our healthcare system to care for sick, and forceful steps by local leaders to break chains of transmission and quell epidemic spread. If we\u2019re smart and aggressive across nation, cases nationally could peak by late April.",
        Month: "March",
        "Dimension 1": 24.386583,
        "Dimension 2": -13.40738,
        Sentiment: -0.16,
        Subjectivity: 0.62,
        idx: 1921,
      },
      {
        RawTweet:
          "When does the administration realize that the primary focus on the economic implications at the expense of a robust public health response is itself the greatest threat to the economy???\r\n\r\n#COVID\u30fc19 https:\/\/t.co\/jlDUuqd283",
        Month: "March",
        "Dimension 1": -8.52228,
        "Dimension 2": -10.602516,
        Sentiment: 0.4,
        Subjectivity: 0.441666667,
        idx: 1922,
      },
      {
        RawTweet:
          "b'RT @tmprowell: Tweet 1\/2\\xe2\\x9d\\x97\\xef\\xb8\\x8f\\n\\nFDA Guidance on Conduct of #ClinicalTrials of Med Products during #COVID19 Pandemic for Industry, Investigators\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 19.903002,
        "Dimension 2": 6.995139,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1923,
      },
      {
        RawTweet:
          "b'Checkout #COVID\\xe3\\x83\\xbc19 tracked: the latest figures as the #coronavirus pandemic spreads\\xf0\\x9f\\xa6\\xa0\\xf0\\x9f\\xa5\\x8a Free to read | Financial Times https:\/\/t.co\/NV6Ao0kaEK'",
        Month: "April",
        "Dimension 1": 9.189682,
        "Dimension 2": 4.51551,
        Sentiment: 0.3,
        Subjectivity: 0.566666667,
        idx: 1924,
      },
      {
        RawTweet:
          "b'@NancyRGough Wow! Thank you so much for writing this piece, @NancyRGough \\xf0\\x9f\\x99\\x8f\\xf0\\x9f\\x8f\\xbd Sorry I missed it till now.'",
        Month: "March",
        "Dimension 1": 23.364197,
        "Dimension 2": -26.751114,
        Sentiment: -0.058333333,
        Subjectivity: 0.733333333,
        idx: 1925,
      },
      {
        RawTweet:
          "While WHO takes the heat, World Bank slips under the radar. Totally missing in action in #COVID19 response. And Bank is as influential as the WHO (if not more) in the health sector in most countries. And they're supposed to move large $$.",
        Month: "March",
        "Dimension 1": -19.618914,
        "Dimension 2": 14.32592,
        Sentiment: 0.072857143,
        Subjectivity: 0.315714286,
        idx: 1926,
      },
      {
        RawTweet:
          "While #COVID19 accelerates very fast, it decelerates much more slowly. This is especially concerning for countries with large poor populations, where #StayAtHome orders &amp; other restrictions used in some high-income countries may not be practical.",
        Month: "April",
        "Dimension 1": -15.351792,
        "Dimension 2": -21.046215,
        Sentiment: 0.021326531,
        Subjectivity: 0.583367347,
        idx: 1927,
      },
      {
        RawTweet:
          "5\/ post 9\/11 \u201cthe more officials tried to reassure the public, the more the public was distrustful. The trauma of the terrorist events and the displacement from their housing, work, and schools exacerbated their anxiety and made them even more dubious about gov assurances\u201d (2003)",
        Month: "April",
        "Dimension 1": -23.542885,
        "Dimension 2": -12.980192,
        Sentiment: 0.3,
        Subjectivity: 0.326666667,
        idx: 1928,
      },
      {
        RawTweet:
          "@DonCheadle Medical-grade masks &amp; N95 masks must be reserved for healthcare workers who sustain high-level and repeated exposures to infected patients. They don't have the option or luxury to social distance like everyone else.",
        Month: "April",
        "Dimension 1": -31.49258,
        "Dimension 2": 13.238102,
        Sentiment: 0.033333333,
        Subjectivity: 0.066666667,
        idx: 1929,
      },
      {
        RawTweet:
          "['A diploma course with #coronavirus study offered in UP\u2019s Chaudhary Charan Singh University\\n\\nhttps:\/\/t.co\/HdNtoQ84Cg', 'A diploma course with #coronavirus study offered in UP\u2019s Chaudhary Charan Singh University\\n\\nhttps:\/\/t.co\/HdNtoQ84Cg']",
        Month: "March",
        "Dimension 1": 4.3672347,
        "Dimension 2": 5.262548,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1930,
      },
      {
        RawTweet:
          "b'That Moment When Someone Asks You \\xe2\\x80\\x9cDid You Have A Good Day Today?\\xe2\\x80\\x9d And I Reply \\xe2\\x80\\x9cWhats A Good Day These Days?\\xe2\\x80\\x9d \\xf0\\x9f\\x98\\xa9#coronavirus'",
        Month: "March",
        "Dimension 1": 42.175648,
        "Dimension 2": -5.340544,
        Sentiment: 0.7,
        Subjectivity: 0.6,
        idx: 1931,
      },
      {
        RawTweet:
          "Today's #shoutout to #womenInSTEM goes to Katherine Bond for her commentary w\/ Paul Newton et al @LancetGH on #COVID19 and risks to the supply &amp; quality of tests, drugs &amp; #vaccines. https:\/\/t.co\/wRSjD2xy7N",
        Month: "April",
        "Dimension 1": 16.794693,
        "Dimension 2": 10.314085,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1932,
      },
      {
        RawTweet:
          "b'My @NSF grant collaborators at @KQEDscience created a new #DeepLook video about #COVID19 and how it attacks the lun\\xe2\\x80\\xa6 https:\/\/t.co\/VHMXyTXh3t'",
        Month: "May",
        "Dimension 1": 8.682253,
        "Dimension 2": 9.080835,
        Sentiment: 0.136363636,
        Subjectivity: 0.454545455,
        idx: 1933,
      },
      {
        RawTweet:
          "['#WellnessWednesday There is no evidence your pet can get sick from #COVID19, or the #coronavirus, and no more of a risk of spreading it than inanimate objects such as door handles. It is recommended that pet owners stick to the basics: good hygiene: https:\/\/t.co\/ODJt4a7Txv https:\/\/t.co\/Mijasn4xvn']",
        Month: "March",
        "Dimension 1": -15.610784,
        "Dimension 2": -38.675613,
        Sentiment: -0.066071429,
        Subjectivity: 0.614285714,
        idx: 1934,
      },
      {
        RawTweet:
          "b'If #China isn\\xe2\\x80\\x99t hated enough right now for infecting the world with #Coronavirus, they continue with their animal c\\xe2\\x80\\xa6 https:\/\/t.co\/KampBZelik'",
        Month: "April",
        "Dimension 1": -21.102083,
        "Dimension 2": 7.7710233,
        Sentiment: -0.204761905,
        Subjectivity: 0.578571429,
        idx: 1935,
      },
      {
        RawTweet:
          "b'Can\\xe2\\x80\\x99t wait to cover my body in cheese burgers, nuggets and fries from maccies and lick them off myself after it reo\\xe2\\x80\\xa6 https:\/\/t.co\/mzMy8dbBM1'",
        Month: "April",
        "Dimension 1": -7.72971,
        "Dimension 2": 12.446945,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1936,
      },
      {
        RawTweet:
          "b'RT @T_Inglesby: If social distancing had not been used in those countries, data suggests that exponential growth would have continued w\/ hu\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 15.154498,
        "Dimension 2": 24.134018,
        Sentiment: 0.033333333,
        Subjectivity: 0.066666667,
        idx: 1937,
      },
      {
        RawTweet:
          "['A small solice for spring athletes who are losing their opportunity to play in 2020. For some, this will be a bonus... https:\/\/t.co\/n5n8YIQey7 #NCAA #coronavirus']",
        Month: "March",
        "Dimension 1": -9.422114,
        "Dimension 2": 25.20249,
        Sentiment: -0.25,
        Subjectivity: 0.4,
        idx: 1938,
      },
      {
        RawTweet:
          "b'Ok, now I understand why people believe that this virus may have surfaced in the US late last year. Undiagnosed. Th\\xe2\\x80\\xa6 https:\/\/t.co\/6ECtA1fDAp'",
        Month: "April",
        "Dimension 1": -8.353513,
        "Dimension 2": 26.542032,
        Sentiment: 0.066666667,
        Subjectivity: 0.388888889,
        idx: 1939,
      },
      {
        RawTweet:
          "b'RT @MikeBloomberg: The @WHO is a global force for good. If we want to get through this together, we have to work together. \\n\\nThank you @DrT\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 15.595628,
        "Dimension 2": -17.603336,
        Sentiment: 0.35,
        Subjectivity: 0.3,
        idx: 1940,
      },
      {
        RawTweet:
          "['Terrific work! U of MN medical students take on childcare and household management for other medical professionals \\u2066@MNcovidsitters\\u2069 \\u2066@IowaMed\\u2069 #COVID19 https:\/\/t.co\/XnF7OrWUwG']",
        Month: "March",
        "Dimension 1": 25.910473,
        "Dimension 2": 7.908911,
        Sentiment: -0.03125,
        Subjectivity: 0.34375,
        idx: 1941,
      },
      {
        RawTweet:
          '["@JanGardnerExec @CalvinBallTeam I urge you to empty your county detention center due to #COVID19. Given ICE\'s pattern of medical neglect &amp; the spread of the virus to Worcester County Detention Center, all people must be released for the sake of those detained &amp; public health"]',
        Month: "March",
        "Dimension 1": -25.726881,
        "Dimension 2": 2.6058285,
        Sentiment: -0.070833333,
        Subjectivity: 0.190277778,
        idx: 1942,
      },
      {
        RawTweet:
          "['Introverts really be living their best life right now. No conversations with strangers, no people in your personal space, contact free delivery and absolutely no touching \ud83d\ude02\ud83d\ude02\\n#COVID19 #introvert']",
        Month: "March",
        "Dimension 1": -7.2198687,
        "Dimension 2": -39.507847,
        Sentiment: 0.272619048,
        Subjectivity: 0.439285714,
        idx: 1943,
      },
      {
        RawTweet:
          "The antiviral Remdesivir from Gilead is one. Used early in disease it may have robust enough treatment effect to impact outcomes. Other strategies are monoclonal antibodies that target virus directly. They can be used as treatment or prophylaxis - a bridge until we get vaccine.",
        Month: "April",
        "Dimension 1": -1.6692367,
        "Dimension 2": 0.7890992,
        Sentiment: 0.01875,
        Subjectivity: 0.39375,
        idx: 1944,
      },
      {
        RawTweet:
          "Sad milestone. 100,000 deaths before the end of the month - as I calculated for testimony in the House May 6. https:\/\/t.co\/cxxsaF6zTj https:\/\/t.co\/nN8RRDS5kX https:\/\/t.co\/tZmgKomgkS",
        Month: "May",
        "Dimension 1": -11.099021,
        "Dimension 2": 43.064526,
        Sentiment: -0.5,
        Subjectivity: 1.0,
        idx: 1945,
      },
      {
        RawTweet:
          "b'Guyana may soon find itself in a similar situation to Venezuela \\xe2\\x80\\x94 a target of economic sanctions, with a government\\xe2\\x80\\xa6 https:\/\/t.co\/3IdmEzqOZp'",
        Month: "April",
        "Dimension 1": 8.12824,
        "Dimension 2": -13.808782,
        Sentiment: 0.1,
        Subjectivity: 0.3,
        idx: 1946,
      },
      {
        RawTweet:
          "['Washington State continues to transport inmates, even though there are no known cases among the population. Putting thousands at risk by being exposed to different staff @realDonaldTrump @washingtonpost @GovInslee @JayInslee #CoronavirusPandemic #coronavirus #CNN #Covid_19']",
        Month: "March",
        "Dimension 1": -26.72996,
        "Dimension 2": 15.554697,
        Sentiment: 0.0,
        Subjectivity: 0.6,
        idx: 1947,
      },
      {
        RawTweet:
          "b'RT @SquawkCNBC: \\xe2\\x80\\x9cWhat you really want \\xe2\\x80\\xa6 is a massive sentinel, surveillance system where you can be testing people randomly in the backgrou\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 9.497753,
        "Dimension 2": -12.077988,
        Sentiment: -0.1,
        Subjectivity: 0.566666667,
        idx: 1948,
      },
      {
        RawTweet:
          "b'RT @samswey: 1 in every 8 officers who shoots someone has shot someone before. Simply removing these officers from the force as a matter of\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": -34.64143,
        "Dimension 2": 24.48201,
        Sentiment: 0.0,
        Subjectivity: 0.357142857,
        idx: 1949,
      },
      {
        RawTweet:
          "New #coronavirus stable for hours on surfaces. #SARSCoV2 #COVID19 (I shared this preprint a few wks ago but now it is published @NEJM). \r\n https:\/\/t.co\/CRpjjuGzhU",
        Month: "March",
        "Dimension 1": 8.488444,
        "Dimension 2": 32.121223,
        Sentiment: -0.031818182,
        Subjectivity: 0.277272727,
        idx: 1950,
      },
      {
        RawTweet:
          "I'm the guy who tells you to read @aaronecarroll \r\n\r\nAnd today, like other days, is not different. Read Aaron.\r\n\r\nAnd understand that the failure of leadership in the federal government has made life much harder for all of us. \r\n\r\nWe can rise to the challenge. But we must work together https:\/\/t.co\/tA8mYT4Fyd",
        Month: "March",
        "Dimension 1": -12.740623,
        "Dimension 2": -10.434233,
        Sentiment: -0.135416667,
        Subjectivity: 0.31875,
        idx: 1951,
      },
      {
        RawTweet:
          "As an #epidemiologist who has been supported w\/ taxpayer $ all my career, I feel obligated to do my part to educate the public about #COVID19.  \r\n\r\nBut I gotta say, @Twitter is a cakewalk compared to Q&amp;A @Nextdoor.  Not gonna stop; just sayin'. https:\/\/t.co\/ed1Iw0xlre",
        Month: "April",
        "Dimension 1": 35.991714,
        "Dimension 2": -2.0078726,
        Sentiment: 0.0,
        Subjectivity: 0.066666667,
        idx: 1952,
      },
      {
        RawTweet:
          "['Just a rare picture of National Income, the government and the masses\\nThe interpretation depend on yourself\\n#CoronaVirusUpdate #ReturnMercyEkesMoney #COVID19 #AgriChallenge https:\/\/t.co\/oVlqwDZs3K']",
        Month: "March",
        "Dimension 1": -17.911045,
        "Dimension 2": 3.5106034,
        Sentiment: 0.3,
        Subjectivity: 0.9,
        idx: 1953,
      },
      {
        RawTweet:
          "In times of challenge for health, marginalized communities can be uniquely vulnerable. Good to be part of this effort to help ensure our response to #COVID19 maintains an equity focus. @BUSPH @BU_Tweets @PublicHealth @HealthyBoston @MassDPH https:\/\/t.co\/hhBTIvt2wy",
        Month: "March",
        "Dimension 1": 20.922386,
        "Dimension 2": -18.012978,
        Sentiment: 0.1,
        Subjectivity: 0.55,
        idx: 1954,
      },
      {
        RawTweet:
          "b'@PSCofCanada #CIO teams had great wins this week for our org. We deployed 900+ people to O365 thanks to collaborati\\xe2\\x80\\xa6 https:\/\/t.co\/ChrpXuB2Wf'",
        Month: "May",
        "Dimension 1": 13.395044,
        "Dimension 2": 31.767958,
        Sentiment: 0.433333333,
        Subjectivity: 0.383333333,
        idx: 1955,
      },
      {
        RawTweet:
          "b'@tomyoung79 Clue is in the name: Scientific Pandemic Influenza Modelling group (SPI-M) which feeds into SAGE.'",
        Month: "May",
        "Dimension 1": 13.040593,
        "Dimension 2": 4.915069,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1956,
      },
      {
        RawTweet:
          "b'RT @PostOpinions: I\\xe2\\x80\\x99ve never seen so much sense of purpose. So much honor to do this job, writes @Craig_A_Spencer.\\n\\n\"We didn\\xe2\\x80\\x99t sign up for\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 22.912268,
        "Dimension 2": -27.927156,
        Sentiment: 0.2,
        Subjectivity: 0.2,
        idx: 1957,
      },
      {
        RawTweet:
          "@Microbedoc2 @TheMedicJournal i find this quite perplexing tbh. we are all in this together. i understand people may fear but there is a strong support structure in many places especially now. and all infectious diseases folks are available to provide immediate assistance if needed.",
        Month: "April",
        "Dimension 1": 31.391148,
        "Dimension 2": -5.4672117,
        Sentiment: 0.333333333,
        Subjectivity: 0.658333333,
        idx: 1958,
      },
      {
        RawTweet:
          "b'RT @laxswamy: We\\xe2\\x80\\x99re showing up in force, in New York, in Boston, everywhere. We\\xe2\\x80\\x99re showing up because this is what we were born for, especi\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 39.132874,
        "Dimension 2": 13.814525,
        Sentiment: 0.136363636,
        Subjectivity: 0.454545455,
        idx: 1959,
      },
      {
        RawTweet:
          "['Is the Corona Virus getting you down? Why not get a shirt that will make you laugh, even during a pandemic? Come check out this \"I Will Survive Tee Shirt at https:\/\/t.co\/WHct4Z3moC #CoronavirusPandemic #CoronaOutbreak #CoronavirusOutbreak #coronavirusmemes']",
        Month: "March",
        "Dimension 1": 0.2554827,
        "Dimension 2": 0.7808343,
        Sentiment: 0.072222222,
        Subjectivity: 0.194444444,
        idx: 1960,
      },
      {
        RawTweet:
          "b'RT @EPIDEMICpodcast: Disability rights activist, Rebecca Cokely: \"Home &amp; community care workers are not included as essential staff [in man\\xe2\\x80\\xa6'",
        Month: "May",
        "Dimension 1": -34.69575,
        "Dimension 2": -14.144289,
        Sentiment: 0.0,
        Subjectivity: 0.3,
        idx: 1961,
      },
      {
        RawTweet:
          "['#Coronavirus: Health minister Nadine Dorries tests positive https:\/\/t.co\/zaF5P4Npnf Ms Dorries, the first MP to test positive, said she had taken all the advised precautions after finding out and has been self-isolating at home. #UK https:\/\/t.co\/7hQIqH6zbG', '#Coronavirus: Health minister Nadine Dorries tests positive https:\/\/t.co\/zaF5P4Npnf Ms Dorries, the first MP to test positive, said she had taken all the advised precautions after finding out and has been self-isolating at home. #UK https:\/\/t.co\/7hQIqH6zbG']",
        Month: "March",
        "Dimension 1": 3.3189893,
        "Dimension 2": 20.018938,
        Sentiment: 0.234848485,
        Subjectivity: 0.474747475,
        idx: 1962,
      },
      {
        RawTweet:
          "\u201cBy Monday, two big commercial diagnostic labs.. \u2014 LabCorp and Quest Diagnostics Inc. \u2014 will be doing coronavirus testing.\u201d https:\/\/t.co\/vyj4fu6RF3",
        Month: "March",
        "Dimension 1": -0.80735505,
        "Dimension 2": 27.409166,
        Sentiment: 0.0,
        Subjectivity: 0.05,
        idx: 1963,
      },
      {
        RawTweet:
          "b'South Koreans are heading to the polls despite the threat of the #coronavirus pandemic. \\n\\nThey\\xe2\\x80\\x99re voting for 300 me\\xe2\\x80\\xa6 https:\/\/t.co\/uKSCFKAZ3d'",
        Month: "April",
        "Dimension 1": 2.9919019,
        "Dimension 2": 17.186628,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1964,
      },
      {
        RawTweet:
          '["NJBIA President &amp; CEO Michele Siekerka on how we\'re helping your business through these unprecedented times. #coronavirus #covid19 #resources #nj #business https:\/\/t.co\/cSUKe1yge0"]',
        Month: "March",
        "Dimension 1": 14.478973,
        "Dimension 2": 16.753801,
        Sentiment: 0.6,
        Subjectivity: 0.9,
        idx: 1965,
      },
      {
        RawTweet:
          "['@charliekirk11 @DonaldJTrumpJr @seanhannity so we went from \u201cmiraculously disappear\u201d to \u201cpews packed by Easter\u201d to \u201cbetween 100K and 200K deaths we all together have done a very good job...\u201d. Fellas, show that you actually possess testicles and admit you were WRONG!! #COVID19', '@charliekirk11 @DonaldJTrumpJr @seanhannity so we went from \u201cmiraculously disappear\u201d to \u201cpews packed by Easter\u201d to \u201cbetween 100K and 200K deaths we all together have done a very good job...\u201d. Fellas, show that you actually possess testicles and admit you were WRONG!! #COVID19']",
        Month: "March",
        "Dimension 1": -4.4361415,
        "Dimension 2": 19.74087,
        Sentiment: 0.042916667,
        Subjectivity: 0.593333333,
        idx: 1966,
      },
      {
        RawTweet:
          "b'Need PPE? NOSA has partnered with global PPE distributor SMD technologies to bring it straight to you. Email kyara@\\xe2\\x80\\xa6 https:\/\/t.co\/wmUiH7eHcD'",
        Month: "May",
        "Dimension 1": 37.32038,
        "Dimension 2": 6.3843904,
        Sentiment: 0.1,
        Subjectivity: 0.2,
        idx: 1967,
      },
      {
        RawTweet:
          "Honored to do this interview with @RedMDND @MackenzieCookMD \r\nGreat to see podcasts highlighting the humanistic ethos of surgery\ud83d\ude0a #medtwitter https:\/\/t.co\/ndcQE3yKL9",
        Month: "April",
        "Dimension 1": 38.383984,
        "Dimension 2": -10.46131,
        Sentiment: 0.8,
        Subjectivity: 0.75,
        idx: 1968,
      },
      {
        RawTweet:
          "b'The Alberta government is standing by its comments that a #pandemic is a great time to build a #pipeline because pe\\xe2\\x80\\xa6 https:\/\/t.co\/SLaPF3jLAF'",
        Month: "May",
        "Dimension 1": 2.3712568,
        "Dimension 2": -6.5967145,
        Sentiment: 0.8,
        Subjectivity: 0.75,
        idx: 1969,
      },
      {
        RawTweet:
          "['Reviewing Job Applicants \u2013 Look for these Warning Signs - https:\/\/t.co\/OdSUDz0c2A #PMP #PPM #projectmanagement #Agile #cybersecurity #planning #ai #machinelearning #technology #howto #coronavirus #pandemic https:\/\/t.co\/b5ScB50HNC']",
        Month: "March",
        "Dimension 1": 5.6729584,
        "Dimension 2": 7.7826934,
        Sentiment: 0.5,
        Subjectivity: 0.75,
        idx: 1970,
      },
      {
        RawTweet:
          "['The first patient in the US with #coronavirus is charted below. Three notable findings:\\n\\n1. Cough was the first symptom not fever. In fact he had a fever only after he was hospitalized. If common, this makes spread easier as the temperature screening...\"  https:\/\/t.co\/ymWZbwFRms']",
        Month: "March",
        "Dimension 1": 2.2129655,
        "Dimension 2": 21.137157,
        Sentiment: 0.14,
        Subjectivity: 0.533333333,
        idx: 1971,
      },
      {
        RawTweet:
          "b'RT @NickGavinMD: What homeless patients need most now: Coronavirus is a special threat to especially destitute New Yorkers \\xe2\\x81\\xa6@ColumbiaEM\\xe2\\x81\\xa9 \\xe2\\x81\\xa6@\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": -15.914696,
        "Dimension 2": -4.476406,
        Sentiment: 0.248376623,
        Subjectivity: 0.631493506,
        idx: 1972,
      },
      {
        RawTweet:
          "I will be doing a Facebook Live (I think that's what the kids are calling it these days) \r\n\r\nToday at 11 AM EST hosted by @Elana_Gordon. \r\n\r\nSend in questions or just tune in. \r\n\r\nDiscussing hospital capacity as COVID19 infections grow across America https:\/\/t.co\/5FSFG4DAmo",
        Month: "March",
        "Dimension 1": 9.815873,
        "Dimension 2": 38.601616,
        Sentiment: 0.136363636,
        Subjectivity: 0.5,
        idx: 1973,
      },
      {
        RawTweet:
          '["Make no mistake, Tory austerity has not only weakened, if not ruined most social services but it has also weakened the British people\'s health. This may mean more needless deaths b\/c of the #coronavirus"]',
        Month: "March",
        "Dimension 1": -20.848093,
        "Dimension 2": -12.913081,
        Sentiment: 0.031547619,
        Subjectivity: 0.536309524,
        idx: 1974,
      },
      {
        RawTweet:
          "b'Catholic Health Services experiments with a new #AI algorithm to help ease the burden on ER physicians amidst\\xe2\\x80\\xa6 https:\/\/t.co\/0PgY19xQ0I'",
        Month: "April",
        "Dimension 1": 22.723724,
        "Dimension 2": 3.5372422,
        Sentiment: 0.068181818,
        Subjectivity: 0.277272727,
        idx: 1975,
      },
      {
        RawTweet:
          "b'RT @EldredgeATL: @Craig_A_Spencer Thanks for appearing on CNN tonight to educate and dispel fears about Coronavirus. It was an informative\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 7.961961,
        "Dimension 2": 11.802726,
        Sentiment: 0.2,
        Subjectivity: 0.2,
        idx: 1976,
      },
      {
        RawTweet:
          "b'RT @GlobalHealthTom: \"Scientists need to be ethical, ethicists need to be scientific, and communicators need to be both\" Matt Hepburn @USAr\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 19.881977,
        "Dimension 2": -19.913511,
        Sentiment: 0.2,
        Subjectivity: 0.6,
        idx: 1977,
      },
      {
        RawTweet:
          "This is a bad idea. The CDC has literally posted two #covid19 outbreak investigations linked to singing\/choirs\u2014 one of them literally *in a church* in Arkansas\u2014 and they are removing guidance on this? \r\n\r\nhttps:\/\/t.co\/YvjbtYi9Qs https:\/\/t.co\/FQqpaCODFk",
        Month: "May",
        "Dimension 1": -29.013145,
        "Dimension 2": -4.247237,
        Sentiment: -0.7,
        Subjectivity: 0.666666667,
        idx: 1978,
      },
      {
        RawTweet:
          "b'Thanks @CovidTechHelp connecting tech support during the #coronavirus crisis\\xc2\\x9f\\xc2\\x91\\xc2\\x8f\\nRT and help get tech support to tho\\xe2\\x80\\xa6 https:\/\/t.co\/vPURCxdVob'",
        Month: "May",
        "Dimension 1": 8.005945,
        "Dimension 2": 6.7760053,
        Sentiment: 0.2,
        Subjectivity: 0.2,
        idx: 1979,
      },
      {
        RawTweet:
          "b'As Boss Mustapha prefer to patronize Madagascar over our Nigerian made #coronavirus herbal cure\\nMade by professor M\\xe2\\x80\\xa6 https:\/\/t.co\/nZkK2tmFHZ'",
        Month: "May",
        "Dimension 1": 3.9755278,
        "Dimension 2": -4.2784286,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1980,
      },
      {
        RawTweet:
          "['Wondering how you can help stop the spread of #COVID19 and directly support response efforts? Donate here to help the @WHO @DrTedros fight this pandemic: https:\/\/t.co\/FW6GrOsSgD']",
        Month: "March",
        "Dimension 1": -1.6610444,
        "Dimension 2": -4.414632,
        Sentiment: 0.1,
        Subjectivity: 0.4,
        idx: 1981,
      },
      {
        RawTweet:
          "b'Coronavirus Diaries: Zeinab Badawi on the doctors from Africa saving British lives | Free to read https:\/\/t.co\/bvl6gT2uIA'",
        Month: "April",
        "Dimension 1": 10.280141,
        "Dimension 2": 14.773566,
        Sentiment: 0.2,
        Subjectivity: 0.4,
        idx: 1982,
      },
      {
        RawTweet:
          "\u201cWhether they need more yeast for stress baking or Kraft mac &amp; cheese, Americans sequestered by social distancing are shopping for groceries online. But for many low-income households using food stamps, that can happen only in person.\u201d\r\nH\/T @jsross119 \/95\r\n\r\nhttps:\/\/t.co\/0S0aTQfw2I",
        Month: "May",
        "Dimension 1": -6.3181596,
        "Dimension 2": 12.838533,
        Sentiment: 0.258333333,
        Subjectivity: 0.516666667,
        idx: 1983,
      },
      {
        RawTweet:
          "b'Local authorities must have evidence of low infection rates in the community and be able to track and trace new cas\\xe2\\x80\\xa6 https:\/\/t.co\/UX0BEAsXJS'",
        Month: "May",
        "Dimension 1": 15.376978,
        "Dimension 2": -23.311344,
        Sentiment: 0.159090909,
        Subjectivity: 0.344886364,
        idx: 1984,
      },
      {
        RawTweet:
          "b'RT @JohnsHopkinsSPH: \"We may think as soon as we hear about cases we should close school, but we should take a thoughtful and nuanced appro\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 0.84205157,
        "Dimension 2": -26.128904,
        Sentiment: 0.4,
        Subjectivity: 0.5,
        idx: 1985,
      },
      {
        RawTweet:
          "b'RT @juliettekayyem: My colleagues @j_g_allen and @mlipsitch frame our goal accurately: minimize (not eliminate) the risk. Manage it. That\\xe2\\x80\\x99s\\xe2\\x80\\xa6'",
        Month: "March",
        "Dimension 1": 16.314198,
        "Dimension 2": -27.402678,
        Sentiment: 0.4,
        Subjectivity: 0.633333333,
        idx: 1986,
      },
      {
        RawTweet:
          "Pasting this thread here because it\u2019s appropriately put. Black ppl are not dying more because of their behaviors that is just a cop out to adjust accountability. More here: https:\/\/t.co\/Ozu6NSHRuL",
        Month: "April",
        "Dimension 1": -2.505221,
        "Dimension 2": -37.622734,
        Sentiment: 0.333333333,
        Subjectivity: 0.483333333,
        idx: 1987,
      },
      {
        RawTweet:
          "We should be doing as much of this as we can in the US. Masks and protective gear, hand sanitizer, ventilators and other medical equipment. https:\/\/t.co\/UCuOWxMvrt",
        Month: "March",
        "Dimension 1": 26.817472,
        "Dimension 2": -8.207685,
        Sentiment: 0.025,
        Subjectivity: 0.191666667,
        idx: 1988,
      },
      {
        RawTweet:
          "@DrJulieAMiller Unfortunately not an isolated incident; Nazi terminology &amp; symbolism is frequently co-opted by far-right groups in the US that share the belief thatJews &amp; minorities are to blame for their woes.",
        Month: "May",
        "Dimension 1": -15.776028,
        "Dimension 2": -9.2708025,
        Sentiment: 0.175,
        Subjectivity: 0.65,
        idx: 1989,
      },
      {
        RawTweet:
          "b'Children with disabilities, those in marginalized households or living in abject poverty amidst violent conflict, a\\xe2\\x80\\xa6 https:\/\/t.co\/O7ZO8XM4pW'",
        Month: "May",
        "Dimension 1": -26.186472,
        "Dimension 2": -7.7535768,
        Sentiment: -0.8,
        Subjectivity: 1.0,
        idx: 1990,
      },
      {
        RawTweet:
          "b'\\xe2\\x80\\x9cDuring a 3-week period in late February to early March, the number of U.S. COVID-19 cases increased more than 1,00\\xe2\\x80\\xa6 https:\/\/t.co\/LNX0prW5U2'",
        Month: "May",
        "Dimension 1": -5.069448,
        "Dimension 2": 43.414215,
        Sentiment: 0.1,
        Subjectivity: 0.466666667,
        idx: 1991,
      },
      {
        RawTweet:
          "['Retweet via @WashPostPR: \" .@JoelAchenbach: The #coronavirus isn\u2019t mutating quickly, suggesting a #vaccine would offer lasting protection\" https:\/\/t.co\/NvTnVVEFu5 #Science #hospitals #Doctors #Nurse #drugs #medical #research #scientists #Coronavid19 #CoronavirusLockdown']",
        Month: "March",
        "Dimension 1": 0.58105934,
        "Dimension 2": -0.19248055,
        Sentiment: 0.111111111,
        Subjectivity: 0.166666667,
        idx: 1992,
      },
      {
        RawTweet:
          "b'#CRISPR #GeneEditing May Help Scale Up #Coronavirus Testing:\\nAn inexpensive assay based on the technique can provid\\xe2\\x80\\xa6 https:\/\/t.co\/N3dvn9UVSK'",
        Month: "April",
        "Dimension 1": 18.630856,
        "Dimension 2": -5.1108623,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1993,
      },
      {
        RawTweet:
          "Couldn't agree more with \ud83c\udde9\ud83c\uddea Chancellor Merkel that #UnitedAgainstCoronavirus pledging conference is a sign of hope for solidarity &amp; commitment to multilateralism. Thank you for your pledge of \u20ac525M to the #COVID19 response &amp; your strong support to @WHO. Together!",
        Month: "May",
        "Dimension 1": 37.003937,
        "Dimension 2": -20.417812,
        Sentiment: 0.520833333,
        Subjectivity: 0.616666667,
        idx: 1994,
      },
      {
        RawTweet:
          "['The 55-year-old teacher had no health problems and the reportedly contracted the virus as well. https:\/\/t.co\/l5e3j5WOXP #coronavirus #coronaviruslebanon #\u0643\u0648\u0631\u0648\u0646\u0627']",
        Month: "March",
        "Dimension 1": 3.2752366,
        "Dimension 2": 21.933487,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1995,
      },
      {
        RawTweet:
          "I'll be on @GMB tomorrow morning discussing some key policy lessons from other countries if we want to keep daily new cases low. https:\/\/t.co\/58cLMigWvX",
        Month: "April",
        "Dimension 1": 24.172705,
        "Dimension 2": 18.065166,
        Sentiment: 0.002272727,
        Subjectivity: 0.425909091,
        idx: 1996,
      },
      {
        RawTweet:
          "b'#Covid19 Pathanamthitta district administration has declared holiday for schools for the next three days.'",
        Month: "March",
        "Dimension 1": 3.4292166,
        "Dimension 2": 44.86889,
        Sentiment: 0.0,
        Subjectivity: 0.0,
        idx: 1997,
      },
      {
        RawTweet:
          "b'RT @DrKatHolt: @mlipsitch Great article Marc! A little surprised not to see mention of the recent success story from Oxford, using human ch\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 40.74817,
        "Dimension 2": -6.0135345,
        Sentiment: 0.202083333,
        Subjectivity: 0.416666667,
        idx: 1998,
      },
      {
        RawTweet:
          "b'RT @cmyeaton: Right now most of us are staying home to slow the spread, but what comes next? We propose a roadmap to safely reopening. Toge\\xe2\\x80\\xa6'",
        Month: "April",
        "Dimension 1": 9.627555,
        "Dimension 2": -8.458598,
        Sentiment: 0.197142857,
        Subjectivity: 0.387142857,
        idx: 1999,
      },
      {
        RawTweet:
          "This alarming blow to Americans\u2019 liberties is not justified by existing evidence and could have unintended negative consequences. As noted in our comment, the Wuhan study has significant methodological limitations.",
        Month: "April",
        "Dimension 1": -27.329193,
        "Dimension 2": -20.615168,
        Sentiment: -0.05625,
        Subjectivity: 0.69375,
        idx: 2000,
      },
    ],
  };

  componentDidMount() {
    this.setState({ ...this.state });
  }

  componentDidUpdate() {
    var data = this.state.data;
    console.log(data)

    var margin = { top: 30, bot: 30, left: 40, right: 40 };
    var w = 600 - margin.left - margin.right;
    var h = 500 - margin.top - margin.bot;

    var container = d3
      .select(".container")
      .attr("width", w + margin.left + margin.right)
      .attr("height", h + margin.top + margin.bot)
      .select(".g1")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

  }

  render() {
    return (
      <div className="visualization">
        <svg className="container">
          <g className="g1"></g>
        </svg>
      </div>
    );
  }
}

export default Visualization;
