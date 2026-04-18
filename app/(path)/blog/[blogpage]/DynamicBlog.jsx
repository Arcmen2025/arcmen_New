'use client';
import React, { useEffect, useState } from 'react';
import './DynamicBlog.scss';
import { useMyContext } from '@/components/ContextAPIProvide';
import { getSingleBlog } from '@/api/BlogAPIs';
import { Container } from 'react-bootstrap';
import PreLoader from '@/components/PreLoader';
import Cookies from 'js-cookie';

const DynamicBlog = () => {
    const { state } = useMyContext();
    const blogIdGet = Cookies.get('blogId');
    const [blogTitle, setBlogTitle] = useState('');
    const [blogSubTitleContent, setBlogSubTitleContent] = useState('');
    const [blogAuthor, setBlogAuthor] = useState('');
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (!blogIdGet) return;
            try {
                setLoading(true);
                const response = await getSingleBlog(blogIdGet);
                if (response.data) {
                    setBlogTitle(response?.data.title);
                    setBlogSubTitleContent(response?.data?.subtitleContent);
                    setBlogAuthor(response?.data?.author);
                    setBlogData(response?.data?.contentSections);
                } else {
                    console.error('Failed to fetch blog data');
                }
            } catch (error) {
                console.error('Failed to fetch blog data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [blogIdGet]);

    const boldContentAfterColon = (text) => {
        // Split the text by <br /> tags
        const parts = text.split('<br>');
        return {
            __html: parts
                .map((part, index) => {
                    // Split each part by the colon
                    const colonIndex = part.indexOf(':');
                    if (colonIndex !== -1) {
                        // Bold the content after the colon
                        return `<strong>${part.substring(0, colonIndex + 1)}</strong>${part.substring(colonIndex + 1)}`;
                    }
                    return part;
                })
                .join('<br />')
        };
    };

    return (
        <div>
            {loading ? (
                <PreLoader />
            ) : (
                <>
                    {blogData?.length > 0 ? (
                        <>
                            <section className="dynamic-blog-title-content">
                                <Container>
                                    <div>
                                        {blogTitle && <h2 className="text-center">{blogTitle}</h2>}
                                        <div className="dynamic-blog-subtitle-content">{blogSubTitleContent && <p className="text-center" dangerouslySetInnerHTML={boldContentAfterColon(blogSubTitleContent)}></p>}</div>
                                    </div>
                                </Container>
                            </section>
                            <Container>
                                {blogData.map((data, index) => (
                                    
                                    <div key={index} className="blog-section">

                                       <div className="flex justify-center">
<div key={index} className="flex justify-center w-full px-2 md:px-0">
  {/* Added 'w-full' and 'overflow-hidden' to prevent horizontal scroll */}
  <div className="w-full max-w-4xl flex flex-col gap-6 py-8 overflow-hidden">
    
    {/* Heading: Responsive font sizes */}
    <h4 className="text-center text-gray-900 text-xl md:text-3xl font-bold px-2">
      {data?.blogTitle}
    </h4>

    {/* Image: Use h-auto and aspect-ratio for better mobile look */}
    {data?.blogImage && (
      <div className="w-full">
        <img
          src={data?.blogImage}
          alt={`blog ${index}`}
          className="w-full h-auto rounded-2xl shadow-lg object-cover max-h-[300px] md:max-h-[500px]"
          loading="lazy"
        />
      </div>
    )}

    {/* Content: Added 'break-words' and 'w-full' to fix the text overflow */}
    <div
      className="text-gray-700 leading-loose text-[16px] md:text-[18px] w-full break-words px-2"
      dangerouslySetInnerHTML={boldContentAfterColon(data?.content)}
    />
    
  </div>
</div>
</div>
                                        
                                        
                                    </div>

                                ))}
                            </Container>
                        </>
                    ) : (
                        <p>No blog data available.</p>
                    )}
                </>
            )}
        </div>
    );
};

export default DynamicBlog;
