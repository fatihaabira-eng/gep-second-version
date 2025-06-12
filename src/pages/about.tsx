import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Target, Eye, Award, Users, BookOpen, Lightbulb, Globe, Heart } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Collaboration",
      description: "Fostering partnerships across borders to address climate challenges through education"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Quality Education",
      description: "Ensuring accessible, inclusive, and quality education for sustainable development"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Embracing innovative approaches and technologies for effective sustainability education"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Inclusivity",
      description: "Creating educational opportunities that reach every learner, regardless of background"
    }
  ];

  const keyAchievements = [
    {
      number: "50+",
      label: "Partner Countries",
      description: "Global network spanning all continents"
    },
    {
      number: "10M+",
      label: "Students Reached",
      description: "Lives impacted through green education"
    },
    {
      number: "100K+",
      label: "Teachers Trained",
      description: "Educators equipped with sustainability skills"
    },
    {
      number: "5,000+",
      label: "Green Schools",
      description: "Schools transformed into sustainable learning environments"
    }
  ];

  const leadership = [
    {
      name: "Dr. Audrey Azoulay",
      position: "Director-General, UNESCO",
      organization: "UNESCO",
      bio: "Leading UNESCO's mission to build peace through international cooperation in education, sciences and culture."
    },
    {
      name: "Dr. Salim M. AlMalik",
      position: "Director General",
      organization: "ICESCO",
      bio: "Advancing Islamic world cooperation in education, science, and culture for sustainable development."
    },
    {
      name: "Catherine Russell",
      position: "Executive Director",
      organization: "UNICEF",
      bio: "Championing children's rights and ensuring every child has access to quality education and safe environments."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gep-blue-50 to-gep-green-50">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gep-blue-600 mb-4">
            About Greening Education Partnership
          </h1>
          <p className="text-xl text-gep-blue-500 max-w-3xl mx-auto">
            A global initiative transforming education systems to address climate change and build a sustainable future for all
          </p>
        </div>

        {/* Tabs for different sections */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="mission-vision">Mission & Vision</TabsTrigger>
            <TabsTrigger value="values">Our Values</TabsTrigger>
            <TabsTrigger value="leadership">Leadership</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-gep-blue-600 flex items-center">
                    <Award className="w-6 h-6 mr-3 text-gep-green-500" />
                    Our Story
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gep-blue-500 space-y-4">
                  <p>
                    The Greening Education Partnership (GEP) was launched at COP26 in Glasgow as a flagship initiative 
                    to transform education systems worldwide. Born from the urgent need to address climate change through 
                    education, GEP brings together governments, international organizations, civil society, and the private 
                    sector.
                  </p>
                  <p>
                    Since its inception, GEP has grown into a powerful movement that recognizes education as one of the 
                    most effective tools for climate action and sustainable development.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-gep-blue-600 flex items-center">
                    <Target className="w-6 h-6 mr-3 text-gep-orange-500" />
                    Our Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {keyAchievements.map((achievement, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-gep-green-600 mb-1">
                          {achievement.number}
                        </div>
                        <div className="text-sm font-semibold text-gep-blue-600 mb-1">
                          {achievement.label}
                        </div>
                        <div className="text-xs text-gep-blue-400">
                          {achievement.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Four Pillars Overview */}
            <Card className="border-0 bg-gradient-to-r from-gep-green-500 to-gep-blue-500 text-white mb-8">
              <CardHeader>
                <CardTitle className="text-3xl text-center">The Four Pillars of Green Education</CardTitle>
                <CardDescription className="text-center text-white/90 text-lg">
                  Our comprehensive approach to transforming education for sustainability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Green Schools", desc: "Sustainable infrastructure and operations" },
                    { title: "Green Curriculum", desc: "Climate and sustainability education" },
                    { title: "Teacher Capacity", desc: "Professional development and training" },
                    { title: "Green Communities", desc: "Community engagement and participation" }
                  ].map((pillar, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold">{index + 1}</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{pillar.title}</h3>
                      <p className="text-sm opacity-90">{pillar.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mission & Vision Tab */}
          <TabsContent value="mission-vision">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-3xl text-gep-blue-600 flex items-center">
                    <Target className="w-8 h-8 mr-3 text-gep-green-500" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gep-blue-500 space-y-4">
                  <p className="text-lg font-medium">
                    To transform education systems worldwide by integrating climate change and sustainability 
                    into all aspects of learning, teaching, and institutional operations.
                  </p>
                  <p>
                    We work to ensure that every learner has the knowledge, skills, values, and attitudes 
                    needed to contribute to sustainable development and live sustainably.
                  </p>
                  <div className="bg-gep-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gep-green-600 mb-2">Key Focus Areas:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Climate literacy and environmental awareness</li>
                      <li>• Sustainable school infrastructure and operations</li>
                      <li>• Teacher capacity building and professional development</li>
                      <li>• Community engagement and partnership development</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-3xl text-gep-blue-600 flex items-center">
                    <Eye className="w-8 h-8 mr-3 text-gep-blue-500" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gep-blue-500 space-y-4">
                  <p className="text-lg font-medium">
                    A world where every education system is transformed to address climate change and 
                    sustainability, empowering learners to build a more sustainable and resilient future.
                  </p>
                  <p>
                    We envision education systems that not only teach about sustainability but embody 
                    it in their practices, creating a generation of environmentally conscious and 
                    action-oriented global citizens.
                  </p>
                  <div className="bg-gep-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gep-blue-600 mb-2">By 2030, we aim to:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Reach 100+ countries with green education initiatives</li>
                      <li>• Transform 50,000+ schools into green learning environments</li>
                      <li>• Train 1 million+ educators in sustainability education</li>
                      <li>• Impact 50 million+ learners worldwide</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Values Tab */}
          <TabsContent value="values">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {coreValues.map((value, index) => (
                <Card key={index} className="border-0 bg-white/70 backdrop-blur-sm group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="text-gep-green-500 group-hover:text-gep-blue-500 transition-colors mr-4">
                        {value.icon}
                      </div>
                      <CardTitle className="text-xl text-gep-blue-600">
                        {value.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gep-blue-500">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="border-0 bg-gradient-to-r from-gep-orange-500 to-gep-green-500 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <p className="text-lg opacity-90 max-w-3xl mx-auto">
                  We are committed to working with integrity, transparency, and accountability while 
                  respecting cultural diversity and promoting equity in all our initiatives. Together, 
                  we can create an education system that nurtures both people and planet.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Leadership Tab */}
          <TabsContent value="leadership">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-gep-blue-500 to-gep-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <CardTitle className="text-lg text-gep-blue-600 text-center">
                      {leader.name}
                    </CardTitle>
                    <CardDescription className="text-center">
                      <Badge className="bg-gep-green-100 text-gep-green-600 mb-2">
                        {leader.organization}
                      </Badge>
                      <div className="font-semibold text-gep-blue-500">
                        {leader.position}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gep-blue-400 text-center">
                      {leader.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gep-blue-600 mb-4">Partnership Network</h3>
                <p className="text-gep-blue-500 max-w-3xl mx-auto mb-6">
                  GEP is proudly supported by leading international organizations, governments, civil society 
                  organizations, and private sector partners who share our commitment to transforming education 
                  for sustainability.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {['UNESCO', 'UNICEF', 'ICESCO', 'World Bank', 'UNDP', 'Global Partnership for Education'].map((partner) => (
                    <Badge key={partner} variant="outline" className="border-gep-blue-500 text-gep-blue-600">
                      {partner}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default About;