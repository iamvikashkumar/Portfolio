$(document).ready(function() {

    /*
     * Plugin intialization
     */
    $('#pagepiling').pagepiling({
      menu: '#menu',
      anchors: ['page1', 'page2', 'page3', 'page4'],
      sectionsColor: ['black', 'white', 'white', '#39C'],
      navigation: {
        'position': 'right',
        'tooltips': ['Home', 'Who is this guy?', 'Skills', 'Contact']
      },
      afterRender: function() {
        $('#pp-nav').addClass('custom');
      },
      afterLoad: function(anchorLink, index) {
        if (index > 1) {
          $('#pp-nav').removeClass('custom');
        } else {
          $('#pp-nav').addClass('custom');
        }
      }
    });
  
  });



  