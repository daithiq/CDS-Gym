//Search Bar function - will finish once deployed 

<script type="text/javascript">
document.getElementById('searchform').onsubmit = function() {
    window.location = 'http://www.google.com/search?q=site:yourdomainname ' + document.getElementById('test').value;
    return false;
}
</script>