<!--
-@author:	Christian Pich
-@contact:	Christian dot Pich at uni-konstanz dot de
-@name:		gnm.xsl
-@short:	Random graph generator style sheet, G(n,m)-model
-@version:	1.0
-@modified:	2004-09-27
-@param: 	n: number of vertices
		m: number of edges
-@desc: Creates a simple undirected graph with n vertices and
-0<=m<=(n^2-n)/2 edges.  The edges are created uniformly at random.  Both n
-and m can be set as parameters from the command line.  The style sheet
-actually does not transform any input, but can be applied to any file
-(e.g. itself).
-->


<xsl:stylesheet version="2.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:math="java:java.lang.Math" xmlns:rnd="java:java.util.Random"
    xmlns:g="http://graphml.graphdrawing.org/xmlns/graphml"
    xmlns="http://graphml.graphdrawing.org/xmlns/graphml"
    xpath-default-namespace="http://graphml.graphdrawing.org/xmlns/graphml"
    exclude-result-prefixes="math g rnd"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns/graphml">
  <xsl:output method="xml" indent="yes" encoding="iso-8859-1"/>
  <xsl:namespace-alias stylesheet-prefix="g" result-prefix="#default"/>


  <xsl:param name="n">10</xsl:param>  <!-- number of nodes -->
  <xsl:param name="m">30</xsl:param>  <!-- number of edges -->
  <xsl:variable name="random" select="rnd:new()"/>  <!-- random number generator -->

  <xsl:template match="/">
    <graphml xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns/graphml">
      <graph id="G" edgedefault="undirected">
        <xsl:call-template name="generatenodes">
          <xsl:with-param name="n" select="$n"/>
        </xsl:call-template>
        <xsl:call-template name="generateedges">
          <xsl:with-param name="E" select="/.."/>
        </xsl:call-template>
      </graph>
    </graphml>
  </xsl:template>

  <xsl:template name="generatenodes">
    <xsl:param name="n"/>
    <node id="n{number($n)-1}"/>
    <xsl:if test="$n&gt;1">
      <xsl:call-template name="generatenodes">
        <xsl:with-param name="n" select="number($n)-1"/>
      </xsl:call-template>
    </xsl:if>
  </xsl:template>

  <xsl:template name="generateedges">
    <xsl:param name="E"/>
    <xsl:choose>
      <xsl:when test="count($E/edge) &lt; $m">
        <xsl:variable name="i" select="rnd:nextInt($random,$n *($n - 1)*0.5)"/>
        <xsl:variable name="v" select="floor((math:sqrt(1 + 8 * $i)+1) * 0.5)"/>
        <xsl:variable name="w" select="$i - ($v * ($v - 1) * 0.5)"/>
        <xsl:choose>
          <xsl:when test="$E/edge[@source=concat('n',string($v)) and @target=concat('n',string($w))]">
            <xsl:call-template name="generateedges">
              <xsl:with-param name="E" select="$E"/>
            </xsl:call-template>
          </xsl:when>
          <xsl:otherwise>
            <xsl:call-template name="generateedges">
              <xsl:with-param name="E">
                <edge id="e{count($E/edge)}" source="n{$v}" target="n{$w}"/>
                <xsl:copy-of select="$E"/>
              </xsl:with-param>
            </xsl:call-template>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:when>
      <xsl:otherwise>
        <xsl:copy-of select="$E"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>
</xsl:stylesheet>