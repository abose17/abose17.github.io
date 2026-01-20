---
layout: default
title: News & Updates
---

<style>
.timeline-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Inter', sans-serif;
}

.timeline {
    position: relative;
    padding: 2rem 0;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #3498db, #2c3e50);
    transform: translateX(-50%);
}

.timeline-item {
    position: relative;
    margin-bottom: 3rem;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s forwards;
}

.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.2s; }
.timeline-item:nth-child(3) { animation-delay: 0.3s; }
.timeline-item:nth-child(4) { animation-delay: 0.4s; }
.timeline-item:nth-child(5) { animation-delay: 0.5s; }
.timeline-item:nth-child(6) { animation-delay: 0.6s; }
.timeline-item:nth-child(7) { animation-delay: 0.7s; }

.timeline-item:nth-child(odd) {
    padding-right: calc(50% + 2rem);
    text-align: right;
}

.timeline-item:nth-child(even) {
    padding-left: calc(50% + 2rem);
    text-align: left;
}

.timeline-node {
    position: absolute;
    left: 50%;
    top: 1rem;
    width: 20px;
    height: 20px;
    background: #3498db;
    border: 4px solid #fff;
    border-radius: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);
}

.timeline-node:hover {
    background: #2980b9;
    transform: translateX(-50%) scale(1.2);
    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.5);
}

.timeline-node.active {
    background: #e74c3c;
    transform: translateX(-50%) scale(1.3);
}

.timeline-content {
    background: #fff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
    border-left: 4px solid #3498db;
}

.timeline-item:nth-child(even) .timeline-content {
    border-left: none;
    border-right: 4px solid #3498db;
}

.timeline-content:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.timeline-content.expanded {
    background: #f8f9fa;
}

.timeline-date {
    color: #7f8c8d;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.timeline-title {
    color: #2c3e50;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.timeline-description {
    color: #5a6c7d;
    line-height: 1.6;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.timeline-content.expanded .timeline-description {
    max-height: 200px;
    margin-top: 1rem;
}

.timeline-details {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #ecf0f1;
    display: none;
}

.timeline-content.expanded .timeline-details {
    display: block;
}

.timeline-tag {
    display: inline-block;
    background: #ecf0f1;
    color: #34495e;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.8rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .timeline::before {
        left: 2rem;
    }
    
    .timeline-item {
        padding-left: 4rem !important;
        padding-right: 0 !important;
        text-align: left !important;
    }
    
    .timeline-node {
        left: 2rem;
    }
    
    .timeline-content {
        border-left: 4px solid #3498db !important;
        border-right: none !important;
    }
}
</style>

<div class="timeline-container">
    <h1 style="text-align: center; color: #2c3e50; margin-bottom: 2rem;">News & Updates</h1>
    
    <div class="timeline">
        <div class="timeline-item">
            <div class="timeline-node" onclick="toggleTimelineItem(this)"></div>
            <div class="timeline-content" onclick="toggleTimelineItem(this)">
                <div class="timeline-date">January 19, 2026</div>
                <div class="timeline-title">Created Interactive Timeline</div>
                <div class="timeline-description">
                    Launched new interactive timeline-style news page using vertical tree structure with clickable nodes for better visualization of research updates.
                </div>
                <div class="timeline-details">
                    <span class="timeline-tag">Web Development</span>
                    <span class="timeline-tag">UI/UX</span>
                </div>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-node" onclick="toggleTimelineItem(this)"></div>
            <div class="timeline-content" onclick="toggleTimelineItem(this)">
                <div class="timeline-date">January 15, 2026</div>
                <div class="timeline-title">Website Updates</div>
                <div class="timeline-description">
                    Updated project image paths and improved site navigation for better user experience.
                </div>
                <div class="timeline-details">
                    <span class="timeline-tag">Maintenance</span>
                    <span class="timeline-tag">Performance</span>
                </div>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-node" onclick="toggleTimelineItem(this)"></div>
            <div class="timeline-content" onclick="toggleTimelineItem(this)">
                <div class="timeline-date">January 10, 2026</div>
                <div class="timeline-title">New Research Collaboration</div>
                <div class="timeline-description">
                    Started new research collaboration at Oak Ridge National Laboratory focusing on AI/ML applications in scientific computing.
                </div>
                <div class="timeline-details">
                    <span class="timeline-tag">Research</span>
                    <span class="timeline-tag">AI/ML</span>
                    <span class="timeline-tag">Collaboration</span>
                </div>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-node" onclick="toggleTimelineItem(this)"></div>
            <div class="timeline-content" onclick="toggleTimelineItem(this)">
                <div class="timeline-date">December 28, 2025</div>
                <div class="timeline-title">Publication: Graph Neural Networks</div>
                <div class="timeline-description">
                    Published paper on graph neural networks for scientific visualization applications in peer-reviewed journal.
                </div>
                <div class="timeline-details">
                    <span class="timeline-tag">Publication</span>
                    <span class="timeline-tag">GNN</span>
                    <span class="timeline-tag">Visualization</span>
                </div>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-node" onclick="toggleTimelineItem(this)"></div>
            <div class="timeline-content" onclick="toggleTimelineItem(this)">
                <div class="timeline-date">December 20, 2025</div>
                <div class="timeline-title">Conference Presentation</div>
                <div class="timeline-description">
                    Presented research findings at AI/ML conference on graph learning representations and their applications.
                </div>
                <div class="timeline-details">
                    <span class="timeline-tag">Conference</span>
                    <span class="timeline-tag">Presentation</span>
                </div>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-node" onclick="toggleTimelineItem(this)"></div>
            <div class="timeline-content" onclick="toggleTimelineItem(this)">
                <div class="timeline-date">November 25, 2025</div>
                <div class="timeline-title">Grant Approval</div>
                <div class="timeline-description">
                    Received grant approval for material property prediction project using advanced ML techniques.
                </div>
                <div class="timeline-details">
                    <span class="timeline-tag">Funding</span>
                    <span class="timeline-tag">Materials Science</span>
                </div>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-node" onclick="toggleTimelineItem(this)"></div>
            <div class="timeline-content" onclick="toggleTimelineItem(this)">
                <div class="timeline-date">October 30, 2025</div>
                <div class="timeline-title">Journal Publication</div>
                <div class="timeline-description">
                    Published journal article on minimizing human supervision in machine learning systems.
                </div>
                <div class="timeline-details">
                    <span class="timeline-tag">Publication</span>
                    <span class="timeline-tag">Machine Learning</span>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
function toggleTimelineItem(element) {
    const timelineItem = element.closest('.timeline-item');
    const content = timelineItem.querySelector('.timeline-content');
    const node = timelineItem.querySelector('.timeline-node');
    
    // Close all other items
    document.querySelectorAll('.timeline-content').forEach(item => {
        if (item !== content) {
            item.classList.remove('expanded');
        }
    });
    
    document.querySelectorAll('.timeline-node').forEach(n => {
        if (n !== node) {
            n.classList.remove('active');
        }
    });
    
    // Toggle current item
    content.classList.toggle('expanded');
    node.classList.toggle('active');
}

// Add smooth scroll behavior
document.querySelectorAll('.timeline-node').forEach(node => {
    node.addEventListener('click', function() {
        this.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});
</script>
