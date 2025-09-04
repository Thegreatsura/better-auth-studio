import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { toast } from 'sonner'
import {
  Building2,
  ArrowLeft,
  Edit,
  Users,
  Calendar,
  UserPlus,
  Trash2,
  Eye
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'

interface Organization {
  id: string
  name: string
  slug: string
  metadata?: any
  createdAt: string
  updatedAt: string
}

interface Team {
  id: string
  name: string
  slug: string
  organizationId: string
  metadata?: any
  createdAt: string
  updatedAt: string
  memberCount?: number
}

// interface TeamMember {
//   id: string
//   userId: string
//   teamId: string
//   role: string
//   joinedAt: string
//   user: {
//     id: string
//     name: string
//     email: string
//     image?: string
//   }
// }

export default function OrganizationDetails() {
  const { orgId } = useParams<{ orgId: string }>()
  const [organization, setOrganization] = useState<Organization | null>(null)
  const [teams, setTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'details' | 'teams'>('details')
  const [teamsEnabled, setTeamsEnabled] = useState(false)

  useEffect(() => {
    if (orgId) {
      fetchOrganization()
      checkTeamsEnabled()
    }
  }, [orgId])

  const fetchOrganization = async () => {
    try {
      const response = await fetch(`/api/organizations/${orgId}`)
      const data = await response.json()
      
      if (data.success) {
        setOrganization(data.organization)
        if (teamsEnabled) {
          await fetchTeams()
        }
      } else {
        toast.error('Organization not found')
      }
    } catch (error) {
      console.error('Failed to fetch organization:', error)
      toast.error('Failed to load organization')
    } finally {
      setLoading(false)
    }
  }

  const checkTeamsEnabled = async () => {
    try {
      const response = await fetch('/api/plugins/teams/status')
      const data = await response.json()
      setTeamsEnabled(data.enabled)
    } catch (error) {
      console.error('Failed to check teams status:', error)
      setTeamsEnabled(false)
    }
  }

  const fetchTeams = async () => {
    try {
      const response = await fetch(`/api/organizations/${orgId}/teams`)
      const data = await response.json()
      
      if (data.success) {
        setTeams(data.teams || [])
      }
    } catch (error) {
      console.error('Failed to fetch teams:', error)
      toast.error('Failed to load teams')
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-white">Loading organization details...</div>
      </div>
    )
  }

  if (!organization) {
    return (
      <div className="space-y-6 p-6">
        <div className="flex items-center space-x-4">
          <Link to="/organizations">
            <Button variant="ghost" className="text-gray-400 hover:text-white rounded-none">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Organizations
            </Button>
          </Link>
        </div>
        <div className="text-center py-12">
          <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl text-white font-light mb-2">Organization Not Found</h2>
          <p className="text-gray-400">The organization you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/organizations">
            <Button variant="ghost" className="text-gray-400 hover:text-white rounded-none">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Organizations
            </Button>
          </Link>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/10 border border-dashed border-white/20 rounded-none flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl text-white font-light">{organization.name}</h1>
              <p className="text-gray-400">{organization.slug}</p>
            </div>
          </div>
        </div>
        <Button className="bg-white hover:bg-white/90 text-black border border-white/20 rounded-none">
          <Edit className="w-4 h-4 mr-2" />
          Edit Organization
        </Button>
      </div>

      {/* Tabs */}
      <div className="border-b border-white/10">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('details')}
            className={`flex items-center space-x-2 px-3 py-4 text-sm font-medium border-b-2 transition-all duration-200 ${
              activeTab === 'details'
                ? 'border-white text-white'
                : 'border-transparent text-gray-400 hover:text-white hover:border-gray-300'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Details</span>
          </button>
          {teamsEnabled && (
            <button
              onClick={() => setActiveTab('teams')}
              className={`flex items-center space-x-2 px-3 py-4 text-sm font-medium border-b-2 transition-all duration-200 ${
                activeTab === 'teams'
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-400 hover:text-white hover:border-gray-300'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Teams</span>
              {teams.length > 0 && (
                <Badge variant="secondary" className="text-xs bg-white/10 border border-white/20 rounded-sm">
                  {teams.length}
                </Badge>
              )}
            </button>
          )}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'details' && (
        <div className="space-y-6">
          {/* Organization Information */}
          <div className="bg-black/30 border border-dashed border-white/20 rounded-none p-6">
            <h3 className="text-lg text-white font-light mb-4">Organization Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-400 font-light">Name</label>
                <p className="text-white mt-1">{organization.name}</p>
              </div>
              <div>
                <label className="text-sm text-gray-400 font-light">Slug</label>
                <p className="text-white mt-1">{organization.slug}</p>
              </div>
              <div>
                <label className="text-sm text-gray-400 font-light">Created</label>
                <p className="text-white mt-1">
                  {new Date(organization.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-400 font-light">Last Updated</label>
                <p className="text-white mt-1">
                  {new Date(organization.updatedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Organization Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/30 border border-dashed border-white/20 rounded-none p-6">
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-white" />
                <div>
                  <p className="text-2xl text-white font-light">0</p>
                  <p className="text-sm text-gray-400">Members</p>
                </div>
              </div>
            </div>
            <div className="bg-black/30 border border-dashed border-white/20 rounded-none p-6">
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-white" />
                <div>
                  <p className="text-2xl text-white font-light">{teams.length}</p>
                  <p className="text-sm text-gray-400">Teams</p>
                </div>
              </div>
            </div>
            <div className="bg-black/30 border border-dashed border-white/20 rounded-none p-6">
              <div className="flex items-center space-x-3">
                <Calendar className="w-8 h-8 text-white" />
                <div>
                  <p className="text-2xl text-white font-light">
                    {Math.ceil((new Date().getTime() - new Date(organization.createdAt).getTime()) / (1000 * 60 * 60 * 24))}
                  </p>
                  <p className="text-sm text-gray-400">Days Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'teams' && teamsEnabled && (
        <div className="space-y-6">
          {/* Teams Header */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg text-white font-light">Teams ({teams.length})</h3>
              <p className="text-gray-400 mt-1">Manage teams within this organization</p>
            </div>
            <Button className="bg-white hover:bg-white/90 text-black border border-white/20 rounded-none">
              <UserPlus className="w-4 h-4 mr-2" />
              Create Team
            </Button>
          </div>

          {/* Teams List */}
          {teams.length > 0 ? (
            <div className="bg-black/30 border border-dashed border-white/20 rounded-none">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dashed border-white/10">
                      <th className="text-left py-4 px-4 text-white font-light">Team</th>
                      <th className="text-left py-4 px-4 text-white font-light">Members</th>
                      <th className="text-left py-4 px-4 text-white font-light">Created</th>
                      <th className="text-right py-4 px-4 text-white font-light">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teams.map((team) => (
                      <tr key={team.id} className="border-b border-dashed border-white/5 hover:bg-white/5">
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/10 border border-dashed border-white/20 rounded-none flex items-center justify-center">
                              <Users className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-light">{team.name}</div>
                              <div className="text-sm text-gray-400">{team.slug}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-white">{team.memberCount || 0}</td>
                        <td className="py-4 px-4 text-sm text-gray-400">
                          {new Date(team.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-gray-400 hover:text-white rounded-none"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-gray-400 hover:text-white rounded-none"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-400 hover:text-red-300 rounded-none"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-black/30 border border-dashed border-white/20 rounded-none p-12">
              <div className="text-center">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl text-white font-light mb-2">No Teams Yet</h3>
                <p className="text-gray-400 mb-6">
                  Create your first team to start organizing members within this organization.
                </p>
                <Button className="bg-white hover:bg-white/90 text-black border border-white/20 rounded-none">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Create First Team
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
