<!DOCTYPE html>
<html lang="en">
<head>
    
    <title>Current Date and Time</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        .date-time {
            font-size: 24px;
            color: #333;
        }
    </style>
</head>
<body>
    <h1>Current Date and Time</h1>
    <div class="date-time" id="dateTime"></div>

    <script>
        function updateDateTime() {
            const now = new Date();
            const options = { 
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
                hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true 
            };
            const formattedDate = now.toLocaleDateString('en-US', options);
            document.getElementById('dateTime').textContent = formattedDate;
        }

        // Update the date and time every second
        setInterval(updateDateTime, 1000);
        updateDateTime();
    </script>
</body>
</html>