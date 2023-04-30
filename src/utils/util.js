import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export const formInputs = [{
    id: 'form-1',
    name: 'fullName',
    label: 'Full Name',
    type: 'text',
    icon: <PersonIcon />
},
{
    id: 'form-2',
    name: 'email',
    label: 'Email Address',
    type: 'email',
    icon: <EmailIcon />
},
{
    id: 'form-3',
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    icon: <PhoneIcon />
},
]