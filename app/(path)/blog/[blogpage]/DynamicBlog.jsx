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

                                        <p className={`dynamic-blog-paragraph ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
                                            <img src={data?.blogImage} alt={`blog ${index}`} className="blog-image" loading="lazy" />
                                        <h4 className="pt-5" style={{fontSize: "24px",fontWeight:"700"}}>{data?.blogTitle}</h4>
                                            <span dangerouslySetInnerHTML={boldContentAfterColon(data?.content)}></span>
                                        </p>
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
