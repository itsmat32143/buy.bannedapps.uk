// behan ka rishta na pesh karna isko b copy kar k.
var CORL = {"20":50,"80":100,"200":200,"450":400,"1000":800,"1400":1000,"2000":1500,"5000":3000,"11000":6000};
var CORC = {"20":50,"80":100,"200":200,"450":400,"1000":800,"1400":1000,"2000":1500,"5000":3000,"11000":6000};

var seller_reseller_off = 0.1;
var seller_reseller_off_limit = 101;

// behan ka rishta na pesh karna isko b copy kar k.
function restream_cost_rate( c, seller_price=false ){
	
	var rate;
	var COR = {"200":2,"400":1.8,"600":1.5,"800":1.2,"999":1};

	if( c < 200 ){
	    rate_dn = (200 - c) / 200;
	    rate_up = (c - 0) / 200;
	    rate = rate_dn * COR[200];
	    rate+= rate_up * COR[400];

	} else if( c < 400 ){
	    rate_dn = (400 - c) / 200;
	    rate_up = (c - 200) / 200;
	    rate = rate_dn * COR[400];
	    rate+= rate_up * COR[600];

	} else if( c < 600 ){
	    rate_dn = (600 - c) / 200;
	    rate_up = (c - 400) / 200;
	    rate = rate_dn * COR[600];
	    rate+= rate_up * COR[800];

	} else if( c < 800 ){
	    rate_dn = (800 - c) / 200;
	    rate_up = (c - 600) / 200;
	    rate = rate_dn * COR[800];
	    rate+= rate_up * COR[999];

	} else {
	    rate = COR[999];
	}

	if( seller_price ){
		rate = rate * ( 1 - 0.2 );
	}

	rate = Math.round( rate * 100 ) / 100;

	switch( rate.toString().length ){
		case 1: rate = rate + '.00'; break;
		case 3: rate = rate + '0'; break;
	}

	return rate;

}
// behan ka rishta na pesh karna isko b copy kar k.
