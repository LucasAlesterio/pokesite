import Image from 'next/image';
import { Tag } from './styles';

export function Type({type}){
    function borderColor(){
        if(type === 'bug'){
            return '#83C300'
        }
        if(type === 'dark'){
            return '#5B5466'
        }
        if(type === 'dragon'){
            return '#006FC9'
        }
        if(type === 'eletric'){
            return '#FBD100'
        }
        if(type === 'fairy'){
            return '#FB89EB'
        }
        if(type === 'fighting'){
            return '#E0306A'
        }
        if(type === 'fire'){
            return '#FF9741'
        }
        if(type === 'flying'){
            return '#89AAE3'
        }
        if(type === 'ghost'){
            return '#4C6AB2'
        }
        if(type === 'grass'){
            return '#38BF4B'
        }
        if(type === 'ground'){
            return '#E87236'
        }
        if(type === 'ice'){
            return '#4CD1C0'
        }
        if(type === 'normal'){
            return '#919AA2'
        }
        if(type === 'poison'){
            return '#B567CE'
        }
        if(type === 'psychic'){
            return '#FF6675'
        }
        if(type === 'rock'){
            return '#C8B686'
        }
        if(type === 'steel'){
            return '#5A8EA2'
        }
        if(type === 'water'){
            return '#3692DC'
        }
    }
    return(
        <Tag color={()=>borderColor()}>
            <Image 
            src={`/images/types/${type}.svg`}
            alt={type}
            width={30}
            height={30}
            />
            <h3>{type}</h3>
        </Tag>
    );
}