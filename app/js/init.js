$( function() {

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
            closeClass: 'close'
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