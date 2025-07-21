document.addEventListener('DOMContentLoaded', function() {
    const calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
        initialView: 'timeGridWeek',
        initialDate: '2025-08-04',
        slotMinTime: '17:00:00',
        slotMaxTime: '18:30:00',
        slotDuration: '00:05:00',
        slotLabelInterval: '00:15:00',
        slotLabelFormat: { hour: '2-digit', minute: '2-digit', hour12: false, hourCycle: 'h23' },
        eventTimeFormat: { hour: '2-digit', minute: '2-digit', hour12: false, hourCycle: 'h23' },
        headerToolbar: { left: '', center: '', right: '' },
        dayHeaderFormat: { weekday: 'short', month: 'short', day: 'numeric' },
        hiddenDays: [0, 6],
        allDaySlot: false,
        height: 'auto',
        eventClick: function(info) {
            const element = document.getElementById(info.event.extendedProps.link);
            // const menuHeight = 80; // Adjust this value to match your menu height
            const menuHeight = document.querySelector('#nav').offsetHeight;
            console.log('menuHeight', menuHeight);
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - menuHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        },
        eventClassNames: function(info) { return 'fc-event-' + info.event.extendedProps.type; },
        events: [
            { title: 'Introduction', start: '2025-08-04T17:00', end: '2025-08-04T17:05', extendedProps: { type: 'special' } },
            { title: 'Keynote: Aaron Steven White\nTBA', start: '2025-08-04T17:05', end: '2025-08-04T18:00', extendedProps: { type: 'keynote', link: 'keynote1' } },
            { title: 'In the Mood for Inference: Logic-Based NLI with LLMs', start: '2025-08-04T18:00', end: '2025-08-04T18:25', extendedProps: { type: 'paper', link: 'talk4' } },

            { title: 'Dataset Creation for Visual Entailment using Generative AI', start: '2025-08-05T17:00', end: '2025-08-05T17:25', extendedProps: { type: 'paper', link: 'talk3' } },
            { title: 'Implementing a Logical Inference System for Japanese Comparatives', start: '2025-08-05T17:25', end: '2025-08-05T17:55', extendedProps: { type: 'paper', link: 'talk1' } },
            { title: 'MERGE: Minimal Expression-Replacement GEneralization Test for NLI', start: '2025-08-05T17:55', end: '2025-08-05T18:20', extendedProps: { type: 'contributed', link: 'talk6' } },

            { title: 'Keynote: Mehrnoosh Sadrzadeh\nTBA', start: '2025-08-06T17:00', end: '2025-08-06T17:55', extendedProps: { type: 'keynote', link: 'keynote2' } },
            { title: 'Unpacking Legal Reasoning in LLMs: Chain-of-Thought as a Key to Human-Machine Alignment in Essay-Based NLU Tasks', start: '2025-08-06T17:55', end: '2025-08-06T18:20', extendedProps: { type: 'paper', link: 'talk2' } },

            
            { title: 'Building a Compact Math Corpus', start: '2025-08-07T17:00', end: '2025-08-07T17:25', extendedProps: { type: 'paper', link: 'talk5' } },
            { title: 'Automatic Evaluation of Linguistic Validity in Japanese CCG Treebanks', start: '2025-08-07T17:25', end: '2025-08-07T17:50', extendedProps: { type: 'contributed', link: 'talk7' } },
            { title: 'How Often does Natural Logic Actually Meet Machine Learning?', start: '2025-08-07T17:50', end: '2025-08-07T18:15', extendedProps: { type: 'contributed', link: 'talk8' } },

            { title: 'Keynote: Kyle Richardson\nTBA', start: '2025-08-08T17:00', end: '2025-08-08T17:55', extendedProps: { type: 'keynote', link: 'keynote3' } }
        ]
    });
    calendar.render();
});