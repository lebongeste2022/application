// images
import avatar1 from '../../../assets/images/users/avatar-7.jpg';
import avatar2 from '../../../assets/images/users/avatar-9.jpg';
import avatar3 from '../../../assets/images/users/avatar-4.jpg';
import avatar4 from '../../../assets/images/users/avatar-1.jpg';
import avatar5 from '../../../assets/images/users/avatar-8.jpg';
import profilePic2 from '../../../assets/images/users/avatar-5.jpg';

// types
import { MembersTypes } from '../../../components/MembersList';
import { TaskItemTypes } from '../../../components/Tasks';
import { MessageItemTypes } from '../../../components/ChatList';

export interface OrdersItemTypes {
    id: number;
    product: string;
    customer: string;
    price: string;
    status: string;
}

const orderDetails: OrdersItemTypes[] = [
    {
        id: 98754,
        product: 'ASOS Ridley High',
        customer: 'Otto B',
        price: '$79.49',
        status: 'Pending',
    },
    {
        id: 98753,
        product: 'Marco Lightweight Shirt',
        customer: 'Mark P',
        price: '$125.49',
        status: 'Delivered',
    },
    {
        id: 98752,
        product: 'Half Sleeve Shirt',
        customer: 'Dave B',
        price: '$35.49',
        status: 'Declined',
    },
    {
        id: 98751,
        product: 'Lightweight Jacket',
        customer: 'Louis et Marie',
        price: '$49.49',
        status: 'Delivered',
    },
    {
        id: 98750,
        product: 'Marco Shoes',
        customer: 'Rik N',
        price: '$69.49',
        status: 'Declined',
    },
];

const topPerformers: MembersTypes[] = [
    {
        id: 1,
        name: 'Louis et Marie',
        avatar: avatar1,
        designation: 'Retraités',
    },
    {
        id: 2,
        name: 'Greeva Y',
        avatar: avatar2,
        designation: 'Campagne sur les réseaux sociaux',
    },
    {
        id: 3,
        name: 'Nik G',
        avatar: avatar3,
        designation: 'Gestionnaire dinventaire',
    },
    {
        id: 4,
        name: 'Hardik G',
        avatar: avatar4,
        designation: 'Vendeur',
    },
    {
        id: 5,
        name: 'GB Patel G',
        avatar: avatar5,
        designation: 'Vendeur',
    },
];

const tasks: TaskItemTypes[] = [
    {
        id: 1,
        title: 'Rédiger le nouveau document contractuel pour léquipe de vente',
        dueDate: '24 Aout, 2022',
    },
    {
        id: 2,
        title: 'Page daccueil de lapplication iOS',
        dueDate: '24 Aout, 2022',
    },
    {
        id: 3,
        title: 'Rédiger une note de version pour ',
        dueDate: '24 Aout, 2022',
    },
    {
        id: 4,
        title: 'Inviter Greeva au project  admin',
        dueDate: '24 Aout, 2022',
    },
    {
        id: 5,
        title: 'Activer le suivi analytique pour le site Web principal',
        dueDate: '24 Aout, 2022',
    },
    {
        id: 6,
        title: 'Utilisateur invité à un projet',
        dueDate: '24 Aout, 2022',
    },
    {
        id: 7,
        title: 'Rédiger une note de version',
        dueDate: '24 Aout, 2022',
    },
];
const chatMessages: MessageItemTypes[] = [
    {
        id: 1,
        userPic: profilePic2,
        userName: 'Geneva',
        text: 'Coucou!',
        postedOn: '10:00',
    },
    {
        id: 2,
        userPic: avatar4,
        userName: 'Dominic',
        text: 'Salut comment ca va? Et notre prochaine rencontre ?',
        postedOn: '10:01',
    },
    {
        id: 3,
        userPic: profilePic2,
        userName: 'Geneva',
        text: 'Ouais tout va bien',
        postedOn: '10:02',
    },
    {
        id: 4,
        userPic: avatar4,
        userName: 'Dominic',
        text: "Wow c'est génial!",
        postedOn: '10:03',
    },
    {
        id: 5,
        userPic: profilePic2,
        userName: 'Geneva',
        text: 'Cool!',
        postedOn: '10:03',
    },
];

export { orderDetails, topPerformers, tasks, chatMessages };
