$( function() {

    // range slider init

    // $("#slider").slider({
    //     values:[1,1],
    //     min:0,
    //     max:5,
    //     slide: function(event, ui) {
    //         $(ui.handle).text(ui.value);
    //     },
    //     start: function( event, ui ) {
    //         if($(ui.handle).hasClass('stay'))
    //             return false;
    //     }
    // });
    // var value = $("#slider-range").slider("values",0);
    // $("#slider-range").find(".ui-slider-handle").text(value);
    // $('#slider .ui-slider-handle:last').addClass('stay');


    $( function() {
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 168,
            values: [ 0, 168 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
            " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    } );

    // datepicker init
    var dateFormat = "mm/dd/yy",
        from = $( "#from" )
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1
            })
            .on( "change", function() {
                to.datepicker( "option", "minDate", getDate( this ) );
            }),
        to = $( "#to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1
        })
            .on( "change", function() {
                from.datepicker( "option", "maxDate", getDate( this ) );
            });

    function getDate( element ) {
        var date;
        try {
            date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
            date = null;
        }

        return date;
    }

    // Modal init
    var modalBtn = $('[data-modal]');

    modalBtn.on('click', function(e){

        e.preventDefault();
        var target = $(this).attr('data-target');
        $(target).bPopup({
            closeClass: 'close',
            amsl: 0
        });
    })

    // Form Element Styler init

    $('select').styler();

    // scrollbar init

    $('.scrollbar-inner').scrollbar();

    // chart init

    var chartBlock = document.getElementById('myChart');
    if( chartBlock ){
        var myChart = new Chart(chartBlock, {
            type: 'bar',
            data: {
                labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
                datasets: [
                    {
                        label:'Signups',
                        data: [100, 200, 220, 170, 130, 90, 156, 180, 130],
                        backgroundColor: 'rgba(128, 191, 202, 1)'
                    },
                    {
                        label:'FTD',
                        data: [200, 120, 180, 142, 121, 98, 170, 136, 157],
                        backgroundColor: 'rgba(255, 154, 56, 1)'
                    },
                    {
                        label:'Earned',
                        data: [210, 130, 170, 132, 131, 88, 180, 146, 147],
                        backgroundColor: '#59b66d'
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        })
    }

} );