(function(){
    'use-strict';
  
    angular
      .module('app.prices')
      .controller('EtiquetteController', AcrylicsController);
  
    /* @ngInject */
    function AcrylicsController($sce){
      var ctrl = this;
      ctrl.etiquettes = getEtiquettes();
  
      function getEtiquettes(){
        return [
            "Be expected to pay a deposit for every appointment. You are dealing with an independent contractor not a walk in nail salon. Therefore, if you don't show up they don't get paid. Deposits insure appointments and encourage accountability.",
            "We get it life happens! Communicate, communicate, communicate! A simple text or phone call is greatly appreciated if you are not able to make it to your appointment or running late. The sooner we know the sooner we can fill your spot. Time is money!",
            "Wash your hands prior to your service. Nails harbor a lot of germs. It is common courtousy to show up with clean nails. It is also recommended to scrub under and over  your enhancements in between fills. Practicing good hygiene comes with the responsibilities of having nail enhancements.",
            "Be expected to pay for EVERY little thing on your nails. Your nail technician purchased every bit of product so you must be charged in order for them to make a living/profit. Remember as independent contractors everything comes out of their pocket. Get familiar with their prices. The more you ask for the more you will be paying! Beauty industry or not, be considerate when getting serviced by a friend or family member that works for themselves. Never allow them to work for free. Would you want to work for free? 🤔",
            "Tips are debatable, but recommended in the beauty industry. If you don't know the percentage amount that you should tip, please google! Typically at least 15% of your total. You are getting an artistic service done that you can not do on yourself. Each service is unique! If you take care of your barber, esthetician, nail tech, hair stylist, etc ... they will take care of you! Overall, we appreciate any amount.",
            "Please RELAX your hand! Do not try to hold them up a certain way so that you can see them. Allow your nail technician the flexibility to see all angles of your nails by relaxing your hand down as much as possible. Do not look if you have to. You have 2-3 weeks to enjoy them. You are actually injuring your nail tech's hand/wrist every time you tense up or slouch back in your chair. An intense pain radiates through their wrist every time they have to fight your hand in order to work on it. It is a very common situation, but as a nail client you must be mindful or you could risk losing your favorite technician because of it. It has unfortunately been known to lead to tensoynovitis, carpal tunnel syndrome, cubital tunnel syndrome, and a lesion of the ulnar nerve in the shoulder.",
            "Don't touch your face/hair, do not eat, do not wave your hands around, and wear an ear piece while talking on the phone if possible. Your hands belong to your nail technician the minute you sit in their chair. Practicing all of this will allow your technician to work much more diligently.",
            "Do NOT say \"do whatever\" unless you want that to lead you to a \"$150 set of do whatever nails.\" The sky is the limit when having your nails serviced. We love thinking of beautiful creations with our clients, but please have an inspiration or an idea of what you want once it is time to polish your nails. Relax and remember that no set last forever."
        ];
      }
    }
  })();
  