import test from 'ava';
import {macro} from './_helpers';

// Commented because phantomjs does not seem to like some JS in openstax.org (see the `.phantomjs.log` file)

test.serial(macro, 'https://openstax.org', 'Our Impact');
test.serial(macro, 'https://openstax.org/subjects', 'About Our Textbooks');

test.serial(macro, 'https://openstax.org/partners', 'Rice Online Learning');
test.skip.serial(macro, 'https://openstax.org/details');
test.serial(macro, 'https://openstax.org/blog', 'Get updates in your inbox.');
test.serial(macro, 'https://openstax.org/tos', 'Terms of Use');
test.serial(macro, 'https://openstax.org/tou', 'Terms of Use');
test.serial(macro, 'https://openstax.org/404', 'Uh-oh, no page here');
test.skip.serial(macro, 'https://openstax.org/about');
test.serial(macro, 'https://openstax.org/about-us', 'Changing the world is a team effort');
test.serial(macro, 'https://openstax.org/accessibility-statement', 'Web Accessibility');
test.serial(macro, 'https://openstax.org/adopters', 'Complete list of institutions that have adopted OpenStax');
test.serial(macro, 'https://openstax.org/adoption', "Let us know you're using OpenStax");
// test.serial(macro, 'https://openstax.org/adoption-confirmation', 'Thank you for adopting OpenStax!');
test.serial(macro, 'https://openstax.org/article', 'Read more great stories');
test.skip.serial(macro, 'https://openstax.org/books');
test.serial(macro, 'https://openstax.org/comp-copy', 'Request your complimentary iBooks download');
// test.serial(macro, 'https://openstax.org/comp-copy-confirmation', 'Thank you for requesting an iBooks comp copy.');
test.serial(macro, 'https://openstax.org/contact', 'Mailing Address');
// test.serial(macro, 'https://openstax.org/contact-thank-you', 'Thanks for contacting us');
test.serial(macro, 'https://openstax.org/details/books/university-physics-volume-1', 'University Physics Volume 1');
// test.serial(macro, 'https://openstax.org/faculty-confirmation', 'Thank you for applying for an instructor account!');
test.skip.serial(macro, 'https://openstax.org/faculty-verification'); // Redirects to login
// test.serial(macro, 'https://openstax.org/finish-profile', 'Finish your OpenStax profile');
// test.serial(macro, 'https://openstax.org/finished-no-verify', 'Your new account has been created. Thank you for joining the OpenStax community!');
// test.serial(macro, 'https://openstax.org/finished-verify', 'Thank you for applying for an instructor account!');
test.serial(macro, 'https://openstax.org/foundation', 'The Bill & Melinda Gates Foundation');
test.serial(macro, 'https://openstax.org/higher-ed', 'Free textbooks. High quality. No catch.');
test.serial(macro, 'https://openstax.org/interest', 'Interested in learning more about OpenStax?');
// test.serial(macro, 'https://openstax.org/interest-confirmation', 'Thanks for telling us about yourself!');
test.serial(macro, 'https://openstax.org/impact', 'We measure our success in access.');
// test.serial(macro, 'https://openstax.org/k-12', 'Access for K-12');
test.skip.serial(macro, 'https://openstax.org/license');
// test.serial(macro, 'https://openstax.org/renewal', 'Let us know you’re still using OpenStax');
// test.serial(macro, 'https://openstax.org/mass-renewal', 'Update us on how you’re using OpenStax');
test.serial(macro, 'https://openstax.org/subjects', 'Standard Scope and Sequence');
test.skip.serial(macro, 'https://openstax.org/support');
