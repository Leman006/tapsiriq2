$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault(); 
    
        const newTask = $('#task-input').val();
    
        if (newTask.trim() === "") {
            alert('Введите задачу');
            return;
        }
    
        const taskId = Date.now(); 
    
        $('#task-list').append(`
            <li class="list-group-item" data-id="${taskId}">
            <input type="checkbox" class="task-checkbox">
            <span>${newTask}</span>
            </li>
        `);
    
        $('#task-input').val('');
    
        $('.task-checkbox').off('change').on('change', function() {
            const isChecked = $(this).is(':checked');
            const taskElement = $(this).closest('li');
            
            if (isChecked) {
            taskElement.addClass('completed');
            } else {
            taskElement.removeClass('completed');
            }
        });
        });
    });
