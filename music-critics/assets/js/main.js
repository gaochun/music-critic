function loadPage() {
  var hash = window.location.hash;
  if (hash.length < 2) {
    return;
  }

  var date = $('.jqm-navmenu-panel a[href="article.html'+hash+'"]').attr('date');
  $('.jqm-header .date').html(date);

  hash = hash.substr(1);
  $.get('./' + hash + '.html', function(result){
    $(".jqm-content").html(result);
    document.title = $( "h1" ).html();
  });
}

$( document ).on( "pagebeforecreate", ".jqm-demos", function( event ) {
  loadPage();
});

$( window ).on( "navigate", function( event, data ){
  loadPage();
});

$( document ).on( "pagecreate", ".jqm-demos", function( event ) {
	var page = $( this );

	$( ".jqm-navmenu-panel ul" ).listview();

	$( ".jqm-navmenu-link" ).on( "click", function() {
		page.find( ".jqm-navmenu-panel:not(.jqm-panel-page-nav)" ).panel( "open" );
	});
});
