$(document).ready(function () {
    // Declaring user
    const $fbi_database = {
        'suspects': [{
                'id': 0,
                'name': 'Unknown',
                'age': 'Unknown',
                'job': 'Unknown',
            },
            {
                'id': 1,
                'name': 'Suck',
                'age': 'Unknown',
                'job': 'Unknown',
            },
            {
                'id': 2,
                'name': 'My',
                'age': 'Unknown',
                'job': 'Unknown',
            },
            {
                'id': 3,
                'name': 'Dick',
                'age': 'Unknown',
                'job': 'Unknown',
            },
            {
                'id': 4,
                'name': 'Franklin Clinton',
                'age': 32,
                'job': 'Small Thief',
            },
            {
                'id': 5,
                'name': 'Michael De Santa',
                'age': 52,
                'job': 'FBI Witness',
            },
            {
                'id': 6,
                'name': 'Trevor Philips',
                'age': 55,
                'job': 'Hitman',
            }
        ]
    }
    updateBio();
    $('button#contr_btn').click(function () {
        // $('div.form_body').css('display', 'block');
        console.log($('div.form_body').css('display'));
        const $display = $('div.form_body').css('display');
        if ($display === 'none') {
            $('div.form_body').show();
        } else {
            $('div.form_body').hide();
        }
        console.log($('div.form_body').css('display'));
    });

    $('button#emp_remove').click(function () {
        var $id = $('select#emp option:selected').index();
        const $special_id = $('select#emp option:disabled').index();
        const $value = $('select#emp option:selected').val();
        console.log('special id ' + $special_id);
        console.log('selected id ' + $id);
        console.log('Selected value was ' + $value);
        if ($id === 0 || $id === -1) {
            console.log($fbi_database);
            return;
        }
        console.log('Selected value was ' + $value);
        // delete $fbi_database.suspects[$id]; // undefined is a bitch
        $fbi_database.suspects.splice($id, 1);
        $('select#emp option[value=\"' + $value + '\"]').remove();

        // Update the bio div 
        var $id = $('select#emp option:selected').index();
        if ($id !== -1) {
            const $name = $fbi_database.suspects[$id].name;
            const $age = $fbi_database.suspects[$id].age;
            const $job = $fbi_database.suspects[$id].job;
            $('div#bio').html($name + ', Age: ' + $age + ', Job: ' + $job);
            console.log($fbi_database);
        } else {
            $('div#bio').html('Who is this guy?');
            $('div#remove_container').hide();
        }
    })

    $('button#emp_add_btn').click(function () {
        var $emp_id = 0;
        $emp_id = $fbi_database.suspects.length;
        console.log($emp_id);
        const $emp_name = $('input#emp_name').val();
        const $emp_age = parseInt($('input#emp_age').val());
        const $emp_job = $('input#emp_job').val();

        // var $json_string = JSON.stringify($fbi_database);
        // var $db_object = JSON.parse($json_string);
        // console.log($json_string);
        console.log($fbi_database.suspects);
        $fbi_database.suspects.push({
            'id': $emp_id,
            'name': $emp_name,
            'age': $emp_age,
            'job': $emp_job,
        });

        $('select#emp').append($('<option/>', {
            value: $emp_name,
            text: $emp_name
        }));

        // $json_string = JSON.stringify($db_object);
        // console.log($db_object);

        alert('Successfully added! ' + $emp_name + ' - ' + $emp_age + ' - ' + $emp_job);

        // Update the bio div
        $emp_id = $('select#emp option:selected').index();
        const $name = $fbi_database.suspects[$emp_id].name;
        const $age = $fbi_database.suspects[$emp_id].age;
        const $job = $fbi_database.suspects[$emp_id].job;
        $('div#bio').html($name + ', Age: ' + $age + ', Job: ' + $job);

    });

    alert("Welcome to our FBI profiling database");

    function updateBio() {
        $('select#emp').click(function (event) {
            const $id = $('select#emp option:selected').index();
            if ($id !== 0 && $id !== -1) {
                $('div#remove_container').show();
            } else {
                return;
            }
            console.log($id);
            const $name = $fbi_database.suspects[$id].name;
            const $age = $fbi_database.suspects[$id].age;
            const $job = $fbi_database.suspects[$id].job;
            $('div#bio').html($name + ', Age: ' + $age + ', Job: ' + $job);
        });
    }
});