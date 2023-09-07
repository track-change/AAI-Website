const visitInfo = [
    {
        text: 'We are open from 2-6 PM today.'
    }, {
        text: `1219 Vine Street
                Philadelphia, PA 19107`
    }, {
        text: '(215)-557-0455',
        superscript: 'tel-icon'
    }, {
        text: 'Gallery admission is always free. Performances and special event admission varies.',
        CTA: 'Reserve tickets'
    }, {
        text: 'Directions',
        CTA: 'See on Google Maps',
        embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.264617398788!2d-75.1618743875566!3d39.95783607139828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c62b43f1f899%3A0x1076b7f98af8a2fb!2sAsian%20Arts%20Initiative!5e0!3m2!1sen!2sus!4v1694033970768!5m2!1sen!2sus" width="800" height="800" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }, {
        text: 'Download Building Map',
        superscript: 'download-icon'
    }, {
        text: 'Download Parking Guide',
        superscript: 'download-icon'
    }, {
        text: 'Accessibility Guide',
        collapsed: {
            text: 'Asian Arts Initiative is designed as a mobility accessible facility, with access to all public floors and spaces, and seating accommodations for programmed events. Both non-gendered and individually isolating restrooms are available on each floor, all equipped with changing stations. If contacted in advance, we will make every attempt to fulfill requests for reasonable accommodations such as access to assistive technology devices and materials in alternative formats. For more information, please contact info@asianartsinitiative.org. Please note: Due to most events being attended by the general public, we cannot guarantee accommodations for those with fragrance sensitivities.',
        }
    }, {
        text: 'Sign up for our newsletter',
        form: [{
            title: 'Email address',
            type: 'email',
            field: 'Email address'
        }
        ],
        CTA: 'Submit'
    }, {
        text: 'Schedule a Tour',
        collapsed: {
            text: 'Thank you for your interest in scheduling a tour at Asian Arts Initiative! Please note that self-guided tours for individuals or small groups are free during gallery hours (Tuesdays, Thursdays, and Saturdays from 2-6 PM). For information about our current exhibitions, please visit our Exhibitions page. To schedule a docent-guided tour at Asian Arts Initiative, please complete a Tour Request Form. For additional information about scheduling tours and group visits, please contact programs@asianartsinitiative.org. Board Member and community activitst, Mary Yee.',
            form: [{
                title: 'Your Name',
                type: 'text',
                name: 'name',
                field: 'First Name Last Name',
                required: true
            }, {
                title: 'Email Address',
                name: 'email',
                type: 'email',
                field: 'your answer',
                required: true
            }, {
                title: 'Name of Organization/School/Company',
                type: 'text',

                name: 'organization',
                required: false
            }, {
                title: 'Reason of interest for visiting Asian Arts Initiative',
                type: 'text',
                name: 'reasons',
                required: false
            }, {
                title: 'Type of tour',
                type: 'radio',
                name: 'tour',
                field: 'Private Group Tour',
                required: true
            }, {
                title: 'Type of tour',
                type: 'radio',
                name: 'tour',
                field: 'Student Group Tour',
                required: true
            }

            ]
        }
    }
]
export default visitInfo