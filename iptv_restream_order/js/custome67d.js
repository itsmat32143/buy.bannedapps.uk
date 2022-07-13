// behan ka rishta na pesh karna isko b copy kar k.
// behan ka rishta na pesh karna isko b copy kar k.

jQuery(document).ready(function($) {
	
	// behan ka rishta na pesh karna isko b copy kar k.
	// behan ka rishta na pesh karna isko b copy kar k.
	//
	// list - filter
	$('.re.filter select').on('change', function(){
		$(this).closest('form').submit();
	})
	$('.re.filter input[type=text]').on('click', function(){
		$(this).select();
	
	}).on('keyup', function(e){
		if( e.keyCode == 13 ){
			$(this).closest('form').submit();
		}
	});
	//


// behan ka rishta na pesh karna isko b copy kar k.
// behan ka rishta na pesh karna isko b copy kar k.
	//
	// sub modify form
	$('.container.reseller-credit select[name=credit]').on('change', function(){

		t = $(this);
		f = t.closest('form');
		cr = f.find('.rightt .current');
		ad = f.find('.rightt .add');
		tt = f.find('.rightt .payable');

		console.log(t.val());
		console.log(cr.html());

		curr = parseInt( cr.html() );
		add = parseInt( t.find("option:selected").attr('credit') );
		total = curr + add;

		ad.html( add );
		tt.html( total );

	});
	//

// behan ka rishta na pesh karna isko b copy kar k.
// behan ka rishta na pesh karna isko b copy kar k.
	// 
	// extend normal line form
	$('.container.line-extend input[type=radio]').on('click', function(e){
		
		t = $(this)
		f = t.closest('form');
		ra = f.find('.rightt .add');
		rp = f.find('.rightt .payable');
		l = t.closest('label');

		ra.html( l.attr('n') );
		rp.html( l.attr('date') );

	});
	//


// behan ka rishta na pesh karna isko b copy kar k.
	//
	// invoice view - change method
	$('.container.invoice-view select[name=method]').on('change', function(e){
		location.href = location.href + '/' + $(this).val();
	});
	//

// behan ka rishta na pesh karna isko b copy kar k.
// behan ka rishta na pesh karna isko b copy kar k.
	//
	// new line form - select pkg
	$('.line-form .bq_pkg').on('click', function(){

		t = $(this);
		tf = t.closest('form');
		tf_bq = tf.find('.bq');

		pkg = t.attr('pkg');

		if( pkg == 'all' ){
			tf_bq.prop('checked', 'checked');

		} else if( pkg == 'non' ){
			tf_bq.prop('checked', false);

		} else {
			tf.find('.bq[pkg*='+pkg+']').prop('checked', 'checked');
		}

	});
	$('.line-newForm .bq_pkg[pkg=all]').trigger('click');
	$('.line-newForm .bq[pkg*=xxx]').trigger('click');
	//

	// behan ka rishta na pesh karna isko b copy kar k.
// behan ka rishta na pesh karna isko b copy kar k.
	//
	// // line


	// new / conx check
	$('.container.line-newForm input[name=line_conx]').on('keyup', function(){
		
		tc = $(this);
		tf = tc.closest('form');
		ts = tf.find('input[type=submit]');
		tp = tf.find('.prompt');
		tu = tf.find('input[name=line_username]');

		tc_count = tf.find('.rightt .count');
		tc_rate = tf.find('.rightt .rate');
		tc_total = tf.find('.rightt .total');
		
		if( tcv = tc.val() ){

			if( tcv > 5000 ){
				tc.val(5000);

			} else {
				
				// count
				tc_count.html( tcv )

				// total
				rate = restream_cost_rate(tcv);
				total = Math.round( tcv * rate );
				tc_total.html( total );

				// rate
				rate = Math.round(total * 100 / tcv) / 100;
				switch( rate.toString().length ){
					case 1: rate = rate+'.00'; break;
					case 3: rate = rate+'0'; break;
				}
				tc_rate.html( rate );
				// behan ka rishta na pesh karna isko b copy kar k.

			}

		}

	});
	$('.container.line-newForm input[name=line_conx]').trigger("keyup");
// behan ka rishta na pesh karna isko b copy kar k.

	// new / username check
	$('.container.line-newForm input[name=line_username]').on('keyup', function(){
		
		tu = $(this);
		tf = tu.closest('form');
		tc = tf.find('input[name=line_conx]');
		ts = tf.find('input[type=submit]');
		tp = tf.find('.prompt');

		tu.attr('flag_disabled', 1);
		ts.attr('disabled', true);

			if( tu.val() != '' && tu.val().length < 8 ){
			tp.html('the username should have more than 8 characters.');

		} else if( tu.val().replace(/[^A-Za-z0-9]/gi,'') != tu.val() ){
			tp.html('only alphanumeric characters accepted.');

		} else {
			tu.attr('flag_disabled', 0);
			if( tc.attr('flag_disabled') != 1 ){
				ts.attr('disabled', false);
				tp.html('');
			}
		}
		
	});
// behan ka rishta na pesh karna isko b copy kar k.

	// fix euro_prefix
	$('.euro_prefix').each(function(index, el) {
		if( $(this).html() == '' ) $(this).removeClass('euro_prefix');
	});



	// line upgrade
	$('.container.line-upgrade input[name=line_conx]').on('keyup', function(){
		
		tc = $(this);
		tf = tc.closest('form').find('.rightt');

		tc_count = tf.find('.count');
		tc_rate = tf.find('.rate');
		tc_total = tf.find('.total');

		rd = tf.find('[rest_of_days]');
		dm = tf.find('[days_of_month]');
		iv = tf.find('.invoice');
		rc = tf.find('.rest_of_cost');
		sm = tf.closest('form').find('input[type=submit]');

		rest_of_days = parseInt( rd.attr('rest_of_days') );
		days_of_month = parseInt( dm.attr('days_of_month') );
		rest_of_cost = parseInt( rc.text() * 100 ) / 100;

		if( tcv = tc.val() ){

			if( tcv > 5000 ){
				tc.val(5000);

			} else {
				
				// count
				tc_count.html( tcv );

				// total
				rate = restream_cost_rate(tcv);
				total = Math.round( tcv * rate );
				tc_total.html( total );

				the_rest = Math.round( rest_of_days * total * 100 / days_of_month ) / 100 ;
				the_invoice = Math.round( ( the_rest - rest_of_cost ) * 100 ) / 100;

				rd.text(the_rest);
				iv.text(the_invoice);

				if( the_invoice == 0 ){
					sm.attr('disabled', '1');
				} else {
					sm.removeAttr('disabled');
				}

				// rate
				rate = Math.round(total * 100 / tcv) / 100;
				switch( rate.toString().length ){
					case 1: rate = rate+'.00'; break;
					case 3: rate = rate+'0'; break;
				}
				tc_rate.html(rate);
				
			}

		}

	});
	$('.container.line-upgrade input[name=line_conx]').trigger("keyup");

// behan ka rishta na pesh karna isko b copy kar k.

});

// behan ka rishta na pesh karna isko b copy kar k.
// behan ka rishta na pesh karna isko b copy kar k.
