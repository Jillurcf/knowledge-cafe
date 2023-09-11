import PropTypes from 'prop-types'; 
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover_img, reading_time, author, author_img, posted_date, hashTags} = blog;
    // console.log(blog);
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover_img} alt={`Cover picter of the title ${title}` }/>
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                    <div className='h-[50px] w-[50px] rounded-full overflow-hidden'>
                    <img className='w-full' src={author_img} alt="" />
                    </div>
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>

                    </div>
                   
                </div>
            
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-2xl mb-4'>{title}</h2>
            <p>{
                hashTags.map((hash, idx) =><span  key={idx} > <a>  {hash} </a></span>  )
                }</p>
                <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-purple-800 font-bold underline'>Marked as Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;