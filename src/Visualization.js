import { Component } from "react";
import * as d3 from "d3";
import "./Visualization.css";

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
    ],
  };

  componentDidMount() {
    this.setState({ ...this.state, selected: "Sentiment" });
  }

  componentDidUpdate() {
    console.log(this.state);
    var dataSelected = this.state.selected;
    var data = this.state.data;
    console.log(data);

    var margin = { top: 30, bot: 30, left: 50, right: 50 };
    var w = 800 - margin.left - margin.right;
    var h = 800 - margin.top - margin.bot;

    var container = d3
      .select(".container")
      .attr("width", w + margin.left + margin.right)
      .attr("height", h + margin.top + margin.bot)
      .select(".g1")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    /**
     * y-axis
     */
    const months = ["March", "April", "May"];

    const y_scale = d3.scaleBand().domain(months).range([0, h]);

    container
      .selectAll(".y_axis_g")
      .data([0])
      .join("g")
      .attr("class", "y_axis_g")
      .attr("transform", `translate(${margin.left}, ${0})`)
      .call(d3.axisLeft(y_scale));

    /**
     * data points
     */
    const r = 10;
    const sentimentColorScale = d3
      .scaleLinear()
      .domain([-1, 0, 1])
      .range(["red", "#ECECEC", "green"]);
    const subjectivityColorScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range(["#ECECEC", "#4467C4"]);
    const color = {
      Subjectivity: subjectivityColorScale,
      Sentiment: sentimentColorScale,
    };

    var sim = d3
      .forceSimulation(data)
      .force("charge", d3.forceManyBody().strength(0.1))
      .force("x", d3.forceX().x(400).strength(0.05))
      .force(
        "y",
        d3
          .forceY()
          .y((d) => y_scale(d.Month) + 120)
          .strength(1)
      )
      .force("collision", d3.forceCollide().radius(r))
      .on("tick", ticked);

    function ticked() {
      var u = container
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("r", r)
        .style("fill", (d) => {
          return color[dataSelected](d[dataSelected]);
        });
    }
  }

  dropDownChange = (event) => {
    this.setState({ selected: event.target.value });
  };

  render() {
    const options = ["Sentiment", "Subjectivity"];

    return (
      <div className="visualization">
        <form className="dropdown">
          Color By:
          <select value={this.state.selected} onChange={this.dropDownChange}>
            {options.map((o) => {
              return <option value={o}>{o}</option>;
            })}
          </select>
        </form>

        <svg className="container">
          <g className="g1"></g>
        </svg>
      </div>
    );
  }
}

export default Visualization;
