var login = prompt("Who is there?", '');

if (login == 'Admin') {

  var password = prompt('Password', '');

  if (password == 'TheMaster') {
    alert( 'Welcome' );
  } else if (password == '', password == null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (login == '', login == null) {
  alert( 'Canceled' );
} else {
  alert( "I do not know you" );
}