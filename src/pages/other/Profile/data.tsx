// images
import userAvatar from '../../../assets/images/users/avatar-7.jpg';

export interface UserInfoTypes {
    userName?: string;
    avatar?: string;
    designation?: string;
    location?: string;
    profileProgress: number;
    about?: string;
    email?: string;
    phone?: string;
    address?: string;
    skills?: string[];
}

const userInfo: UserInfoTypes = {
    userName: 'Personas 1',
    designation: 'Retraités',
    location: 'Paris, FRANCE',
    avatar: userAvatar,
    profileProgress: 60,
    about: "Louis et Marie : Ils sont à la retraite, amoureux des voyages, ils viennent en Martinique pour la première fois dans une location afin de découvrir autrement la destination. Louis est Diabétique, il aime la rando et Marie plutôt littérature et des belles expositions.",
    email: 'xyz123@gmail.com',
    phone: '(033) 12 31 23 46',
    address: '01, Rue de la Ville 75001 PARIS',
    skills: ['Retraité', 'Vacances', 'Visites', 'Musée', 'Randonnée'],
};

export { userInfo };
